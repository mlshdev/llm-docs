> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clmonitor-6ynwz/removeconditionfrommonitoringwithidentifier:](https://developer.apple.com/documentation/corelocation/clmonitor-6ynwz/removeconditionfrommonitoringwithidentifier:)

# removeConditionFromMonitoringWithIdentifier:

**Interface language:** Objective-C

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Removes the monitoring record with the identifier from monitoring.

## Declaration

```objectivec
- (void) removeConditionFromMonitoringWithIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: A string that identifies the monitoring record.

## See Also

### Adding and removing conditions

- [addConditionForMonitoring:identifier:](addconditionformonitoring_identifier_.md): Adds a condition to monitor with the identifier you provide.
- [addConditionForMonitoring:identifier:assumedState:](addconditionformonitoring_identifier_assumedstate_.md): Adds a condition to monitor with the state and identifier you provide.
- [monitoringRecordForIdentifier:](monitoringrecordforidentifier_.md): Gets the monitoring record containing the condition and most recent monitoring event for the identifier you supply, if applicable.
