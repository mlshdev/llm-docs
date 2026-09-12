> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/presentationcomponent/configuration](https://developer.apple.com/documentation/realitykit/presentationcomponent/configuration)

# PresentationComponent.Configuration

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 26.0+

A configuration that specifies the modality, appearance, and behavior of the presentation.

## Declaration

```swift
struct Configuration
```

<a id="overview"></a>

## Overview

You don’t instantiate this struct yourself. Instead, create a configuration by calling the factory methods such as `popover(arrowEdge:)`

## Topics

### Type Methods

- [popover(arrowEdge:)](configuration/popover%28arrowedge_%29.md): Return a configuration that will present a SwiftUI popover.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
