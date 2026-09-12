> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacemap/setregion(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacemap/setregion(_:))

# setRegion(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Changes the map’s visible region to the specified coordinate region.

## Declaration

```swift
func setRegion(_ coordinateRegion: MKCoordinateRegion)
```

## Parameters

- `coordinateRegion`: The new region of the map to be displayed. The span value of this parameter provides an implicit zoom value for the map. For more information about the [MKCoordinateRegion](https://developer.apple.com/documentation/mapkit/mkcoordinateregion) type, see [MapKit](https://developer.apple.com/documentation/mapkit).

<a id="Discussion"></a>

## Discussion

This method changes the currently visible region of the map. The method may adjust the map rectangle slightly to fit the available display space for the map. The adjusted region always includes the entire region you specified.

Changing the visible region may require the loading of additional map tiles to render the map. Loading tiles requires an active network connection.

## See Also

### Specifying the Map Region

- [setVisibleMapRect(\_:)](setvisiblemaprect%28__%29.md): Changes the map’s visible region to the specified map rectangle.

# setRegion: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Changes the map’s visible region to the specified coordinate region.

## Declaration

```objectivec
- (void) setRegion:(MKCoordinateRegion) coordinateRegion;
```

## Parameters

- `coordinateRegion`: The new region of the map to be displayed. The span value of this parameter provides an implicit zoom value for the map. For more information about the [MKCoordinateRegion](https://developer.apple.com/documentation/mapkit/mkcoordinateregion) type, see [MapKit](https://developer.apple.com/documentation/mapkit).

<a id="Discussion"></a>

## Discussion

This method changes the currently visible region of the map. The method may adjust the map rectangle slightly to fit the available display space for the map. The adjusted region always includes the entire region you specified.

Changing the visible region may require the loading of additional map tiles to render the map. Loading tiles requires an active network connection.

## See Also

### Specifying the Map Region

- [setVisibleMapRect:](setvisiblemaprect%28__%29.md): Changes the map’s visible region to the specified map rectangle.
