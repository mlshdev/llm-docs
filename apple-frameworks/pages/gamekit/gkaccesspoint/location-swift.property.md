> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkaccesspoint/location-swift.property](https://developer.apple.com/documentation/gamekit/gkaccesspoint/location-swift.property)

# location (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The corner of the screen to display the access point.

## Declaration

```swift
var location: GKAccessPoint.Location { get set }
```

## Mentioned In

- [Adding an access point to your game](../adding-an-access-point-to-your-game.md)

<a id="Discussion"></a>

## Discussion

Use this property to set one of four corners to display the access point in your game. The default for left-to-right languages is the upper-left corner, and for right-to-left languages, it’s the upper-right corner.

If the [parentWindow](parentwindow.md) property is `nil` for volumetric and immersive visionOS games, GameKit doesn’t use the [location](location-swift.property.md) property. For more information, see [Configure the access point on visionOS](../adding-an-access-point-to-your-game.md#Configure-the-access-point-on-visionOS).

## See Also

### Managing the location

- [GKAccessPoint.Location](location-swift.enum.md): Specifies the corner of the screen to display the access point.
- [frameInScreenCoordinates](frameinscreencoordinates.md): The frame of the access point in screen coordinates.
- [parentWindow](parentwindow.md): The window that contains the access point.

# location (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The corner of the screen to display the access point.

## Declaration

```objectivec
@property (nonatomic, assign) GKAccessPointLocation location;
```

## Mentioned In

- [Adding an access point to your game](../adding-an-access-point-to-your-game.md)

<a id="Discussion"></a>

## Discussion

Use this property to set one of four corners to display the access point in your game. The default for left-to-right languages is the upper-left corner, and for right-to-left languages, it’s the upper-right corner.

If the [parentWindow](parentwindow.md) property is `nil` for volumetric and immersive visionOS games, GameKit doesn’t use the [location](location-swift.property.md) property. For more information, see [Configure the access point on visionOS](../adding-an-access-point-to-your-game.md#Configure-the-access-point-on-visionOS).

## See Also

### Managing the location

- [GKAccessPointLocation](location-swift.enum.md): Specifies the corner of the screen to display the access point.
- [frameInScreenCoordinates](frameinscreencoordinates.md): The frame of the access point in screen coordinates.
- [parentWindow](parentwindow.md): The window that contains the access point.
