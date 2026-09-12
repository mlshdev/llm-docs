> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmovementdisordermanager/monitorkinesias(forduration:)](https://developer.apple.com/documentation/coremotion/cmmovementdisordermanager/monitorkinesias(forduration:))

# monitorKinesias(forDuration:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** watchOS 5.0+

Calculate and store tremor and dyskinetic symptom results for the duration of the specified time interval.

## Declaration

```swift
func monitorKinesias(forDuration duration: TimeInterval)
```

## Parameters

- `duration`: The monitoring duration in seconds. The maximum duration is seven days.

## Mentioned In

- [Getting movement disorder symptom data](../getting-movement-disorder-symptom-data.md)

<a id="Discussion"></a>

## Discussion

Call this method to begin monitoring, calculating, and storing tremor and dyskinetic symptom results. The manager stores results for a period of seven days after the time of recording. You can access the results at any time within that seven-day interval, after which they expire. To retrieve these results, call the [queryTremor(from:to:withHandler:)](querytremor%28from_to_withhandler_%29.md) and [queryDyskineticSymptom(from:to:withHandler:)](querydyskineticsymptom%28from_to_withhandler_%29.md) methods.

To determine whether the results are currently being monitored and calculated, call the [monitorKinesiasExpirationDate()](monitorkinesiasexpirationdate%28%29.md) method. The maximum monitoring duration is seven days. In order to continue monitoring beyond the expiration date, you need to renew your subscription by calling [monitorKinesias(forDuration:)](monitorkinesias%28forduration_%29.md) again before the monitoring period expires. Note that repeated calls allow you to extend monitoring, but not shorten it.

## See Also

### Related Documentation

- [queryTremor(from:to:withHandler:)](querytremor%28from_to_withhandler_%29.md): Query for tremor results from the provided time interval.
- [queryDyskineticSymptom(from:to:withHandler:)](querydyskineticsymptom%28from_to_withhandler_%29.md): Query for dyskinetic symptoms from the provided time interval.

### Recording Movement Disorders

- [monitorKinesiasExpirationDate()](monitorkinesiasexpirationdate%28%29.md): Returns the expiration date for the most recent monitoring period.

# monitorKinesiasForDuration: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** watchOS 5.0+

Calculate and store tremor and dyskinetic symptom results for the duration of the specified time interval.

## Declaration

```objectivec
- (void) monitorKinesiasForDuration:(NSTimeInterval) duration;
```

## Parameters

- `duration`: The monitoring duration in seconds. The maximum duration is seven days.

## Mentioned In

- [Getting movement disorder symptom data](../getting-movement-disorder-symptom-data.md)

<a id="Discussion"></a>

## Discussion

Call this method to begin monitoring, calculating, and storing tremor and dyskinetic symptom results. The manager stores results for a period of seven days after the time of recording. You can access the results at any time within that seven-day interval, after which they expire. To retrieve these results, call the [queryTremorFromDate:toDate:withHandler:](querytremor%28from_to_withhandler_%29.md) and [queryDyskineticSymptomFromDate:toDate:withHandler:](querydyskineticsymptom%28from_to_withhandler_%29.md) methods.

To determine whether the results are currently being monitored and calculated, call the [monitorKinesiasExpirationDate](monitorkinesiasexpirationdate%28%29.md) method. The maximum monitoring duration is seven days. In order to continue monitoring beyond the expiration date, you need to renew your subscription by calling [monitorKinesiasForDuration:](monitorkinesias%28forduration_%29.md) again before the monitoring period expires. Note that repeated calls allow you to extend monitoring, but not shorten it.

## See Also

### Related Documentation

- [queryTremorFromDate:toDate:withHandler:](querytremor%28from_to_withhandler_%29.md): Query for tremor results from the provided time interval.
- [queryDyskineticSymptomFromDate:toDate:withHandler:](querydyskineticsymptom%28from_to_withhandler_%29.md): Query for dyskinetic symptoms from the provided time interval.

### Recording Movement Disorders

- [monitorKinesiasExpirationDate](monitorkinesiasexpirationdate%28%29.md): Returns the expiration date for the most recent monitoring period.
