> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmedicationdoseevent/dosequantity-52hxr](https://developer.apple.com/documentation/healthkit/hkmedicationdoseevent/dosequantity-52hxr)

# doseQuantity

**Interface language:** Objective-C

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The dose quantity the person reports as taken.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSNumber * doseQuantity;
```

<a id="discussion"></a>

## Discussion

For scheduled dose events, the value defaults to the [scheduledDoseQuantity](scheduleddosequantity-477ge.md), when logged from a reminder. For as needed dose events, the value defaults to `1` in the medication tracking experience, but can always be edited by the person logging.
