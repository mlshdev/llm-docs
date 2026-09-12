> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/callersecuritysession](https://developer.apple.com/documentation/security/callersecuritysession)

# callerSecuritySession (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A value that is a placeholder for the caller’s session.

## Declaration

```swift
var callerSecuritySession: SecuritySessionId { get }
```

<a id="Discussion"></a>

## Discussion

When you provide this value as the `session` input to the [SessionGetInfo(\_:\_:\_:)](sessiongetinfo%28______%29.md) function, the function will return the actual session ID via the `sessionId` output.

# callerSecuritySession (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A value that is a placeholder for the caller’s session.

## Declaration

```objectivec
callerSecuritySession
```

<a id="Discussion"></a>

## Discussion

When you provide this value as the `session` input to the [SessionGetInfo](sessiongetinfo%28______%29.md) function, the function will return the actual session ID via the `sessionId` output.
