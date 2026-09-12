> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asdiscoverydescriptor/wifiawareservicerole-swift.property](https://developer.apple.com/documentation/accessorysetupkit/asdiscoverydescriptor/wifiawareservicerole-swift.property)

# wifiAwareServiceRole (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The role of the accessory’s Wi-Fi Aware’s service.

## Declaration

```swift
var wifiAwareServiceRole: ASDiscoveryDescriptor.WiFiAwareServiceRole { get set }
```

<a id="discussion"></a>

## Discussion

This property defaults to [ASDiscoveryDescriptor.WiFiAwareServiceRole.subscriber](wifiawareservicerole-swift.enum/subscriber.md)

## See Also

### Specifying Wi-Fi Aware properties

- [wifiAwareServiceName](wifiawareservicename.md): The accessory’s Wi-Fi Aware’s service name if available.
- [ASDiscoveryDescriptor.WiFiAwareServiceRole](wifiawareservicerole-swift.enum.md): A type that defines the role of an accessory’s Wi-Fi Aware’s service.
- [wifiAwareModelNameMatch](wifiawaremodelnamematch.md): The accessory’s Wi-Fi Aware model name and matching options.
- [wifiAwareVendorNameMatch](wifiawarevendornamematch.md): The accessory’s Wi-Fi Aware vendor name and matching options.
- [ASPropertyCompareString](../aspropertycomparestring.md): A type that specifies how to filter a property against a given string and comparison options.

# wifiAwareServiceRole (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The role of the accessory’s Wi-Fi Aware’s service.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) ASDiscoveryDescriptorWiFiAwareServiceRole wifiAwareServiceRole;
```

<a id="discussion"></a>

## Discussion

This property defaults to [ASDiscoveryDescriptorWiFiAwareServiceRoleSubscriber](wifiawareservicerole-swift.enum/subscriber.md)

## See Also

### Specifying Wi-Fi Aware properties

- [wifiAwareServiceName](wifiawareservicename.md): The accessory’s Wi-Fi Aware’s service name if available.
- [ASDiscoveryDescriptorWiFiAwareServiceRole](wifiawareservicerole-swift.enum.md): A type that defines the role of an accessory’s Wi-Fi Aware’s service.
- [wifiAwareModelNameMatch](wifiawaremodelnamematch.md): The accessory’s Wi-Fi Aware model name and matching options.
- [wifiAwareVendorNameMatch](wifiawarevendornamematch.md): The accessory’s Wi-Fi Aware vendor name and matching options.
- [ASPropertyCompareString](../aspropertycomparestring.md): A type that specifies how to filter a property against a given string and comparison options.
