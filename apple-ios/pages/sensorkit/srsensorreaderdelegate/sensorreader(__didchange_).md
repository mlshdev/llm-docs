> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensorreaderdelegate/sensorreader(_:didchange:)](https://developer.apple.com/documentation/sensorkit/srsensorreaderdelegate/sensorreader(_:didchange:))

# sensorReader(\_:didChange:) (Swift)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0)

Notifies the delegate of the reader’s new authorization status.

> Use SRReader\<Sensor\> class

## Declaration

```swift
optional func sensorReader(_ reader: SRSensorReader, didChange authorizationStatus: SRAuthorizationStatus)
```

## Parameters

- `reader`: The sensor reader whose authorization state changed.
- `authorizationStatus`: A flag indicating whether the framework authorizes the sensor reader.

# sensorReader:didChangeAuthorizationStatus: (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Notifies the delegate of the reader’s new authorization status.

## Declaration

```objectivec
- (void) sensorReader:(SRSensorReader *) reader didChangeAuthorizationStatus:(SRAuthorizationStatus) authorizationStatus;
```

## Parameters

- `reader`: The sensor reader whose authorization state changed.
- `authorizationStatus`: A flag indicating whether the framework authorizes the sensor reader.
