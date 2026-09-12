> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbinaryarchivedescriptor](https://developer.apple.com/documentation/metal/mtlbinaryarchivedescriptor)

# MTLBinaryArchiveDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A description of a binary shader archive that you want to create.

## Declaration

```swift
class MTLBinaryArchiveDescriptor
```

## Mentioned In

- [Creating binary archives from device-built pipeline state objects](creating-binary-archives-from-device-built-pipeline-state-objects.md)

## Topics

### Choosing an archive file

- [url](mtlbinaryarchivedescriptor/url.md): A URL to a Metal binary archive file.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Creating binary shader archives

- [makeBinaryArchive(descriptor:)](mtldevice/makebinaryarchive%28descriptor_%29.md): Creates a Metal binary archive instance.
- [MTLBinaryArchiveError.Code](mtlbinaryarchiveerror-swift.struct/code.md): Error codes when creating binary archives of compiled shader code.
- [MTLBinaryArchiveDomain](mtlbinaryarchivedomain.md): The domain for Metal binary archive errors.

# MTLBinaryArchiveDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A description of a binary shader archive that you want to create.

## Declaration

```objectivec
@interface MTLBinaryArchiveDescriptor : NSObject
```

## Mentioned In

- [Creating binary archives from device-built pipeline state objects](creating-binary-archives-from-device-built-pipeline-state-objects.md)

## Topics

### Choosing an archive file

- [url](mtlbinaryarchivedescriptor/url.md): A URL to a Metal binary archive file.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Creating binary shader archives

- [newBinaryArchiveWithDescriptor:error:](mtldevice/makebinaryarchive%28descriptor_%29.md): Creates a Metal binary archive instance.
- [MTLBinaryArchiveError](mtlbinaryarchiveerror-swift.struct/code.md): Error codes when creating binary archives of compiled shader code.
- [MTLBinaryArchiveDomain](mtlbinaryarchivedomain.md): The domain for Metal binary archive errors.
