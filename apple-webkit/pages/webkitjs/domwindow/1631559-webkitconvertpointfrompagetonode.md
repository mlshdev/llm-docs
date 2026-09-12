> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/domwindow/1631559-webkitconvertpointfrompagetonode](https://developer.apple.com/documentation/webkitjs/domwindow/1631559-webkitconvertpointfrompagetonode)

# webkitConvertPointFromPageToNode

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Method  
**Availability:** Safari Desktop 10.1+ · Safari Mobile 3.0+

Converts a point from page coordinates to node coordinates.

## Declaration

```
WebKitPoint webkitConvertPointFromPageToNode(
    optional Node? node, 
    optional WebKitPoint? p
);
```

## Parameters

- `node`: The coordinate space to convert the given point to.
- `p`: A point in page coordinates to convert to node coordinates.

<a id="return_value"></a>

## Return Value

A point that is at the same location as `p` but in node coordinates.

## See Also

### Converting Points

- [webkitConvertPointFromNodeToPage](1631271-webkitconvertpointfromnodetopage.md): Converts a point from node coordinates of a block element to page coordinates.
