> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/assignables/mergeablepartscontainer/merge(other:)

# merge(other:)

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Merge another object of this type into this object.

> Use merge(\_:)

## Declaration

```swift
mutating func merge(other: Self) throws -> Bool
```

## Parameters

- `other`: The other object to merge into this one.

## See Also

### Merging the parts

- [merge(partID:partDataURL:)](merge%28partid_partdataurl_%29.md): Deprecated. Merges an individual part into the specified part of this object.
