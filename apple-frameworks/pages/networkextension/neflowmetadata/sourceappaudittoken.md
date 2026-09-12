> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neflowmetadata/sourceappaudittoken](https://developer.apple.com/documentation/networkextension/neflowmetadata/sourceappaudittoken)

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

### Getting source app information

- [sourceAppUniqueIdentifier](sourceappuniqueidentifier.md): A data instance that contains a unique hash value for the source application.
- [sourceAppSigningIdentifier](sourceappsigningidentifier.md): A string that contains the signing identifier of the source application.

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

### Getting source app information

- [sourceAppUniqueIdentifier](sourceappuniqueidentifier.md): A data instance that contains a unique hash value for the source application.
- [sourceAppSigningIdentifier](sourceappsigningidentifier.md): A string that contains the signing identifier of the source application.
