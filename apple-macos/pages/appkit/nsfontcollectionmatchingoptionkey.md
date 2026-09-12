> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontcollectionmatchingoptionkey](https://developer.apple.com/documentation/appkit/nsfontcollectionmatchingoptionkey)

# NSFontCollectionMatchingOptionKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

These constants are used by the [matchingDescriptors(options:)](nsfontcollection/matchingdescriptors%28options_%29.md) and [matchingDescriptors(forFamily:options:)](nsfontcollection/matchingdescriptors%28forfamily_options_%29.md) options dictionary parameters.

## Declaration

```swift
struct NSFontCollectionMatchingOptionKey
```

## Topics

### Type Properties

- [includeDisabledFontsOption](nsfontcollectionmatchingoptionkey/includedisabledfontsoption.md): An NSNumber object containing a Boolean value specifying whether disabled fonts should be included in the list of matching descriptors.
- [removeDuplicatesOption](nsfontcollectionmatchingoptionkey/removeduplicatesoption.md): An NSNumber object containing a Boolean value controlling whether more than one copy of a font with the same PostScript name should be included in the list of matching descriptors.
- [disallowAutoActivationOption](nsfontcollectionmatchingoptionkey/disallowautoactivationoption.md): An NSNumber object containing a Boolean value specifying that auto-activation should not be used to find missing fonts.

### Initializers

- [init(rawValue:)](nsfontcollectionmatchingoptionkey/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Font Descriptors

- [matchingDescriptors](nsfontcollection/matchingdescriptors.md): An array of font descriptors matching the logical descriptors.
- [matchingDescriptors(forFamily:)](nsfontcollection/matchingdescriptors%28forfamily_%29.md): Returns an array of font descriptors matching the logical descriptors for the given font family.
- [matchingDescriptors(forFamily:options:)](nsfontcollection/matchingdescriptors%28forfamily_options_%29.md): Returns an array of font descriptors matching the logical descriptors for the given font family and options.
- [matchingDescriptors(options:)](nsfontcollection/matchingdescriptors%28options_%29.md): Returns an array of font descriptors matching the logical descriptors with the given options.
- [queryDescriptors](nsfontcollection/querydescriptors.md): An array of font descriptors whose matching results produce the collection’s matching descriptors.
- [exclusionDescriptors](nsfontcollection/exclusiondescriptors.md): A list of query font descriptors whose matching results are excluded from the list of matching descriptors.

# NSFontCollectionMatchingOptionKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

These constants are used by the [matchingDescriptorsWithOptions:](nsfontcollection/matchingdescriptors%28options_%29.md) and [matchingDescriptorsForFamily:options:](nsfontcollection/matchingdescriptors%28forfamily_options_%29.md) options dictionary parameters.

## Declaration

```objectivec
typedef NSString * NSFontCollectionMatchingOptionKey;
```

## Topics

### Type Properties

- [NSFontCollectionIncludeDisabledFontsOption](nsfontcollectionmatchingoptionkey/includedisabledfontsoption.md): An NSNumber object containing a Boolean value specifying whether disabled fonts should be included in the list of matching descriptors.
- [NSFontCollectionRemoveDuplicatesOption](nsfontcollectionmatchingoptionkey/removeduplicatesoption.md): An NSNumber object containing a Boolean value controlling whether more than one copy of a font with the same PostScript name should be included in the list of matching descriptors.
- [NSFontCollectionDisallowAutoActivationOption](nsfontcollectionmatchingoptionkey/disallowautoactivationoption.md): An NSNumber object containing a Boolean value specifying that auto-activation should not be used to find missing fonts.

## See Also

### Getting the Font Descriptors

- [matchingDescriptors](nsfontcollection/matchingdescriptors.md): An array of font descriptors matching the logical descriptors.
- [matchingDescriptorsForFamily:](nsfontcollection/matchingdescriptors%28forfamily_%29.md): Returns an array of font descriptors matching the logical descriptors for the given font family.
- [matchingDescriptorsForFamily:options:](nsfontcollection/matchingdescriptors%28forfamily_options_%29.md): Returns an array of font descriptors matching the logical descriptors for the given font family and options.
- [matchingDescriptorsWithOptions:](nsfontcollection/matchingdescriptors%28options_%29.md): Returns an array of font descriptors matching the logical descriptors with the given options.
- [queryDescriptors](nsfontcollection/querydescriptors.md): An array of font descriptors whose matching results produce the collection’s matching descriptors.
- [exclusionDescriptors](nsfontcollection/exclusiondescriptors.md): A list of query font descriptors whose matching results are excluded from the list of matching descriptors.
