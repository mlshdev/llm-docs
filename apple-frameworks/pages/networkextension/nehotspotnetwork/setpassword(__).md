> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotnetwork/setpassword(_:)](https://developer.apple.com/documentation/networkextension/nehotspotnetwork/setpassword(_:))

# setPassword(\_:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Provide the password for a protected network.

## Declaration

```swift
func setPassword(_ password: String)
```

## Parameters

- `password`: The network password.

<a id="Discussion"></a>

## Discussion

The Hotspot Helper may set a password for a protected network. The password string must adhere to IEEE 802.11 guidelines appropriate for the particular security scheme.

Hotspot Helper apps use this method only in the response to the [NEHotspotHelperCommandType.filterScanList](../nehotspothelpercommandtype/filterscanlist.md) command.

## See Also

### Network annotation

- [setConfidence(\_:)](setconfidence%28__%29.md): Indicate the level of confidence in being able to handle the network.
- [NEHotspotHelperConfidence](../nehotspothelperconfidence.md): A type that indicates the hotspot helper’s confidence in its ability to handle the network.

# setPassword: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Provide the password for a protected network.

## Declaration

```objectivec
- (void) setPassword:(NSString *) password;
```

## Parameters

- `password`: The network password.

<a id="Discussion"></a>

## Discussion

The Hotspot Helper may set a password for a protected network. The password string must adhere to IEEE 802.11 guidelines appropriate for the particular security scheme.

Hotspot Helper apps use this method only in the response to the [kNEHotspotHelperCommandTypeFilterScanList](../nehotspothelpercommandtype/filterscanlist.md) command.

## See Also

### Network annotation

- [setConfidence:](setconfidence%28__%29.md): Indicate the level of confidence in being able to handle the network.
- [NEHotspotHelperConfidence](../nehotspothelperconfidence.md): A type that indicates the hotspot helper’s confidence in its ability to handle the network.
