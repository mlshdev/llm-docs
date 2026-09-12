> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/stoprangingbeacons(satisfying:)](https://developer.apple.com/documentation/corelocation/cllocationmanager/stoprangingbeacons(satisfying:))

# stopRangingBeacons(satisfying:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

Stops the delivery of notifications for the specified beacon constraints.

## Declaration

```swift
func stopRangingBeacons(satisfying constraint: CLBeaconIdentityConstraint)
```

## Parameters

- `constraint`: A [CLBeaconIdentityConstraint](../clbeaconidentityconstraint.md) constraint.

## See Also

### Performing beacon ranging

- [startRangingBeacons(satisfying:)](startrangingbeacons%28satisfying_%29.md): Starts the delivery of notifications for the specified beacon constraints.
- [rangedBeaconConstraints](rangedbeaconconstraints.md): The set of beacon constraints currently being tracked using ranging.

# stopRangingBeaconsSatisfyingConstraint: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

Stops the delivery of notifications for the specified beacon constraints.

## Declaration

```objectivec
- (void) stopRangingBeaconsSatisfyingConstraint:(CLBeaconIdentityConstraint *) constraint;
```

## Parameters

- `constraint`: A [CLBeaconIdentityConstraint](../clbeaconidentityconstraint.md) constraint.

## See Also

### Performing beacon ranging

- [startRangingBeaconsSatisfyingConstraint:](startrangingbeacons%28satisfying_%29.md): Starts the delivery of notifications for the specified beacon constraints.
- [rangedBeaconConstraints](rangedbeaconconstraints.md): The set of beacon constraints currently being tracked using ranging.
