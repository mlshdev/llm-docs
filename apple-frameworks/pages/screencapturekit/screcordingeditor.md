> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/screcordingeditor](https://developer.apple.com/documentation/screencapturekit/screcordingeditor)

# SCRecordingEditor (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
class SCRecordingEditor
```

<a id="overview"></a>

## Overview

Presents a system-owned preview UI for a completed recording via SCStream.

SCRecordingEditor owns the full presentation lifecycle of the preview UI. Callers provide an optional anchor window (macOS) or scene; if none is provided, the foreground window/scene is discovered automatically.

## Topics

### Initializers

- [init(URL:)](screcordingeditor/init%28url_%29-1k2cv.md)
- [init(url:)](screcordingeditor/init%28url_%29-ead5.md)

### Instance Properties

- [delegate](screcordingeditor/delegate.md)

### Instance Methods

- [present(from:completionHandler:)](screcordingeditor/present%28from_completionhandler_%29-1nvxe.md)
- [present(from:completionHandler:)](screcordingeditor/present%28from_completionhandler_%29-2atpt.md)
- [present(from:mode:completionHandler:)](screcordingeditor/present%28from_mode_completionhandler_%29.md)

### Enumerations

- [SCRecordingEditor.Mode](screcordingeditor/mode.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# SCRecordingEditor (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
@interface SCRecordingEditor : NSObject
```

<a id="overview"></a>

## Overview

Presents a system-owned preview UI for a completed recording via SCStream.

SCRecordingEditor owns the full presentation lifecycle of the preview UI. Callers provide an optional anchor window (macOS) or scene; if none is provided, the foreground window/scene is discovered automatically.

## Topics

### Instance Properties

- [delegate](screcordingeditor/delegate.md)

### Instance Methods

- [initWithURL:](screcordingeditor/init%28url_%29-ead5.md)
- [presentFromWindow:completionHandler:](screcordingeditor/present%28from_completionhandler_%29-1nvxe.md)
- [presentFromWindowScene:completionHandler:](screcordingeditor/present%28from_completionhandler_%29-2atpt.md)
- [presentFromWindowScene:mode:completionHandler:](screcordingeditor/present%28from_mode_completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
