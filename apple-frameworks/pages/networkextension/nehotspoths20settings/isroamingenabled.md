> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspoths20settings/isroamingenabled](https://developer.apple.com/documentation/networkextension/nehotspoths20settings/isroamingenabled)

# isRoamingEnabled (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether or not roaming is enabled on a Hotspot 2.0 Wi-Fi network.

## Declaration

```swift
var isRoamingEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If `true`, the HS 2.0 Wi-Fi- network can connect to networks of roaming service providers. The default value is `false`.

## See Also

### Accessing Hotspot 2.0 properties

- [domainName](domainname.md): The domain name of a Hotspot 2.0 Wi-Fi Network.
- [mccAndMNCs](mccandmncs.md): An array of Mobile Country Code (MCC) and Mobile Network Code (MNC) pairs used for Wi-Fi Hotspot 2.0 negotiation.
- [naiRealmNames](nairealmnames.md): An array of Network Access Identifier (NAI) realm name strings used for Wi-Fi Hotspot 2.0 negotiation.
- [roamingConsortiumOIs](roamingconsortiumois.md): An array of Roaming Consortium Organization (RCO) identifiers used for Wi-Fi Hotspot 2.0 negotiation.

# roamingEnabled (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether or not roaming is enabled on a Hotspot 2.0 Wi-Fi network.

## Declaration

```objectivec
@property (getter=isRoamingEnabled) BOOL roamingEnabled;
```

<a id="Discussion"></a>

## Discussion

If `true`, the HS 2.0 Wi-Fi- network can connect to networks of roaming service providers. The default value is `false`.

## See Also

### Accessing Hotspot 2.0 properties

- [domainName](domainname.md): The domain name of a Hotspot 2.0 Wi-Fi Network.
- [MCCAndMNCs](mccandmncs.md): An array of Mobile Country Code (MCC) and Mobile Network Code (MNC) pairs used for Wi-Fi Hotspot 2.0 negotiation.
- [naiRealmNames](nairealmnames.md): An array of Network Access Identifier (NAI) realm name strings used for Wi-Fi Hotspot 2.0 negotiation.
- [roamingConsortiumOIs](roamingconsortiumois.md): An array of Roaming Consortium Organization (RCO) identifiers used for Wi-Fi Hotspot 2.0 negotiation.
