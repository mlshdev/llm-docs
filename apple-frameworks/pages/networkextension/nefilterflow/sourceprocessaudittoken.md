> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nefilterflow/sourceprocessaudittoken

# sourceProcessAuditToken (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The audit token of the process that created the flow.

## Declaration

```swift
var sourceProcessAuditToken: Data? { get }
```

<a id="Discussion"></a>

## Discussion

In cases where a system process creates the connection on behalf of a source app, this value is different from [sourceAppAuditToken](sourceappaudittoken.md). In cases where the source app directly creates the connection, these values are identical.

## See Also

### Source app identification

- [sourceAppUniqueIdentifier](sourceappuniqueidentifier.md): A byte string that uniquely identifies the binary for each build of the app that is the source of the flow.
- [sourceAppIdentifier](sourceappidentifier.md): A string containing the identifier of the source app of the flow.
- [sourceAppVersion](sourceappversion.md): The short version string of the app that is the source of the flow.
- [sourceAppAuditToken](sourceappaudittoken.md): The audit token of the source application of the flow.

# sourceProcessAuditToken (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The audit token of the process that created the flow.

## Declaration

```objectivec
@property (readonly, nullable) NSData * sourceProcessAuditToken;
```

<a id="Discussion"></a>

## Discussion

In cases where a system process creates the connection on behalf of a source app, this value is different from [sourceAppAuditToken](sourceappaudittoken.md). In cases where the source app directly creates the connection, these values are identical.

## See Also

### Source app identification

- [sourceAppUniqueIdentifier](sourceappuniqueidentifier.md): A byte string that uniquely identifies the binary for each build of the app that is the source of the flow.
- [sourceAppIdentifier](sourceappidentifier.md): A string containing the identifier of the source app of the flow.
- [sourceAppVersion](sourceappversion.md): The short version string of the app that is the source of the flow.
- [sourceAppAuditToken](sourceappaudittoken.md): The audit token of the source application of the flow.
