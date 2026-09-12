> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmrecordedaccelerometerdata/identifier](https://developer.apple.com/documentation/coremotion/cmrecordedaccelerometerdata/identifier)

# identifier (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

The unique identifier for the accelerometer data.

## Declaration

```swift
var identifier: UInt64 { get }
```

<a id="Discussion"></a>

## Discussion

Accelerometer data is recorded in batches, which are assigned a unique identifier. This property contains the identifier of the batch in which this particular sample was recorded.

## See Also

### Getting the Accelerometer Data

- [startDate](startdate.md): The wall clock time when the sensor sample was recorded.

# identifier (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

The unique identifier for the accelerometer data.

## Declaration

```objectivec
@property (readonly) uint64_t identifier;
```

<a id="Discussion"></a>

## Discussion

Accelerometer data is recorded in batches, which are assigned a unique identifier. This property contains the identifier of the batch in which this particular sample was recorded.

## See Also

### Getting the Accelerometer Data

- [startDate](startdate.md): The wall clock time when the sensor sample was recorded.
