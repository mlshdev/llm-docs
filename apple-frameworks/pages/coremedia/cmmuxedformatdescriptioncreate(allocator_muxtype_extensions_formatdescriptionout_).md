> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmuxedformatdescriptioncreate(allocator:muxtype:extensions:formatdescriptionout:)](https://developer.apple.com/documentation/coremedia/cmmuxedformatdescriptioncreate(allocator:muxtype:extensions:formatdescriptionout:))

# CMMuxedFormatDescriptionCreate(allocator:muxType:extensions:formatDescriptionOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a format description for a muxed media stream.

## Declaration

```swift
func CMMuxedFormatDescriptionCreate(allocator: CFAllocator?, muxType: CMMuxedStreamType, extensions: CFDictionary?, formatDescriptionOut: UnsafeMutablePointer<CMMuxedFormatDescription?>) -> OSStatus
```

## Parameters

- `allocator`: `CFAllocator` to be used. Pass `NULL` or `kCFAllocatorDefault` to use the default allocator.
- `muxType`: Type of the muxed stream (e.g. `kCMMuxedStreamType_MPEG2Transport` for MPEG-2 transport stream). This is the media subtype, and will be returned if you subsequently call `CMFormatDescriptionGetMediaSubType` (or `CMMuxedFormatDescriptionGetStreamType`).
- `extensions`: Dictionary of extension key/value pairs. Keys are always of type `CFString`. Values are always property list objects (i.e.. `CFData`, `CFString`, `CFArray`, `CFDictionary`, `CFDate`, `CFBoolean`, or `CFNumber`). Can be `NULL`.
- `formatDescriptionOut`: On output, returns newly created muxed `CMFormatDescription`

<a id="return-value"></a>

## Return Value

A result code. Returns `noErr` if successful.

<a id="Discussion"></a>

## Discussion

A muxed format description does not know the formats of the sub-streams within the muxed stream. That information will only be discoverable by the demuxer software (or other software which understands the details of the muxed bitstream) which will need to produce separate format descriptions for each of its output streams. The caller owns the returned `CMFormatDescription`, and must release it when done with it. All input parameters are copied (the extensions are deep-copied).  The caller can deallocate them or re-use them after making this call.

# CMMuxedFormatDescriptionCreate (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a format description for a muxed media stream.

## Declaration

```objectivec
extern OSStatus CMMuxedFormatDescriptionCreate(CFAllocatorRef allocator, CMMuxedStreamType muxType, CFDictionaryRef extensions, CMMuxedFormatDescriptionRef*formatDescriptionOut);
```

## Parameters

- `allocator`: `CFAllocator` to be used. Pass `NULL` or `kCFAllocatorDefault` to use the default allocator.
- `muxType`: Type of the muxed stream (e.g. `kCMMuxedStreamType_MPEG2Transport` for MPEG-2 transport stream). This is the media subtype, and will be returned if you subsequently call `CMFormatDescriptionGetMediaSubType` (or `CMMuxedFormatDescriptionGetStreamType`).
- `extensions`: Dictionary of extension key/value pairs. Keys are always of type `CFString`. Values are always property list objects (i.e.. `CFData`, `CFString`, `CFArray`, `CFDictionary`, `CFDate`, `CFBoolean`, or `CFNumber`). Can be `NULL`.
- `formatDescriptionOut`: On output, returns newly created muxed `CMFormatDescription`

<a id="return-value"></a>

## Return Value

A result code. Returns `noErr` if successful.

<a id="Discussion"></a>

## Discussion

A muxed format description does not know the formats of the sub-streams within the muxed stream. That information will only be discoverable by the demuxer software (or other software which understands the details of the muxed bitstream) which will need to produce separate format descriptions for each of its output streams. The caller owns the returned `CMFormatDescription`, and must release it when done with it. All input parameters are copied (the extensions are deep-copied).  The caller can deallocate them or re-use them after making this call.
