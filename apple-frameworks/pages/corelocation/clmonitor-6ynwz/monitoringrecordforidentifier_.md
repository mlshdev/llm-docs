> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clmonitor-6ynwz/monitoringrecordforidentifier:](https://developer.apple.com/documentation/corelocation/clmonitor-6ynwz/monitoringrecordforidentifier:)

# monitoringRecordForIdentifier:

**Interface language:** Objective-C

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Gets the monitoring record containing the condition and most recent monitoring event for the identifier you supply, if applicable.

## Declaration

```objectivec
- (CLMonitoringRecord *) monitoringRecordForIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: A string that identifies the monitoring record.

<a id="return-value"></a>

## Return Value

The monitoring record; otherwise, [nil](../../objectivec/nil-227m0.md).

## See Also

### Adding and removing conditions

- [addConditionForMonitoring:identifier:](addconditionformonitoring_identifier_.md): Adds a condition to monitor with the identifier you provide.
- [addConditionForMonitoring:identifier:assumedState:](addconditionformonitoring_identifier_assumedstate_.md): Adds a condition to monitor with the state and identifier you provide.
- [removeConditionFromMonitoringWithIdentifier:](removeconditionfrommonitoringwithidentifier_.md): Removes the monitoring record with the identifier from monitoring.
