> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtaghash](https://developer.apple.com/documentation/coremedia/cmtaghash)

# CMTagHash

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Generates a hash identifier for a tag.

## Declaration

```objectivec
extern CFHashCode CMTagHash(CMTag tag);
```

## See Also

### Comparison and Equality

- [CMTagEqualToTag](cmtagequaltotag.md): Compares two tags for strict equality.
- [CMTagCompare](cmtagcompare.md): Compares two tags in terms of partial equality.
- [CMTagCategoryEqualToTagCategory](cmtagcategoryequaltotagcategory.md): Compares two tags’s categories for equality.
- [CMTagCategoryValueEqualToValue](cmtagcategoryvalueequaltovalue.md): Compares two tags’s values for equality.
