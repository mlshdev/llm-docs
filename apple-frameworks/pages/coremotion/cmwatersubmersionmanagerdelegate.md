> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmwatersubmersionmanagerdelegate](https://developer.apple.com/documentation/coremotion/cmwatersubmersionmanagerdelegate)

# CMWaterSubmersionManagerDelegate (Swift)

**Framework:** Core Motion  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+ · watchOS 9.0+

A delegate that receives updates about ambient pressure, water pressure, water temperature, and submersion events.

## Declaration

```swift
protocol CMWaterSubmersionManagerDelegate : NSObjectProtocol
```

## Mentioned In

- [Accessing submersion data](accessing-submersion-data.md)

<a id="overview"></a>

## Overview

The system calls your delegate’s methods to provide updated data to your app. When the watch isn’t submerged, your app receives event, measurement, and error messages. However, the measurement updates include only surface pressure and submersion state data. After submersion, the measurement updates include depth and water pressure data. The watch also begins receiving water temperature updates.

> **Note**

>  The system calls all the delegate’s methods on an anonymous background queue. Typically, you need to dispatch this data to the main queue or pass it to a [MainActor](https://developer.apple.com/documentation/swift/mainactor) object before updating the user interface.

The system sends measurement and temperature updates three times a second while the watch is submerged. When the watch is on the surface, the system provides updates at a slower rate, and may stop providing updates if the watch isn’t moving.

## Topics

### Receiving updates

- [manager(\_:didUpdate:)](cmwatersubmersionmanagerdelegate/manager%28__didupdate_%29-6qux6.md): Tells the delegate when a water submersion event occurs.
- [manager(\_:didUpdate:)](cmwatersubmersionmanagerdelegate/manager%28__didupdate_%29-7nhjb.md): Provides the delegate with a new set of pressure and depth measurements.
- [manager(\_:didUpdate:)](cmwatersubmersionmanagerdelegate/manager%28__didupdate_%29-18wua.md): Provides the delegate with updated water temperature data.
- [manager(\_:errorOccurred:)](cmwatersubmersionmanagerdelegate/manager%28__erroroccurred_%29.md): Tells the delegate when an error occurs.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Water submersion

- [Accessing submersion data](accessing-submersion-data.md): Use a water-submersion manager to receive water pressure, temperature, and depth data on Apple Watch Ultra.
- [CMWaterSubmersionManager](cmwatersubmersionmanager.md): An object for managing the collection of pressure and temperature data during submersion.
- [CMWaterSubmersionEvent](cmwatersubmersionevent.md): An event indicating that the device’s submersion state has changed.
- [CMWaterSubmersionMeasurement](cmwatersubmersionmeasurement.md): An update that contains data about the pressure and depth.
- [CMWaterTemperature](cmwatertemperature.md): An update that contains data about the water temperature.

# CMWaterSubmersionManagerDelegate (Objective-C)

**Framework:** Core Motion  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A delegate that receives updates about ambient pressure, water pressure, water temperature, and submersion events.

## Declaration

```objectivec
@protocol CMWaterSubmersionManagerDelegate <NSObject>
```

## Mentioned In

- [Accessing submersion data](accessing-submersion-data.md)

<a id="overview"></a>

## Overview

The system calls your delegate’s methods to provide updated data to your app. When the watch isn’t submerged, your app receives event, measurement, and error messages. However, the measurement updates include only surface pressure and submersion state data. After submersion, the measurement updates include depth and water pressure data. The watch also begins receiving water temperature updates.

> **Note**

>  The system calls all the delegate’s methods on an anonymous background queue. Typically, you need to dispatch this data to the main queue or pass it to a [MainActor](https://developer.apple.com/documentation/swift/mainactor) object before updating the user interface.

The system sends measurement and temperature updates three times a second while the watch is submerged. When the watch is on the surface, the system provides updates at a slower rate, and may stop providing updates if the watch isn’t moving.

## Topics

### Receiving updates

- [manager:didUpdateEvent:](cmwatersubmersionmanagerdelegate/manager%28__didupdate_%29-6qux6.md): Tells the delegate when a water submersion event occurs.
- [manager:didUpdateMeasurement:](cmwatersubmersionmanagerdelegate/manager%28__didupdate_%29-7nhjb.md): Provides the delegate with a new set of pressure and depth measurements.
- [manager:didUpdateTemperature:](cmwatersubmersionmanagerdelegate/manager%28__didupdate_%29-18wua.md): Provides the delegate with updated water temperature data.
- [manager:errorOccurred:](cmwatersubmersionmanagerdelegate/manager%28__erroroccurred_%29.md): Tells the delegate when an error occurs.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Water submersion

- [Accessing submersion data](accessing-submersion-data.md): Use a water-submersion manager to receive water pressure, temperature, and depth data on Apple Watch Ultra.
- [CMWaterSubmersionManager](cmwatersubmersionmanager.md): An object for managing the collection of pressure and temperature data during submersion.
- [CMWaterSubmersionEvent](cmwatersubmersionevent.md): An event indicating that the device’s submersion state has changed.
- [CMWaterSubmersionMeasurement](cmwatersubmersionmeasurement.md): An update that contains data about the pressure and depth.
- [CMWaterTemperature](cmwatertemperature.md): An update that contains data about the water temperature.
