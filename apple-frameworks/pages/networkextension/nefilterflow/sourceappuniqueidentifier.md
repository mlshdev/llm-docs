> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterflow/sourceappuniqueidentifier](https://developer.apple.com/documentation/networkextension/nefilterflow/sourceappuniqueidentifier)

# sourceAppUniqueIdentifier (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A byte string that uniquely identifies the binary for each build of the app that is the source of the flow.

## Declaration

```swift
var sourceAppUniqueIdentifier: Data? { get }
```

## See Also

### Source app identification

- [sourceAppIdentifier](sourceappidentifier.md): A string containing the identifier of the source app of the flow.
- [sourceAppVersion](sourceappversion.md): The short version string of the app that is the source of the flow.
- [sourceAppAuditToken](sourceappaudittoken.md): The audit token of the source application of the flow.
- [sourceProcessAuditToken](sourceprocessaudittoken.md): The audit token of the process that created the flow.

# sourceAppUniqueIdentifier (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A byte string that uniquely identifies the binary for each build of the app that is the source of the flow.

## Declaration

```objectivec
@property (readonly, nullable) NSData * sourceAppUniqueIdentifier;
```

## See Also

### Source app identification

- [sourceAppIdentifier](sourceappidentifier.md): A string containing the identifier of the source app of the flow.
- [sourceAppVersion](sourceappversion.md): The short version string of the app that is the source of the flow.
- [sourceAppAuditToken](sourceappaudittoken.md): The audit token of the source application of the flow.
- [sourceProcessAuditToken](sourceprocessaudittoken.md): The audit token of the process that created the flow.
