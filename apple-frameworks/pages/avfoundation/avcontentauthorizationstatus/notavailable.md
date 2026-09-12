> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentauthorizationstatus/notavailable](https://developer.apple.com/documentation/avfoundation/avcontentauthorizationstatus/notavailable)

# AVContentAuthorizationStatus.notAvailable (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** macOS 10.7+

The last call to request content authorization couldn’t be completed because there was no known mechanism by which to attempt authorization.

## Declaration

```swift
case notAvailable
```

## See Also

### Content authorization statuses

- [AVContentAuthorizationStatus.unknown](unknown.md): The content authorization content request hasn’t completed.
- [AVContentAuthorizationStatus.completed](completed.md): The last completed call to request content authorization completed.
- [AVContentAuthorizationStatus.cancelled](cancelled.md): The last call to request content authorization was cancelled by the user.
- [AVContentAuthorizationStatus.timedOut](timedout.md): The last call to request content authorization was cancelled because the timeout interval was reached.
- [AVContentAuthorizationStatus.busy](busy.md): The last call to request content authorization couldn’t be completed because another asset is currently attempting authorization.
- [AVContentAuthorizationStatus.notPossible](notpossible.md): The last call to request content authorization couldn’t be completed in a non-recoverable way.

# AVContentAuthorizationNotAvailable (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+

The last call to request content authorization couldn’t be completed because there was no known mechanism by which to attempt authorization.

## Declaration

```objectivec
AVContentAuthorizationNotAvailable
```

## See Also

### Content authorization statuses

- [AVContentAuthorizationUnknown](unknown.md): The content authorization content request hasn’t completed.
- [AVContentAuthorizationCompleted](completed.md): The last completed call to request content authorization completed.
- [AVContentAuthorizationCancelled](cancelled.md): The last call to request content authorization was cancelled by the user.
- [AVContentAuthorizationTimedOut](timedout.md): The last call to request content authorization was cancelled because the timeout interval was reached.
- [AVContentAuthorizationBusy](busy.md): The last call to request content authorization couldn’t be completed because another asset is currently attempting authorization.
- [AVContentAuthorizationNotPossible](notpossible.md): The last call to request content authorization couldn’t be completed in a non-recoverable way.
