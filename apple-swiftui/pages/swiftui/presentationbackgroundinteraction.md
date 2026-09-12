> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/presentationbackgroundinteraction](https://developer.apple.com/documentation/swiftui/presentationbackgroundinteraction)

# PresentationBackgroundInteraction

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

The kinds of interaction available to views behind a presentation.

## Declaration

```swift
struct PresentationBackgroundInteraction
```

<a id="overview"></a>

## Overview

Use values of this type with the [presentationBackgroundInteraction(\_:)](view/presentationbackgroundinteraction%28__%29.md) modifier.

## Topics

### Getting interaction types

- [automatic](presentationbackgroundinteraction/automatic.md): The default background interaction for the presentation.
- [disabled](presentationbackgroundinteraction/disabled.md): People can’t interact with the view behind a presentation.
- [enabled](presentationbackgroundinteraction/enabled.md): People can interact with the view behind a presentation.
- [enabled(upThrough:)](presentationbackgroundinteraction/enabled%28upthrough_%29.md): People can interact with the view behind a presentation up through a specified detent.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Styling a sheet and its background

- [presentationCornerRadius(\_:)](view/presentationcornerradius%28__%29.md): Requests that the presentation have a specific corner radius.
- [presentationBackground(\_:)](view/presentationbackground%28__%29.md): Sets the presentation background of the enclosing sheet using a shape style.
- [presentationBackground(alignment:content:)](view/presentationbackground%28alignment_content_%29.md): Sets the presentation background of the enclosing sheet to a custom view.
- [presentationBackgroundInteraction(\_:)](view/presentationbackgroundinteraction%28__%29.md): Controls whether people can interact with the view behind a presentation.
