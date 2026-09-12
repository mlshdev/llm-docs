> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phchangerequest](https://developer.apple.com/documentation/photos/phchangerequest)

# PHChangeRequest (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The abstract base class of the framework’s photo library change requests.

## Declaration

```swift
class PHChangeRequest
```

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PHAssetChangeRequest](phassetchangerequest.md)
- [PHAssetCollectionChangeRequest](phassetcollectionchangerequest.md)
- [PHAssetResourceUploadJobChangeRequest](phassetresourceuploadjobchangerequest.md)
- [PHCollectionListChangeRequest](phcollectionlistchangerequest.md)
- [PHProjectChangeRequest](phprojectchangerequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Updating the Library

- [Requesting Changes to the Photo Library](../photokit/requesting-changes-to-the-photo-library.md): Create, delete, or modify assets and collections in a photo library by making change requests.
- [performChanges(\_:completionHandler:)](phphotolibrary/performchanges%28__completionhandler_%29.md): Asynchronously runs a block that requests changes to the photo library.
- [performChangesAndWait(\_:)](phphotolibrary/performchangesandwait%28__%29.md): Synchronously runs a block that requests changes to be performed in the photo library.
- [PHAssetChangeRequest](phassetchangerequest.md): A request to create, delete, change metadata for, or edit the content of a Photos asset, for use in a photo library change block.
- [PHAssetCollectionChangeRequest](phassetcollectionchangerequest.md): A request to create, delete, or modify a Photos asset collection, for use in a photo library change block.
- [PHCollectionListChangeRequest](phcollectionlistchangerequest.md): A request to create, delete, or modify a Photos collection list, for use in a photo library change block.
- [PHObjectPlaceholder](phobjectplaceholder.md): A read-only proxy object that represents a Photos asset or collection to create.

# PHChangeRequest (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The abstract base class of the framework’s photo library change requests.

## Declaration

```objectivec
@interface PHChangeRequest : NSObject
```

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PHAssetChangeRequest](phassetchangerequest.md)
- [PHAssetCollectionChangeRequest](phassetcollectionchangerequest.md)
- [PHAssetResourceUploadJobChangeRequest](phassetresourceuploadjobchangerequest.md)
- [PHCollectionListChangeRequest](phcollectionlistchangerequest.md)
- [PHProjectChangeRequest](phprojectchangerequest.md)

## See Also

### Updating the Library

- [Requesting Changes to the Photo Library](../photokit/requesting-changes-to-the-photo-library.md): Create, delete, or modify assets and collections in a photo library by making change requests.
- [performChanges:completionHandler:](phphotolibrary/performchanges%28__completionhandler_%29.md): Asynchronously runs a block that requests changes to the photo library.
- [performChangesAndWait:error:](phphotolibrary/performchangesandwait%28__%29.md): Synchronously runs a block that requests changes to be performed in the photo library.
- [PHAssetChangeRequest](phassetchangerequest.md): A request to create, delete, change metadata for, or edit the content of a Photos asset, for use in a photo library change block.
- [PHAssetCollectionChangeRequest](phassetcollectionchangerequest.md): A request to create, delete, or modify a Photos asset collection, for use in a photo library change block.
- [PHCollectionListChangeRequest](phcollectionlistchangerequest.md): A request to create, delete, or modify a Photos collection list, for use in a photo library change block.
- [PHObjectPlaceholder](phobjectplaceholder.md): A read-only proxy object that represents a Photos asset or collection to create.
