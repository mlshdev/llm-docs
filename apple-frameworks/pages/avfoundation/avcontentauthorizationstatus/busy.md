> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentauthorizationstatus/busy](https://developer.apple.com/documentation/avfoundation/avcontentauthorizationstatus/busy)

# AVContentAuthorizationStatus.busy (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** macOS 10.7+

The last call to request content authorization couldn’t be completed because another asset is currently attempting authorization.

## Declaration

```swift
case busy
```

## See Also

### Content authorization statuses

- [AVContentAuthorizationStatus.unknown](unknown.md): The content authorization content request hasn’t completed.
- [AVContentAuthorizationStatus.completed](completed.md): The last completed call to request content authorization completed.
- [AVContentAuthorizationStatus.cancelled](cancelled.md): The last call to request content authorization was cancelled by the user.
- [AVContentAuthorizationStatus.timedOut](timedout.md): The last call to request content authorization was cancelled because the timeout interval was reached.
- [AVContentAuthorizationStatus.notAvailable](notavailable.md): The last call to request content authorization couldn’t be completed because there was no known mechanism by which to attempt authorization.
- [AVContentAuthorizationStatus.notPossible](notpossible.md): The last call to request content authorization couldn’t be completed in a non-recoverable way.

# AVContentAuthorizationBusy (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+

The last call to request content authorization couldn’t be completed because another asset is currently attempting authorization.

## Declaration

```objectivec
AVContentAuthorizationBusy
```

## See Also

### Content authorization statuses

- [AVContentAuthorizationUnknown](unknown.md): The content authorization content request hasn’t completed.
- [AVContentAuthorizationCompleted](completed.md): The last completed call to request content authorization completed.
- [AVContentAuthorizationCancelled](cancelled.md): The last call to request content authorization was cancelled by the user.
- [AVContentAuthorizationTimedOut](timedout.md): The last call to request content authorization was cancelled because the timeout interval was reached.
- [AVContentAuthorizationNotAvailable](notavailable.md): The last call to request content authorization couldn’t be completed because there was no known mechanism by which to attempt authorization.
- [AVContentAuthorizationNotPossible](notpossible.md): The last call to request content authorization couldn’t be completed in a non-recoverable way.
