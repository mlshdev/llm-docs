> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcdictionary/keyvaluepair](https://developer.apple.com/documentation/xpc/xpcdictionary/keyvaluepair)

# XPCDictionary.KeyValuePair

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type that contains a dictionary’s key-value pair.

## Declaration

```swift
typealias KeyValuePair = (key: String, value: xpc_object_t)
```

<a id="Discussion"></a>

## Discussion

[XPCDictionary](../xpcdictionary.md) exposes its values as instances of [xpc_object_t](../xpc_object_t.md) even if they were originally set with other types.
