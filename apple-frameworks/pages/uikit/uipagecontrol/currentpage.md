> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipagecontrol/currentpage](https://developer.apple.com/documentation/uikit/uipagecontrol/currentpage)

# currentPage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The current page, shown by the page control as a white dot.

## Declaration

```swift
var currentPage: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The property value is an integer specifying the current page shown minus one; thus a value of zero (the default) indicates the first page. A page control shows the current page as a white dot. Values outside the possible range are pinned to either 0 or [numberOfPages](numberofpages.md) minus 1.

## See Also

### Managing pages

- [numberOfPages](numberofpages.md): The number of pages the receiver shows (as dots).
- [hidesForSinglePage](hidesforsinglepage.md): A Boolean value that controls whether the page control is hidden when there is only one page.
- [defersCurrentPageDisplay](deferscurrentpagedisplay.md): Deprecated. A Boolean value that controls when the current page is displayed.
- [updateCurrentPageDisplay()](updatecurrentpagedisplay%28%29.md): Deprecated. Updates the page indicator to the current page.

# currentPage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The current page, shown by the page control as a white dot.

## Declaration

```objectivec
@property (nonatomic, assign) NSInteger currentPage;
```

<a id="Discussion"></a>

## Discussion

The property value is an integer specifying the current page shown minus one; thus a value of zero (the default) indicates the first page. A page control shows the current page as a white dot. Values outside the possible range are pinned to either 0 or [numberOfPages](numberofpages.md) minus 1.

## See Also

### Managing pages

- [numberOfPages](numberofpages.md): The number of pages the receiver shows (as dots).
- [hidesForSinglePage](hidesforsinglepage.md): A Boolean value that controls whether the page control is hidden when there is only one page.
- [defersCurrentPageDisplay](deferscurrentpagedisplay.md): Deprecated. A Boolean value that controls when the current page is displayed.
- [updateCurrentPageDisplay](updatecurrentpagedisplay%28%29.md): Deprecated. Updates the page indicator to the current page.
