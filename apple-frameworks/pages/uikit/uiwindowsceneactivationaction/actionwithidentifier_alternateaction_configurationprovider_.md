> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowsceneactivationaction/actionwithidentifier:alternateaction:configurationprovider:](https://developer.apple.com/documentation/uikit/uiwindowsceneactivationaction/actionwithidentifier:alternateaction:configurationprovider:)

# actionWithIdentifier:alternateAction:configurationProvider:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Creates an activation action with the specified parameters.

## Declaration

```objectivec
+ (instancetype) actionWithIdentifier:(UIActionIdentifier) identifier alternateAction:(UIAction *) alternateAction configurationProvider:(UIWindowSceneActivationActionConfigurationProvider) configurationProvider;
```

## Parameters

- `identifier`: The unique identifier for the action. Specify `nil` to let this method create a unique identifier for you.
- `alternateAction`: An alternate action to perform if the platform doesn’t support multiple scenes or if requesting a scene fails.
- `configurationProvider`: The closure the system calls when the user selects the action. The closure should return a [UIWindowSceneActivationConfiguration](../uiwindowscene/activationconfiguration.md) object.

<a id="return-value"></a>

## Return Value

A newly initialized activation action object.

## See Also

### Creating an activation action

- [UIWindowSceneActivationActionConfigurationProvider](../uiwindowscene/activationaction/configurationprovider.md): A type alias defining a closure that provides an activation configuration for the activation action.
