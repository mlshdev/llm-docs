> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdestination/compare(_:)](https://developer.apple.com/documentation/pdfkit/pdfdestination/compare(_:))

# compare(\_:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Returns a comparison result that indicates the location of the destination in the document, relative to the current position.

## Declaration

```swift
func compare(_ destination: PDFDestination) -> ComparisonResult
```

## Parameters

- `destination`: The destination in the document to be located.

<a id="return-value"></a>

## Return Value

A comparison result, indicating the position of the passed-in destination relative to the current position.

<a id="Discussion"></a>

## Discussion

If `destination` is between the receiver’s position and the end of the document, `compare` returns `NSOrderedAscending`; if it is between the receiver’s position and the beginning of the document, `compare` returns `NSOrderedDescending`. Otherwise, if `destination` matches the receiver’s position, `compare` returns `NSOrderedSame`.

This method ignores the horizontal component of the destination point (the x value). If the destination’s vertical component (or y value) is [PDFDestination](../pdfdestination.md), `compare` treats the destination as if its y value is the top point on the destination page.

An exception is raised if `destination` does not have a page associated with it or if its page is associated with a document other than the receiver’s document.

# compare: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Returns a comparison result that indicates the location of the destination in the document, relative to the current position.

## Declaration

```objectivec
- (NSComparisonResult) compare:(PDFDestination *) destination;
```

## Parameters

- `destination`: The destination in the document to be located.

<a id="return-value"></a>

## Return Value

A comparison result, indicating the position of the passed-in destination relative to the current position.

<a id="Discussion"></a>

## Discussion

If `destination` is between the receiver’s position and the end of the document, `compare` returns `NSOrderedAscending`; if it is between the receiver’s position and the beginning of the document, `compare` returns `NSOrderedDescending`. Otherwise, if `destination` matches the receiver’s position, `compare` returns `NSOrderedSame`.

This method ignores the horizontal component of the destination point (the x value). If the destination’s vertical component (or y value) is [PDFDestination](../pdfdestination.md), `compare` treats the destination as if its y value is the top point on the destination page.

An exception is raised if `destination` does not have a page associated with it or if its page is associated with a document other than the receiver’s document.
