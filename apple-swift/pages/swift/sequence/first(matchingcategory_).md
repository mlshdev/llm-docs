> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/sequence/first(matchingcategory:)](https://developer.apple.com/documentation/swift/sequence/first(matchingcategory:))

# first(matchingCategory:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Finds and returns the first tag matching the specified category.

## Declaration

```swift
func first<T>(matchingCategory category: CMTypedTag<T>.Category) -> CMTypedTag<T>? where T : Sendable
```

<a id="discussion"></a>

## Discussion

- category: The category to match.
