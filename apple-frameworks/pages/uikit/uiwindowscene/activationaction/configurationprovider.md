> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/activationaction/configurationprovider](https://developer.apple.com/documentation/uikit/uiwindowscene/activationaction/configurationprovider)

# UIWindowScene.ActivationAction.ConfigurationProvider (Swift)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A type alias defining a closure that provides an activation configuration for the activation action.

## Declaration

```swift
typealias ConfigurationProvider = (UIWindowScene.ActivationAction) -> UIWindowScene.ActivationConfiguration?
```

## Parameters

- `action`: The [UIWindowScene.ActivationAction](../activationaction.md) requesting a configuration.

<a id="return-value"></a>

## Return Value

An activation configuration you can use to request a window scene.

## See Also

### Creating an activation action

- [init(title:subtitle:image:identifier:discoverabilityTitle:attributes:alternate:\_:)](init%28title_subtitle_image_identifier_discoverabilitytitle_attributes_alternate___%29.md): Creates an activation action using the specified parameters.

# UIWindowSceneActivationActionConfigurationProvider (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A type alias defining a closure that provides an activation configuration for the activation action.

## Declaration

```objectivec
typedef UIWindowSceneActivationConfiguration *(^)(__kindof UIWindowSceneActivationAction *) UIWindowSceneActivationActionConfigurationProvider;
```

## Parameters

- `action`: The [UIWindowSceneActivationAction](../activationaction.md) requesting a configuration.

<a id="return-value"></a>

## Return Value

An activation configuration you can use to request a window scene.

## See Also

### Creating an activation action

- [actionWithIdentifier:alternateAction:configurationProvider:](../../uiwindowsceneactivationaction/actionwithidentifier_alternateaction_configurationprovider_.md): Creates an activation action with the specified parameters.
