> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/kcvimagebufferfielddetailtemporaltopfirst](https://developer.apple.com/documentation/corevideo/kcvimagebufferfielddetailtemporaltopfirst)

# kCVImageBufferFieldDetailTemporalTopFirst (Swift)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key to the temporal top first detail field of the image buffer.

## Declaration

```swift
let kCVImageBufferFieldDetailTemporalTopFirst: CFString
```

<a id="Discussion"></a>

## Discussion

The temporal top first detail field value is of type [CFString](../corefoundation/cfstring.md). The image buffer contains complete fields in alternating order. The top, odd-numbered, fields contain image data captured at an earlier time than bottom, even-numbered, fields.

## See Also

### Constants

- [kCVImageBufferFieldDetailTemporalBottomFirst](kcvimagebufferfielddetailtemporalbottomfirst.md): A key to the temporal bottom first detail field of the image buffer.
- [kCVImageBufferFieldDetailSpatialFirstLineEarly](kcvimagebufferfielddetailspatialfirstlineearly.md): A key to the spatial first line early detail field of the image buffer.
- [kCVImageBufferFieldDetailSpatialFirstLineLate](kcvimagebufferfielddetailspatialfirstlinelate.md): A key to the spatial first line late detail field of the image buffer.

# kCVImageBufferFieldDetailTemporalTopFirst (Objective-C)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key to the temporal top first detail field of the image buffer.

## Declaration

```objectivec
extern CFStringRef const kCVImageBufferFieldDetailTemporalTopFirst;
```

<a id="Discussion"></a>

## Discussion

The temporal top first detail field value is of type [CFStringRef](../corefoundation/cfstring.md). The image buffer contains complete fields in alternating order. The top, odd-numbered, fields contain image data captured at an earlier time than bottom, even-numbered, fields.

## See Also

### Constants

- [kCVImageBufferFieldDetailTemporalBottomFirst](kcvimagebufferfielddetailtemporalbottomfirst.md): A key to the temporal bottom first detail field of the image buffer.
- [kCVImageBufferFieldDetailSpatialFirstLineEarly](kcvimagebufferfielddetailspatialfirstlineearly.md): A key to the spatial first line early detail field of the image buffer.
- [kCVImageBufferFieldDetailSpatialFirstLineLate](kcvimagebufferfielddetailspatialfirstlinelate.md): A key to the spatial first line late detail field of the image buffer.
