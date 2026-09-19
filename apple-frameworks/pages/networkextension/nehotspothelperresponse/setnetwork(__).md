> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nehotspothelperresponse/setnetwork(_:)

# setNetwork(\_:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Set the network that conveys the confidence level.

## Declaration

```swift
func setNetwork(_ network: NEHotspotNetwork)
```

## Parameters

- `network`: The annotated [NEHotspotNetwork](../nehotspotnetwork.md) object. This must be the same object that was passed in the corresponding [NEHotspotHelperCommand](../nehotspothelpercommand.md) object.

<a id="Discussion"></a>

## Discussion

In response to the [NEHotspotHelperCommandType.evaluate](../nehotspothelpercommandtype/evaluate.md) command, the Hotspot Helper app sets the confidence level on the [NEHotspotNetwork](../nehotspotnetwork.md) object provided with the command and calls this method to convey the confidence level to the system.

## See Also

### Response properties

- [setNetworkList(\_:)](setnetworklist%28__%29.md): Set the list of handled networks.

# setNetwork: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Set the network that conveys the confidence level.

## Declaration

```objectivec
- (void) setNetwork:(NEHotspotNetwork *) network;
```

## Parameters

- `network`: The annotated [NEHotspotNetwork](../nehotspotnetwork.md) object. This must be the same object that was passed in the corresponding [NEHotspotHelperCommand](../nehotspothelpercommand.md) object.

<a id="Discussion"></a>

## Discussion

In response to the [kNEHotspotHelperCommandTypeEvaluate](../nehotspothelpercommandtype/evaluate.md) command, the Hotspot Helper app sets the confidence level on the [NEHotspotNetwork](../nehotspotnetwork.md) object provided with the command and calls this method to convey the confidence level to the system.

## See Also

### Response properties

- [setNetworkList:](setnetworklist%28__%29.md): Set the list of handled networks.
