> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/activationinteraction/configurationprovider](https://developer.apple.com/documentation/uikit/uiwindowscene/activationinteraction/configurationprovider)

# UIWindowScene.ActivationInteraction.ConfigurationProvider (Swift)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A type alias defining a closure that provides an activation configuration for the activation interaction.

## Declaration

```swift
typealias ConfigurationProvider = (UIWindowScene.ActivationInteraction, CGPoint) -> UIWindowScene.ActivationConfiguration?
```

## Parameters

- `interaction`: The [UIWindowScene.ActivationInteraction](../activationinteraction.md) requesting a configuration.
- `location`: The location in the view of the interaction requesting a configuration.

<a id="return-value"></a>

## Return Value

An activation configuration you can use to request a window scene.

## See Also

### Creating an activation interaction

- [init(\_:errorHandler:)](init%28__errorhandler_%29.md): Creates an activation interaction.

# UIWindowSceneActivationInteractionConfigurationProvider (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A type alias defining a closure that provides an activation configuration for the activation interaction.

## Declaration

```objectivec
typedef UIWindowSceneActivationConfiguration *(^)(UIWindowSceneActivationInteraction *, struct CGPoint) UIWindowSceneActivationInteractionConfigurationProvider;
```

## Parameters

- `interaction`: The [UIWindowSceneActivationInteraction](../activationinteraction.md) requesting a configuration.
- `location`: The location in the view of the interaction requesting a configuration.

<a id="return-value"></a>

## Return Value

An activation configuration you can use to request a window scene.

## See Also

### Creating an activation interaction

- [initWithConfigurationProvider:errorHandler:](init%28__errorhandler_%29.md): Creates an activation interaction.
