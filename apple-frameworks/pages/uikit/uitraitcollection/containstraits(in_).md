> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitraitcollection/containstraits(in:)](https://developer.apple.com/documentation/uikit/uitraitcollection/containstraits(in:))

# containsTraits(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · tvOS  (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Queries whether a trait collection contains all of another trait collection’s values.

> Compare values for specific traits in the trait collections instead.

## Declaration

```swift
func containsTraits(in trait: UITraitCollection?) -> Bool
```

## Parameters

- `trait`: A trait collection that you want to compare to the current trait collection.

<a id="return-value"></a>

## Return Value

This method returns [true](https://developer.apple.com/documentation/swift/true) if the receiver contains all of the trait values in the trait collection passed in the `trait` parameter, and returns [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Use this method to compare two standalone trait collections, or to compare the iOS interface environment’s trait collection to a standalone trait collection.

## See Also

### Comparing trait collections

- [hasDifferentColorAppearance(comparedTo:)](hasdifferentcolorappearance%28comparedto_%29.md): Queries whether changing between the specified and current trait collections would affect color values.

# containsTraitsInCollection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · tvOS  (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Queries whether a trait collection contains all of another trait collection’s values.

> Compare values for specific traits in the trait collections instead.

## Declaration

```objectivec
- (BOOL) containsTraitsInCollection:(UITraitCollection *) trait;
```

## Parameters

- `trait`: A trait collection that you want to compare to the current trait collection.

<a id="return-value"></a>

## Return Value

This method returns [true](https://developer.apple.com/documentation/swift/true) if the receiver contains all of the trait values in the trait collection passed in the `trait` parameter, and returns [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Use this method to compare two standalone trait collections, or to compare the iOS interface environment’s trait collection to a standalone trait collection.

## See Also

### Comparing trait collections

- [hasDifferentColorAppearanceComparedToTraitCollection:](hasdifferentcolorappearance%28comparedto_%29.md): Queries whether changing between the specified and current trait collections would affect color values.
