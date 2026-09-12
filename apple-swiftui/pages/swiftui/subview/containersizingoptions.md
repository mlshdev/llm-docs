> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/subview/containersizingoptions](https://developer.apple.com/documentation/swiftui/subview/containersizingoptions)

# Subview.ContainerSizingOptions

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Options on how all subviews should be sized when in a container.

## Declaration

```swift
enum ContainerSizingOptions
```

<a id="overview"></a>

## Overview

> **Note**

> This option is not about the sizing considerations of a view being measured individually. Instead, this option describes the sizing characteristics of a group of subviews altogether, which also would only have actual effects when used in a container.

## Topics

### Enumeration Cases

- [Subview.ContainerSizingOptions.uniform(axis:)](containersizingoptions/uniform%28axis_%29.md): Subviews will share the same size.
- [Subview.ContainerSizingOptions.variable](containersizingoptions/variable.md): Subviews will be sized individually.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
