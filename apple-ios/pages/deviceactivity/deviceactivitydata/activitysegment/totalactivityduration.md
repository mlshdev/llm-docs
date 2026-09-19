> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/deviceactivity/deviceactivitydata/activitysegment/totalactivityduration

# totalActivityDuration

**Framework:** Device Activity  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Access the total activity time during the activity segment.

## Declaration

```swift
var totalActivityDuration: TimeInterval
```

<a id="Discussion"></a>

## Discussion

This value represents the total amount of time the device’s screen remained on during [dateInterval](dateinterval.md).

## See Also

### Measuring activity

- [longestActivity](longestactivity.md): Access the date interval of the longest activity session during the activity segment.
