> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/fixedcoordinatespace](https://developer.apple.com/documentation/uikit/uiscreen/fixedcoordinatespace)

# fixedCoordinateSpace (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS

The fixed coordinate space of the screen.

## Declaration

```swift
var fixedCoordinateSpace: any UICoordinateSpace { get }
```

<a id="Discussion"></a>

## Discussion

The bounds of this coordinate space always reflect the screen dimensions of the device in a portrait-up orientation. You can use this coordinate space in places where you need a fixed frame of reference. For example, if your app saves screen coordinate values to disk, convert those values to the fixed coordinate space before doing so. Saving them in the fixed coordinate space ensures that when your app reads the values later, it can convert them to the current coordinate space correctly.

## See Also

### Getting the coordinate space

- [coordinateSpace](coordinatespace.md): The current coordinate space of the screen.

# fixedCoordinateSpace (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS

The fixed coordinate space of the screen.

## Declaration

```objectivec
@property (readonly) id<UICoordinateSpace> fixedCoordinateSpace;
```

<a id="Discussion"></a>

## Discussion

The bounds of this coordinate space always reflect the screen dimensions of the device in a portrait-up orientation. You can use this coordinate space in places where you need a fixed frame of reference. For example, if your app saves screen coordinate values to disk, convert those values to the fixed coordinate space before doing so. Saving them in the fixed coordinate space ensures that when your app reads the values later, it can convert them to the current coordinate space correctly.

## See Also

### Getting the coordinate space

- [coordinateSpace](coordinatespace.md): The current coordinate space of the screen.
