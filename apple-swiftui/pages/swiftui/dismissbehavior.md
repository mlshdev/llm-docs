> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dismissbehavior](https://developer.apple.com/documentation/swiftui/dismissbehavior)

# DismissBehavior

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Programmatic window dismissal behaviors.

## Declaration

```swift
struct DismissBehavior
```

<a id="overview"></a>

## Overview

Use values of this type to control window dismissal during the current transaction.

For example, to dismiss windows showing a modal presentation that would otherwise prohibit dismissal, use the [destructive](dismissbehavior/destructive.md) behavior:

```swift
struct DismissWindowButton: View {
    @Environment(\.dismissWindow) private var dismissWindow

    var body: some View {
        Button("Close Auxiliary Window") {
            withTransaction(\.dismissBehavior, .destructive) {
                dismissWindow(id: "auxiliary")
            }
        }
    }
}
```

## Topics

### Getting behaviors

- [destructive](dismissbehavior/destructive.md): The destructive dismiss behavior.
- [interactive](dismissbehavior/interactive.md): The interactive dismiss behavior.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Closing windows

- [dismissWindow](environmentvalues/dismisswindow.md): A window dismissal action stored in a view’s environment.
- [DismissWindowAction](dismisswindowaction.md): An action that dismisses a window associated to a particular scene.
- [dismiss](environmentvalues/dismiss.md): An action that dismisses the current presentation.
- [DismissAction](dismissaction.md): An action that dismisses a presentation.
