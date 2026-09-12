> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcarray/indexvaluepair](https://developer.apple.com/documentation/xpc/xpcarray/indexvaluepair)

# XPCArray.IndexValuePair

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type that contains an index and the object at that index.

## Declaration

```swift
typealias IndexValuePair = (index: Int, value: xpc_object_t)
```

<a id="Discussion"></a>

## Discussion

[XPCArray](../xpcarray.md) exposes its values as instances of [xpc_object_t](../xpc_object_t.md) even if they were originally set with other types.
