> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolumehandlerresult](https://developer.apple.com/documentation/fskit/fsvolumehandlerresult)

# FSVolumeHandlerResult (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

An abstract base class for all result objects in FSKit handler-style protocols.

## Declaration

```swift
class FSVolumeHandlerResult
```

<a id="overview"></a>

## Overview

This class provides the common functionality needed for all result objects. All specialized result classes inherit from this base class.

## Topics

### Accessing attributes

- [requestedAttributes](fsvolumehandlerresult/requestedattributes.md): A set of attributes to populate.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [FSActivateResult](fsactivateresult.md)
- [FSBlockmapResult](fsblockmapresult.md)
- [FSCheckAccessResult](fscheckaccessresult.md)
- [FSCompleteIOResult](fscompleteioresult.md)
- [FSCreateItemResult](fscreateitemresult.md)
- [FSCreateLinkResult](fscreatelinkresult.md)
- [FSDeactivateItemResult](fsdeactivateitemresult.md)
- [FSEnumerateDirectoryResult](fsenumeratedirectoryresult.md)
- [FSGetAttributesResult](fsgetattributesresult.md)
- [FSGetXattrResult](fsgetxattrresult.md)
- [FSListXattrsResult](fslistxattrsresult.md)
- [FSLookupItemResult](fslookupitemresult.md)
- [FSOpenItemResult](fsopenitemresult.md)
- [FSPreallocateResult](fspreallocateresult.md)
- [FSReadFileResult](fsreadfileresult.md)
- [FSReadSymlinkResult](fsreadsymlinkresult.md)
- [FSRemoveItemResult](fsremoveitemresult.md)
- [FSRenameItemResult](fsrenameitemresult.md)
- [FSSeekRegionResult](fsseekregionresult.md)
- [FSSetAttributesResult](fssetattributesresult.md)
- [FSSetXattrResult](fssetxattrresult.md)
- [FSUpgradeItemResult](fsupgradeitemresult.md)
- [FSVolumeRenameResult](fsvolumerenameresult.md)
- [FSWriteFileResult](fswritefileresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Implementing required handlers

- [FSVolume.Handler](fsvolume/handler.md): Methods that all volumes implement to provide required capabilities.
- [FSVolume.PathConfOperations](fsvolume/pathconfoperations.md): Properties implemented by volumes that support providing the values of system limits or options.

# FSVolumeHandlerResult (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

An abstract base class for all result objects in FSKit handler-style protocols.

## Declaration

```objectivec
@interface FSVolumeHandlerResult : NSObject
```

<a id="overview"></a>

## Overview

This class provides the common functionality needed for all result objects. All specialized result classes inherit from this base class.

## Topics

### Accessing attributes

- [requestedAttributes](fsvolumehandlerresult/requestedattributes.md): A set of attributes to populate.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [FSActivateResult](fsactivateresult.md)
- [FSBlockmapResult](fsblockmapresult.md)
- [FSCheckAccessResult](fscheckaccessresult.md)
- [FSCompleteIOResult](fscompleteioresult.md)
- [FSCreateItemResult](fscreateitemresult.md)
- [FSCreateLinkResult](fscreatelinkresult.md)
- [FSDeactivateItemResult](fsdeactivateitemresult.md)
- [FSEnumerateDirectoryResult](fsenumeratedirectoryresult.md)
- [FSGetAttributesResult](fsgetattributesresult.md)
- [FSGetXattrResult](fsgetxattrresult.md)
- [FSListXattrsResult](fslistxattrsresult.md)
- [FSLookupItemResult](fslookupitemresult.md)
- [FSOpenItemResult](fsopenitemresult.md)
- [FSPreallocateResult](fspreallocateresult.md)
- [FSReadFileResult](fsreadfileresult.md)
- [FSReadSymlinkResult](fsreadsymlinkresult.md)
- [FSRemoveItemResult](fsremoveitemresult.md)
- [FSRenameItemResult](fsrenameitemresult.md)
- [FSSeekRegionResult](fsseekregionresult.md)
- [FSSetAttributesResult](fssetattributesresult.md)
- [FSSetXattrResult](fssetxattrresult.md)
- [FSUpgradeItemResult](fsupgradeitemresult.md)
- [FSVolumeRenameResult](fsvolumerenameresult.md)
- [FSWriteFileResult](fswritefileresult.md)

## See Also

### Implementing required handlers

- [FSVolumeHandler](fsvolume/handler.md): Methods that all volumes implement to provide required capabilities.
- [FSVolumePathConfOperations](fsvolume/pathconfoperations.md): Properties implemented by volumes that support providing the values of system limits or options.
