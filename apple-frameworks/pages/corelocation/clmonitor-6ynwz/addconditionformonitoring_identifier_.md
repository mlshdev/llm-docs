> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clmonitor-6ynwz/addconditionformonitoring:identifier:](https://developer.apple.com/documentation/corelocation/clmonitor-6ynwz/addconditionformonitoring:identifier:)

# addConditionForMonitoring:identifier:

**Interface language:** Objective-C

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Adds a condition to monitor with the identifier you provide.

## Declaration

```objectivec
- (void) addConditionForMonitoring:(CLCondition *) condition identifier:(NSString *) identifier;
```

## Parameters

- `condition`: A [CLCondition](../clcondition-swift.protocol.md) to monitor for.
- `identifier`: A string you use to identify this condition.

## See Also

### Adding and removing conditions

- [addConditionForMonitoring:identifier:assumedState:](addconditionformonitoring_identifier_assumedstate_.md): Adds a condition to monitor with the state and identifier you provide.
- [monitoringRecordForIdentifier:](monitoringrecordforidentifier_.md): Gets the monitoring record containing the condition and most recent monitoring event for the identifier you supply, if applicable.
- [removeConditionFromMonitoringWithIdentifier:](removeconditionfrommonitoringwithidentifier_.md): Removes the monitoring record with the identifier from monitoring.
