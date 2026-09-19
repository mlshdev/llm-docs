> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/deviceactivity/deviceactivityfilter/users-swift.property

# users

**Framework:** Device Activity  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

The users to include in a report.

## Declaration

```swift
let users: DeviceActivityFilter.Users?
```

<a id="discussion"></a>

## Discussion

If `nil`, then the filter only includes data for the current user.
