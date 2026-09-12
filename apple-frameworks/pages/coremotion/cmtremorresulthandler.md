> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmtremorresulthandler](https://developer.apple.com/documentation/coremotion/cmtremorresulthandler)

# CMTremorResultHandler (Swift)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** watchOS 5.0+

A completion handler for accessing and processing tremor results.

## Declaration

```swift
typealias CMTremorResultHandler = ([CMTremorResult], (any Error)?) -> Void
```

## Parameters

- `tremorResult`: An array of tremor results found by the query.
- `error`: If an error occurred, this parameter contains information about the error; otherwise it is `nil`.

## See Also

### Querying for Movement Disorders

- [queryTremor(from:to:withHandler:)](cmmovementdisordermanager/querytremor%28from_to_withhandler_%29.md): Query for tremor results from the provided time interval.
- [queryDyskineticSymptom(from:to:withHandler:)](cmmovementdisordermanager/querydyskineticsymptom%28from_to_withhandler_%29.md): Query for dyskinetic symptoms from the provided time interval.
- [CMDyskineticSymptomResultHandler](cmdyskineticsymptomresulthandler.md): A completion handler for processing dyskinetic symptom results.
- [lastProcessedDate()](cmmovementdisordermanager/lastprocesseddate%28%29.md): Returns the date of the most recently calculated results.

# CMTremorResultHandler (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** watchOS 5.0+

A completion handler for accessing and processing tremor results.

## Declaration

```objectivec
typedef void (^)(NSArray<CMTremorResult *> *, NSError *) CMTremorResultHandler;
```

## Parameters

- `tremorResult`: An array of tremor results found by the query.
- `error`: If an error occurred, this parameter contains information about the error; otherwise it is `nil`.

## See Also

### Querying for Movement Disorders

- [queryTremorFromDate:toDate:withHandler:](cmmovementdisordermanager/querytremor%28from_to_withhandler_%29.md): Query for tremor results from the provided time interval.
- [queryDyskineticSymptomFromDate:toDate:withHandler:](cmmovementdisordermanager/querydyskineticsymptom%28from_to_withhandler_%29.md): Query for dyskinetic symptoms from the provided time interval.
- [CMDyskineticSymptomResultHandler](cmdyskineticsymptomresulthandler.md): A completion handler for processing dyskinetic symptom results.
- [lastProcessedDate](cmmovementdisordermanager/lastprocesseddate%28%29.md): Returns the date of the most recently calculated results.
