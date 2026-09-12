> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/configuration-swift.class/applying(_:)](https://developer.apple.com/documentation/uikit/uiimage/configuration-swift.class/applying(_:))

# applying(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a configuration object that applies the specified configuration values on top of the current object’s values.

## Declaration

```swift
func applying(_ otherConfiguration: UIImage.Configuration?) -> Self
```

## Parameters

- `otherConfiguration`: The configuration attributes to apply over the current attributes. Values in this object take precedence over values in the image’s current configuration object.

<a id="return-value"></a>

## Return Value

A configuration object with the specified image configuration attributes and merged traits.

## Mentioned In

- [Configuring and displaying symbol images in your UI](../../configuring-and-displaying-symbol-images-in-your-ui.md)

<a id="Discussion"></a>

## Discussion

This method merges the traits from `otherConfiguration` with the current object’s trait collection, giving precedence to traits in `otherConfiguration` unless the trait is unspecified. For image-specific traits, this method replaces the current image attributes with the attributes in `otherConfiguration`.

## See Also

### Modifying a configuration object

- [withTraitCollection(\_:)](withtraitcollection%28__%29.md): Returns a new configuration object that merges the current traits with the traits from the specified trait collection.

# configurationByApplyingConfiguration: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a configuration object that applies the specified configuration values on top of the current object’s values.

## Declaration

```objectivec
- (instancetype) configurationByApplyingConfiguration:(UIImageConfiguration *) otherConfiguration;
```

## Parameters

- `otherConfiguration`: The configuration attributes to apply over the current attributes. Values in this object take precedence over values in the image’s current configuration object.

<a id="return-value"></a>

## Return Value

A configuration object with the specified image configuration attributes and merged traits.

## Mentioned In

- [Configuring and displaying symbol images in your UI](../../configuring-and-displaying-symbol-images-in-your-ui.md)

<a id="Discussion"></a>

## Discussion

This method merges the traits from `otherConfiguration` with the current object’s trait collection, giving precedence to traits in `otherConfiguration` unless the trait is unspecified. For image-specific traits, this method replaces the current image attributes with the attributes in `otherConfiguration`.

## See Also

### Modifying a configuration object

- [configurationWithTraitCollection:](withtraitcollection%28__%29.md): Returns a new configuration object that merges the current traits with the traits from the specified trait collection.
