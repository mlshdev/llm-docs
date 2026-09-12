> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelformatdescriptionarraycreatewithallpixelformattypes(_:)](https://developer.apple.com/documentation/corevideo/cvpixelformatdescriptionarraycreatewithallpixelformattypes(_:))

# CVPixelFormatDescriptionArrayCreateWithAllPixelFormatTypes(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns all the pixel format descriptions known to Core Video.

## Declaration

```swift
func CVPixelFormatDescriptionArrayCreateWithAllPixelFormatTypes(_ allocator: CFAllocator?) -> CFArray?
```

## Parameters

- `allocator`: The allocator to use when creating the description. Pass `NULL` to specify the default allocator.

<a id="return-value"></a>

## Return Value

An array of Core Foundation dictionaries, each containing a pixel format description. See [Pixel Format Description Keys](pixel-format-description-keys.md) for a list of keys relevant to the format description.

# CVPixelFormatDescriptionArrayCreateWithAllPixelFormatTypes (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns all the pixel format descriptions known to Core Video.

## Declaration

```objectivec
extern CFArrayRefCVPixelFormatDescriptionArrayCreateWithAllPixelFormatTypes(CFAllocatorRef allocator);
```

## Parameters

- `allocator`: The allocator to use when creating the description. Pass `NULL` to specify the default allocator.

<a id="return-value"></a>

## Return Value

An array of Core Foundation dictionaries, each containing a pixel format description. See [Pixel Format Description Keys](pixel-format-description-keys.md) for a list of keys relevant to the format description.
