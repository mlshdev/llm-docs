> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/siritipview

# SiriTipView

**Framework:** AppIntents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A SwiftUI view that displays the phrase someone uses to invoke an App Shortcut.

## Declaration

```swift
@MainActor @preconcurrency struct SiriTipView
```

<a id="overview"></a>

## Overview

Use a [SiriTipView](siritipview.md) to display the spoken phrase for the intent you specify. Include an instance of your intent when you create the view, and bind the view to a Boolean to handle the view’s presentation. The following example shows how to configure a button for a reorder intent and bind it to an `isVisible` variable.

```swift
SiriTipView(intent: ReorderIntent(), isVisible: $isVisible)
    .siriTipViewStyle(.dark)
```

Note that you must use the [AppIntent](appintent.md) in an [AppShortcut](appshortcut.md). Otherwise this will display an empty view.

## Topics

### Creating the view

- [init(intent:isVisible:)](siritipview/init%28intent_isvisible_%29.md): Creates a `SiriTipView` for the associated action that displays when the binding to a Boolean value is true .

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Tip views

- [SiriTipUIView](siritipuiview.md): A view that displays the phrase a person uses to invoke an App Shortcut.
- [SiriTipViewStyle](siritipviewstyle.md): The styles to apply to the tip views you use to display spoken phrases.
