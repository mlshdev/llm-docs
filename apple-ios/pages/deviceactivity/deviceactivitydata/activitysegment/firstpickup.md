> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/deviceactivity/deviceactivitydata/activitysegment/firstpickup

# firstPickup

**Framework:** Device Activity  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Access the first time the person picked up the device during the activity segment.

## Declaration

```swift
var firstPickup: Date?
```

<a id="Discussion"></a>

## Discussion

This value may be `nil` if the person never picked up the device during [dateInterval](dateinterval.md).

## See Also

### Tracking device usage

- [totalPickupsWithoutApplicationActivity](totalpickupswithoutapplicationactivity.md): Access the number of device pickups without application use.
