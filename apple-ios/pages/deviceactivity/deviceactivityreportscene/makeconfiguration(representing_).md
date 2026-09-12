> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityreportscene/makeconfiguration(representing:)](https://developer.apple.com/documentation/deviceactivity/deviceactivityreportscene/makeconfiguration(representing:))

# makeConfiguration(representing:)

**Framework:** DeviceActivity  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Creates a new configuration that represents the provided data.

## Declaration

```swift
func makeConfiguration(representing data: DeviceActivityResults<DeviceActivityData>) async -> Self.Configuration
```

<a id="discussion"></a>

## Discussion

Use this function to create a new configuration when your app changes the filter for a report or the system fetches more device activity data.
