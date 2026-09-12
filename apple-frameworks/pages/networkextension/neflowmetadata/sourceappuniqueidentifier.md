> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neflowmetadata/sourceappuniqueidentifier](https://developer.apple.com/documentation/networkextension/neflowmetadata/sourceappuniqueidentifier)

# sourceAppUniqueIdentifier (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A data instance that contains a unique hash value for the source application.

## Declaration

```swift
var sourceAppUniqueIdentifier: Data { get }
```

<a id="Discussion"></a>

## Discussion

The property contains the Code Directory Hash for the application.

> **Note**

>  The property’s value changes between different versions of an application.

## See Also

### Getting source app information

- [sourceAppSigningIdentifier](sourceappsigningidentifier.md): A string that contains the signing identifier of the source application.
- [sourceAppAuditToken](sourceappaudittoken.md): The audit token of the source application of the flow.

# sourceAppUniqueIdentifier (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A data instance that contains a unique hash value for the source application.

## Declaration

```objectivec
@property (readonly) NSData * sourceAppUniqueIdentifier;
```

<a id="Discussion"></a>

## Discussion

The property contains the Code Directory Hash for the application.

> **Note**

>  The property’s value changes between different versions of an application.

## See Also

### Getting source app information

- [sourceAppSigningIdentifier](sourceappsigningidentifier.md): A string that contains the signing identifier of the source application.
- [sourceAppAuditToken](sourceappaudittoken.md): The audit token of the source application of the flow.
