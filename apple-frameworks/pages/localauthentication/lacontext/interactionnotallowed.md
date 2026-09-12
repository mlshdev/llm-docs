> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/lacontext/interactionnotallowed](https://developer.apple.com/documentation/localauthentication/lacontext/interactionnotallowed)

# interactionNotAllowed (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

A Boolean value indicating whether authentication can be interactive.

## Declaration

```swift
var interactionNotAllowed: Bool { get set }
```

## See Also

### Evaluating access controls

- [evaluateAccessControl(\_:operation:localizedReason:reply:)](evaluateaccesscontrol%28__operation_localizedreason_reply_%29.md): Evaluates an access control for a given operation.
- [LAAccessControlOperation](../laaccesscontroloperation.md): Operations to be evaluated for access control.

# interactionNotAllowed (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

A Boolean value indicating whether authentication can be interactive.

## Declaration

```objectivec
@property (nonatomic) BOOL interactionNotAllowed;
```

## See Also

### Evaluating access controls

- [evaluateAccessControl:operation:localizedReason:reply:](evaluateaccesscontrol%28__operation_localizedreason_reply_%29.md): Evaluates an access control for a given operation.
- [LAAccessControlOperation](../laaccesscontroloperation.md): Operations to be evaluated for access control.
