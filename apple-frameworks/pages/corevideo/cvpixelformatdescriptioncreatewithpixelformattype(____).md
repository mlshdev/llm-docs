> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelformatdescriptioncreatewithpixelformattype(_:_:)](https://developer.apple.com/documentation/corevideo/cvpixelformatdescriptioncreatewithpixelformattype(_:_:))

# CVPixelFormatDescriptionCreateWithPixelFormatType(\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a pixel format description from a given `OSType` identifier.

## Declaration

```swift
func CVPixelFormatDescriptionCreateWithPixelFormatType(_ allocator: CFAllocator?, _ pixelFormat: OSType) -> CFDictionary?
```

## Parameters

- `allocator`: The allocator to use when creating the description. Pass `NULL` to specify the default allocator.
- `pixelFormat`: A four-character code that identifies the pixel format you want to obtain.

<a id="return-value"></a>

## Return Value

A Core Foundation dictionary containing the pixel format description. See [Pixel Format Description Keys](pixel-format-description-keys.md) for a list of keys relevant to the format description.

## See Also

### Creating Format Descriptions

- [CVPixelFormatDescriptionRegisterDescriptionWithPixelFormatType(\_:\_:)](cvpixelformatdescriptionregisterdescriptionwithpixelformattype%28____%29.md): Registers a pixel format description with Core Video.

# CVPixelFormatDescriptionCreateWithPixelFormatType (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a pixel format description from a given `OSType` identifier.

## Declaration

```objectivec
extern CFDictionaryRefCVPixelFormatDescriptionCreateWithPixelFormatType(CFAllocatorRef allocator, OSType pixelFormat);
```

## Parameters

- `allocator`: The allocator to use when creating the description. Pass `NULL` to specify the default allocator.
- `pixelFormat`: A four-character code that identifies the pixel format you want to obtain.

<a id="return-value"></a>

## Return Value

A Core Foundation dictionary containing the pixel format description. See [Pixel Format Description Keys](pixel-format-description-keys.md) for a list of keys relevant to the format description.

## See Also

### Creating Format Descriptions

- [CVPixelFormatDescriptionRegisterDescriptionWithPixelFormatType](cvpixelformatdescriptionregisterdescriptionwithpixelformattype%28____%29.md): Registers a pixel format description with Core Video.
