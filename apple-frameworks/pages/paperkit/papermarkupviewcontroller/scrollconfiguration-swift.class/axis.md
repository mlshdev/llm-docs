> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/scrollconfiguration-swift.class/axis](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/scrollconfiguration-swift.class/axis)

# PaperMarkupViewController.ScrollConfiguration.Axis

**Framework:** PaperKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The axes you use to specify scroll view behavior.

## Declaration

```swift
struct Axis
```

<a id="overview"></a>

## Overview

This struct mirrors UIKit’s `UIAxis` type for cross-platform compatibility.

## Topics

### Choosing an axis

- [horizontal](axis/horizontal.md): The horizontal axis.
- [vertical](axis/vertical.md): The vertical axis.
- [both](axis/both.md): The combined horizontal and vertical axes.

### Initializers

- [init(rawValue:)](axis/init%28rawvalue_%29.md): Creates a new set of axes from the given raw value.

### Instance Properties

- [rawValue](axis/rawvalue.md): The raw bitmask that represents this set of axes.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Configuring scroll indicators

- [visibleScrollIndicators](visiblescrollindicators.md): The axes for which scroll indicators are visible.
