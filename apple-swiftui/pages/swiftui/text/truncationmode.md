> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/truncationmode](https://developer.apple.com/documentation/swiftui/text/truncationmode)

# Text.TruncationMode

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The type of truncation to apply to a line of text when it’s too long to fit in the available space.

## Declaration

```swift
enum TruncationMode
```

<a id="overview"></a>

## Overview

When a text view contains more text than it’s able to display, the view might truncate the text and place an ellipsis (…) at the truncation point. Use the [truncationMode(\_:)](../view/truncationmode%28__%29.md) modifier with one of the `TruncationMode` values to indicate which part of the text to truncate, either at the beginning, in the middle, or at the end.

## Topics

### Getting text truncation modes

- [Text.TruncationMode.head](truncationmode/head.md): Truncate at the beginning of the line.
- [Text.TruncationMode.middle](truncationmode/middle.md): Truncate in the middle of the line.
- [Text.TruncationMode.tail](truncationmode/tail.md): Truncate at the end of the line.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Fitting text into available space

- [textScale(\_:isEnabled:)](textscale%28__isenabled_%29.md): Applies a text scale to the text.
- [Text.Scale](scale.md): Defines text scales
