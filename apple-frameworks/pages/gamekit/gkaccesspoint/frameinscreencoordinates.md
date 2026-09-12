> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkaccesspoint/frameinscreencoordinates](https://developer.apple.com/documentation/gamekit/gkaccesspoint/frameinscreencoordinates)

# frameInScreenCoordinates (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The frame of the access point in screen coordinates.

## Declaration

```swift
var frameInScreenCoordinates: CGRect { get }
```

```swift
var frameInScreenCoordinates: NSRect { get }
```

## Mentioned In

- [Adding an access point to your game](../adding-an-access-point-to-your-game.md)

<a id="Discussion"></a>

## Discussion

This is an observable property.

## See Also

### Managing the location

- [location](location-swift.property.md): The corner of the screen to display the access point.
- [GKAccessPoint.Location](location-swift.enum.md): Specifies the corner of the screen to display the access point.
- [parentWindow](parentwindow.md): The window that contains the access point.

# frameInScreenCoordinates (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The frame of the access point in screen coordinates.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect frameInScreenCoordinates;
```

```objectivec
@property (nonatomic, readonly) NSRect frameInScreenCoordinates;
```

## Mentioned In

- [Adding an access point to your game](../adding-an-access-point-to-your-game.md)

<a id="Discussion"></a>

## Discussion

This is an observable property.

## See Also

### Managing the location

- [location](location-swift.property.md): The corner of the screen to display the access point.
- [GKAccessPointLocation](location-swift.enum.md): Specifies the corner of the screen to display the access point.
- [parentWindow](parentwindow.md): The window that contains the access point.
