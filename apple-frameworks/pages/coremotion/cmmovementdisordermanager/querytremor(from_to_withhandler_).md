> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmovementdisordermanager/querytremor(from:to:withhandler:)](https://developer.apple.com/documentation/coremotion/cmmovementdisordermanager/querytremor(from:to:withhandler:))

# queryTremor(from:to:withHandler:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** watchOS 5.0+

Query for tremor results from the provided time interval.

## Declaration

```swift
func queryTremor(from fromDate: Date, to toDate: Date, withHandler handler: @escaping CMTremorResultHandler)
```

## Parameters

- `fromDate`: The start date and time of the query. The start must be within the last seven days.
- `toDate`: The end date and time of the query. The end must be within the last seven days, and must be after the start date.
- `handler`: A block for handling the tremor results returned by the query.

<a id="Discussion"></a>

## Discussion

Use this method to asynchronously query for tremor results recorded by the [monitorKinesias(forDuration:)](monitorkinesias%28forduration_%29.md) method. The movement disorder manager keeps tremor results for only seven days after the time of recording.

After the manager retrieves the queried results, it calls your handler block from an anonymous background queue. Provide a completion handler to access and process these results.

## See Also

### Related Documentation

- [monitorKinesias(forDuration:)](monitorkinesias%28forduration_%29.md): Calculate and store tremor and dyskinetic symptom results for the duration of the specified time interval.

### Querying for Movement Disorders

- [CMTremorResultHandler](../cmtremorresulthandler.md): A completion handler for accessing and processing tremor results.
- [queryDyskineticSymptom(from:to:withHandler:)](querydyskineticsymptom%28from_to_withhandler_%29.md): Query for dyskinetic symptoms from the provided time interval.
- [CMDyskineticSymptomResultHandler](../cmdyskineticsymptomresulthandler.md): A completion handler for processing dyskinetic symptom results.
- [lastProcessedDate()](lastprocesseddate%28%29.md): Returns the date of the most recently calculated results.

# queryTremorFromDate:toDate:withHandler: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** watchOS 5.0+

Query for tremor results from the provided time interval.

## Declaration

```objectivec
- (void) queryTremorFromDate:(NSDate *) fromDate toDate:(NSDate *) toDate withHandler:(CMTremorResultHandler) handler;
```

## Parameters

- `fromDate`: The start date and time of the query. The start must be within the last seven days.
- `toDate`: The end date and time of the query. The end must be within the last seven days, and must be after the start date.
- `handler`: A block for handling the tremor results returned by the query.

<a id="Discussion"></a>

## Discussion

Use this method to asynchronously query for tremor results recorded by the [monitorKinesiasForDuration:](monitorkinesias%28forduration_%29.md) method. The movement disorder manager keeps tremor results for only seven days after the time of recording.

After the manager retrieves the queried results, it calls your handler block from an anonymous background queue. Provide a completion handler to access and process these results.

## See Also

### Related Documentation

- [monitorKinesiasForDuration:](monitorkinesias%28forduration_%29.md): Calculate and store tremor and dyskinetic symptom results for the duration of the specified time interval.

### Querying for Movement Disorders

- [CMTremorResultHandler](../cmtremorresulthandler.md): A completion handler for accessing and processing tremor results.
- [queryDyskineticSymptomFromDate:toDate:withHandler:](querydyskineticsymptom%28from_to_withhandler_%29.md): Query for dyskinetic symptoms from the provided time interval.
- [CMDyskineticSymptomResultHandler](../cmdyskineticsymptomresulthandler.md): A completion handler for processing dyskinetic symptom results.
- [lastProcessedDate](lastprocesseddate%28%29.md): Returns the date of the most recently calculated results.
