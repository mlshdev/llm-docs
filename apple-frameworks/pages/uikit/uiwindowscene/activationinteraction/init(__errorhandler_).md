> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/activationinteraction/init(_:errorhandler:)](https://developer.apple.com/documentation/uikit/uiwindowscene/activationinteraction/init(_:errorhandler:))

# init(\_:errorHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Creates an activation interaction.

## Declaration

```swift
init(_ configurationProvider: @escaping UIWindowScene.ActivationInteraction.ConfigurationProvider, errorHandler: @escaping (any Error) -> Void)
```

## Parameters

- `configurationProvider`: The closure the system calls when the user triggers the interaction. The closure should return a [UIWindowScene.ActivationConfiguration](../activationconfiguration.md) object.
- `errorHandler`: The closure the system calls when the activation request fails.

<a id="return-value"></a>

## Return Value

A newly initialized activation interaction object.

## See Also

### Creating an activation interaction

- [UIWindowScene.ActivationInteraction.ConfigurationProvider](configurationprovider.md): A type alias defining a closure that provides an activation configuration for the activation interaction.

# initWithConfigurationProvider:errorHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Creates an activation interaction.

## Declaration

```objectivec
- (instancetype) initWithConfigurationProvider:(UIWindowSceneActivationInteractionConfigurationProvider) configurationProvider errorHandler:(void (^)(NSError *)) errorHandler;
```

## Parameters

- `configurationProvider`: The closure the system calls when the user triggers the interaction. The closure should return a [UIWindowSceneActivationConfiguration](../activationconfiguration.md) object.
- `errorHandler`: The closure the system calls when the activation request fails.

<a id="return-value"></a>

## Return Value

A newly initialized activation interaction object.

## See Also

### Creating an activation interaction

- [UIWindowSceneActivationInteractionConfigurationProvider](configurationprovider.md): A type alias defining a closure that provides an activation configuration for the activation interaction.
