> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframesilocreate(allocator:fileurl:timerange:options:framesiloout:)](https://developer.apple.com/documentation/videotoolbox/vtframesilocreate(allocator:fileurl:timerange:options:framesiloout:))

# VTFrameSiloCreate(allocator:fileURL:timeRange:options:frameSiloOut:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

Creates a frame silo object using a temporary file.

## Declaration

```swift
func VTFrameSiloCreate(allocator: CFAllocator?, fileURL: CFURL?, timeRange: CMTimeRange, options: CFDictionary?, frameSiloOut: UnsafeMutablePointer<VTFrameSilo?>) -> OSStatus
```

## Parameters

- `allocator`: An allocator for the frame silo.  Pass `NULL` to use the default allocator.
- `fileURL`: The URL of the backing file for the `VTFrameSilo` object. If you pass `NULL` for `fileURL`, VideoToolbox will pick a unique temporary file name.
- `timeRange`: The valid time range for the frame silo. Must be valid for progress reporting.
- `options`: Reserved, pass `NULL`.
- `frameSiloOut`: Points to a [VTFrameSilo](vtframesilo.md) to receive the newly created object. Call `CFRelease` to release your retain on the created VTFrameSilo object when you are done with it.

<a id="Discussion"></a>

## Discussion

You can use the returned frame silo object to gather frames produced by multipass encoding.

Call [CFRelease](../corefoundation/cfrelease.md) to release the frame silo object when you are done with it.

# VTFrameSiloCreate (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

Creates a frame silo object using a temporary file.

## Declaration

```objectivec
extern OSStatus VTFrameSiloCreate(CFAllocatorRef allocator, CFURLRef fileURL, CMTimeRange timeRange, CFDictionaryRef options, VTFrameSiloRef*frameSiloOut);
```

## Parameters

- `allocator`: An allocator for the frame silo.  Pass `NULL` to use the default allocator.
- `fileURL`: The URL of the backing file for the `VTFrameSilo` object. If you pass `NULL` for `fileURL`, VideoToolbox will pick a unique temporary file name.
- `timeRange`: The valid time range for the frame silo. Must be valid for progress reporting.
- `options`: Reserved, pass `NULL`.
- `frameSiloOut`: Points to a [VTFrameSiloRef](vtframesilo.md) to receive the newly created object. Call `CFRelease` to release your retain on the created VTFrameSilo object when you are done with it.

<a id="Discussion"></a>

## Discussion

You can use the returned frame silo object to gather frames produced by multipass encoding.

Call [CFRelease](../corefoundation/cfrelease.md) to release the frame silo object when you are done with it.
