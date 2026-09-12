> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfoutline/label](https://developer.apple.com/documentation/pdfkit/pdfoutline/label)

# label (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the label for the outline.

## Declaration

```swift
var label: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The root outline serves only as a container for the outlines it owns; it does not have a label.

# label (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the label for the outline.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * label;
```

<a id="Discussion"></a>

## Discussion

The root outline serves only as a container for the outlines it owns; it does not have a label.
