> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipagecontrol/updatecurrentpagedisplay()](https://developer.apple.com/documentation/uikit/uipagecontrol/updatecurrentpagedisplay())

# updateCurrentPageDisplay() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 14.0) · iPadOS 2.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · tvOS  (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Updates the page indicator to the current page.

> The system no longer supports this method.

## Declaration

```swift
func updateCurrentPageDisplay()
```

<a id="Discussion"></a>

## Discussion

This method updates the page indicator so that the current page (the white dot) matches the value returned from [currentPage](currentpage.md). The class ignores this method if the value of [defersCurrentPageDisplay](deferscurrentpagedisplay.md) is [false](https://developer.apple.com/documentation/swift/false). Setting the [currentPage](currentpage.md) value directly updates the indicator immediately.

## See Also

### Managing pages

- [currentPage](currentpage.md): The current page, shown by the page control as a white dot.
- [numberOfPages](numberofpages.md): The number of pages the receiver shows (as dots).
- [hidesForSinglePage](hidesforsinglepage.md): A Boolean value that controls whether the page control is hidden when there is only one page.
- [defersCurrentPageDisplay](deferscurrentpagedisplay.md): Deprecated. A Boolean value that controls when the current page is displayed.

# updateCurrentPageDisplay (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 14.0) · iPadOS 2.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · tvOS  (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Updates the page indicator to the current page.

> The system no longer supports this method.

## Declaration

```objectivec
- (void) updateCurrentPageDisplay;
```

<a id="Discussion"></a>

## Discussion

This method updates the page indicator so that the current page (the white dot) matches the value returned from [currentPage](currentpage.md). The class ignores this method if the value of [defersCurrentPageDisplay](deferscurrentpagedisplay.md) is [false](https://developer.apple.com/documentation/swift/false). Setting the [currentPage](currentpage.md) value directly updates the indicator immediately.

## See Also

### Managing pages

- [currentPage](currentpage.md): The current page, shown by the page control as a white dot.
- [numberOfPages](numberofpages.md): The number of pages the receiver shows (as dots).
- [hidesForSinglePage](hidesforsinglepage.md): A Boolean value that controls whether the page control is hidden when there is only one page.
- [defersCurrentPageDisplay](deferscurrentpagedisplay.md): Deprecated. A Boolean value that controls when the current page is displayed.
