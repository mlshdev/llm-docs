> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/subscript(_:as:)-1frls](https://developer.apple.com/documentation/usdkit/usdprim/subscript(_:as:)-1frls)

# subscript(\_:as:)

**Framework:** USDKit  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Access or modify the value of a named attribute on this prim.

## Declaration

```swift
subscript<T>(attributeName: USDToken, as type: T.Type) -> T? where T : USDPrim.Attribute.Value { get nonmutating set }
```

<a id="overview"></a>

## Overview

If the attribute has time samples, this subscript operates at the [default](../usdstage/timecode/default.md) time code.
