> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/synchronization/wordpair/hash(into:)

# hash(into:)

**Framework:** Synchronization  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Hashes the essential components of this value by feeding them into the given hasher.

## Declaration

```swift
func hash(into hasher: inout Hasher)
```

## Parameters

- `hasher`: The hasher to use when combining the components of this instance.
