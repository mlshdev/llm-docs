> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparameternode/token(byaddingparameterautomationobserver:)](https://developer.apple.com/documentation/audiotoolbox/auparameternode/token(byaddingparameterautomationobserver:))

# token(byAddingParameterAutomationObserver:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

## Declaration

```swift
func token(byAddingParameterAutomationObserver observer: @escaping AUParameterAutomationObserver) -> AUParameterObserverToken
```

## See Also

### Observers

- [token(byAddingParameterObserver:)](token%28byaddingparameterobserver_%29.md): Adds an observer for a single parameter or all parameters in a group.
- [token(byAddingParameterRecordingObserver:)](token%28byaddingparameterrecordingobserver_%29.md): Adds a recording observer for a single parameter or all parameters in a group.
- [removeParameterObserver(\_:)](removeparameterobserver%28__%29.md): Remove a specific parameter observer.

# tokenByAddingParameterAutomationObserver: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

## Declaration

```objectivec
- (AUParameterObserverToken) tokenByAddingParameterAutomationObserver:(AUParameterAutomationObserver) observer;
```

## See Also

### Observers

- [tokenByAddingParameterObserver:](token%28byaddingparameterobserver_%29.md): Adds an observer for a single parameter or all parameters in a group.
- [tokenByAddingParameterRecordingObserver:](token%28byaddingparameterrecordingobserver_%29.md): Adds a recording observer for a single parameter or all parameters in a group.
- [removeParameterObserver:](removeparameterobserver%28__%29.md): Remove a specific parameter observer.
