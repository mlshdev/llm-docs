> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterflow/sourceappidentifier](https://developer.apple.com/documentation/networkextension/nefilterflow/sourceappidentifier)

# sourceAppIdentifier (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A string containing the identifier of the source app of the flow.

## Declaration

```swift
var sourceAppIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

This identifier remains the same for all versions and builds of the app and is unique among all apps.

## See Also

### Source app identification

- [sourceAppUniqueIdentifier](sourceappuniqueidentifier.md): A byte string that uniquely identifies the binary for each build of the app that is the source of the flow.
- [sourceAppVersion](sourceappversion.md): The short version string of the app that is the source of the flow.
- [sourceAppAuditToken](sourceappaudittoken.md): The audit token of the source application of the flow.
- [sourceProcessAuditToken](sourceprocessaudittoken.md): The audit token of the process that created the flow.

# sourceAppIdentifier (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A string containing the identifier of the source app of the flow.

## Declaration

```objectivec
@property (readonly, nullable) NSString * sourceAppIdentifier;
```

<a id="Discussion"></a>

## Discussion

This identifier remains the same for all versions and builds of the app and is unique among all apps.

## See Also

### Source app identification

- [sourceAppUniqueIdentifier](sourceappuniqueidentifier.md): A byte string that uniquely identifies the binary for each build of the app that is the source of the flow.
- [sourceAppVersion](sourceappversion.md): The short version string of the app that is the source of the flow.
- [sourceAppAuditToken](sourceappaudittoken.md): The audit token of the source application of the flow.
- [sourceProcessAuditToken](sourceprocessaudittoken.md): The audit token of the process that created the flow.
