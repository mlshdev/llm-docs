> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corelocation/cllocationmanager/startrangingbeacons(satisfying:)

# startRangingBeacons(satisfying:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

Starts the delivery of notifications for the specified beacon constraints.

## Declaration

```swift
func startRangingBeacons(satisfying constraint: CLBeaconIdentityConstraint)
```

## Parameters

- `constraint`: A [CLBeaconIdentityConstraint](../clbeaconidentityconstraint.md) constraint.

## See Also

### Performing beacon ranging

- [stopRangingBeacons(satisfying:)](stoprangingbeacons%28satisfying_%29.md): Stops the delivery of notifications for the specified beacon constraints.
- [rangedBeaconConstraints](rangedbeaconconstraints.md): The set of beacon constraints currently being tracked using ranging.

# startRangingBeaconsSatisfyingConstraint: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

Starts the delivery of notifications for the specified beacon constraints.

## Declaration

```objectivec
- (void) startRangingBeaconsSatisfyingConstraint:(CLBeaconIdentityConstraint *) constraint;
```

## Parameters

- `constraint`: A [CLBeaconIdentityConstraint](../clbeaconidentityconstraint.md) constraint.

## See Also

### Performing beacon ranging

- [stopRangingBeaconsSatisfyingConstraint:](stoprangingbeacons%28satisfying_%29.md): Stops the delivery of notifications for the specified beacon constraints.
- [rangedBeaconConstraints](rangedbeaconconstraints.md): The set of beacon constraints currently being tracked using ranging.
