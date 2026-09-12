> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtypedtag/category-swift.struct/tagvalue(for:)](https://developer.apple.com/documentation/coremedia/cmtypedtag/category-swift.struct/tagvalue(for:))

# tagValue(for:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Convert a typed value to a raw tag value for this category.

## Declaration

```swift
func tagValue(for value: TypedValue) -> CMTag.Value
```

## Parameters

- `value`: The value to convert to a tag value.

<a id="return-value"></a>

## Return Value

The typed value as a wrapped tag value.

## See Also

### Transforming Tag Values

- [value(for:)](value%28for_%29.md): Convert a tag value into a typed value valid for this category, if possible.
