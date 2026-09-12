> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipagecontrol/deferscurrentpagedisplay](https://developer.apple.com/documentation/uikit/uipagecontrol/deferscurrentpagedisplay)

# defersCurrentPageDisplay (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 14.0) · iPadOS 2.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · tvOS  (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

A Boolean value that controls when the current page is displayed.

> The system no longer supports this property.

## Declaration

```swift
var defersCurrentPageDisplay: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set the value of this property to [true](https://developer.apple.com/documentation/swift/true) so that, when the user taps the control to go to a new page, the class defers updating the page control until it calls [updateCurrentPageDisplay()](updatecurrentpagedisplay%28%29.md). Set the value to [false](https://developer.apple.com/documentation/swift/false) (the default) to have the page control updated immediately.

## See Also

### Managing pages

- [currentPage](currentpage.md): The current page, shown by the page control as a white dot.
- [numberOfPages](numberofpages.md): The number of pages the receiver shows (as dots).
- [hidesForSinglePage](hidesforsinglepage.md): A Boolean value that controls whether the page control is hidden when there is only one page.
- [updateCurrentPageDisplay()](updatecurrentpagedisplay%28%29.md): Deprecated. Updates the page indicator to the current page.

# defersCurrentPageDisplay (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 14.0) · iPadOS 2.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · tvOS  (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

A Boolean value that controls when the current page is displayed.

> The system no longer supports this property.

## Declaration

```objectivec
@property (nonatomic) BOOL defersCurrentPageDisplay;
```

<a id="Discussion"></a>

## Discussion

Set the value of this property to [true](https://developer.apple.com/documentation/swift/true) so that, when the user taps the control to go to a new page, the class defers updating the page control until it calls [updateCurrentPageDisplay](updatecurrentpagedisplay%28%29.md). Set the value to [false](https://developer.apple.com/documentation/swift/false) (the default) to have the page control updated immediately.

## See Also

### Managing pages

- [currentPage](currentpage.md): The current page, shown by the page control as a white dot.
- [numberOfPages](numberofpages.md): The number of pages the receiver shows (as dots).
- [hidesForSinglePage](hidesforsinglepage.md): A Boolean value that controls whether the page control is hidden when there is only one page.
- [updateCurrentPageDisplay](updatecurrentpagedisplay%28%29.md): Deprecated. Updates the page indicator to the current page.
