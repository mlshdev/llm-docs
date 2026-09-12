> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelformattypecopyfourcharcodestring(_:)](https://developer.apple.com/documentation/corevideo/cvpixelformattypecopyfourcharcodestring(_:))

# CVPixelFormatTypeCopyFourCharCodeString(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
func CVPixelFormatTypeCopyFourCharCodeString(_ pixelFormat: OSType) -> CFString
```

## Parameters

- `pixelFormat`: The pixel format to convert

<a id="return-value"></a>

## Return Value

A string with a user displayable conversion of a pixel format.

<a id="discussion"></a>

## Discussion

Creates a string with a formatted representation of a pixel format

# CVPixelFormatTypeCopyFourCharCodeString (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
extern CFStringRefCVPixelFormatTypeCopyFourCharCodeString(OSType pixelFormat);
```

## Parameters

- `pixelFormat`: The pixel format to convert

<a id="return-value"></a>

## Return Value

A string with a user displayable conversion of a pixel format.

<a id="discussion"></a>

## Discussion

Creates a string with a formatted representation of a pixel format
