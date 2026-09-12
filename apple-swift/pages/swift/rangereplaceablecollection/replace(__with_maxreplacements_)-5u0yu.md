> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rangereplaceablecollection/replace(_:with:maxreplacements:)-5u0yu](https://developer.apple.com/documentation/swift/rangereplaceablecollection/replace(_:with:maxreplacements:)-5u0yu)

# replace(\_:with:maxReplacements:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Replaces all occurrences of a target sequence with a given collection

## Declaration

```swift
mutating func replace<C, Replacement>(_ other: C, with replacement: Replacement, maxReplacements: Int = .max) where C : Collection, Replacement : Collection, Self.Element == C.Element, C.Element == Replacement.Element
```

## Parameters

- `other`: The sequence to replace.
- `replacement`: The new elements to add to the collection.
- `maxReplacements`: A number specifying how many occurrences of `other` to replace. Default is `Int.max`.
