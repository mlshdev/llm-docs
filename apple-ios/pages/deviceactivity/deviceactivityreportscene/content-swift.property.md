> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/deviceactivity/deviceactivityreportscene/content-swift.property

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
