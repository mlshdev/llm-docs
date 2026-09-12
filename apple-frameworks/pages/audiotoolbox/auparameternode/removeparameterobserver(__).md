> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparameternode/removeparameterobserver(_:)](https://developer.apple.com/documentation/audiotoolbox/auparameternode/removeparameterobserver(_:))

# removeParameterObserver(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Remove a specific parameter observer.

## Declaration

```swift
func removeParameterObserver(_ token: AUParameterObserverToken)
```

## Parameters

- `token`: The token corresponding to the given observer.

<a id="Discussion"></a>

## Discussion

This call will remove the callback corresponding to the given token. This operation blocks until any callbacks currently in progress have completed.

## See Also

### Observers

- [token(byAddingParameterObserver:)](token%28byaddingparameterobserver_%29.md): Adds an observer for a single parameter or all parameters in a group.
- [token(byAddingParameterRecordingObserver:)](token%28byaddingparameterrecordingobserver_%29.md): Adds a recording observer for a single parameter or all parameters in a group.
- [token(byAddingParameterAutomationObserver:)](token%28byaddingparameterautomationobserver_%29.md)

# removeParameterObserver: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Remove a specific parameter observer.

## Declaration

```objectivec
- (void) removeParameterObserver:(AUParameterObserverToken) token;
```

## Parameters

- `token`: The token corresponding to the given observer.

<a id="Discussion"></a>

## Discussion

This call will remove the callback corresponding to the given token. This operation blocks until any callbacks currently in progress have completed.

## See Also

### Observers

- [tokenByAddingParameterObserver:](token%28byaddingparameterobserver_%29.md): Adds an observer for a single parameter or all parameters in a group.
- [tokenByAddingParameterRecordingObserver:](token%28byaddingparameterrecordingobserver_%29.md): Adds a recording observer for a single parameter or all parameters in a group.
- [tokenByAddingParameterAutomationObserver:](token%28byaddingparameterautomationobserver_%29.md)
