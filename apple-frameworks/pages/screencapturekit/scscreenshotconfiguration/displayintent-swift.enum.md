> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scscreenshotconfiguration/displayintent-swift.enum](https://developer.apple.com/documentation/screencapturekit/scscreenshotconfiguration/displayintent-swift.enum)

# SCScreenshotConfiguration.DisplayIntent (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

A value that specifies the type of display a screenshot rendering optimizes for.

## Declaration

```swift
enum DisplayIntent
```

<a id="overview"></a>

## Overview

Specifying local or canonical display attributes optimizes output for presentation on either the capture display or any high dynamic range display.

## Topics

### Enumeration Cases

- [SCScreenshotConfiguration.DisplayIntent.canonical](displayintent-swift.enum/canonical.md): Specifies that the screenshot renders with canonical display attributes optimizing output for presentation on a high dynamic range display.
- [SCScreenshotConfiguration.DisplayIntent.local](displayintent-swift.enum/local.md): Specifies that the screenshot renders with local display attributes optimizing output for presentation on the capture display.

### Initializers

- [init(rawValue:)](displayintent-swift.enum/init%28rawvalue_%29.md): Creates a display intent object from the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SCScreenshotDisplayIntent (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A value that specifies the type of display a screenshot rendering optimizes for.

## Declaration

```objectivec
enum SCScreenshotDisplayIntent : NSInteger;
```

<a id="overview"></a>

## Overview

Specifying local or canonical display attributes optimizes output for presentation on either the capture display or any high dynamic range display.

## Topics

### Enumeration Cases

- [SCScreenshotDisplayIntentCanonical](displayintent-swift.enum/canonical.md): Specifies that the screenshot renders with canonical display attributes optimizing output for presentation on a high dynamic range display.
- [SCScreenshotDisplayIntentLocal](displayintent-swift.enum/local.md): Specifies that the screenshot renders with local display attributes optimizing output for presentation on the capture display.
