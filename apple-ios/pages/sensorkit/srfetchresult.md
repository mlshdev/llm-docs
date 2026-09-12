> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srfetchresult](https://developer.apple.com/documentation/sensorkit/srfetchresult)

# SRFetchResult (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Recorded data that a sensor reader fetches.

## Declaration

```swift
class SRFetchResult<SampleType> where SampleType : AnyObject
```

<a id="overview"></a>

## Overview

A sensor reader’s [delegate](srsensorreader/delegate.md) receives instances of this class from the [sensorReader(\_:didCompleteFetch:)](srsensorreaderdelegate/sensorreader%28__didcompletefetch_%29.md) when a fetch request finishes successfully.

Results are in the form of samples, which are of varying types depending on the reader’s sensor. For a list of sample types per sensor, see [Sample types](srfetchresult/sample.md#Sample-types).

## Topics

### Sampling Data

- [sample](srfetchresult/sample.md): A recording that the sensor reader fetches.
- [timestamp](srfetchresult/timestamp.md): The time when the framework records the sample.

### Instance Properties

- [sourceDevice](srfetchresult/sourcedevice.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Querying data

- [SRFetchRequest](srfetchrequest.md): An object that defines the criteria for a sample query.

# SRFetchResult (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Recorded data that a sensor reader fetches.

## Declaration

```objectivec
@interface SRFetchResult : NSObject
```

<a id="overview"></a>

## Overview

A sensor reader’s [delegate](srsensorreader/delegate.md) receives instances of this class from the [sensorReader:didCompleteFetch:](srsensorreaderdelegate/sensorreader%28__didcompletefetch_%29.md) when a fetch request finishes successfully.

Results are in the form of samples, which are of varying types depending on the reader’s sensor. For a list of sample types per sensor, see [Sample types](srfetchresult/sample.md#Sample-types).

## Topics

### Sampling Data

- [sample](srfetchresult/sample.md): A recording that the sensor reader fetches.
- [timestamp](srfetchresult/timestamp.md): The time when the framework records the sample.

### Instance Properties

- [sourceDevice](srfetchresult/sourcedevice.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Querying data

- [SRFetchRequest](srfetchrequest.md): An object that defines the criteria for a sample query.
