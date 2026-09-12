> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmovementdisordermanager/lastprocesseddate()](https://developer.apple.com/documentation/coremotion/cmmovementdisordermanager/lastprocesseddate())

# lastProcessedDate() (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** watchOS 5.0+

Returns the date of the most recently calculated results.

## Declaration

```swift
func lastProcessedDate() -> Date?
```

<a id="return-value"></a>

## Return Value

The date of the most recently calculated results, or `nil` if no results are available.

<a id="Discussion"></a>

## Discussion

Because the manager processes results in batches, data may not be available immediately.  Use this method to determine the end date for the currently processed data. Additional data will continue to become available, until the manager processes everything up to the monitor expiration date.

This method returns `nil` if you have not yet begun monitoring the user, or if the manager has not yet processed any data.

## See Also

### Querying for Movement Disorders

- [queryTremor(from:to:withHandler:)](querytremor%28from_to_withhandler_%29.md): Query for tremor results from the provided time interval.
- [CMTremorResultHandler](../cmtremorresulthandler.md): A completion handler for accessing and processing tremor results.
- [queryDyskineticSymptom(from:to:withHandler:)](querydyskineticsymptom%28from_to_withhandler_%29.md): Query for dyskinetic symptoms from the provided time interval.
- [CMDyskineticSymptomResultHandler](../cmdyskineticsymptomresulthandler.md): A completion handler for processing dyskinetic symptom results.

# lastProcessedDate (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** watchOS 5.0+

Returns the date of the most recently calculated results.

## Declaration

```objectivec
- (NSDate *) lastProcessedDate;
```

<a id="return-value"></a>

## Return Value

The date of the most recently calculated results, or `nil` if no results are available.

<a id="Discussion"></a>

## Discussion

Because the manager processes results in batches, data may not be available immediately.  Use this method to determine the end date for the currently processed data. Additional data will continue to become available, until the manager processes everything up to the monitor expiration date.

This method returns `nil` if you have not yet begun monitoring the user, or if the manager has not yet processed any data.

## See Also

### Querying for Movement Disorders

- [queryTremorFromDate:toDate:withHandler:](querytremor%28from_to_withhandler_%29.md): Query for tremor results from the provided time interval.
- [CMTremorResultHandler](../cmtremorresulthandler.md): A completion handler for accessing and processing tremor results.
- [queryDyskineticSymptomFromDate:toDate:withHandler:](querydyskineticsymptom%28from_to_withhandler_%29.md): Query for dyskinetic symptoms from the provided time interval.
- [CMDyskineticSymptomResultHandler](../cmdyskineticsymptomresulthandler.md): A completion handler for processing dyskinetic symptom results.
