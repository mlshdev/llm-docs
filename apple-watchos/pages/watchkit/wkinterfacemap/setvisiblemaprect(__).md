> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacemap/setvisiblemaprect(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacemap/setvisiblemaprect(_:))

# setVisibleMapRect(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Changes the map’s visible region to the specified map rectangle.

## Declaration

```swift
func setVisibleMapRect(_ mapRect: MKMapRect)
```

## Parameters

- `mapRect`: The region to be displayed, specified as a map rectangle. The size of the rectangle provides an implicit zoom value for the map. For more information about the [MKMapRect](https://developer.apple.com/documentation/mapkit/mkmaprect) type, see [MapKit](https://developer.apple.com/documentation/mapkit).

<a id="Discussion"></a>

## Discussion

The method may adjust the specified map rectangle slightly to fit the available display space for the map. The adjusted region always includes the entire region you specified.

Changing the visible region may require the loading of additional map tiles to render the map. Loading tiles requires an active network connection.

## See Also

### Related Documentation

- [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969)

### Specifying the Map Region

- [setRegion(\_:)](setregion%28__%29.md): Changes the map’s visible region to the specified coordinate region.

# setVisibleMapRect: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Changes the map’s visible region to the specified map rectangle.

## Declaration

```objectivec
- (void) setVisibleMapRect:(MKMapRect) mapRect;
```

## Parameters

- `mapRect`: The region to be displayed, specified as a map rectangle. The size of the rectangle provides an implicit zoom value for the map. For more information about the [MKMapRect](https://developer.apple.com/documentation/mapkit/mkmaprect) type, see [MapKit](https://developer.apple.com/documentation/mapkit).

<a id="Discussion"></a>

## Discussion

The method may adjust the specified map rectangle slightly to fit the available display space for the map. The adjusted region always includes the entire region you specified.

Changing the visible region may require the loading of additional map tiles to render the map. Loading tiles requires an active network connection.

## See Also

### Related Documentation

- [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969)

### Specifying the Map Region

- [setRegion:](setregion%28__%29.md): Changes the map’s visible region to the specified coordinate region.
