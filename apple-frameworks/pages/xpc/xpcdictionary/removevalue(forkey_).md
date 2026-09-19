> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xpc/xpcdictionary/removevalue(forkey:)

# removeValue(forKey:)

**Framework:** XPC  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Removes the given key and its associated value from the dictionary.

## Declaration

```swift
@discardableResult func removeValue(forKey key: String) -> xpc_object_t?
```

## Parameters

- `key`: The key to remove along with its associated value.

<a id="return-value"></a>

## Return Value

The value that was removed, or nil if the key was not present in the dictionary.
