> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/autoadjustmentfilters()](https://developer.apple.com/documentation/coreimage/ciimage/autoadjustmentfilters())

# autoAdjustmentFilters() (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS · visionOS 1.0+

Returns all possible automatically selected and configured filters for adjusting the image.

## Declaration

```swift
func autoAdjustmentFilters() -> [CIFilter]
```

<a id="return-value"></a>

## Return Value

An array of [CIFilter](../cifilter-swift.class.md) instances preconfigured for correcting deficiencies in the supplied image.

## See Also

### Getting Autoadjustment Filters

- [autoAdjustmentFilters(options:)](autoadjustmentfilters%28options_%29.md): Returns a subset of automatically selected and configured filters for adjusting the image.
- [Autoadjustment Keys](../autoadjustment-keys.md): Constants used as keys in the options dictionary for the [autoAdjustmentFilters(options:)](autoadjustmentfilters%28options_%29.md) method.

# autoAdjustmentFilters (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS · visionOS 1.0+

Returns all possible automatically selected and configured filters for adjusting the image.

## Declaration

```objectivec
- (NSArray<CIFilter *> *) autoAdjustmentFilters;
```

<a id="return-value"></a>

## Return Value

An array of [CIFilter](../cifilter-swift.class.md) instances preconfigured for correcting deficiencies in the supplied image.

## See Also

### Getting Autoadjustment Filters

- [autoAdjustmentFiltersWithOptions:](autoadjustmentfilters%28options_%29.md): Returns a subset of automatically selected and configured filters for adjusting the image.
- [Autoadjustment Keys](../autoadjustment-keys.md): Constants used as keys in the options dictionary for the [autoAdjustmentFiltersWithOptions:](autoadjustmentfilters%28options_%29.md) method.
