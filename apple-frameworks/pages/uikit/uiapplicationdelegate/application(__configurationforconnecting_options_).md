> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:configurationforconnecting:options:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:configurationforconnecting:options:))

# application(\_:configurationForConnecting:options:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Retrieves the configuration data for UIKit to use when creating a new scene.

## Declaration

```swift
optional func application(_ application: UIApplication, configurationForConnecting connectingSceneSession: UISceneSession, options: UIScene.ConnectionOptions) -> UISceneConfiguration
```

## Parameters

- `application`: The singleton app object.
- `connectingSceneSession`: The session object associated with the scene. This object contains the initial configuration data loaded from the app’s `Info.plist` file, if any.
- `options`: System-specific options for configuring the scene.

<a id="return-value"></a>

## Return Value

The configuration object containing the information needed to create the scene.

## Mentioned In

- [Transitioning to the UIKit scene-based life cycle](../transitioning-to-the-uikit-scene-based-life-cycle.md)
- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)
- [Specifying the scenes your app supports](../specifying-the-scenes-your-app-supports.md)

<a id="Discussion"></a>

## Discussion

Implement this method if you don’t include scene-configuration data in your app’s `Info.plist` file, or if you want to alter the scene configuration data dynamically. UIKit calls this method shortly before creating a new scene. In your implementation, return a [UISceneConfiguration](../uisceneconfiguration.md) object with the scene details, including the type of scene to create, the delegate object you use to manage the scene, and the storyboard containing the initial view controller to display.

If you don’t implement this method, you must provide scene-configuration data in your app’s `Info.plist` file.

## See Also

### Configuring and discarding scenes

- [application(\_:didDiscardSceneSessions:)](application%28__diddiscardscenesessions_%29.md): Tells the delegate that the user closed one or more of the app’s scenes from the app switcher.

# application:configurationForConnectingSceneSession:options: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Retrieves the configuration data for UIKit to use when creating a new scene.

## Declaration

```objectivec
- (UISceneConfiguration *) application:(UIApplication *) application configurationForConnectingSceneSession:(UISceneSession *) connectingSceneSession options:(UISceneConnectionOptions *) options;
```

## Parameters

- `application`: The singleton app object.
- `connectingSceneSession`: The session object associated with the scene. This object contains the initial configuration data loaded from the app’s `Info.plist` file, if any.
- `options`: System-specific options for configuring the scene.

<a id="return-value"></a>

## Return Value

The configuration object containing the information needed to create the scene.

## Mentioned In

- [Transitioning to the UIKit scene-based life cycle](../transitioning-to-the-uikit-scene-based-life-cycle.md)
- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)
- [Specifying the scenes your app supports](../specifying-the-scenes-your-app-supports.md)

<a id="Discussion"></a>

## Discussion

Implement this method if you don’t include scene-configuration data in your app’s `Info.plist` file, or if you want to alter the scene configuration data dynamically. UIKit calls this method shortly before creating a new scene. In your implementation, return a [UISceneConfiguration](../uisceneconfiguration.md) object with the scene details, including the type of scene to create, the delegate object you use to manage the scene, and the storyboard containing the initial view controller to display.

If you don’t implement this method, you must provide scene-configuration data in your app’s `Info.plist` file.

## See Also

### Configuring and discarding scenes

- [application:didDiscardSceneSessions:](application%28__diddiscardscenesessions_%29.md): Tells the delegate that the user closed one or more of the app’s scenes from the app switcher.
