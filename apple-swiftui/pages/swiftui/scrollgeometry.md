> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrollgeometry](https://developer.apple.com/documentation/swiftui/scrollgeometry)

# ScrollGeometry

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A type that defines the geometry of a scroll view.

## Declaration

```swift
struct ScrollGeometry
```

<a id="overview"></a>

## Overview

SwiftUI provides you values of this type when using modifiers like `View/onScrollGeometryChange(_:action:)` or [onScrollPhaseChange(\_:)](view/onscrollphasechange%28__%29.md).

## Topics

### Initializers

- [init(contentOffset:contentSize:contentInsets:containerSize:)](scrollgeometry/init%28contentoffset_contentsize_contentinsets_containersize_%29.md): Creates a scroll geometry.

### Instance Properties

- [bounds](scrollgeometry/bounds.md): The bounds rect of the scroll view.
- [containerSize](scrollgeometry/containersize.md): The size of the container of the scroll view.
- [contentInsets](scrollgeometry/contentinsets.md): The content insets of the scroll view.
- [contentOffset](scrollgeometry/contentoffset.md): The content offset of the scroll view.
- [contentSize](scrollgeometry/contentsize.md): The size of the content of the scroll view.
- [visibleRect](scrollgeometry/visiblerect.md): The visible rect of the scroll view.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responding to scroll view changes

- [onScrollGeometryChange(for:of:action:)](view/onscrollgeometrychange%28for_of_action_%29.md): Adds an action to be performed when a value, created from a scroll geometry, changes.
- [onScrollTargetVisibilityChange(idType:threshold:\_:)](view/onscrolltargetvisibilitychange%28idtype_threshold___%29.md): Adds an action to be called with information about what views would be considered visible.
- [onScrollVisibilityChange(threshold:\_:)](view/onscrollvisibilitychange%28threshold___%29.md): Adds an action to be called when the view crosses the threshold to be considered on/off screen.
- [onScrollPhaseChange(\_:)](view/onscrollphasechange%28__%29.md): Adds an action to perform when the scroll phase of the first scroll view in the hierarchy changes.
- [ScrollPhase](scrollphase.md): A type that describes the state of a scroll gesture of a scrollable view like a scroll view.
- [ScrollPhaseChangeContext](scrollphasechangecontext.md): A type that provides you with more content when the phase of a scroll view changes.
