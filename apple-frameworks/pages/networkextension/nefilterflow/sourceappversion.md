> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterflow/sourceappversion](https://developer.apple.com/documentation/networkextension/nefilterflow/sourceappversion)

# sourceAppVersion (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The short version string of the app that is the source of the flow.

## Declaration

```swift
var sourceAppVersion: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if the app info is unavailable.

## See Also

### Source app identification

- [sourceAppUniqueIdentifier](sourceappuniqueidentifier.md): A byte string that uniquely identifies the binary for each build of the app that is the source of the flow.
- [sourceAppIdentifier](sourceappidentifier.md): A string containing the identifier of the source app of the flow.
- [sourceAppAuditToken](sourceappaudittoken.md): The audit token of the source application of the flow.
- [sourceProcessAuditToken](sourceprocessaudittoken.md): The audit token of the process that created the flow.

# sourceAppVersion (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The short version string of the app that is the source of the flow.

## Declaration

```objectivec
@property (readonly, nullable) NSString * sourceAppVersion;
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if the app info is unavailable.

## See Also

### Source app identification

- [sourceAppUniqueIdentifier](sourceappuniqueidentifier.md): A byte string that uniquely identifies the binary for each build of the app that is the source of the flow.
- [sourceAppIdentifier](sourceappidentifier.md): A string containing the identifier of the source app of the flow.
- [sourceAppAuditToken](sourceappaudittoken.md): The audit token of the source application of the flow.
- [sourceProcessAuditToken](sourceprocessaudittoken.md): The audit token of the process that created the flow.
