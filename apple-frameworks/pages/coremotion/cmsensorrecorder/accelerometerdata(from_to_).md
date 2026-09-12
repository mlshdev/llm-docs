> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmsensorrecorder/accelerometerdata(from:to:)](https://developer.apple.com/documentation/coremotion/cmsensorrecorder/accelerometerdata(from:to:))

# accelerometerData(from:to:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Retrieves the accelerometer data collected between the specified dates.

## Declaration

```swift
func accelerometerData(from fromDate: Date, to toDate: Date) -> CMSensorDataList?
```

## Parameters

- `fromDate`: The starting date (inclusive) from which to retrieve data. Entries occurring before this date are excluded from the results.
- `toDate`: The end date (inclusive) at which to stop retrieving data. Entries occurring after this date are excluded from the results. The difference in time between the `fromDate` and this parameter must be 12 hours or less.

<a id="return-value"></a>

## Return Value

An object to use for enumerating over the accelerometer data.

<a id="Discussion"></a>

## Discussion

Use this method to fetch accelerometer data entries in the specified date range. When fetching entries for a date range, the recorder returns only the data entries it has. If there were gaps in the recording, no data entries are returned for those gaps. Recorded accelerometer data is kept for a maximum of three days. There may be a delay of up to three minutes before new samples are available for retrieval.

# accelerometerDataFromDate:toDate: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Retrieves the accelerometer data collected between the specified dates.

## Declaration

```objectivec
- (CMSensorDataList *) accelerometerDataFromDate:(NSDate *) fromDate toDate:(NSDate *) toDate;
```

## Parameters

- `fromDate`: The starting date (inclusive) from which to retrieve data. Entries occurring before this date are excluded from the results.
- `toDate`: The end date (inclusive) at which to stop retrieving data. Entries occurring after this date are excluded from the results. The difference in time between the `fromDate` and this parameter must be 12 hours or less.

<a id="return-value"></a>

## Return Value

An object to use for enumerating over the accelerometer data.

<a id="Discussion"></a>

## Discussion

Use this method to fetch accelerometer data entries in the specified date range. When fetching entries for a date range, the recorder returns only the data entries it has. If there were gaps in the recording, no data entries are returned for those gaps. Recorded accelerometer data is kept for a maximum of three days. There may be a delay of up to three minutes before new samples are available for retrieval.
