> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srfetchrequest](https://developer.apple.com/documentation/sensorkit/srfetchrequest)

# SRFetchRequest (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An object that defines the criteria for a sample query.

## Declaration

```swift
class SRFetchRequest
```

<a id="overview"></a>

## Overview

An app configures an instance of this class to select the device from which to query sensor data. The time range ([from](srfetchrequest/from.md), [to](srfetchrequest/to.md)) specifies when the framework records the data. A fetch query can retrieve only sensor data that the app records by first calling [startRecording()](srsensorreader/startrecording%28%29.md).

To execute a fetch request, an app passes the instance of this class to its sensor reader’s [fetch(\_:)](srsensorreader/fetch%28__%29.md) function.

The framework notifies the sensor reader’s [delegate](srsensorreader/delegate.md) upon fetch-request completion with [sensorReader(\_:didCompleteFetch:)](srsensorreaderdelegate/sensorreader%28__didcompletefetch_%29.md). If the fetch fails, the framework calls the delegate’s [sensorReader(\_:fetching:failedWithError:)](srsensorreaderdelegate/sensorreader%28__fetching_failedwitherror_%29.md).

SensorKit places a 24-hour holding period on newly recorded data before an app can access it. This gives the user an opportunity to delete any data they don’t want to share with the app. A fetch request doesn’t return any results if its time range overlaps this holding period.

## Topics

### Selecting the Device

- [device](srfetchrequest/device.md): The device to query for sample data.
- [SRDevice](srdevice.md): A representation of a device that provides sample data.

### Defining the Time Range

- [from](srfetchrequest/from.md): Fetches sample information that occurs after this time.
- [to](srfetchrequest/to.md): Fetches sample information that occurs before this time.
- [SRAbsoluteTime](srabsolutetime.md): A value that describes when the system records the data.
- [current()](srabsolutetime/current%28%29.md): Provides the current absolute time.
- [toCFAbsoluteTime()](srabsolutetime/tocfabsolutetime%28%29.md): Converts an absolute time to a core-foundation absolute time.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Querying data

- [SRFetchResult](srfetchresult.md): Recorded data that a sensor reader fetches.

# SRFetchRequest (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An object that defines the criteria for a sample query.

## Declaration

```objectivec
@interface SRFetchRequest : NSObject
```

<a id="overview"></a>

## Overview

An app configures an instance of this class to select the device from which to query sensor data. The time range ([from](srfetchrequest/from.md), [to](srfetchrequest/to.md)) specifies when the framework records the data. A fetch query can retrieve only sensor data that the app records by first calling [startRecording](srsensorreader/startrecording%28%29.md).

To execute a fetch request, an app passes the instance of this class to its sensor reader’s [fetch:](srsensorreader/fetch%28__%29.md) function.

The framework notifies the sensor reader’s [delegate](srsensorreader/delegate.md) upon fetch-request completion with [sensorReader:didCompleteFetch:](srsensorreaderdelegate/sensorreader%28__didcompletefetch_%29.md). If the fetch fails, the framework calls the delegate’s [sensorReader:fetchingRequest:failedWithError:](srsensorreaderdelegate/sensorreader%28__fetching_failedwitherror_%29.md).

SensorKit places a 24-hour holding period on newly recorded data before an app can access it. This gives the user an opportunity to delete any data they don’t want to share with the app. A fetch request doesn’t return any results if its time range overlaps this holding period.

## Topics

### Selecting the Device

- [device](srfetchrequest/device.md): The device to query for sample data.
- [SRDevice](srdevice.md): A representation of a device that provides sample data.

### Defining the Time Range

- [from](srfetchrequest/from.md): Fetches sample information that occurs after this time.
- [to](srfetchrequest/to.md): Fetches sample information that occurs before this time.
- [SRAbsoluteTime](srabsolutetime.md): A value that describes when the system records the data.
- [SRAbsoluteTimeGetCurrent](srabsolutetime/current%28%29.md): Provides the current absolute time.
- [SRAbsoluteTimeFromCFAbsoluteTime](srabsolutetimefromcfabsolutetime.md): Provides an absolute time equivalent to the argument core-foundation absolute time.
- [SRAbsoluteTimeFromContinuousTime](srabsolutetimefromcontinuoustime.md): Provides an absolute time equivalent to the argument continuous time.
- [SRAbsoluteTimeToCFAbsoluteTime](srabsolutetime/tocfabsolutetime%28%29.md): Converts an absolute time to a core-foundation absolute time.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Querying data

- [SRFetchResult](srfetchresult.md): Recorded data that a sensor reader fetches.
