> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/sequence/firstvalue(matchingcategory:)

# firstValue(matchingCategory:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Finds the first tag matching the specified category and returns the value of the matching tag.

## Declaration

```swift
func firstValue<T>(matchingCategory category: CMTypedTag<T>.Category) -> T? where T : Sendable
```

<a id="discussion"></a>

## Discussion

- category: The category to match.
