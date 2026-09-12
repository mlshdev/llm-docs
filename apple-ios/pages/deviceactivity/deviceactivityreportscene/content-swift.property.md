> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityreportscene/content-swift.property](https://developer.apple.com/documentation/deviceactivity/deviceactivityreportscene/content-swift.property)

# content

**Framework:** DeviceActivity  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A closure that builds your report’s content with the provided configuration.

## Declaration

```swift
@ViewBuilder var content: (Self.Configuration) -> Self.Content { get }
```

<a id="discussion"></a>

## Discussion

Use this closure to update your scene’s content when your app changes the filter for a report or the system fetches more device activity data.
