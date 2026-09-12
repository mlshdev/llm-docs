> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorconversioninfo/convert(width:height:to:format:from:format:options:)](https://developer.apple.com/documentation/coregraphics/cgcolorconversioninfo/convert(width:height:to:format:from:format:options:))

# convert(width:height:to:format:from:format:options:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
func convert(width: Int, height: Int, to dst_data: UnsafeMutableRawPointer, format dst_format: CGColorBufferFormat, from src_data: UnsafeRawPointer, format src_format: CGColorBufferFormat, options: CFDictionary?) -> Bool
```

# CGColorConversionInfoConvertData (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
extern bool CGColorConversionInfoConvertData(CGColorConversionInfoRef info, size_t width, size_t height, void *dst_data, CGColorBufferFormat dst_format, const void *src_data, CGColorBufferFormat src_format, CFDictionaryRef options);
```
