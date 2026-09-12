> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenedelegate/scenediddisconnect(_:)](https://developer.apple.com/documentation/uikit/uiscenedelegate/scenediddisconnect(_:))

# sceneDidDisconnect(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Tells the delegate that UIKit removed a scene from your app.

## Declaration

```swift
optional func sceneDidDisconnect(_ scene: UIScene)
```

## Parameters

- `scene`: The scene that UIKit disconnected from your app.

## Mentioned In

- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)

<a id="Discussion"></a>

## Discussion

Use this method to perform any final cleanup before your scene is purged from memory. For example, use it to release references to files or shared resources and to save user data.

The removal of a scene is a precursor to the destruction of that scene. UIKit disconnects a scene when the user explicitly closes it in the app switcher. UIKit may also disconnect a scene in order to reclaim memory for other processes. UIKit does not automatically disconnect a scene when the user switches to another app.

UIKit also posts a [didDisconnectNotification](../uiscene/diddisconnectnotification.md) notification in addition to calling this method.

## See Also

### Connecting and disconnecting the scene

- [scene(\_:willConnectTo:options:)](scene%28__willconnectto_options_%29.md): Tells the delegate about the addition of a scene to the app.
- [UIScene.ConnectionOptions](../uiscene/connectionoptions.md): A data object containing information about the reasons why UIKit created the scene.

# sceneDidDisconnect: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Tells the delegate that UIKit removed a scene from your app.

## Declaration

```objectivec
- (void) sceneDidDisconnect:(UIScene *) scene;
```

## Parameters

- `scene`: The scene that UIKit disconnected from your app.

## Mentioned In

- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)

<a id="Discussion"></a>

## Discussion

Use this method to perform any final cleanup before your scene is purged from memory. For example, use it to release references to files or shared resources and to save user data.

The removal of a scene is a precursor to the destruction of that scene. UIKit disconnects a scene when the user explicitly closes it in the app switcher. UIKit may also disconnect a scene in order to reclaim memory for other processes. UIKit does not automatically disconnect a scene when the user switches to another app.

UIKit also posts a [UISceneDidDisconnectNotification](../uiscene/diddisconnectnotification.md) notification in addition to calling this method.

## See Also

### Connecting and disconnecting the scene

- [scene:willConnectToSession:options:](scene%28__willconnectto_options_%29.md): Tells the delegate about the addition of a scene to the app.
- [UISceneConnectionOptions](../uiscene/connectionoptions.md): A data object containing information about the reasons why UIKit created the scene.
