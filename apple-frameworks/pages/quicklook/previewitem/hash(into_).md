> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quicklook/previewitem/hash(into:)

# hash(into:)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Hashes the essential components of this value by feeding them into the given hasher.

## Declaration

```swift
func hash(into hasher: inout Hasher)
```

<a id="discussion"></a>

## Discussion

- hasher: The hasher to use when combining the components of this instance.
