> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/deviceactivity/deviceactivitydata/activitysegment/longestactivity

# longestActivity

**Framework:** Device Activity  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Access the date interval of the longest activity session during the activity segment.

## Declaration

```swift
var longestActivity: DateInterval?
```

<a id="Discussion"></a>

## Discussion

This value may be `nil` if the person didn’t use this device during [dateInterval](dateinterval.md).

## See Also

### Measuring activity

- [totalActivityDuration](totalactivityduration.md): Access the total activity time during the activity segment.
