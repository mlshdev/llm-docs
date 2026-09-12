> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/unmountvolume(at:options:completionhandler:)](https://developer.apple.com/documentation/foundation/filemanager/unmountvolume(at:options:completionhandler:))

# unmountVolume(at:options:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Starts the process of unmounting the specified volume.

## Declaration

```swift
func unmountVolume(at url: URL, options mask: FileManager.UnmountOptions = [], completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func unmountVolume(at url: URL, options mask: FileManager.UnmountOptions = []) async throws
```

## Parameters

- `url`: A file URL specifying the volume to be unmounted.
- `mask`: A bitmask of [FileManager.UnmountOptions](unmountoptions.md) that you can use to customize the unmount operation’s behavior.
- `completionHandler`: A block executed when the unmount operation completes. The block receives an error parameter which is `nil` if unmounting was successful. Otherwise, it indicates why unmounting failed.

<a id="Discussion"></a>

## Discussion

If the volume is encrypted, it is relocked after being unmounted.

## See Also

### Unmounting volumes

- [FileManager.UnmountOptions](unmountoptions.md): Options that specify the behavior of an unmount operation.
- [NSFileManagerUnmountDissentingProcessIdentifierErrorKey](../nsfilemanagerunmountdissentingprocessidentifiererrorkey.md): The process identifier of the process that prevented a volume from unmounting.

# unmountVolumeAtURL:options:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Starts the process of unmounting the specified volume.

## Declaration

```objectivec
- (void) unmountVolumeAtURL:(NSURL *) url options:(NSFileManagerUnmountOptions) mask completionHandler:(void (^)(NSError *errorOrNil)) completionHandler;
```

## Parameters

- `url`: A file URL specifying the volume to be unmounted.
- `mask`: A bitmask of [NSFileManagerUnmountOptions](unmountoptions.md) that you can use to customize the unmount operation’s behavior.
- `completionHandler`: A block executed when the unmount operation completes. The block receives an error parameter which is `nil` if unmounting was successful. Otherwise, it indicates why unmounting failed.

<a id="Discussion"></a>

## Discussion

If the volume is encrypted, it is relocked after being unmounted.

## See Also

### Unmounting volumes

- [NSFileManagerUnmountOptions](unmountoptions.md): Options that specify the behavior of an unmount operation.
- [NSFileManagerUnmountDissentingProcessIdentifierErrorKey](../nsfilemanagerunmountdissentingprocessidentifiererrorkey.md): The process identifier of the process that prevented a volume from unmounting.
