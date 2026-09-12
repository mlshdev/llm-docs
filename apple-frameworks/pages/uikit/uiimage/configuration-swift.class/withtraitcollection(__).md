> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/configuration-swift.class/withtraitcollection(_:)](https://developer.apple.com/documentation/uikit/uiimage/configuration-swift.class/withtraitcollection(_:))

# withTraitCollection(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Returns a new configuration object that merges the current traits with the traits from the specified trait collection.

## Declaration

```swift
func withTraitCollection(_ traitCollection: UITraitCollection?) -> Self
```

## Parameters

- `traitCollection`: The traits to insert or apply to the configuration object. The trait values in this parameter take precedence over the ones in the current configuration object, unless you left the trait with an unspecified value.

<a id="return-value"></a>

## Return Value

A configuration object with the merged set of traits.

<a id="Discussion"></a>

## Discussion

Use this method to augment or change the traits in the current configuration object. This method prefers the values from `traitCollection` over the values in the current configuration object. If the value of the trait is unspecified in both collections, it remains unspecified in the new collection.

## See Also

### Modifying a configuration object

- [applying(\_:)](applying%28__%29.md): Returns a configuration object that applies the specified configuration values on top of the current object’s values.

# configurationWithTraitCollection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Returns a new configuration object that merges the current traits with the traits from the specified trait collection.

## Declaration

```objectivec
- (instancetype) configurationWithTraitCollection:(UITraitCollection *) traitCollection;
```

## Parameters

- `traitCollection`: The traits to insert or apply to the configuration object. The trait values in this parameter take precedence over the ones in the current configuration object, unless you left the trait with an unspecified value.

<a id="return-value"></a>

## Return Value

A configuration object with the merged set of traits.

<a id="Discussion"></a>

## Discussion

Use this method to augment or change the traits in the current configuration object. This method prefers the values from `traitCollection` over the values in the current configuration object. If the value of the trait is unspecified in both collections, it remains unspecified in the new collection.

## See Also

### Modifying a configuration object

- [configurationByApplyingConfiguration:](applying%28__%29.md): Returns a configuration object that applies the specified configuration values on top of the current object’s values.
