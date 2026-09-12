> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rangereplaceablecollection/replace(_:maxreplacements:with:)](https://developer.apple.com/documentation/swift/rangereplaceablecollection/replace(_:maxreplacements:with:))

# replace(\_:maxReplacements:with:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Replaces all occurrences of the sequence matching the given regex with a given collection.

## Declaration

```swift
mutating func replace<Output, Replacement>(_ regex: some RegexComponent, maxReplacements: Int = .max, with replacement: (Regex<Output>.Match) throws -> Replacement) rethrows where Replacement : Collection, Replacement.Element == Character
```

## Parameters

- `regex`: A regex describing the sequence to replace.
- `maxReplacements`: A number specifying how many occurrences of the sequence matching `regex` to replace. Default is `Int.max`.
- `replacement`: A closure that receives the full match information, including captures, and returns a replacement collection.
