> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtypedtag/category-swift.struct/value(for:)](https://developer.apple.com/documentation/coremedia/cmtypedtag/category-swift.struct/value(for:))

# value(for:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Convert a tag value into a typed value valid for this category, if possible.

## Declaration

```swift
func value(for tagValue: CMTag.Value) -> TypedValue?
```

## Parameters

- `tagValue`: The tag value to convert to a typed value.

<a id="return-value"></a>

## Return Value

A value of type `TypedValue` containing the tag value, or `nil` if the tag value couldn’t be converted to a `TypedValue`.

## See Also

### Transforming Tag Values

- [tagValue(for:)](tagvalue%28for_%29.md): Convert a typed value to a raw tag value for this category.
