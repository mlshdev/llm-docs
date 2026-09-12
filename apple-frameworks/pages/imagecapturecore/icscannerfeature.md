> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icscannerfeature](https://developer.apple.com/documentation/imagecapturecore/icscannerfeature)

# ICScannerFeature (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Class  
**Availability:** macOS 10.4+

An abstract class that describes a scanner feature.

## Declaration

```swift
class ICScannerFeature
```

<a id="overview"></a>

## Overview

The ImageCaptureCore framework defines three concrete subclasses of scanner features: [ICScannerFeatureEnumeration](icscannerfeatureenumeration.md), [ICScannerFeatureRange](icscannerfeaturerange.md), and [ICScannerFeatureBoolean](icscannerfeatureboolean.md). Scanner functional units may have one or more instances of these classes to allow users to choose scanner-specific settings or operations before performing a scan.

## Topics

### Instance Properties

- [humanReadableName](icscannerfeature/humanreadablename.md)
- [internalName](icscannerfeature/internalname.md)
- [tooltip](icscannerfeature/tooltip.md)
- [type](icscannerfeature/type.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ICScannerFeatureBoolean](icscannerfeatureboolean.md)
- [ICScannerFeatureEnumeration](icscannerfeatureenumeration.md)
- [ICScannerFeatureRange](icscannerfeaturerange.md)
- [ICScannerFeatureTemplate](icscannerfeaturetemplate.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Features

- [ICScannerFeatureBoolean](icscannerfeatureboolean.md): A feature with a value of `YES` or `NO`.
- [ICScannerFeatureEnumeration](icscannerfeatureenumeration.md): A feature that can have one of several discrete values, strings or numbers.
- [ICScannerFeatureRange](icscannerfeaturerange.md): A feature with a value that lies within a range.
- [ICScannerFeatureTemplate](icscannerfeaturetemplate.md): A group of one or more rectangular scan areas that can be used with a scanner functional unit.
- [ICScannerFeatureType](icscannerfeaturetype.md): The types of scanner features.

# ICScannerFeature (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Class  
**Availability:** macOS 10.4+

An abstract class that describes a scanner feature.

## Declaration

```objectivec
@interface ICScannerFeature : NSObject
```

<a id="overview"></a>

## Overview

The ImageCaptureCore framework defines three concrete subclasses of scanner features: [ICScannerFeatureEnumeration](icscannerfeatureenumeration.md), [ICScannerFeatureRange](icscannerfeaturerange.md), and [ICScannerFeatureBoolean](icscannerfeatureboolean.md). Scanner functional units may have one or more instances of these classes to allow users to choose scanner-specific settings or operations before performing a scan.

## Topics

### Instance Properties

- [humanReadableName](icscannerfeature/humanreadablename.md)
- [internalName](icscannerfeature/internalname.md)
- [tooltip](icscannerfeature/tooltip.md)
- [type](icscannerfeature/type.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ICScannerFeatureBoolean](icscannerfeatureboolean.md)
- [ICScannerFeatureEnumeration](icscannerfeatureenumeration.md)
- [ICScannerFeatureRange](icscannerfeaturerange.md)
- [ICScannerFeatureTemplate](icscannerfeaturetemplate.md)

## See Also

### Features

- [ICScannerFeatureBoolean](icscannerfeatureboolean.md): A feature with a value of `YES` or `NO`.
- [ICScannerFeatureEnumeration](icscannerfeatureenumeration.md): A feature that can have one of several discrete values, strings or numbers.
- [ICScannerFeatureRange](icscannerfeaturerange.md): A feature with a value that lies within a range.
- [ICScannerFeatureTemplate](icscannerfeaturetemplate.md): A group of one or more rectangular scan areas that can be used with a scanner functional unit.
- [ICScannerFeatureType](icscannerfeaturetype.md): The types of scanner features.
