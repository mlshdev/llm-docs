> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/rangedbeaconconstraints](https://developer.apple.com/documentation/corelocation/cllocationmanager/rangedbeaconconstraints)

# rangedBeaconConstraints (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

The set of beacon constraints currently being tracked using ranging.

## Declaration

```swift
var rangedBeaconConstraints: Set<CLBeaconIdentityConstraint> { get }
```

## See Also

### Performing beacon ranging

- [startRangingBeacons(satisfying:)](startrangingbeacons%28satisfying_%29.md): Starts the delivery of notifications for the specified beacon constraints.
- [stopRangingBeacons(satisfying:)](stoprangingbeacons%28satisfying_%29.md): Stops the delivery of notifications for the specified beacon constraints.

# rangedBeaconConstraints (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

The set of beacon constraints currently being tracked using ranging.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSSet<CLBeaconIdentityConstraint *> * rangedBeaconConstraints;
```

## See Also

### Performing beacon ranging

- [startRangingBeaconsSatisfyingConstraint:](startrangingbeacons%28satisfying_%29.md): Starts the delivery of notifications for the specified beacon constraints.
- [stopRangingBeaconsSatisfyingConstraint:](stoprangingbeacons%28satisfying_%29.md): Stops the delivery of notifications for the specified beacon constraints.
