> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuiscreenshotproviding/screenshot()](https://developer.apple.com/documentation/xcuiautomation/xcuiscreenshotproviding/screenshot())

# screenshot() (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Takes a screenshot of a screen or UI element’s current visual state.

## Declaration

```swift
func screenshot() -> XCUIScreenshot
```

<a id="Discussion"></a>

## Discussion

The output of this method is equivalent to capturing a screenshot manually on a device. For example, if you take a screenshot of a window on macOS that is covered by another window, the covering window is visible in the screenshot.

# screenshot (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Takes a screenshot of a screen or UI element’s current visual state.

## Declaration

```objectivec
- (XCUIScreenshot *) screenshot;
```

<a id="Discussion"></a>

## Discussion

The output of this method is equivalent to capturing a screenshot manually on a device. For example, if you take a screenshot of a window on macOS that is covered by another window, the covering window is visible in the screenshot.
