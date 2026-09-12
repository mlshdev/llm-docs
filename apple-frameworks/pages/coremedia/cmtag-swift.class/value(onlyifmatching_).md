> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtag-swift.class/value(onlyifmatching:)](https://developer.apple.com/documentation/coremedia/cmtag-swift.class/value(onlyifmatching:))

# value(onlyIfMatching:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Retrieves a tag’s value as a specific type, if and only if it matches a category.

## Declaration

```swift
func value<T>(onlyIfMatching category: CMTypedTag<T>.Category) -> T? where T : Sendable
```

## Parameters

- `category`: The category to check if the tag contains.

<a id="return-value"></a>

## Return Value

The value contained in the tag as an instance of type `T` if the category matches. Otherwise, returns `nil`.

## See Also

### Inspecting Tags

- [rawCategory](rawcategory-swift.property.md): The raw 64-bit representation of the tag’s category.
- [rawTagValue](rawtagvalue.md): The tag’s contained value.
