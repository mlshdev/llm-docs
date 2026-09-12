> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderrequest](https://developer.apple.com/documentation/fileprovider/nsfileproviderrequest)

# NSFileProviderRequest (Swift)

**Framework:** File Provider  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

An object that provides information about the application requesting data from the File Provider extension.

## Declaration

```swift
class NSFileProviderRequest
```

## Topics

### Accessing Application Information

- [domainVersion](nsfileproviderrequest/domainversion.md): The version of the domain for the request.
- [requestingExecutable](nsfileproviderrequest/requestingexecutable.md): The URL of the requesting executable.
- [isFileViewerRequest](nsfileproviderrequest/isfileviewerrequest.md): A Boolean value that indicates whether the request came from Finder or related system file browsers.
- [isSystemRequest](nsfileproviderrequest/issystemrequest.md): A Boolean value that indicates whether the request came from a system process.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Items and metadata

- [NSFileProviderItemFields](nsfileprovideritemfields.md): Fields that specify which of the item’s properties have changed.
- [NSFileProviderItemVersion](nsfileprovideritemversion.md): The version of the item’s content and its metadata.
- [NSFileProviderItemDecorating](nsfileprovideritemdecorating.md): Support for decorating items.
- [NSFileProviderItemDecorationIdentifier](nsfileprovideritemdecorationidentifier.md): A decoration identifier defined in the File Provider extension’s information property list.

# NSFileProviderRequest (Objective-C)

**Framework:** File Provider  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

An object that provides information about the application requesting data from the File Provider extension.

## Declaration

```objectivec
@interface NSFileProviderRequest : NSObject
```

## Topics

### Accessing Application Information

- [domainVersion](nsfileproviderrequest/domainversion.md): The version of the domain for the request.
- [requestingExecutable](nsfileproviderrequest/requestingexecutable.md): The URL of the requesting executable.
- [isFileViewerRequest](nsfileproviderrequest/isfileviewerrequest.md): A Boolean value that indicates whether the request came from Finder or related system file browsers.
- [isSystemRequest](nsfileproviderrequest/issystemrequest.md): A Boolean value that indicates whether the request came from a system process.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Items and metadata

- [NSFileProviderItemFields](nsfileprovideritemfields.md): Fields that specify which of the item’s properties have changed.
- [NSFileProviderItemVersion](nsfileprovideritemversion.md): The version of the item’s content and its metadata.
- [NSFileProviderItemDecorating](nsfileprovideritemdecorating.md): Support for decorating items.
- [NSFileProviderItemDecorationIdentifier](nsfileprovideritemdecorationidentifier.md): A decoration identifier defined in the File Provider extension’s information property list.
