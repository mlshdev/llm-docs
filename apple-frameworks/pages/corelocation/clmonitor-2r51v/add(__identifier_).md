> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clmonitor-2r51v/add(_:identifier:)](https://developer.apple.com/documentation/corelocation/clmonitor-2r51v/add(_:identifier:))

# add(\_:identifier:)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Adds the given condition for monitoring.

## Declaration

```swift
func add(_ Condition: any CLCondition, identifier: String)
```

## Parameters

- `Condition`: The condition to monitor.
- `identifier`: A string that identifies the monitored condition.

<a id="Discussion"></a>

## Discussion

The framework encapsulates the condition in an instance of [CLMonitor.Record](record.md) and then associates the record, along with the condition with the given identifier. The initial state is [CLRegionState.unknown](../clregionstate/unknown.md).

## See Also

### Adding and removing conditions

- [add(\_:identifier:assuming:)](add%28__identifier_assuming_%29.md): Adds the monitoring condition with the identifier and initial state you specify.
- [record(for:)](record%28for_%29.md): A record that contains a condition and the most recent event your app receives.
- [remove(\_:)](remove%28__%29.md): Removes the condition and its enclosed record associated with the identifier you provide.
