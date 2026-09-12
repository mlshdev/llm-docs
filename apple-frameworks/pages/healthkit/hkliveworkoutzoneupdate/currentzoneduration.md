> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkliveworkoutzoneupdate/currentzoneduration](https://developer.apple.com/documentation/healthkit/hkliveworkoutzoneupdate/currentzoneduration)

# currentZoneDuration

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · watchOS 27.0+

A property that contains the zone duration just entered.

## Declaration

```swift
@nonobjc final var currentZoneDuration: HKWorkoutZoneDuration? { get }
```

<a id="discussion"></a>

## Discussion

When this property is `nil`, no zone is currently active.

## See Also

### Accessing zone data

- [previousZoneDuration](previouszoneduration.md): A property that contains the zone duration that just completed.
- [zoneGroup](zonegroup.md): The zone group that contains the current duration data.
