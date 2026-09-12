> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrollinputkind](https://developer.apple.com/documentation/swiftui/scrollinputkind)

# ScrollInputKind

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Inputs used to scroll views.

## Declaration

```swift
struct ScrollInputKind
```

## Topics

### Type Properties

- [handGestureShortcut](scrollinputkind/handgestureshortcut.md): A finger or wrist movement that the user can perform in order to scroll a view.
- [look](scrollinputkind/look.md): On visionOS, by looking at the edge of a scroll view the content can automatically scroll. The axes will be determined automatically.

### Type Methods

- [look(axes:)](scrollinputkind/look%28axes_%29.md): On visionOS, by looking at the edge of a scroll view the content can automatically scroll. This contructor method takes a set of the scrollable axes.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing scrolling for different inputs

- [scrollInputBehavior(\_:for:)](view/scrollinputbehavior%28__for_%29.md): Enables or disables scrolling in scrollable views when using particular inputs.
- [ScrollInputBehavior](scrollinputbehavior.md): A type that defines whether input should scroll a view.
