> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmformatdescriptioncreate(allocator:mediatype:mediasubtype:extensions:formatdescriptionout:)](https://developer.apple.com/documentation/coremedia/cmformatdescriptioncreate(allocator:mediatype:mediasubtype:extensions:formatdescriptionout:))

# CMFormatDescriptionCreate(allocator:mediaType:mediaSubType:extensions:formatDescriptionOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a format description for general use.

## Declaration

```swift
func CMFormatDescriptionCreate(allocator: CFAllocator?, mediaType: CMMediaType, mediaSubType: FourCharCode, extensions: CFDictionary?, formatDescriptionOut: UnsafeMutablePointer<CMFormatDescription?>) -> OSStatus
```

## Parameters

- `allocator`: The allocator to use for creating the `CMFormatDescription`.
- `mediaType`: The type that identifies the media.
- `mediaSubType`: The type that identifies the subtype of the media.
- `extensions`: A dictionary of extensions to attach to the description. May be `NULL`.
- `formatDescriptionOut`: Receives the `CMFormatDescription` the function creates.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

The system uses the default allocator if you don’t specify one. Use this to create any `CMFormatDescription` that is composed solely of extensions, and for which `CFEqual`() of the extensions dictionaries is a valid test for Format Description equality.

Don’t call this method for media types that have specific create functions, such as [CMAudioFormatDescriptionCreate(allocator:asbd:layoutSize:layout:magicCookieSize:magicCookie:extensions:formatDescriptionOut:)](cmaudioformatdescriptioncreate%28allocator_asbd_layoutsize_layout_magiccookiesize_magiccookie_extensions_formatdescriptionout_%29.md) and [CMVideoFormatDescriptionCreate(allocator:codecType:width:height:extensions:formatDescriptionOut:)](cmvideoformatdescriptioncreate%28allocator_codectype_width_height_extensions_formatdescriptionout_%29.md).

# CMFormatDescriptionCreate (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a format description for general use.

## Declaration

```objectivec
extern OSStatus CMFormatDescriptionCreate(CFAllocatorRef allocator, CMMediaType mediaType, FourCharCode mediaSubType, CFDictionaryRef extensions, CMFormatDescriptionRef*formatDescriptionOut);
```

## Parameters

- `allocator`: The allocator to use for creating the `CMFormatDescription`.
- `mediaType`: The type that identifies the media.
- `mediaSubType`: The type that identifies the subtype of the media.
- `extensions`: A dictionary of extensions to attach to the description. May be `NULL`.
- `formatDescriptionOut`: Receives the `CMFormatDescription` the function creates.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

The system uses the default allocator if you don’t specify one. Use this to create any `CMFormatDescription` that is composed solely of extensions, and for which `CFEqual`() of the extensions dictionaries is a valid test for Format Description equality.

Don’t call this method for media types that have specific create functions, such as [CMAudioFormatDescriptionCreate](cmaudioformatdescriptioncreate%28allocator_asbd_layoutsize_layout_magiccookiesize_magiccookie_extensions_formatdescriptionout_%29.md) and [CMVideoFormatDescriptionCreate](cmvideoformatdescriptioncreate%28allocator_codectype_width_height_extensions_formatdescriptionout_%29.md).
