> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xpc/xpcdictionary/keyvaluepair

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
