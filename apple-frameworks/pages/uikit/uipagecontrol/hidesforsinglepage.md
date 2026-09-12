> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipagecontrol/hidesforsinglepage](https://developer.apple.com/documentation/uikit/uipagecontrol/hidesforsinglepage)

# hidesForSinglePage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that controls whether the page control is hidden when there is only one page.

## Declaration

```swift
var hidesForSinglePage: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Assign a value of [true](https://developer.apple.com/documentation/swift/true) to hide the page control when there is only one page; assign [false](https://developer.apple.com/documentation/swift/false) (the default) to show the page control if there is only one page.

## See Also

### Managing pages

- [currentPage](currentpage.md): The current page, shown by the page control as a white dot.
- [numberOfPages](numberofpages.md): The number of pages the receiver shows (as dots).
- [defersCurrentPageDisplay](deferscurrentpagedisplay.md): Deprecated. A Boolean value that controls when the current page is displayed.
- [updateCurrentPageDisplay()](updatecurrentpagedisplay%28%29.md): Deprecated. Updates the page indicator to the current page.

# hidesForSinglePage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that controls whether the page control is hidden when there is only one page.

## Declaration

```objectivec
@property (nonatomic) BOOL hidesForSinglePage;
```

<a id="Discussion"></a>

## Discussion

Assign a value of [true](https://developer.apple.com/documentation/swift/true) to hide the page control when there is only one page; assign [false](https://developer.apple.com/documentation/swift/false) (the default) to show the page control if there is only one page.

## See Also

### Managing pages

- [currentPage](currentpage.md): The current page, shown by the page control as a white dot.
- [numberOfPages](numberofpages.md): The number of pages the receiver shows (as dots).
- [defersCurrentPageDisplay](deferscurrentpagedisplay.md): Deprecated. A Boolean value that controls when the current page is displayed.
- [updateCurrentPageDisplay](updatecurrentpagedisplay%28%29.md): Deprecated. Updates the page indicator to the current page.
