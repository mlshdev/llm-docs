> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrollbouncebehavior](https://developer.apple.com/documentation/swiftui/scrollbouncebehavior)

# ScrollBounceBehavior

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

The ways that a scrollable view can bounce when it reaches the end of its content.

## Declaration

```swift
struct ScrollBounceBehavior
```

<a id="overview"></a>

## Overview

Use the [scrollBounceBehavior(\_:axes:)](view/scrollbouncebehavior%28__axes_%29.md) view modifier to set a value of this type for a scrollable view, like a [ScrollView](scrollview.md) or a [List](list.md). The value configures the bounce behavior when people scroll to the end of the view’s content.

You can configure each scrollable axis to use a different bounce mode.

## Topics

### Bounce behaviors

- [automatic](scrollbouncebehavior/automatic.md): The automatic behavior.
- [always](scrollbouncebehavior/always.md): The scrollable view always bounces.
- [basedOnSize](scrollbouncebehavior/basedonsize.md): The scrollable view bounces when its content is large enough to require scrolling.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring scroll bounce behavior

- [scrollBounceBehavior(\_:axes:)](view/scrollbouncebehavior%28__axes_%29.md): Configures the bounce behavior of scrollable views along the specified axis.
- [horizontalScrollBounceBehavior](environmentvalues/horizontalscrollbouncebehavior.md): The scroll bounce mode for the horizontal axis of scrollable views.
- [verticalScrollBounceBehavior](environmentvalues/verticalscrollbouncebehavior.md): The scroll bounce mode for the vertical axis of scrollable views.
