> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkelectrocardiogramquery/init(electrocardiogram:datahandler:)](https://developer.apple.com/documentation/healthkit/hkelectrocardiogramquery/init(electrocardiogram:datahandler:))

# init(electrocardiogram:dataHandler:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Creates a new electrocardiogram query object.

## Declaration

```swift
init(electrocardiogram: HKElectrocardiogram, dataHandler: @escaping (HKElectrocardiogramQuery, HKElectrocardiogram.VoltageMeasurement?, Bool, (any Error)?) -> Void)
```

## Parameters

- `electrocardiogram`: The electrocardiogram sample whose voltages you want to access.
- `dataHandler`: A block that the query calls repeatedly to return the voltage data. The handler takes the following parameters:

  - **`query`**: The query that returned the results.
  - **`voltageMeasurement`**: A voltage measurement.
  - **`done`**: Indicates whether the query has additional voltage measurements to send.
  - **`error`**: If an error occurred, this parameter contains information about the error. Otherwise it’s `nil`.

<a id="Discussion"></a>

## Discussion

When you run the query, it calls the data handler once for each voltage measurement, passing the voltage data. On the last voltage measurement, it sets the `done` parameter to [true](https://developer.apple.com/documentation/swift/true). If an error occurs, it stops collecting voltage data and calls the data handler; it sets the `voltageMeasurement` parameter to `nil`, and passes in an [NSError](../../foundation/nserror.md) object that describes the error.

## See Also

### Accessing the Results

- [HKElectrocardiogramQuery.Result](result.md): Partial results for an electrocardiogram query.

# initWithElectrocardiogram:dataHandler: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a new electrocardiogram query object.

## Declaration

```objectivec
- (instancetype) initWithElectrocardiogram:(HKElectrocardiogram *) electrocardiogram dataHandler:(void (^)(HKElectrocardiogramQuery *query, HKElectrocardiogramVoltageMeasurement *voltageMeasurement, BOOL done, NSError *error)) dataHandler;
```

## Parameters

- `electrocardiogram`: The electrocardiogram sample whose voltages you want to access.
- `dataHandler`: A block that the query calls repeatedly to return the voltage data. The handler takes the following parameters:

  - **`query`**: The query that returned the results.
  - **`voltageMeasurement`**: A voltage measurement.
  - **`done`**: Indicates whether the query has additional voltage measurements to send.
  - **`error`**: If an error occurred, this parameter contains information about the error. Otherwise it’s `nil`.

<a id="Discussion"></a>

## Discussion

When you run the query, it calls the data handler once for each voltage measurement, passing the voltage data. On the last voltage measurement, it sets the `done` parameter to [true](https://developer.apple.com/documentation/swift/true). If an error occurs, it stops collecting voltage data and calls the data handler; it sets the `voltageMeasurement` parameter to `nil`, and passes in an [NSError](../../foundation/nserror.md) object that describes the error.
