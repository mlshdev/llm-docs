> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/isusingpageviewcontroller](https://developer.apple.com/documentation/pdfkit/pdfview/isusingpageviewcontroller)

# isUsingPageViewController (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value indicating whether the scroll view is using a `UIPageViewController`.

## Declaration

```swift
var isUsingPageViewController: Bool { get }
```

## See Also

### Displaying as Book

- [displaysAsBook](displaysasbook.md): A Boolean value indicating whether the view will display the first page as a book cover (meaningful only when the document is in two-up or two-up continuous display mode).
- [usePageViewController(\_:withViewOptions:)](usepageviewcontroller%28__withviewoptions_%29.md): Changes the scroll view to use a `UIPageViewController` to layout and navigate pages.

# isUsingPageViewController (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value indicating whether the scroll view is using a `UIPageViewController`.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isUsingPageViewController;
```

## See Also

### Displaying as Book

- [displaysAsBook](displaysasbook.md): A Boolean value indicating whether the view will display the first page as a book cover (meaningful only when the document is in two-up or two-up continuous display mode).
- [usePageViewController:withViewOptions:](usepageviewcontroller%28__withviewoptions_%29.md): Changes the scroll view to use a `UIPageViewController` to layout and navigate pages.
