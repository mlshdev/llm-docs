> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/domwindow_additions](https://developer.apple.com/documentation/webkitjs/domwindow_additions)

# DOMWindow Additions

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** API Collection

`DOMWindow` additions allow conversion of points between page- and node-coordinate systems for transitions, support for CSS media queries, and device orientation and motion events.

## Topics

### Using Offline Storage

- [applicationCache](domwindow/1630652-applicationcache.md): The application cache associated with the current document.

### Converting Points

- [webkitConvertPointFromPageToNode](domwindow/1631559-webkitconvertpointfrompagetonode.md): Converts a point from page coordinates to node coordinates.
- [webkitConvertPointFromNodeToPage](domwindow/1631271-webkitconvertpointfromnodetopage.md): Converts a point from node coordinates of a block element to page coordinates.

### Making Media Queries

- [styleMedia](domwindow/1632755-stylemedia.md): The style media object you use to make CSS media queries.

### Getting Orientation and Motion Events

- [orientation](domwindow/1632568-orientation.md): Specifies the orientation of the device.
- [ondevicemotion](domwindow/1632048-ondevicemotion.md): The event listener that is called when the device motion changes.
- [ondeviceorientation](domwindow/1628872-ondeviceorientation.md): The event listener that is called while the device orientation changes around the x, y, and z axes.

## See Also

### Related Documentation

- [Safari CSS Visual Effects Guide](https://developer.apple.com/library/archive/documentation/InternetWeb/Conceptual/SafariVisualEffectsProgGuide/Introduction.html#//apple_ref/doc/uid/TP40008032)
- [Safari Web Content Guide](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/Introduction/Introduction.html#//apple_ref/doc/uid/TP40002051)
