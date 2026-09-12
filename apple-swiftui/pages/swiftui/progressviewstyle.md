> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/progressviewstyle](https://developer.apple.com/documentation/swiftui/progressviewstyle)

# ProgressViewStyle

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A type that applies standard interaction behavior to all progress views within a view hierarchy.

## Declaration

```swift
@MainActor @preconcurrency protocol ProgressViewStyle
```

<a id="overview"></a>

## Overview

To configure the current progress view style for a view hierarchy, use the [progressViewStyle(\_:)](view/progressviewstyle%28__%29.md) modifier.

A type conforming to this protocol inherits `@preconcurrency @MainActor` isolation from the protocol if the conformance is included in the type’s base declaration:

```swift
struct MyCustomType: Transition {
    // `@preconcurrency @MainActor` isolation by default
}
```

Isolation to the main actor is the default, but it’s not required. Declare the conformance in an extension to opt out of main actor isolation:

```swift
extension MyCustomType: Transition {
    // `nonisolated` by default
}
```

## Topics

### Getting built-in progress view styles

- [automatic](progressviewstyle/automatic.md): Conforms when `Self` is `DefaultProgressViewStyle`. The default progress view style in the current context of the view being styled.
- [circular](progressviewstyle/circular.md): Conforms when `Self` is `CircularProgressViewStyle`. The style of a progress view that uses a circular gauge to indicate the partial completion of an activity.
- [linear](progressviewstyle/linear.md): Conforms when `Self` is `LinearProgressViewStyle`. A progress view that visually indicates its progress using a horizontal bar.

### Creating custom progress view styles

- [makeBody(configuration:)](progressviewstyle/makebody%28configuration_%29.md): Creates a view representing the body of a progress view.
- [ProgressViewStyle.Configuration](progressviewstyle/configuration.md): A type alias for the properties of a progress view instance.
- [Body](progressviewstyle/body.md): A view representing the body of a progress view.

### Supporting types

- [DefaultProgressViewStyle](defaultprogressviewstyle.md): The default progress view style in the current context of the view being styled.
- [CircularProgressViewStyle](circularprogressviewstyle.md): A progress view that uses a circular gauge to indicate the partial completion of an activity.
- [LinearProgressViewStyle](linearprogressviewstyle.md): A progress view that visually indicates its progress using a horizontal bar.

## Relationships

### Conforming Types

- [CircularProgressViewStyle](circularprogressviewstyle.md)
- [DefaultProgressViewStyle](defaultprogressviewstyle.md)
- [LinearProgressViewStyle](linearprogressviewstyle.md)

## See Also

### Styling indicators

- [gaugeStyle(\_:)](view/gaugestyle%28__%29.md): Sets the style for gauges within this view.
- [GaugeStyle](gaugestyle.md): Defines the implementation of all gauge instances within a view hierarchy.
- [GaugeStyleConfiguration](gaugestyleconfiguration.md): The properties of a gauge instance.
- [progressViewStyle(\_:)](view/progressviewstyle%28__%29.md): Sets the style for progress views in this view.
- [ProgressViewStyleConfiguration](progressviewstyleconfiguration.md): The properties of a progress view instance.
