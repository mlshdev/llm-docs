> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assetslibrary/alassetsgroupenumerationresultsblock](https://developer.apple.com/documentation/assetslibrary/alassetsgroupenumerationresultsblock)

# ALAssetsGroupEnumerationResultsBlock

**Interface language:** Objective-C

**Framework:** Assets Library  
**Kind:** Type Alias

Signature for the block executed during enumeration of assets.

## Declaration

```objectivec
typedef void (^)(ALAsset *, unsigned long, _Bool *) ALAssetsGroupEnumerationResultsBlock;
```

<a id="Discussion"></a>

## Discussion

The block takes the following arguments:

- **result**: An asset that matches the filter set by the caller.
- **index**: The index of the asset in the range being returned.

If no asset is found, index is set to `NSNotFound`.

- **stop**: A pointer to a Boolean value that indicates whether the enumeration should stop. Set the referenced value to [true](https://developer.apple.com/documentation/swift/true) to stop the enumeration.

The value is set to [true](https://developer.apple.com/documentation/swift/true) if no asset is found.

If the application is not given access to the data, `result` is `nil`, `index` is `NSNotFound`, and `stop` points to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Constants

- [Group Property Names](group-property-names.md): Constants for the names of group properties, used by `ALAssetsGroup/value(forProperty:)`.
