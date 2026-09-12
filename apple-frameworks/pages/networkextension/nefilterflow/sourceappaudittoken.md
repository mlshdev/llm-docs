> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterflow/sourceappaudittoken](https://developer.apple.com/documentation/networkextension/nefilterflow/sourceappaudittoken)

# sourceAppAuditToken (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The audit token of the source application of the flow.

## Declaration

```swift
var sourceAppAuditToken: Data? { get }
```

## See Also

### Source app identification

- [sourceAppUniqueIdentifier](sourceappuniqueidentifier.md): A byte string that uniquely identifies the binary for each build of the app that is the source of the flow.
- [sourceAppIdentifier](sourceappidentifier.md): A string containing the identifier of the source app of the flow.
- [sourceAppVersion](sourceappversion.md): The short version string of the app that is the source of the flow.
- [sourceProcessAuditToken](sourceprocessaudittoken.md): The audit token of the process that created the flow.

# sourceAppAuditToken (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The audit token of the source application of the flow.

## Declaration

```objectivec
@property (readonly, nullable) NSData * sourceAppAuditToken;
```

## See Also

### Source app identification

- [sourceAppUniqueIdentifier](sourceappuniqueidentifier.md): A byte string that uniquely identifies the binary for each build of the app that is the source of the flow.
- [sourceAppIdentifier](sourceappidentifier.md): A string containing the identifier of the source app of the flow.
- [sourceAppVersion](sourceappversion.md): The short version string of the app that is the source of the flow.
- [sourceProcessAuditToken](sourceprocessaudittoken.md): The audit token of the process that created the flow.
