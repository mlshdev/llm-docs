> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/coordinatespace](https://developer.apple.com/documentation/uikit/uiscreen/coordinatespace)

# coordinateSpace (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS

The current coordinate space of the screen.

## Declaration

```swift
var coordinateSpace: any UICoordinateSpace { get }
```

<a id="Discussion"></a>

## Discussion

The screen’s current coordinate space always reflects any interface orientations applied to the device. Therefore, the bounds of this coordinate space match the [bounds](bounds.md) property of the screen itself.

## See Also

### Getting the coordinate space

- [fixedCoordinateSpace](fixedcoordinatespace.md): The fixed coordinate space of the screen.

# coordinateSpace (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS

The current coordinate space of the screen.

## Declaration

```objectivec
@property (readonly) id<UICoordinateSpace> coordinateSpace;
```

<a id="Discussion"></a>

## Discussion

The screen’s current coordinate space always reflects any interface orientations applied to the device. Therefore, the bounds of this coordinate space match the [bounds](bounds.md) property of the screen itself.

## See Also

### Getting the coordinate space

- [fixedCoordinateSpace](fixedcoordinatespace.md): The fixed coordinate space of the screen.
