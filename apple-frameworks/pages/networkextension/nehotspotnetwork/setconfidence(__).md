> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotnetwork/setconfidence(_:)](https://developer.apple.com/documentation/networkextension/nehotspotnetwork/setconfidence(_:))

# setConfidence(\_:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Indicate the level of confidence in being able to handle the network.

## Declaration

```swift
func setConfidence(_ confidence: NEHotspotHelperConfidence)
```

## Parameters

- `confidence`: The level of confidence that the caller has in being able to help the system connect to this network.

<a id="Discussion"></a>

## Discussion

Hotspot Helper apps use this method in the response to the [NEHotspotHelperCommandType.evaluate](../nehotspothelpercommandtype/evaluate.md) and [NEHotspotHelperCommandType.filterScanList](../nehotspothelpercommandtype/filterscanlist.md) commands.

## See Also

### Network annotation

- [NEHotspotHelperConfidence](../nehotspothelperconfidence.md): A type that indicates the hotspot helper’s confidence in its ability to handle the network.
- [setPassword(\_:)](setpassword%28__%29.md): Provide the password for a protected network.

# setConfidence: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Indicate the level of confidence in being able to handle the network.

## Declaration

```objectivec
- (void) setConfidence:(NEHotspotHelperConfidence) confidence;
```

## Parameters

- `confidence`: The level of confidence that the caller has in being able to help the system connect to this network.

<a id="Discussion"></a>

## Discussion

Hotspot Helper apps use this method in the response to the [kNEHotspotHelperCommandTypeEvaluate](../nehotspothelpercommandtype/evaluate.md) and [kNEHotspotHelperCommandTypeFilterScanList](../nehotspothelpercommandtype/filterscanlist.md) commands.

## See Also

### Network annotation

- [NEHotspotHelperConfidence](../nehotspothelperconfidence.md): A type that indicates the hotspot helper’s confidence in its ability to handle the network.
- [setPassword:](setpassword%28__%29.md): Provide the password for a protected network.
