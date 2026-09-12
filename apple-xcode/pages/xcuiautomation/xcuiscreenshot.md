> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuiscreenshot](https://developer.apple.com/documentation/xcuiautomation/xcuiscreenshot)

# XCUIScreenshot (Swift)

**Framework:** XCUIAutomation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A captured image of a screen, app, or UI element state.

## Declaration

```swift
@MainActor class XCUIScreenshot
```

<a id="overview"></a>

## Overview

Screenshots capture the current UI state of classes that conform to the [XCUIScreenshotProviding](xcuiscreenshotproviding.md) protocol, such as [XCUIScreen](xcuiscreen.md) and [XCUIElement](xcuielement.md). Each screenshot contains an image representation of the captured UI at the point the screenshot was taken.

The following code demonstrates taking screenshots of a screen and a UI element:

```swift
func testTakeScreenshots() {

    // Take a screenshot of the current device's main screen.
    let mainScreenScreenshot = XCUIScreen.main.screenshot()
    
    // Take a screenshot of an app's first window.
    let app = XCUIApplication()
    app.launch()
    let windowScreenshot = app.windows.firstMatch.screenshot()

}
```

If you use [XCTest](../xctest.md) for your UI automation tests, you can attach a screenshot of your app’s UI to a test or activity to store it for later analysis. Create an attachment for a screenshot by calling the [XCTAttachment](../xctest/xctattachment.md) initializer [init(screenshot:)](../xctest/xctattachment/init%28screenshot_%29.md) or [init(screenshot:quality:)](../xctest/xctattachment/init%28screenshot_quality_%29.md). Add the attachment to a test or activity by calling the [XCTActivity](../xctest/xctactivity.md) method [add(\_:)](../xctest/xctactivity/add%28__%29.md). For more information, see [Adding Attachments to Tests, Activities, and Issues](../xctest/adding-attachments-to-tests-activities-and-issues.md).

## Topics

### Screenshot representations

- [image](xcuiscreenshot/image.md): A representation of the screenshot as a platform-native image object.
- [pngRepresentation](xcuiscreenshot/pngrepresentation.md): A representation of the screenshot as PNG image data.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Screenshots

- [XCUIScreen](xcuiscreen.md): A physical screen attached to a device.
- [XCUIScreenshotProviding](xcuiscreenshotproviding.md): A type that can provide a screenshot of its current UI state.

# XCUIScreenshot (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A captured image of a screen, app, or UI element state.

## Declaration

```objectivec
@interface XCUIScreenshot : NSObject
```

<a id="overview"></a>

## Overview

Screenshots capture the current UI state of classes that conform to the [XCUIScreenshotProviding](xcuiscreenshotproviding.md) protocol, such as [XCUIScreen](xcuiscreen.md) and [XCUIElement](xcuielement.md). Each screenshot contains an image representation of the captured UI at the point the screenshot was taken.

The following code demonstrates taking screenshots of a screen and a UI element:

```swift
func testTakeScreenshots() {

    // Take a screenshot of the current device's main screen.
    let mainScreenScreenshot = XCUIScreen.main.screenshot()
    
    // Take a screenshot of an app's first window.
    let app = XCUIApplication()
    app.launch()
    let windowScreenshot = app.windows.firstMatch.screenshot()

}
```

If you use [XCTest](../xctest.md) for your UI automation tests, you can attach a screenshot of your app’s UI to a test or activity to store it for later analysis. Create an attachment for a screenshot by calling the [XCTAttachment](../xctest/xctattachment.md) initializer [attachmentWithScreenshot:](../xctest/xctattachment/init%28screenshot_%29.md) or [attachmentWithScreenshot:quality:](../xctest/xctattachment/init%28screenshot_quality_%29.md). Add the attachment to a test or activity by calling the [XCTActivity](../xctest/xctactivity.md) method [addAttachment:](../xctest/xctactivity/add%28__%29.md). For more information, see [Adding Attachments to Tests, Activities, and Issues](../xctest/adding-attachments-to-tests-activities-and-issues.md).

## Topics

### Screenshot representations

- [image](xcuiscreenshot/image.md): A representation of the screenshot as a platform-native image object.
- [PNGRepresentation](xcuiscreenshot/pngrepresentation.md): A representation of the screenshot as PNG image data.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Screenshots

- [XCUIScreen](xcuiscreen.md): A physical screen attached to a device.
- [XCUIScreenshotProviding](xcuiscreenshotproviding.md): A type that can provide a screenshot of its current UI state.
