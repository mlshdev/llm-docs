> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapppushmanager/matchssids](https://developer.apple.com/documentation/networkextension/neapppushmanager/matchssids)

# matchSSIDs (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An array of Wi-Fi SSID strings that the system matches for local push activation.

## Declaration

```swift
var matchSSIDs: [String] { get set }
```

## Mentioned In

- [Maintaining a Reliable Network Connection](../maintaining-a-reliable-network-connection.md)

<a id="Discussion"></a>

## Discussion

If the SSID string of the current Wi-Fi network matches a member of this array, the framework starts the [NEAppPushProvider](../neapppushprovider.md). The array must contain at least one SSID to start the provider, and has an upper limit of 10 SSIDs.

## See Also

### Matching Wi-Fi networks

- [matchPrivateLTENetworks](matchprivateltenetworks.md): An array of private LTE networks that the system matches for local push activation.
- [NEPrivateLTENetwork](../neprivateltenetwork.md): The parameters of a private LTE network.

# matchSSIDs (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An array of Wi-Fi SSID strings that the system matches for local push activation.

## Declaration

```objectivec
@property (copy) NSArray<NSString *> * matchSSIDs;
```

## Mentioned In

- [Maintaining a Reliable Network Connection](../maintaining-a-reliable-network-connection.md)

<a id="Discussion"></a>

## Discussion

If the SSID string of the current Wi-Fi network matches a member of this array, the framework starts the [NEAppPushProvider](../neapppushprovider.md). The array must contain at least one SSID to start the provider, and has an upper limit of 10 SSIDs.

## See Also

### Matching Wi-Fi networks

- [matchPrivateLTENetworks](matchprivateltenetworks.md): An array of private LTE networks that the system matches for local push activation.
- [NEPrivateLTENetwork](../neprivateltenetwork.md): The parameters of a private LTE network.
