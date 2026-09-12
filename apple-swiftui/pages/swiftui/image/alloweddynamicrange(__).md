> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/image/alloweddynamicrange(_:)](https://developer.apple.com/documentation/swiftui/image/alloweddynamicrange(_:))

# allowedDynamicRange(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns a new image configured with the specified allowed dynamic range.

## Declaration

```swift
func allowedDynamicRange(_ range: Image.DynamicRange?) -> Image
```

## Parameters

- `range`: The requested dynamic range, or nil to restore the default allowed range.

<a id="return-value"></a>

## Return Value

A new image.

<a id="discussion"></a>

## Discussion

The following example enables HDR rendering for a specific image view, assuming that the image has an HDR (ITU-R 2100) color space and the output device supports it:

```swift
Image("hdr-asset").allowedDynamicRange(.high)
```

## See Also

### Specifying dynamic range

- [allowedDynamicRange](../environmentvalues/alloweddynamicrange.md): The allowed dynamic range for the view, or nil.
- [Image.DynamicRange](dynamicrange.md)
