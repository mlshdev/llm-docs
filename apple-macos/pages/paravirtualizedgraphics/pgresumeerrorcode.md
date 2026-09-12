> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgresumeerrorcode](https://developer.apple.com/documentation/paravirtualizedgraphics/pgresumeerrorcode)

# PGResumeErrorCode (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

Error codes for suspend-resume actions.

## Declaration

```swift
enum PGResumeErrorCode
```

## Topics

### Errors

- [PGResumeErrorCode.incompatibleDevice](pgresumeerrorcode/incompatibledevice.md): The resume device is missing capabilities that the suspended device provided.
- [PGResumeErrorCode.internalFault](pgresumeerrorcode/internalfault.md): An internal error occurred.
- [PGResumeErrorCode.invalidContent](pgresumeerrorcode/invalidcontent.md): The content of the suspend state or the guest memory isn’t valid.
- [PGResumeErrorCode.invalidGuestVersion](pgresumeerrorcode/invalidguestversion.md): The guest version is incompatible with this framework version.
- [PGResumeErrorCode.invalidSuspendStateVersion](pgresumeerrorcode/invalidsuspendstateversion.md): The suspend state version is incompatible with this framework version.

### Enumeration Cases

- [PGResumeErrorCode.invalidDisplayPortCount](pgresumeerrorcode/invaliddisplayportcount.md)

### Initializers

- [init(rawValue:)](pgresumeerrorcode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Suspending and Resuming Graphics Processing

- [willSuspend()](pgdevice/willsuspend%28%29.md): Notifies the virtual graphics device to start suspending graphics activities.
- [finishSuspend()](pgdevice/finishsuspend%28%29.md): Notifies the virtualized graphics device to finish suspending graphics activities.
- [willResume(withSuspendState:error:)](pgdevice/willresume%28withsuspendstate_error_%29.md): Tells a new device object to load a previously saved device’s suspend state.
- [didResume()](pgdevice/didresume%28%29.md): Tells the device object to finish any remaining work to resume processing of a previously saved device’s suspend state.
- [PGResumeErrorDomain](pgresumeerrordomain.md): The error domain for suspend-resume actions.

# PGResumeErrorCode (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

Error codes for suspend-resume actions.

## Declaration

```objectivec
enum PGResumeErrorCode : NSUInteger;
```

## Topics

### Errors

- [PGResumeErrorCodeIncompatibleDevice](pgresumeerrorcode/incompatibledevice.md): The resume device is missing capabilities that the suspended device provided.
- [PGResumeErrorCodeInternalFault](pgresumeerrorcode/internalfault.md): An internal error occurred.
- [PGResumeErrorCodeInvalidContent](pgresumeerrorcode/invalidcontent.md): The content of the suspend state or the guest memory isn’t valid.
- [PGResumeErrorCodeInvalidGuestVersion](pgresumeerrorcode/invalidguestversion.md): The guest version is incompatible with this framework version.
- [PGResumeErrorCodeInvalidSuspendStateVersion](pgresumeerrorcode/invalidsuspendstateversion.md): The suspend state version is incompatible with this framework version.

### Enumeration Cases

- [PGResumeErrorCodeInvalidDisplayPortCount](pgresumeerrorcode/invaliddisplayportcount.md)

## See Also

### Suspending and Resuming Graphics Processing

- [willSuspend](pgdevice/willsuspend%28%29.md): Notifies the virtual graphics device to start suspending graphics activities.
- [finishSuspend](pgdevice/finishsuspend%28%29.md): Notifies the virtualized graphics device to finish suspending graphics activities.
- [willResumeWithSuspendState:error:](pgdevice/willresume%28withsuspendstate_error_%29.md): Tells a new device object to load a previously saved device’s suspend state.
- [didResume](pgdevice/didresume%28%29.md): Tells the device object to finish any remaining work to resume processing of a previously saved device’s suspend state.
- [PGResumeErrorDomain](pgresumeerrordomain.md): The error domain for suspend-resume actions.
