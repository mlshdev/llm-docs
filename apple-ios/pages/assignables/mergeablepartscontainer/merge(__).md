> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/assignables/mergeablepartscontainer/merge(_:)

# merge(\_:)

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · visionOS

Merge another object of this type into this object.

## Declaration

```swift
mutating func merge(_ other: Self) async throws -> Bool
```

## Parameters

- `other`: The other object to merge into this one.

<a id="return-value"></a>

## Return Value

`true`, if the merge caused a mutation.
