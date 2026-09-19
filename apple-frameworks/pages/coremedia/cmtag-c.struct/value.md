> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmtag-c.struct/value

# value

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The value of the tag.

## Declaration

```objectivec
CMTagValue value;
```

<a id="Discussion"></a>

## Discussion

Use a function listed in [Retrieving Tag Values](../cmtag-api.md#Retrieving-Tag-Values) to retrieve a tag value safely and interpret it as the correct underlying type.

## See Also

### Tag Data

- [category](category.md): The category assigned to a tag.
- [dataType](datatype.md): The data type for the value stored in the tag.
