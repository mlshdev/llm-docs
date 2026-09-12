> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rangereplaceablecollection/replace(with:maxreplacements:content:)](https://developer.apple.com/documentation/swift/rangereplaceablecollection/replace(with:maxreplacements:content:))

# replace(with:maxReplacements:content:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Replaces all matches for the regex in this collection, using the given closure to create the regex.

## Declaration

```swift
mutating func replace<Replacement>(with replacement: Replacement, maxReplacements: Int = .max, @RegexComponentBuilder content: () -> some RegexComponent) where Replacement : Collection, Replacement.Element == Character
```

## Parameters

- `replacement`: The new elements to add to the collection in place of each match for the regex, using `content` to create the regex.
- `maxReplacements`: A number specifying how many occurrences of the regex to replace.
- `content`: A closure that returns the collection to search for and replace.
