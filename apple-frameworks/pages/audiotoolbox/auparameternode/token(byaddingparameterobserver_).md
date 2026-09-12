> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparameternode/token(byaddingparameterobserver:)](https://developer.apple.com/documentation/audiotoolbox/auparameternode/token(byaddingparameterobserver:))

# token(byAddingParameterObserver:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds an observer for a single parameter or all parameters in a group.

## Declaration

```swift
func token(byAddingParameterObserver observer: @escaping AUParameterObserver) -> AUParameterObserverToken
```

## Parameters

- `observer`: A block called after the value of a parameter has changed.

<a id="return-value"></a>

## Return Value

A token which can be passed to the [removeParameterObserver(\_:)](removeparameterobserver%28__%29.md) or [setValue(\_:originator:)](../auparameter/setvalue%28__originator_%29.md) methods.

<a id="Discussion"></a>

## Discussion

An audio unit view can use an observer to be notified of changes to a single parameter or all parameters in a group. These callbacks are throttled so as to limit the rate of redundant notifications in the case of frequent changes to a single parameter.

This block is called in an arbitrary thread context and it is responsible for thread-safety. It must not make any calls to add or remove other observers, including itself, as this will deadlock.

An audio unit should interact with the parameter node via the [implementorValueObserver](implementorvalueobserver.md) and [implementorValueProvider](implementorvalueprovider.md) properties.

## See Also

### Observers

- [token(byAddingParameterRecordingObserver:)](token%28byaddingparameterrecordingobserver_%29.md): Adds a recording observer for a single parameter or all parameters in a group.
- [token(byAddingParameterAutomationObserver:)](token%28byaddingparameterautomationobserver_%29.md)
- [removeParameterObserver(\_:)](removeparameterobserver%28__%29.md): Remove a specific parameter observer.

# tokenByAddingParameterObserver: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds an observer for a single parameter or all parameters in a group.

## Declaration

```objectivec
- (AUParameterObserverToken) tokenByAddingParameterObserver:(AUParameterObserver) observer;
```

## Parameters

- `observer`: A block called after the value of a parameter has changed.

<a id="return-value"></a>

## Return Value

A token which can be passed to the [removeParameterObserver:](removeparameterobserver%28__%29.md) or [setValue:originator:](../auparameter/setvalue%28__originator_%29.md) methods.

<a id="Discussion"></a>

## Discussion

An audio unit view can use an observer to be notified of changes to a single parameter or all parameters in a group. These callbacks are throttled so as to limit the rate of redundant notifications in the case of frequent changes to a single parameter.

This block is called in an arbitrary thread context and it is responsible for thread-safety. It must not make any calls to add or remove other observers, including itself, as this will deadlock.

An audio unit should interact with the parameter node via the [implementorValueObserver](implementorvalueobserver.md) and [implementorValueProvider](implementorvalueprovider.md) properties.

## See Also

### Observers

- [tokenByAddingParameterRecordingObserver:](token%28byaddingparameterrecordingobserver_%29.md): Adds a recording observer for a single parameter or all parameters in a group.
- [tokenByAddingParameterAutomationObserver:](token%28byaddingparameterautomationobserver_%29.md)
- [removeParameterObserver:](removeparameterobserver%28__%29.md): Remove a specific parameter observer.
