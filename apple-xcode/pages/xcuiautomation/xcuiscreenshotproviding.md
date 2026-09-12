> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuiscreenshotproviding](https://developer.apple.com/documentation/xcuiautomation/xcuiscreenshotproviding)

# XCUIScreenshotProviding (Swift)

**Framework:** XCUIAutomation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A type that can provide a screenshot of its current UI state.

## Declaration

```swift
@MainActor protocol XCUIScreenshotProviding : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Call this protocol’s [screenshot()](xcuiscreenshotproviding/screenshot%28%29.md) method on an [XCUIScreen](xcuiscreen.md) or [XCUIElement](xcuielement.md) to capture a screenshot of its current UI state.

## Topics

### Taking a Screenshot

- [screenshot()](xcuiscreenshotproviding/screenshot%28%29.md): Takes a screenshot of a screen or UI element’s current visual state.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [XCUIApplication](xcuiapplication.md)
- [XCUIElement](xcuielement.md)
- [XCUIScreen](xcuiscreen.md)

## See Also

### Screenshots

- [XCUIScreen](xcuiscreen.md): A physical screen attached to a device.
- [XCUIScreenshot](xcuiscreenshot.md): A captured image of a screen, app, or UI element state.

# XCUIScreenshotProviding (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A type that can provide a screenshot of its current UI state.

## Declaration

```objectivec
@protocol XCUIScreenshotProviding <NSObject>
```

<a id="overview"></a>

## Overview

Call this protocol’s [screenshot](xcuiscreenshotproviding/screenshot%28%29.md) method on an [XCUIScreen](xcuiscreen.md) or [XCUIElement](xcuielement.md) to capture a screenshot of its current UI state.

## Topics

### Taking a Screenshot

- [screenshot](xcuiscreenshotproviding/screenshot%28%29.md): Takes a screenshot of a screen or UI element’s current visual state.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [XCUIElement](xcuielement.md)
- [XCUIScreen](xcuiscreen.md)

## See Also

### Screenshots

- [XCUIScreen](xcuiscreen.md): A physical screen attached to a device.
- [XCUIScreenshot](xcuiscreenshot.md): A captured image of a screen, app, or UI element state.
