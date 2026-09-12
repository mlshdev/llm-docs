> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmtagvaluekey](https://developer.apple.com/documentation/coremedia/kcmtagvaluekey)

# kCMTagValueKey

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A constant for use as a key during tag creation from a dictionary, whose value is the tag’s contained value.

## Declaration

```objectivec
extern CFStringRef const kCMTagValueKey;
```

<a id="Discussion"></a>

## Discussion

Values for this key are of the type held by the [kCMTagDataTypeKey](kcmtagdatatypekey.md) key of the enclosing dictionary. Ensure that your value can be safely cast to the appropriate type.

## See Also

### Constants

- [kCMTagCategoryKey](kcmtagcategorykey.md): A constant for use as a key during tag creation from a dictionary, whose value is the tag’s category.
- [kCMTagDataTypeKey](kcmtagdatatypekey.md): A constant for use as a key during tag creation from a dictionary, whose value is the tag’s data type.
- [kCMTagInvalid](kcmtaginvalid.md): A constant representing an invalid tag.
- [Tag Values](tag-values.md)
