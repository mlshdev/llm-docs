> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/accessibilitychildbehavior](https://developer.apple.com/documentation/swiftui/accessibilitychildbehavior)

# AccessibilityChildBehavior

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Defines the behavior for the child elements of the new parent element.

## Declaration

```swift
struct AccessibilityChildBehavior
```

## Topics

### Getting behaviors

- [combine](accessibilitychildbehavior/combine.md): Any child accessibility element’s properties are merged into the new accessibility element.
- [contain](accessibilitychildbehavior/contain.md): Any child accessibility elements become children of the new accessibility element.
- [ignore](accessibilitychildbehavior/ignore.md): Any child accessibility elements become hidden.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Creating accessible elements

- [accessibilityElement(children:)](view/accessibilityelement%28children_%29.md): Creates a new accessibility element, or modifies the [AccessibilityChildBehavior](accessibilitychildbehavior.md) of the existing accessibility element.
- [accessibilityChildren(children:)](view/accessibilitychildren%28children_%29.md): Replaces the existing accessibility element’s children with one or more new synthetic accessibility elements.
- [accessibilityRepresentation(representation:)](view/accessibilityrepresentation%28representation_%29.md): Replaces one or more accessibility elements for this view with new accessibility elements.
