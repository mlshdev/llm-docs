> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/griditem/size-swift.enum/adaptive(minimum:maximum:)](https://developer.apple.com/documentation/swiftui/griditem/size-swift.enum/adaptive(minimum:maximum:))

# GridItem.Size.adaptive(minimum:maximum:)

**Framework:** SwiftUI  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Multiple items in the space of a single flexible item.

## Declaration

```swift
case adaptive(minimum: CGFloat, maximum: CGFloat = .infinity)
```

<a id="discussion"></a>

## Discussion

This size case places one or more items into the space assigned to a single `flexible` item, using the provided bounds and spacing to decide exactly how many items fit. This approach prefers to insert as many items of the `minimum` size as possible but lets them increase to the `maximum` size.

## See Also

### Getting the sizes

- [GridItem.Size.fixed(\_:)](fixed%28__%29.md): A single item with the specified fixed size.
- [GridItem.Size.flexible(minimum:maximum:)](flexible%28minimum_maximum_%29.md): A single flexible item.
