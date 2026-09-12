> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neflowmetadata/sourceappsigningidentifier](https://developer.apple.com/documentation/networkextension/neflowmetadata/sourceappsigningidentifier)

# sourceAppSigningIdentifier (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A string that contains the signing identifier of the source application.

## Declaration

```swift
var sourceAppSigningIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

For all apps that are signed in the standard way using Xcode, this value is identical to the app’s bundle identifier.

## See Also

### Getting source app information

- [sourceAppUniqueIdentifier](sourceappuniqueidentifier.md): A data instance that contains a unique hash value for the source application.
- [sourceAppAuditToken](sourceappaudittoken.md): The audit token of the source application of the flow.

# sourceAppSigningIdentifier (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A string that contains the signing identifier of the source application.

## Declaration

```objectivec
@property (readonly) NSString * sourceAppSigningIdentifier;
```

<a id="Discussion"></a>

## Discussion

For all apps that are signed in the standard way using Xcode, this value is identical to the app’s bundle identifier.

## See Also

### Getting source app information

- [sourceAppUniqueIdentifier](sourceappuniqueidentifier.md): A data instance that contains a unique hash value for the source application.
- [sourceAppAuditToken](sourceappaudittoken.md): The audit token of the source application of the flow.
