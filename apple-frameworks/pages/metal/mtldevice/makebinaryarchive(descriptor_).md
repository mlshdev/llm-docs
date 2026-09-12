> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makebinaryarchive(descriptor:)](https://developer.apple.com/documentation/metal/mtldevice/makebinaryarchive(descriptor:))

# makeBinaryArchive(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a Metal binary archive instance.

## Declaration

```swift
func makeBinaryArchive(descriptor: MTLBinaryArchiveDescriptor) throws -> any MTLBinaryArchive
```

## Parameters

- `descriptor`: An [MTLBinaryArchiveDescriptor](../mtlbinaryarchivedescriptor.md) instance.

## Mentioned In

- [Compiling binary archives from a custom configuration script](../compiling-binary-archives-from-a-custom-configuration-script.md)
- [Creating binary archives from device-built pipeline state objects](../creating-binary-archives-from-device-built-pipeline-state-objects.md)

## See Also

### Creating binary shader archives

- [MTLBinaryArchiveDescriptor](../mtlbinaryarchivedescriptor.md): A description of a binary shader archive that you want to create.
- [MTLBinaryArchiveError.Code](../mtlbinaryarchiveerror-swift.struct/code.md): Error codes when creating binary archives of compiled shader code.
- [MTLBinaryArchiveDomain](../mtlbinaryarchivedomain.md): The domain for Metal binary archive errors.

# newBinaryArchiveWithDescriptor:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a Metal binary archive instance.

## Declaration

```objectivec
- (id<MTLBinaryArchive>) newBinaryArchiveWithDescriptor:(MTLBinaryArchiveDescriptor *) descriptor error:(NSError **) error;
```

## Parameters

- `descriptor`: An [MTLBinaryArchiveDescriptor](../mtlbinaryarchivedescriptor.md) instance.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

## Mentioned In

- [Compiling binary archives from a custom configuration script](../compiling-binary-archives-from-a-custom-configuration-script.md)
- [Creating binary archives from device-built pipeline state objects](../creating-binary-archives-from-device-built-pipeline-state-objects.md)

## See Also

### Creating binary shader archives

- [MTLBinaryArchiveDescriptor](../mtlbinaryarchivedescriptor.md): A description of a binary shader archive that you want to create.
- [MTLBinaryArchiveError](../mtlbinaryarchiveerror-swift.struct/code.md): Error codes when creating binary archives of compiled shader code.
- [MTLBinaryArchiveDomain](../mtlbinaryarchivedomain.md): The domain for Metal binary archive errors.
