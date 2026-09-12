> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/autoadjustmentfilters(options:)](https://developer.apple.com/documentation/coreimage/ciimage/autoadjustmentfilters(options:))

# autoAdjustmentFilters(options:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS · visionOS 1.0+

Returns a subset of automatically selected and configured filters for adjusting the image.

## Declaration

```swift
func autoAdjustmentFilters(options: [CIImageAutoAdjustmentOption : Any]? = nil) -> [CIFilter]
```

## Parameters

- `options`: You can control which filters are returned by supplying one or more of the keys described in [Autoadjustment Keys](../autoadjustment-keys.md).

  The options dictionary can also contain a [CIDetectorImageOrientation](../cidetectorimageorientation.md) key. Because some autoadjustment filters rely on face detection, you should specify an image orientation if you want to enable these filters for an image containing face whose orientation does not match that of the image.

<a id="return-value"></a>

## Return Value

An array of [CIFilter](../cifilter-swift.class.md) instances preconfigured for correcting deficiencies in the supplied image.

## See Also

### Getting Autoadjustment Filters

- [autoAdjustmentFilters()](autoadjustmentfilters%28%29.md): Returns all possible automatically selected and configured filters for adjusting the image.
- [Autoadjustment Keys](../autoadjustment-keys.md): Constants used as keys in the options dictionary for the [autoAdjustmentFilters(options:)](autoadjustmentfilters%28options_%29.md) method.

# autoAdjustmentFiltersWithOptions: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS · visionOS 1.0+

Returns a subset of automatically selected and configured filters for adjusting the image.

## Declaration

```objectivec
- (NSArray<CIFilter *> *) autoAdjustmentFiltersWithOptions:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `options`: You can control which filters are returned by supplying one or more of the keys described in [Autoadjustment Keys](../autoadjustment-keys.md).

  The options dictionary can also contain a [CIDetectorImageOrientation](../cidetectorimageorientation.md) key. Because some autoadjustment filters rely on face detection, you should specify an image orientation if you want to enable these filters for an image containing face whose orientation does not match that of the image.

<a id="return-value"></a>

## Return Value

An array of [CIFilter](../cifilter-swift.class.md) instances preconfigured for correcting deficiencies in the supplied image.

## See Also

### Getting Autoadjustment Filters

- [autoAdjustmentFilters](autoadjustmentfilters%28%29.md): Returns all possible automatically selected and configured filters for adjusting the image.
- [Autoadjustment Keys](../autoadjustment-keys.md): Constants used as keys in the options dictionary for the [autoAdjustmentFiltersWithOptions:](autoadjustmentfilters%28options_%29.md) method.
