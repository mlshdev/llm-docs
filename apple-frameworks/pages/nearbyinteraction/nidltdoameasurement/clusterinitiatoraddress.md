> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidltdoameasurement/clusterinitiatoraddress](https://developer.apple.com/documentation/nearbyinteraction/nidltdoameasurement/clusterinitiatoraddress)

# clusterInitiatorAddress (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The address of the initiator anchor within the same cluster.

## Declaration

```swift
var clusterInitiatorAddress: Int { get }
```

<a id="discussion"></a>

## Discussion

In DL-TDOA deployments, anchors organize into clusters. An anchor cluster contains an initiator anchor and one or more responder anchors. The initiator coordinates a ranging sequence by sending an initial poll message.

Use this property to group measurements from anchors that belong to the same cluster. Measurements with the same value for this property originate from anchors in the same cluster, even if their individual [address](address.md) differs.

<a id="Group-measurements-by-cluster"></a>

### Group measurements by cluster

To process measurements from related anchors together, group the measurements by cluster:

```swift
func session(_ session: NISession, didUpdateDLTDOA measurements: [NIDLTDOAMeasurement]) {
    // Group measurements by cluster.
    let clusters = Dictionary(grouping: measurements) { $0.clusterInitiatorAddress }
    
    for (initiatorAddress, clusterMeasurements) in clusters {
        print("Cluster \(initiatorAddress) has \(clusterMeasurements.count) measurements.")
        // Process measurements from this cluster together.
        calculatePosition(from: clusterMeasurements)
    }
}
```

## See Also

### Identifying the anchor

- [address](address.md): A value that uniquely identifies an anchor in a tracked area.

# clusterInitiatorAddress (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

The address of the initiator anchor within the same cluster.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSUInteger clusterInitiatorAddress;
```

<a id="discussion"></a>

## Discussion

In DL-TDOA deployments, anchors organize into clusters. An anchor cluster contains an initiator anchor and one or more responder anchors. The initiator coordinates a ranging sequence by sending an initial poll message.

Use this property to group measurements from anchors that belong to the same cluster. Measurements with the same value for this property originate from anchors in the same cluster, even if their individual [address](address.md) differs.

<a id="Group-measurements-by-cluster"></a>

### Group measurements by cluster

To process measurements from related anchors together, group the measurements by cluster:

```swift
func session(_ session: NISession, didUpdateDLTDOA measurements: [NIDLTDOAMeasurement]) {
    // Group measurements by cluster.
    let clusters = Dictionary(grouping: measurements) { $0.clusterInitiatorAddress }
    
    for (initiatorAddress, clusterMeasurements) in clusters {
        print("Cluster \(initiatorAddress) has \(clusterMeasurements.count) measurements.")
        // Process measurements from this cluster together.
        calculatePosition(from: clusterMeasurements)
    }
}
```

## See Also

### Identifying the anchor

- [address](address.md): A value that uniquely identifies an anchor in a tracked area.
