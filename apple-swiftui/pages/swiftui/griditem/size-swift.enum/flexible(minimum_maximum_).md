> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/griditem/size-swift.enum/flexible(minimum:maximum:)](https://developer.apple.com/documentation/swiftui/griditem/size-swift.enum/flexible(minimum:maximum:))

# GridItem.Size.flexible(minimum:maximum:)

**Framework:** SwiftUI  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A single flexible item.

## Declaration

```swift
case flexible(minimum: CGFloat = 10, maximum: CGFloat = .infinity)
```

<a id="discussion"></a>

## Discussion

The size of this item is the size of the grid with spacing and inflexible items removed, divided by the number of flexible items, clamped to the provided bounds.

## See Also

### Getting the sizes

- [GridItem.Size.adaptive(minimum:maximum:)](adaptive%28minimum_maximum_%29.md): Multiple items in the space of a single flexible item.
- [GridItem.Size.fixed(\_:)](fixed%28__%29.md): A single item with the specified fixed size.
