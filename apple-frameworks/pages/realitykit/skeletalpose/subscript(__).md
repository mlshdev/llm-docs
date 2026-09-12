> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/skeletalpose/subscript(_:)](https://developer.apple.com/documentation/realitykit/skeletalpose/subscript(_:))

# subscript(\_:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Accesses a pose transformation using the index of the joint name.

## Declaration

```swift
subscript(joint: String) -> Transform? { get set }
```

## Parameters

- `joint`: The joint name of transformation to access.

<a id="overview"></a>

## Overview

> **Note**

> Setting a joint to `nil` has no effect.
