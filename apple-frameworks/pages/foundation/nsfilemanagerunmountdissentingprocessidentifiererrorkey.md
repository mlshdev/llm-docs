> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilemanagerunmountdissentingprocessidentifiererrorkey](https://developer.apple.com/documentation/foundation/nsfilemanagerunmountdissentingprocessidentifiererrorkey)

# NSFileManagerUnmountDissentingProcessIdentifierErrorKey (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** macOS 10.11+

The process identifier of the process that prevented a volume from unmounting.

## Declaration

```swift
let NSFileManagerUnmountDissentingProcessIdentifierErrorKey: String
```

<a id="Discussion"></a>

## Discussion

If [unmountVolume(at:options:completionHandler:)](filemanager/unmountvolume%28at_options_completionhandler_%29.md) fails, the error sent to its completion handler will contain a `userInfo` dictionary with this string as one of its keys. The value is the process identifier of the process that prevented the unmounting, as an [NSNumber](nsnumber.md).

## See Also

### Unmounting volumes

- [unmountVolume(at:options:completionHandler:)](filemanager/unmountvolume%28at_options_completionhandler_%29.md): Starts the process of unmounting the specified volume.
- [FileManager.UnmountOptions](filemanager/unmountoptions.md): Options that specify the behavior of an unmount operation.

# NSFileManagerUnmountDissentingProcessIdentifierErrorKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** macOS 10.11+

The process identifier of the process that prevented a volume from unmounting.

## Declaration

```objectivec
extern NSString * const NSFileManagerUnmountDissentingProcessIdentifierErrorKey;
```

<a id="Discussion"></a>

## Discussion

If [unmountVolumeAtURL:options:completionHandler:](filemanager/unmountvolume%28at_options_completionhandler_%29.md) fails, the error sent to its completion handler will contain a `userInfo` dictionary with this string as one of its keys. The value is the process identifier of the process that prevented the unmounting, as an [NSNumber](nsnumber.md).

## See Also

### Unmounting volumes

- [unmountVolumeAtURL:options:completionHandler:](filemanager/unmountvolume%28at_options_completionhandler_%29.md): Starts the process of unmounting the specified volume.
- [NSFileManagerUnmountOptions](filemanager/unmountoptions.md): Options that specify the behavior of an unmount operation.
