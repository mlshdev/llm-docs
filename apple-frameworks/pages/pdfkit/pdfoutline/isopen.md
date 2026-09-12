> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfoutline/isopen](https://developer.apple.com/documentation/pdfkit/pdfoutline/isopen)

# isOpen (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the outline object is initially disclosed.

## Declaration

```swift
var isOpen: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Calling `isOpen` on an outline object that has no children always returns [false](https://developer.apple.com/documentation/swift/false). Calling `isOpen` on the root outline object always returns [true](https://developer.apple.com/documentation/swift/true).

# isOpen (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the outline object is initially disclosed.

## Declaration

```objectivec
@property (nonatomic) BOOL isOpen;
```

<a id="Discussion"></a>

## Discussion

Calling `isOpen` on an outline object that has no children always returns [false](https://developer.apple.com/documentation/swift/false). Calling `isOpen` on the root outline object always returns [true](https://developer.apple.com/documentation/swift/true).
