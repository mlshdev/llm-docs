> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicspdfrenderercontext/pdfcontextbounds](https://developer.apple.com/documentation/uikit/uigraphicspdfrenderercontext/pdfcontextbounds)

# pdfContextBounds (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The bounds of the PDF context for the current page.

## Declaration

```swift
var pdfContextBounds: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

This value represents the bounds provided to the [beginPage(withBounds:pageInfo:)](beginpage%28withbounds_pageinfo_%29.md) method that created the current page. If the current page was created using the [beginPage()](beginpage%28%29.md) method, the bounds are equal to those provided at the initialization of the PDF renderer.

# pdfContextBounds (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The bounds of the PDF context for the current page.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect pdfContextBounds;
```

<a id="Discussion"></a>

## Discussion

This value represents the bounds provided to the [beginPageWithBounds:pageInfo:](beginpage%28withbounds_pageinfo_%29.md) method that created the current page. If the current page was created using the [beginPage](beginpage%28%29.md) method, the bounds are equal to those provided at the initialization of the PDF renderer.
