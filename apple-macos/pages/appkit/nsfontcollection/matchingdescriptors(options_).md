> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontcollection/matchingdescriptors(options:)](https://developer.apple.com/documentation/appkit/nsfontcollection/matchingdescriptors(options:))

# matchingDescriptors(options:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns an array of font descriptors matching the logical descriptors with the given options.

## Declaration

```swift
func matchingDescriptors(options: [NSFontCollectionMatchingOptionKey : NSNumber]? = nil) -> [NSFontDescriptor]?
```

## Parameters

- `options`: A dictionary containing any combination of the `Matching Descriptors Options` keys or `nil`.

<a id="return-value"></a>

## Return Value

The [matchingDescriptors](matchingdescriptors.md) for the given options.

## See Also

### Getting the Font Descriptors

- [matchingDescriptors](matchingdescriptors.md): An array of font descriptors matching the logical descriptors.
- [matchingDescriptors(forFamily:)](matchingdescriptors%28forfamily_%29.md): Returns an array of font descriptors matching the logical descriptors for the given font family.
- [matchingDescriptors(forFamily:options:)](matchingdescriptors%28forfamily_options_%29.md): Returns an array of font descriptors matching the logical descriptors for the given font family and options.
- [NSFontCollectionMatchingOptionKey](../nsfontcollectionmatchingoptionkey.md): These constants are used by the [matchingDescriptors(options:)](matchingdescriptors%28options_%29.md) and [matchingDescriptors(forFamily:options:)](matchingdescriptors%28forfamily_options_%29.md) options dictionary parameters.
- [queryDescriptors](querydescriptors.md): An array of font descriptors whose matching results produce the collection’s matching descriptors.
- [exclusionDescriptors](exclusiondescriptors.md): A list of query font descriptors whose matching results are excluded from the list of matching descriptors.

# matchingDescriptorsWithOptions: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns an array of font descriptors matching the logical descriptors with the given options.

## Declaration

```objectivec
- (NSArray<NSFontDescriptor *> *) matchingDescriptorsWithOptions:(NSDictionary<NSString *,NSNumber *> *) options;
```

## Parameters

- `options`: A dictionary containing any combination of the `Matching Descriptors Options` keys or `nil`.

<a id="return-value"></a>

## Return Value

The [matchingDescriptors](matchingdescriptors.md) for the given options.

## See Also

### Getting the Font Descriptors

- [matchingDescriptors](matchingdescriptors.md): An array of font descriptors matching the logical descriptors.
- [matchingDescriptorsForFamily:](matchingdescriptors%28forfamily_%29.md): Returns an array of font descriptors matching the logical descriptors for the given font family.
- [matchingDescriptorsForFamily:options:](matchingdescriptors%28forfamily_options_%29.md): Returns an array of font descriptors matching the logical descriptors for the given font family and options.
- [NSFontCollectionMatchingOptionKey](../nsfontcollectionmatchingoptionkey.md): These constants are used by the [matchingDescriptorsWithOptions:](matchingdescriptors%28options_%29.md) and [matchingDescriptorsForFamily:options:](matchingdescriptors%28forfamily_options_%29.md) options dictionary parameters.
- [queryDescriptors](querydescriptors.md): An array of font descriptors whose matching results produce the collection’s matching descriptors.
- [exclusionDescriptors](exclusiondescriptors.md): A list of query font descriptors whose matching results are excluded from the list of matching descriptors.
