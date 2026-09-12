> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmtagcategorykey](https://developer.apple.com/documentation/coremedia/kcmtagcategorykey)

# kCMTagCategoryKey

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A constant for use as a key during tag creation from a dictionary, whose value is the tag’s category.

## Declaration

```objectivec
extern CFStringRef const kCMTagCategoryKey;
```

<a id="Discussion"></a>

## Discussion

For values allowed with [kCMTagCategoryKey](kcmtagcategorykey.md), see Tag Category Constants.

## See Also

### Constants

- [kCMTagDataTypeKey](kcmtagdatatypekey.md): A constant for use as a key during tag creation from a dictionary, whose value is the tag’s data type.
- [kCMTagValueKey](kcmtagvaluekey.md): A constant for use as a key during tag creation from a dictionary, whose value is the tag’s contained value.
- [kCMTagInvalid](kcmtaginvalid.md): A constant representing an invalid tag.
- [Tag Values](tag-values.md)
