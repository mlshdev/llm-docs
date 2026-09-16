> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/rangereplaceablecollection/replace(_:with:maxreplacements:)-20ctz

# replace(\_:with:maxReplacements:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Replaces all occurrences of the sequence matching the given regex with a given collection.

## Declaration

```swift
mutating func replace<Replacement>(_ regex: some RegexComponent, with replacement: Replacement, maxReplacements: Int = .max) where Replacement : Collection, Replacement.Element == Character
```

## Parameters

- `regex`: A regex describing the sequence to replace.
- `replacement`: The new elements to add to the collection.
- `maxReplacements`: A number specifying how many occurrences of the sequence matching `regex` to replace. Default is `Int.max`.
