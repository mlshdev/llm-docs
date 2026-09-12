> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/contentshapekinds](https://developer.apple.com/documentation/swiftui/contentshapekinds)

# ContentShapeKinds

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A kind for the content shape of a view.

## Declaration

```swift
struct ContentShapeKinds
```

<a id="overview"></a>

## Overview

The kind is used by the system to influence various effects, hit-testing, and more.

## Topics

### Getting shape kinds

- [interaction](contentshapekinds/interaction.md): The kind for hit-testing and accessibility.
- [dragPreview](contentshapekinds/dragpreview.md): The kind for drag and drop previews.
- [contextMenuPreview](contentshapekinds/contextmenupreview.md): The kind for context menu previews.
- [focusEffect](contentshapekinds/focuseffect.md): The kind for the focus effect.
- [hoverEffect](contentshapekinds/hovereffect.md): The kind for hover effects.
- [accessibility](contentshapekinds/accessibility.md): The kind for accessibility visuals and sorting.

### Creating a set of options

- [init(rawValue:)](contentshapekinds/init%28rawvalue_%29.md): Creates a content shape kind.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Controlling hit testing

- [allowsTightening(\_:)](view/allowstightening%28__%29.md): Sets whether text in this view can compress the space between characters when necessary to fit text in a line.
- [contentShape(\_:eoFill:)](view/contentshape%28__eofill_%29.md): Defines the content shape for hit testing.
- [contentShape(\_:\_:eoFill:)](view/contentshape%28____eofill_%29.md): Sets the content shape for this view.
