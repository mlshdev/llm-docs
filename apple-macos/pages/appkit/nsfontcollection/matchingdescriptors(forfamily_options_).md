> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontcollection/matchingdescriptors(forfamily:options:)](https://developer.apple.com/documentation/appkit/nsfontcollection/matchingdescriptors(forfamily:options:))

# matchingDescriptors(forFamily:options:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns an array of font descriptors matching the logical descriptors for the given font family and options.

## Declaration

```swift
func matchingDescriptors(forFamily family: String, options: [NSFontCollectionMatchingOptionKey : NSNumber]? = nil) -> [NSFontDescriptor]?
```

## Parameters

- `family`: The font family whose descriptors are matched.
- `options`: A dictionary containing any combination of the `Matching Descriptors Options` keys or `nil`.

<a id="return-value"></a>

## Return Value

The [matchingDescriptors](matchingdescriptors.md) for the given family and options.

## See Also

### Getting the Font Descriptors

- [matchingDescriptors](matchingdescriptors.md): An array of font descriptors matching the logical descriptors.
- [matchingDescriptors(forFamily:)](matchingdescriptors%28forfamily_%29.md): Returns an array of font descriptors matching the logical descriptors for the given font family.
- [matchingDescriptors(options:)](matchingdescriptors%28options_%29.md): Returns an array of font descriptors matching the logical descriptors with the given options.
- [NSFontCollectionMatchingOptionKey](../nsfontcollectionmatchingoptionkey.md): These constants are used by the [matchingDescriptors(options:)](matchingdescriptors%28options_%29.md) and [matchingDescriptors(forFamily:options:)](matchingdescriptors%28forfamily_options_%29.md) options dictionary parameters.
- [queryDescriptors](querydescriptors.md): An array of font descriptors whose matching results produce the collection’s matching descriptors.
- [exclusionDescriptors](exclusiondescriptors.md): A list of query font descriptors whose matching results are excluded from the list of matching descriptors.

# matchingDescriptorsForFamily:options: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns an array of font descriptors matching the logical descriptors for the given font family and options.

## Declaration

```objectivec
- (NSArray<NSFontDescriptor *> *) matchingDescriptorsForFamily:(NSString *) family options:(NSDictionary<NSString *,NSNumber *> *) options;
```

## Parameters

- `family`: The font family whose descriptors are matched.
- `options`: A dictionary containing any combination of the `Matching Descriptors Options` keys or `nil`.

<a id="return-value"></a>

## Return Value

The [matchingDescriptors](matchingdescriptors.md) for the given family and options.

## See Also

### Getting the Font Descriptors

- [matchingDescriptors](matchingdescriptors.md): An array of font descriptors matching the logical descriptors.
- [matchingDescriptorsForFamily:](matchingdescriptors%28forfamily_%29.md): Returns an array of font descriptors matching the logical descriptors for the given font family.
- [matchingDescriptorsWithOptions:](matchingdescriptors%28options_%29.md): Returns an array of font descriptors matching the logical descriptors with the given options.
- [NSFontCollectionMatchingOptionKey](../nsfontcollectionmatchingoptionkey.md): These constants are used by the [matchingDescriptorsWithOptions:](matchingdescriptors%28options_%29.md) and [matchingDescriptorsForFamily:options:](matchingdescriptors%28forfamily_options_%29.md) options dictionary parameters.
- [queryDescriptors](querydescriptors.md): An array of font descriptors whose matching results produce the collection’s matching descriptors.
- [exclusionDescriptors](exclusiondescriptors.md): A list of query font descriptors whose matching results are excluded from the list of matching descriptors.
