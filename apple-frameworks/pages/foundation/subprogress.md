> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/subprogress](https://developer.apple.com/documentation/foundation/subprogress)

# Subprogress

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Subprogress is used to establish parent-child relationship between two instances of `ProgressManager`.

## Declaration

```swift
struct Subprogress
```

<a id="overview"></a>

## Overview

Subprogress is returned from a call to `subprogress(assigningCount:)` by a parent ProgressManager. A child ProgressManager is then returned by calling `start(totalCount:)` on a Subprogress.

## Topics

### Instance Methods

- [start(totalCount:)](subprogress/start%28totalcount_%29.md): Instantiates a ProgressManager which is a child to the parent from which `self` is returned.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
