> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfoutline/init()](https://developer.apple.com/documentation/pdfkit/pdfoutline/init())

# init() (Swift)

**Framework:** PDFKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Initializes a `PDFOutline` object.

## Declaration

```swift
init()
```

<a id="Discussion"></a>

## Discussion

If you want the `PDFOutline` object returned by this method to be the outline root, you must add additional `PDFOutline` objects to create the outline hierarchy you desire. Then, you must add the root outline object to your PDF document by passing it to the `PDFDocument` `setOutlineRoot(_:)` method.

If you want the `PDFOutline` object returned by this method to be a child of an existing outline, you must use `setLabel(_:)` to give it a label and give it either a destination or action using `setDestination(_:)` or `setAction(_:)`, respectively. In addition, you must add this outline object to the existing `PDFOutline` object as a new child, using [insertChild(\_:at:)](insertchild%28__at_%29.md)

# init (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Initializes a `PDFOutline` object.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="Discussion"></a>

## Discussion

If you want the `PDFOutline` object returned by this method to be the outline root, you must add additional `PDFOutline` objects to create the outline hierarchy you desire. Then, you must add the root outline object to your PDF document by passing it to the `PDFDocument` `setOutlineRoot(_:)` method.

If you want the `PDFOutline` object returned by this method to be a child of an existing outline, you must use `setLabel(_:)` to give it a label and give it either a destination or action using `setDestination(_:)` or `setAction(_:)`, respectively. In addition, you must add this outline object to the existing `PDFOutline` object as a new child, using [insertChild:atIndex:](insertchild%28__at_%29.md)
