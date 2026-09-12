> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristicmetadata](https://developer.apple.com/documentation/homekit/hmcharacteristicmetadata)

# HMCharacteristicMetadata (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Metadata that describes a characteristic’s value and that may be useful for presentation purposes.

## Declaration

```swift
class HMCharacteristicMetadata
```

<a id="overview"></a>

## Overview

Querying a characteristic’s metadata enables you to build a user interface that reflects the underlying units, minima, and maxima, and other aspects of the characteristic value.

## Topics

### Describing a characteristic

- [manufacturerDescription](hmcharacteristicmetadata/manufacturerdescription.md): A description of the characteristic provided by the accessory manufacturer.

### Bounding the value

- [validValues](hmcharacteristicmetadata/validvalues.md): The subset of valid values supported by the characteristic when the format is of type unsigned integer.
- [minimumValue](hmcharacteristicmetadata/minimumvalue.md): The minimum value for the characteristic.
- [maximumValue](hmcharacteristicmetadata/maximumvalue.md): The maximum value for the characteristic.
- [stepValue](hmcharacteristicmetadata/stepvalue.md): The minimum interval between values for the characteristic.
- [maxLength](hmcharacteristicmetadata/maxlength.md): The maximum number of UTF-8 characters allowed in a characteristic that uses a string format.

### Formatting the value

- [format](hmcharacteristicmetadata/format.md): The format of the values for the characteristic.
- [Characteristic Data Formats](characteristic-data-formats.md): Constants for identifying the data format of characteristic values.

### Specifying units

- [units](hmcharacteristicmetadata/units.md): The units of the characteristic value.
- [Characteristic Units](characteristic-units.md): Descriptions of the units of a characteristic.

### Initializers

- [init()](hmcharacteristicmetadata/init%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing characteristic presentation

- [metadata](hmcharacteristic/metadata.md): Metadata about the units and other properties of the characteristic.

# HMCharacteristicMetadata (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Metadata that describes a characteristic’s value and that may be useful for presentation purposes.

## Declaration

```objectivec
@interface HMCharacteristicMetadata : NSObject
```

<a id="overview"></a>

## Overview

Querying a characteristic’s metadata enables you to build a user interface that reflects the underlying units, minima, and maxima, and other aspects of the characteristic value.

## Topics

### Describing a characteristic

- [manufacturerDescription](hmcharacteristicmetadata/manufacturerdescription.md): A description of the characteristic provided by the accessory manufacturer.

### Bounding the value

- [validValues](hmcharacteristicmetadata/validvalues.md): The subset of valid values supported by the characteristic when the format is of type unsigned integer.
- [minimumValue](hmcharacteristicmetadata/minimumvalue.md): The minimum value for the characteristic.
- [maximumValue](hmcharacteristicmetadata/maximumvalue.md): The maximum value for the characteristic.
- [stepValue](hmcharacteristicmetadata/stepvalue.md): The minimum interval between values for the characteristic.
- [maxLength](hmcharacteristicmetadata/maxlength.md): The maximum number of UTF-8 characters allowed in a characteristic that uses a string format.

### Formatting the value

- [format](hmcharacteristicmetadata/format.md): The format of the values for the characteristic.
- [Characteristic Data Formats](characteristic-data-formats.md): Constants for identifying the data format of characteristic values.

### Specifying units

- [units](hmcharacteristicmetadata/units.md): The units of the characteristic value.
- [Characteristic Units](characteristic-units.md): Descriptions of the units of a characteristic.

### Instance Methods

- [init](hmcharacteristicmetadata/init%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Managing characteristic presentation

- [metadata](hmcharacteristic/metadata.md): Metadata about the units and other properties of the characteristic.
