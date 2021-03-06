import { Component, OnInit } from '@angular/core';
import { WidgetService } from "../../../services/widget.service.client";
import { ActivatedRoute } from "@angular/router";
import { Widget } from "../../../models/widget.model.client";

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  // properties
  userId: string;
  websiteId: string;
  pageId: string;

  widgets: Widget[];

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
          this.pageId = params['pid'];
          this.userId = params['userId'];
          this.websiteId = params['wid'];

          this.widgetService.findWidgetsByPageId(this.userId, this.websiteId, this.pageId)
            .subscribe((widgets) => {
              this.widgets = widgets;
            });
        }
      );
  }

}


