> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitraitcollection/hasdifferentcolorappearance(comparedto:)](https://developer.apple.com/documentation/uikit/uitraitcollection/hasdifferentcolorappearance(comparedto:))

# hasDifferentColorAppearance(comparedTo:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Queries whether changing between the specified and current trait collections would affect color values.

## Declaration

```swift
func hasDifferentColorAppearance(comparedTo traitCollection: UITraitCollection?) -> Bool
```

## Parameters

- `traitCollection`: A trait collection that you want to compare to the current trait collection.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the colors in the two trait collections differ, or [false](https://developer.apple.com/documentation/swift/false) if they have the same component values.

<a id="Discussion"></a>

## Discussion

Use this method to determine whether changing the traits of the current environment would also change the colors in your interface. For example, changing the [userInterfaceStyle](userinterfacestyle.md) or [accessibilityContrast](accessibilitycontrast.md) property usually changes the colors of your interface.

## See Also

### Comparing trait collections

- [containsTraits(in:)](containstraits%28in_%29.md): Deprecated. Queries whether a trait collection contains all of another trait collection’s values.

# hasDifferentColorAppearanceComparedToTraitCollection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Queries whether changing between the specified and current trait collections would affect color values.

## Declaration

```objectivec
- (BOOL) hasDifferentColorAppearanceComparedToTraitCollection:(UITraitCollection *) traitCollection;
```

## Parameters

- `traitCollection`: A trait collection that you want to compare to the current trait collection.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the colors in the two trait collections differ, or [false](https://developer.apple.com/documentation/swift/false) if they have the same component values.

<a id="Discussion"></a>

## Discussion

Use this method to determine whether changing the traits of the current environment would also change the colors in your interface. For example, changing the [userInterfaceStyle](userinterfacestyle.md) or [accessibilityContrast](accessibilitycontrast.md) property usually changes the colors of your interface.

## See Also

### Comparing trait collections

- [containsTraitsInCollection:](containstraits%28in_%29.md): Deprecated. Queries whether a trait collection contains all of another trait collection’s values.
