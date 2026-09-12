> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clmonitor-2r51v/remove(_:)](https://developer.apple.com/documentation/corelocation/clmonitor-2r51v/remove(_:))

# remove(\_:)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Removes the condition and its enclosed record associated with the identifier you provide.

## Declaration

```swift
func remove(_ identifier: String)
```

## Parameters

- `identifier`: A string that identifies the monitored condition.

## See Also

### Adding and removing conditions

- [add(\_:identifier:)](add%28__identifier_%29.md): Adds the given condition for monitoring.
- [add(\_:identifier:assuming:)](add%28__identifier_assuming_%29.md): Adds the monitoring condition with the identifier and initial state you specify.
- [record(for:)](record%28for_%29.md): A record that contains a condition and the most recent event your app receives.
