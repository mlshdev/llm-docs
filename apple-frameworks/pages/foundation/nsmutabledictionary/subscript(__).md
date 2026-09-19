> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsmutabledictionary/subscript(_:)

# subscript(\_:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses the value associated with a given key.

## Declaration

```swift
@objc override dynamic subscript(key: Any) -> Any? { get set }
```

## Parameters

- `key`: The key whose value you want to retrieve.

<a id="return-value"></a>

## Return Value

The value associated with the key, or `nil` if no value is associated with the key.
