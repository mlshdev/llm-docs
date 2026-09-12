> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkliveworkoutzoneupdate/previouszoneduration](https://developer.apple.com/documentation/healthkit/hkliveworkoutzoneupdate/previouszoneduration)

# previousZoneDuration

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · watchOS 27.0+

A property that contains the zone duration that just completed.

## Declaration

```swift
@nonobjc final var previousZoneDuration: HKWorkoutZoneDuration? { get }
```

<a id="discussion"></a>

## Discussion

When this property contains `nil`, it’s the first zone entry for the workout.

## See Also

### Accessing zone data

- [currentZoneDuration](currentzoneduration.md): A property that contains the zone duration just entered.
- [zoneGroup](zonegroup.md): The zone group that contains the current duration data.
