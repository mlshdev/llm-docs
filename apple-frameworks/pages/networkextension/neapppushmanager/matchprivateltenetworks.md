> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapppushmanager/matchprivateltenetworks](https://developer.apple.com/documentation/networkextension/neapppushmanager/matchprivateltenetworks)

# matchPrivateLTENetworks (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

An array of private LTE networks that the system matches for local push activation.

## Declaration

```swift
var matchPrivateLTENetworks: [NEPrivateLTENetwork] { get set }
```

<a id="Discussion"></a>

## Discussion

If the properties of current private LTE network matches with the properties of a member of this array then the system starts the [NEAppPushProvider](../neapppushprovider.md). The array must contain at least one SSID to start the provider, and has an upper limit of 10 private LTE networks. For private LTE networks that aren’t band 48, only supervised devices can perform the match.

## See Also

### Matching Wi-Fi networks

- [matchSSIDs](matchssids.md): An array of Wi-Fi SSID strings that the system matches for local push activation.
- [NEPrivateLTENetwork](../neprivateltenetwork.md): The parameters of a private LTE network.

# matchPrivateLTENetworks (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

An array of private LTE networks that the system matches for local push activation.

## Declaration

```objectivec
@property (copy) NSArray<NEPrivateLTENetwork *> * matchPrivateLTENetworks;
```

<a id="Discussion"></a>

## Discussion

If the properties of current private LTE network matches with the properties of a member of this array then the system starts the [NEAppPushProvider](../neapppushprovider.md). The array must contain at least one SSID to start the provider, and has an upper limit of 10 private LTE networks. For private LTE networks that aren’t band 48, only supervised devices can perform the match.

## See Also

### Matching Wi-Fi networks

- [matchSSIDs](matchssids.md): An array of Wi-Fi SSID strings that the system matches for local push activation.
- [NEPrivateLTENetwork](../neprivateltenetwork.md): The parameters of a private LTE network.
