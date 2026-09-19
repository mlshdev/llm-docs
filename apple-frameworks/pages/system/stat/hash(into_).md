> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/stat/hash(into:)

# hash(into:)

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Hashes the meaningful file-metadata fields of a `Stat` struct.

## Declaration

```swift
func hash(into hasher: inout Hasher)
```

<a id="discussion"></a>

## Discussion

These are the same fields compared by `==`, fed in the same order. Alignment padding and platform reserved/“spare” fields are not hashed.
