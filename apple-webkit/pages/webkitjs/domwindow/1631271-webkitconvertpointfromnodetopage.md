> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/domwindow/1631271-webkitconvertpointfromnodetopage](https://developer.apple.com/documentation/webkitjs/domwindow/1631271-webkitconvertpointfromnodetopage)

# webkitConvertPointFromNodeToPage

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Method  
**Availability:** Safari Desktop 10.1+ · Safari Mobile 3.0+

Converts a point from node coordinates of a block element to page coordinates.

## Declaration

```
WebKitPoint webkitConvertPointFromNodeToPage(
    optional Node? node, 
    optional WebKitPoint? p
);
```

## Parameters

- `node`: The coordinate space for `p`.
- `p`: A point in node coordinates to convert to page coordinates.

<a id="return_value"></a>

## Return Value

A point that is at the same location as `p` but in page coordinates.

## See Also

### Converting Points

- [webkitConvertPointFromPageToNode](1631559-webkitconvertpointfrompagetonode.md): Converts a point from page coordinates to node coordinates.
