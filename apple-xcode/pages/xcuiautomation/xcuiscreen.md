> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuiscreen](https://developer.apple.com/documentation/xcuiautomation/xcuiscreen)

# XCUIScreen (Swift)

**Framework:** XCUIAutomation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A physical screen attached to a device.

## Declaration

```swift
@MainActor class XCUIScreen
```

<a id="overview"></a>

## Overview

Call the [screenshot()](xcuiscreenshotproviding/screenshot%28%29.md) method on an [XCUIScreen](xcuiscreen.md) instance to capture a screenshot of its current UI state. The [XCUIScreenshotProviding](xcuiscreenshotproviding.md) protocol adds this method to [XCUIScreen](xcuiscreen.md).

You can take a screenshot of the current device’s main screen using the following code:

```swift
let screenshot = XCUIScreen.main.screenshot()
```

You can take a screenshot of every screen on the current device using the following code:

```swift
let allScreenshots = XCUIScreen.screens.map { screen in
    return screen.screenshot()
}
```

## Topics

### Device screens

- [main](xcuiscreen/main.md): The current device’s main screen.
- [screens](xcuiscreen/screens.md): The current device’s active screens.

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
- [XCUIScreenshotProviding](xcuiscreenshotproviding.md)

## See Also

### Screenshots

- [XCUIScreenshot](xcuiscreenshot.md): A captured image of a screen, app, or UI element state.
- [XCUIScreenshotProviding](xcuiscreenshotproviding.md): A type that can provide a screenshot of its current UI state.

# XCUIScreen (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A physical screen attached to a device.

## Declaration

```objectivec
@interface XCUIScreen : NSObject
```

<a id="overview"></a>

## Overview

Call the [screenshot](xcuiscreenshotproviding/screenshot%28%29.md) method on an [XCUIScreen](xcuiscreen.md) instance to capture a screenshot of its current UI state. The [XCUIScreenshotProviding](xcuiscreenshotproviding.md) protocol adds this method to [XCUIScreen](xcuiscreen.md).

You can take a screenshot of the current device’s main screen using the following code:

```swift
let screenshot = XCUIScreen.main.screenshot()
```

You can take a screenshot of every screen on the current device using the following code:

```swift
let allScreenshots = XCUIScreen.screens.map { screen in
    return screen.screenshot()
}
```

## Topics

### Device screens

- [mainScreen](xcuiscreen/main.md): The current device’s main screen.
- [screens](xcuiscreen/screens.md): The current device’s active screens.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [XCUIScreenshotProviding](xcuiscreenshotproviding.md)

## See Also

### Screenshots

- [XCUIScreenshot](xcuiscreenshot.md): A captured image of a screen, app, or UI element state.
- [XCUIScreenshotProviding](xcuiscreenshotproviding.md): A type that can provide a screenshot of its current UI state.
