> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkaccesspoint/parentwindow](https://developer.apple.com/documentation/gamekit/gkaccesspoint/parentwindow)

# parentWindow (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The window that contains the access point.

## Declaration

```swift
weak var parentWindow: UIWindow? { get set }
```

```swift
weak var parentWindow: NSWindow? { get set }
```

## Mentioned In

- [Adding an access point to your game](../adding-an-access-point-to-your-game.md)

<a id="Discussion"></a>

## Discussion

For Mac games, use this property to specify the parent window of the access point. If you don’t specify a parent widow, GameKit tries to add the access point to the app’s main window. For iPadOS and iOS games, and for compatible iPad or iPhone games running in visionOS, GameKit adds the access point to the main window.

If this property is `nil` for a volumetric visionOS game, the access point doesn’t appear. For an immersive game, it appears below the HUD in front of the person and tracks their head position. If this property is non-`nil` for a volumetric or immersive game, the access point appears outside of the window in the specified location. For more information, see [Configure the access point on visionOS](../adding-an-access-point-to-your-game.md#Configure-the-access-point-on-visionOS).

## See Also

### Managing the location

- [location](location-swift.property.md): The corner of the screen to display the access point.
- [GKAccessPoint.Location](location-swift.enum.md): Specifies the corner of the screen to display the access point.
- [frameInScreenCoordinates](frameinscreencoordinates.md): The frame of the access point in screen coordinates.

# parentWindow (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The window that contains the access point.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) UIWindow * parentWindow;
```

```objectivec
@property (nonatomic, weak, nullable) NSWindow * parentWindow;
```

## Mentioned In

- [Adding an access point to your game](../adding-an-access-point-to-your-game.md)

<a id="Discussion"></a>

## Discussion

For Mac games, use this property to specify the parent window of the access point. If you don’t specify a parent widow, GameKit tries to add the access point to the app’s main window. For iPadOS and iOS games, and for compatible iPad or iPhone games running in visionOS, GameKit adds the access point to the main window.

If this property is `nil` for a volumetric visionOS game, the access point doesn’t appear. For an immersive game, it appears below the HUD in front of the person and tracks their head position. If this property is non-`nil` for a volumetric or immersive game, the access point appears outside of the window in the specified location. For more information, see [Configure the access point on visionOS](../adding-an-access-point-to-your-game.md#Configure-the-access-point-on-visionOS).

## See Also

### Managing the location

- [location](location-swift.property.md): The corner of the screen to display the access point.
- [GKAccessPointLocation](location-swift.enum.md): Specifies the corner of the screen to display the access point.
- [frameInScreenCoordinates](frameinscreencoordinates.md): The frame of the access point in screen coordinates.
