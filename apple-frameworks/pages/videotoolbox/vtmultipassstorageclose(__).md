> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtmultipassstorageclose(_:)](https://developer.apple.com/documentation/videotoolbox/vtmultipassstorageclose(_:))

# VTMultiPassStorageClose(\_:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

Ensures that any pending data is written to the multipass storage file and closes the file.

## Declaration

```swift
func VTMultiPassStorageClose(_ multiPassStorage: VTMultiPassStorage) -> OSStatus
```

## Parameters

- `multiPassStorage`: The multipass storage object to close.

<a id="Discussion"></a>

## Discussion

After this function is called, all functions on the multipass storage object fail. It’s still necessary to release the object by calling [CFRelease](../corefoundation/cfrelease.md).

# VTMultiPassStorageClose (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

Ensures that any pending data is written to the multipass storage file and closes the file.

## Declaration

```objectivec
extern OSStatus VTMultiPassStorageClose(VTMultiPassStorageRef multiPassStorage);
```

## Parameters

- `multiPassStorage`: The multipass storage object to close.

<a id="Discussion"></a>

## Discussion

After this function is called, all functions on the multipass storage object fail. It’s still necessary to release the object by calling [CFRelease](../corefoundation/cfrelease.md).
