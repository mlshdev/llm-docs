> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontcollection/matchingdescriptors](https://developer.apple.com/documentation/appkit/nsfontcollection/matchingdescriptors)

# matchingDescriptors (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

An array of font descriptors matching the logical descriptors.

## Declaration

```swift
var matchingDescriptors: [NSFontDescriptor]? { get }
```

## See Also

### Getting the Font Descriptors

- [matchingDescriptors(forFamily:)](matchingdescriptors%28forfamily_%29.md): Returns an array of font descriptors matching the logical descriptors for the given font family.
- [matchingDescriptors(forFamily:options:)](matchingdescriptors%28forfamily_options_%29.md): Returns an array of font descriptors matching the logical descriptors for the given font family and options.
- [matchingDescriptors(options:)](matchingdescriptors%28options_%29.md): Returns an array of font descriptors matching the logical descriptors with the given options.
- [NSFontCollectionMatchingOptionKey](../nsfontcollectionmatchingoptionkey.md): These constants are used by the [matchingDescriptors(options:)](matchingdescriptors%28options_%29.md) and [matchingDescriptors(forFamily:options:)](matchingdescriptors%28forfamily_options_%29.md) options dictionary parameters.
- [queryDescriptors](querydescriptors.md): An array of font descriptors whose matching results produce the collection’s matching descriptors.
- [exclusionDescriptors](exclusiondescriptors.md): A list of query font descriptors whose matching results are excluded from the list of matching descriptors.

# matchingDescriptors (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

An array of font descriptors matching the logical descriptors.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<NSFontDescriptor *> * matchingDescriptors;
```

## See Also

### Getting the Font Descriptors

- [matchingDescriptorsForFamily:](matchingdescriptors%28forfamily_%29.md): Returns an array of font descriptors matching the logical descriptors for the given font family.
- [matchingDescriptorsForFamily:options:](matchingdescriptors%28forfamily_options_%29.md): Returns an array of font descriptors matching the logical descriptors for the given font family and options.
- [matchingDescriptorsWithOptions:](matchingdescriptors%28options_%29.md): Returns an array of font descriptors matching the logical descriptors with the given options.
- [NSFontCollectionMatchingOptionKey](../nsfontcollectionmatchingoptionkey.md): These constants are used by the [matchingDescriptorsWithOptions:](matchingdescriptors%28options_%29.md) and [matchingDescriptorsForFamily:options:](matchingdescriptors%28forfamily_options_%29.md) options dictionary parameters.
- [queryDescriptors](querydescriptors.md): An array of font descriptors whose matching results produce the collection’s matching descriptors.
- [exclusionDescriptors](exclusiondescriptors.md): A list of query font descriptors whose matching results are excluded from the list of matching descriptors.
