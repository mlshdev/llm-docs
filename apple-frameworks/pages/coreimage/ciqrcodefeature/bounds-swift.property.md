> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciqrcodefeature/bounds-swift.property](https://developer.apple.com/documentation/coreimage/ciqrcodefeature/bounds-swift.property)

# bounds (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+

A rectangle that indicates the position and extent of the QR code feature in image coordinates.

## Declaration

```swift
var bounds: CGRect { get }
```

<a id="discussion"></a>

## Discussion

This property identifies the rectangular region of the image containing the detected QR code, not necessarily the shape of the QR code. A detected feature is square in space, but may appear as a four-sided polygon in the image. Use the properties listed in `CIQRCodeFeature` to find the corners of the QR code as it appears in perspective.

# bounds (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+

A rectangle that indicates the position and extent of the QR code feature in image coordinates.

## Declaration

```objectivec
@property (readonly) CGRect bounds;
```

<a id="discussion"></a>

## Discussion

This property identifies the rectangular region of the image containing the detected QR code, not necessarily the shape of the QR code. A detected feature is square in space, but may appear as a four-sided polygon in the image. Use the properties listed in `CIQRCodeFeature` to find the corners of the QR code as it appears in perspective.
