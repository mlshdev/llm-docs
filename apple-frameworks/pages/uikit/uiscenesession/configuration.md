> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenesession/configuration](https://developer.apple.com/documentation/uikit/uiscenesession/configuration)

# configuration (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The configuration data for creating the scene.

## Declaration

```swift
@NSCopying var configuration: UISceneConfiguration { get }
```

<a id="Discussion"></a>

## Discussion

Before the creation of a scene, UIKit creates a [UISceneConfiguration](../uisceneconfiguration.md) object and fills it with details from your app’s `Info.plist` file. (Normally, UIKit chooses the first scene of the appropriate type listed in your scene configuration data.) If the [application(\_:configurationForConnecting:options:)](../uiapplicationdelegate/application%28__configurationforconnecting_options_%29.md) method of your app delegate returns a new [UISceneConfiguration](../uisceneconfiguration.md) object, UIKit copies that object to this property.

## See Also

### Getting the scene configuration details

- [UISceneConfiguration](../uisceneconfiguration.md): Information about the objects and storyboard for UKit to use when creating a particular scene.

# configuration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The configuration data for creating the scene.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) UISceneConfiguration * configuration;
```

<a id="Discussion"></a>

## Discussion

Before the creation of a scene, UIKit creates a [UISceneConfiguration](../uisceneconfiguration.md) object and fills it with details from your app’s `Info.plist` file. (Normally, UIKit chooses the first scene of the appropriate type listed in your scene configuration data.) If the [application:configurationForConnectingSceneSession:options:](../uiapplicationdelegate/application%28__configurationforconnecting_options_%29.md) method of your app delegate returns a new [UISceneConfiguration](../uisceneconfiguration.md) object, UIKit copies that object to this property.

## See Also

### Getting the scene configuration details

- [UISceneConfiguration](../uisceneconfiguration.md): Information about the objects and storyboard for UKit to use when creating a particular scene.
