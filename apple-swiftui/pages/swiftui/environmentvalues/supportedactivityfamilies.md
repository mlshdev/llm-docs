> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/environmentvalues/supportedactivityfamilies

# supportedActivityFamilies

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

An environment value that that indicates potential rendered family for a Live Activity.

## Declaration

```swift
var supportedActivityFamilies: Set<ActivityFamily> { get set }
```

<a id="discussion"></a>

## Discussion

To detect the currently rendered activity family size, use the [activityFamily](activityfamily.md) environment variable. The `supportedActivityFamilies` environment value might only be useful if your make you make your Live Activity views available in a Swift package.
