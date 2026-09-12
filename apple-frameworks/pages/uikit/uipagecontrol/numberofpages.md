> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipagecontrol/numberofpages](https://developer.apple.com/documentation/uikit/uipagecontrol/numberofpages)

# numberOfPages (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The number of pages the receiver shows (as dots).

## Declaration

```swift
var numberOfPages: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The value of the property is the number of pages for the page control to show as dots. The default value is 0.

## See Also

### Managing pages

- [currentPage](currentpage.md): The current page, shown by the page control as a white dot.
- [hidesForSinglePage](hidesforsinglepage.md): A Boolean value that controls whether the page control is hidden when there is only one page.
- [defersCurrentPageDisplay](deferscurrentpagedisplay.md): Deprecated. A Boolean value that controls when the current page is displayed.
- [updateCurrentPageDisplay()](updatecurrentpagedisplay%28%29.md): Deprecated. Updates the page indicator to the current page.

# numberOfPages (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The number of pages the receiver shows (as dots).

## Declaration

```objectivec
@property (nonatomic, assign) NSInteger numberOfPages;
```

<a id="Discussion"></a>

## Discussion

The value of the property is the number of pages for the page control to show as dots. The default value is 0.

## See Also

### Managing pages

- [currentPage](currentpage.md): The current page, shown by the page control as a white dot.
- [hidesForSinglePage](hidesforsinglepage.md): A Boolean value that controls whether the page control is hidden when there is only one page.
- [defersCurrentPageDisplay](deferscurrentpagedisplay.md): Deprecated. A Boolean value that controls when the current page is displayed.
- [updateCurrentPageDisplay](updatecurrentpagedisplay%28%29.md): Deprecated. Updates the page indicator to the current page.
