> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/autoadjustment-keys](https://developer.apple.com/documentation/coreimage/autoadjustment-keys)

# Autoadjustment Keys (Swift)

**Framework:** Core Image  
**Kind:** API Collection

Constants used as keys in the options dictionary for the [autoAdjustmentFilters(options:)](ciimage/autoadjustmentfilters%28options_%29.md) method.

## Topics

### Constants

- [enhance](ciimageautoadjustmentoption/enhance.md): A key used to specify whether to return enhancement filters.
- [redEye](ciimageautoadjustmentoption/redeye.md): A key used to specify whether to return a red eye filter.
- [features](ciimageautoadjustmentoption/features.md): A key used to specify an array of features that you want to apply enhancement and red eye filters to.
- [crop](ciimageautoadjustmentoption/crop.md): A key used to specify whether to return a filter that crops the image to focus on detected features.
- [level](ciimageautoadjustmentoption/level.md): A key used to specify whether to return a filter that rotates the image to keep a level perspective.

## See Also

### Getting Autoadjustment Filters

- [autoAdjustmentFilters()](ciimage/autoadjustmentfilters%28%29.md): Returns all possible automatically selected and configured filters for adjusting the image.
- [autoAdjustmentFilters(options:)](ciimage/autoadjustmentfilters%28options_%29.md): Returns a subset of automatically selected and configured filters for adjusting the image.

# Autoadjustment Keys (Objective-C)

**Framework:** Core Image  
**Kind:** API Collection

Constants used as keys in the options dictionary for the [autoAdjustmentFiltersWithOptions:](ciimage/autoadjustmentfilters%28options_%29.md) method.

## Topics

### Constants

- [kCIImageAutoAdjustEnhance](ciimageautoadjustmentoption/enhance.md): A key used to specify whether to return enhancement filters.
- [kCIImageAutoAdjustRedEye](ciimageautoadjustmentoption/redeye.md): A key used to specify whether to return a red eye filter.
- [kCIImageAutoAdjustFeatures](ciimageautoadjustmentoption/features.md): A key used to specify an array of features that you want to apply enhancement and red eye filters to.
- [kCIImageAutoAdjustCrop](ciimageautoadjustmentoption/crop.md): A key used to specify whether to return a filter that crops the image to focus on detected features.
- [kCIImageAutoAdjustLevel](ciimageautoadjustmentoption/level.md): A key used to specify whether to return a filter that rotates the image to keep a level perspective.

## See Also

### Getting Autoadjustment Filters

- [autoAdjustmentFilters](ciimage/autoadjustmentfilters%28%29.md): Returns all possible automatically selected and configured filters for adjusting the image.
- [autoAdjustmentFiltersWithOptions:](ciimage/autoadjustmentfilters%28options_%29.md): Returns a subset of automatically selected and configured filters for adjusting the image.
