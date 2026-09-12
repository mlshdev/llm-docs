> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/facegroupanalyzer/state-swift.enum](https://developer.apple.com/documentation/mediaintelligence/facegroupanalyzer/state-swift.enum)

# FaceGroupAnalyzer.State

**Framework:** Media Intelligence  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The current processing state of a face group analyzer.

## Declaration

```swift
enum State
```

<a id="overview"></a>

## Overview

This type describes whether the analyzer’s face cluster assignments are up to date. Read [state](state-swift.property.md) to check the current value before deciding whether to call [update(subprogress:)](update%28subprogress_%29.md).

## Topics

### States

- [FaceGroupAnalyzer.State.ready](state-swift.enum/ready.md): A state that indicates all faces have up-to-date cluster assignments.
- [FaceGroupAnalyzer.State.stale](state-swift.enum/stale.md): A state that indicates new faces need cluster assignments.
- [FaceGroupAnalyzer.State.updating](state-swift.enum/updating.md): A state that indicates the clustering algorithm is running.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Updating the gallery

- [state](state-swift.property.md): A value describing the current processing state of the analyzer.
- [update(subprogress:)](update%28subprogress_%29.md): Clusters faces into entities and updates their assignments.
