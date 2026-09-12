> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpcconnection/processidentifier](https://developer.apple.com/documentation/foundation/nsxpcconnection/processidentifier)

# processIdentifier (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The process ID (PID) of the connecting process.

## Declaration

```swift
var processIdentifier: pid_t { get }
```

<a id="Discussion"></a>

## Discussion

This attribute may be used by the listener delegate to accept or reject connections.

## See Also

### Working with security attributes

- [auditSessionIdentifier](auditsessionidentifier.md): The BSM audit session identifier for the connecting process.
- [effectiveGroupIdentifier](effectivegroupidentifier.md): The effective group ID (EGID) of the connecting process.
- [effectiveUserIdentifier](effectiveuseridentifier.md): The effective user ID (EUID) of the connecting process.

# processIdentifier (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The process ID (PID) of the connecting process.

## Declaration

```objectivec
@property (readonly) pid_t processIdentifier;
```

<a id="Discussion"></a>

## Discussion

This attribute may be used by the listener delegate to accept or reject connections.

## See Also

### Working with security attributes

- [auditSessionIdentifier](auditsessionidentifier.md): The BSM audit session identifier for the connecting process.
- [effectiveGroupIdentifier](effectivegroupidentifier.md): The effective group ID (EGID) of the connecting process.
- [effectiveUserIdentifier](effectiveuseridentifier.md): The effective user ID (EUID) of the connecting process.
