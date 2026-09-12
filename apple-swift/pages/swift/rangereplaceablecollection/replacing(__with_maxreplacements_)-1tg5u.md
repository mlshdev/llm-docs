> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rangereplaceablecollection/replacing(_:with:maxreplacements:)-1tg5u](https://developer.apple.com/documentation/swift/rangereplaceablecollection/replacing(_:with:maxreplacements:)-1tg5u)

# replacing(\_:with:maxReplacements:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a new collection in which all occurrences of a sequence matching the given regex are replaced by another collection.

## Declaration

```swift
func replacing<Replacement>(_ regex: some RegexComponent, with replacement: Replacement, maxReplacements: Int = .max) -> Self where Replacement : Collection, Replacement.Element == Character
```

## Parameters

- `regex`: A regex describing the sequence to replace.
- `replacement`: The new elements to add to the collection.
- `maxReplacements`: A number specifying how many occurrences of the sequence matching `regex` to replace. Default is `Int.max`.

<a id="return-value"></a>

## Return Value

A new collection in which all occurrences of subsequence matching `regex` are replaced by `replacement`.
