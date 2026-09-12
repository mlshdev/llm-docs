> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspothelperresponse/setnetworklist(_:)](https://developer.apple.com/documentation/networkextension/nehotspothelperresponse/setnetworklist(_:))

# setNetworkList(\_:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Set the list of handled networks.

## Declaration

```swift
func setNetworkList(_ networkList: [NEHotspotNetwork])
```

## Parameters

- `networkList`: The list of networks that the caller is capable of handling.

<a id="Discussion"></a>

## Discussion

The Hotspot Helper app calls this method on its response to the [NEHotspotHelperCommandType.filterScanList](../nehotspothelpercommandtype/filterscanlist.md). The helper provides the list of network objects that it is capable of handling with at least low confidence. Networks that it has no confidence in handling should not be specified.

## See Also

### Response properties

- [setNetwork(\_:)](setnetwork%28__%29.md): Set the network that conveys the confidence level.

# setNetworkList: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Set the list of handled networks.

## Declaration

```objectivec
- (void) setNetworkList:(NSArray<NEHotspotNetwork *> *) networkList;
```

## Parameters

- `networkList`: The list of networks that the caller is capable of handling.

<a id="Discussion"></a>

## Discussion

The Hotspot Helper app calls this method on its response to the [kNEHotspotHelperCommandTypeFilterScanList](../nehotspothelpercommandtype/filterscanlist.md). The helper provides the list of network objects that it is capable of handling with at least low confidence. Networks that it has no confidence in handling should not be specified.

## See Also

### Response properties

- [setNetwork:](setnetwork%28__%29.md): Set the network that conveys the confidence level.
