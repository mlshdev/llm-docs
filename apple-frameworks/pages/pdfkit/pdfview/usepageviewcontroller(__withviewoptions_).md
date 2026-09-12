> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/usepageviewcontroller(_:withviewoptions:)](https://developer.apple.com/documentation/pdfkit/pdfview/usepageviewcontroller(_:withviewoptions:))

# usePageViewController(\_:withViewOptions:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Changes the scroll view to use a `UIPageViewController` to layout and navigate pages.

## Declaration

```swift
func usePageViewController(_ enable: Bool, withViewOptions viewOptions: [AnyHashable : Any]? = nil)
```

## See Also

### Displaying as Book

- [displaysAsBook](displaysasbook.md): A Boolean value indicating whether the view will display the first page as a book cover (meaningful only when the document is in two-up or two-up continuous display mode).
- [isUsingPageViewController](isusingpageviewcontroller.md): A Boolean value indicating whether the scroll view is using a `UIPageViewController`.

# usePageViewController:withViewOptions: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Changes the scroll view to use a `UIPageViewController` to layout and navigate pages.

## Declaration

```objectivec
- (void) usePageViewController:(BOOL) enable withViewOptions:(NSDictionary *) viewOptions;
```

## See Also

### Displaying as Book

- [displaysAsBook](displaysasbook.md): A Boolean value indicating whether the view will display the first page as a book cover (meaningful only when the document is in two-up or two-up continuous display mode).
- [isUsingPageViewController](isusingpageviewcontroller.md): A Boolean value indicating whether the scroll view is using a `UIPageViewController`.
