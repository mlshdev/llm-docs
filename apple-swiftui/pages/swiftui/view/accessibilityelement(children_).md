> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/accessibilityelement(children:)](https://developer.apple.com/documentation/swiftui/view/accessibilityelement(children:))

# accessibilityElement(children:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new accessibility element, or modifies the [AccessibilityChildBehavior](../accessibilitychildbehavior.md) of the existing accessibility element.

## Declaration

```swift
nonisolated func accessibilityElement(children: AccessibilityChildBehavior = .ignore) -> some View

```

## Parameters

- `children`: The behavior to use when creating or transforming an accessibility element. The default is [ignore](../accessibilitychildbehavior/ignore.md)

<a id="discussion"></a>

## Discussion

See also:

- [ignore](../accessibilitychildbehavior/ignore.md)
- [combine](../accessibilitychildbehavior/combine.md)
- [contain](../accessibilitychildbehavior/contain.md)

## See Also

### Creating accessible elements

- [accessibilityChildren(children:)](accessibilitychildren%28children_%29.md): Replaces the existing accessibility element’s children with one or more new synthetic accessibility elements.
- [accessibilityRepresentation(representation:)](accessibilityrepresentation%28representation_%29.md): Replaces one or more accessibility elements for this view with new accessibility elements.
- [AccessibilityChildBehavior](../accessibilitychildbehavior.md): Defines the behavior for the child elements of the new parent element.
