> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/unsafeforceeffectbuffer/subscript(_:)](https://developer.apple.com/documentation/realitykit/unsafeforceeffectbuffer/subscript(_:))

# subscript(\_:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Returns an element by index.

## Declaration

```swift
subscript(index: Int) -> T { get }
```

<a id="overview"></a>

## Overview

The index should be in the range \[0, [physicsBodyCount](../forceeffectparameters/physicsbodycount.md)\].
