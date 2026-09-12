> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtmultipassstoragecreate(allocator:fileurl:timerange:options:multipassstorageout:)](https://developer.apple.com/documentation/videotoolbox/vtmultipassstoragecreate(allocator:fileurl:timerange:options:multipassstorageout:))

# VTMultiPassStorageCreate(allocator:fileURL:timeRange:options:multiPassStorageOut:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

Creates a multipass storage object using a temporary file.

## Declaration

```swift
func VTMultiPassStorageCreate(allocator: CFAllocator?, fileURL: CFURL?, timeRange: CMTimeRange, options: CFDictionary?, multiPassStorageOut: UnsafeMutablePointer<VTMultiPassStorage?>) -> OSStatus
```

## Parameters

- `allocator`: An allocator for the session.  Pass `NULL` to use the default allocator.
- `fileURL`: Specifies where to put the backing file for the multipass storage object. If you pass `NULL` for `fileURL`, the video toolbox will pick a unique temporary file name.
- `timeRange`: Gives a hint to the multipass storage about valid time stamps for data. You can pass `kCMTimeRangeInvalid` if you do not want to provide a time range hint.
- `options`: If the file did not exist when the storage was created, the file will be deleted when the multipass storage object is finalized, unless you set the [kVTMultiPassStorageCreationOption_DoNotDelete](kvtmultipassstoragecreationoption_donotdelete.md) option to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) in the `options` dictionary.
- `multiPassStorageOut`: A pointer to the newly created multipass storage object.

<a id="Discussion"></a>

## Discussion

You can use the multipass storage object to perform multipass encoding; see [kVTCompressionPropertyKey_MultiPassStorage](kvtcompressionpropertykey_multipassstorage.md).

Call [CFRelease](../corefoundation/cfrelease.md) to release the multipass storage object when you are done with it.

# VTMultiPassStorageCreate (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

Creates a multipass storage object using a temporary file.

## Declaration

```objectivec
extern OSStatus VTMultiPassStorageCreate(CFAllocatorRef allocator, CFURLRef fileURL, CMTimeRange timeRange, CFDictionaryRef options, VTMultiPassStorageRef*multiPassStorageOut);
```

## Parameters

- `allocator`: An allocator for the session.  Pass `NULL` to use the default allocator.
- `fileURL`: Specifies where to put the backing file for the multipass storage object. If you pass `NULL` for `fileURL`, the video toolbox will pick a unique temporary file name.
- `timeRange`: Gives a hint to the multipass storage about valid time stamps for data. You can pass `kCMTimeRangeInvalid` if you do not want to provide a time range hint.
- `options`: If the file did not exist when the storage was created, the file will be deleted when the multipass storage object is finalized, unless you set the [kVTMultiPassStorageCreationOption_DoNotDelete](kvtmultipassstoragecreationoption_donotdelete.md) option to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) in the `options` dictionary.
- `multiPassStorageOut`: A pointer to the newly created multipass storage object.

<a id="Discussion"></a>

## Discussion

You can use the multipass storage object to perform multipass encoding; see [kVTCompressionPropertyKey_MultiPassStorage](kvtcompressionpropertykey_multipassstorage.md).

Call [CFRelease](../corefoundation/cfrelease.md) to release the multipass storage object when you are done with it.
