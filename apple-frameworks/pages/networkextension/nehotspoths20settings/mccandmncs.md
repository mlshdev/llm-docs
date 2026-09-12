> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspoths20settings/mccandmncs](https://developer.apple.com/documentation/networkextension/nehotspoths20settings/mccandmncs)

# mccAndMNCs (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of Mobile Country Code (MCC) and Mobile Network Code  (MNC) pairs used for Wi-Fi Hotspot 2.0 negotiation.

## Declaration

```swift
var mccAndMNCs: [String] { get set }
```

<a id="Discussion"></a>

## Discussion

Each `MCCAndMNCs` string must contain exactly six integers.

## See Also

### Accessing Hotspot 2.0 properties

- [domainName](domainname.md): The domain name of a Hotspot 2.0 Wi-Fi Network.
- [isRoamingEnabled](isroamingenabled.md): A Boolean value indicating whether or not roaming is enabled on a Hotspot 2.0 Wi-Fi network.
- [naiRealmNames](nairealmnames.md): An array of Network Access Identifier (NAI) realm name strings used for Wi-Fi Hotspot 2.0 negotiation.
- [roamingConsortiumOIs](roamingconsortiumois.md): An array of Roaming Consortium Organization (RCO) identifiers used for Wi-Fi Hotspot 2.0 negotiation.

# MCCAndMNCs (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of Mobile Country Code (MCC) and Mobile Network Code  (MNC) pairs used for Wi-Fi Hotspot 2.0 negotiation.

## Declaration

```objectivec
@property (copy) NSArray<NSString *> * MCCAndMNCs;
```

<a id="Discussion"></a>

## Discussion

Each `MCCAndMNCs` string must contain exactly six integers.

## See Also

### Accessing Hotspot 2.0 properties

- [domainName](domainname.md): The domain name of a Hotspot 2.0 Wi-Fi Network.
- [roamingEnabled](isroamingenabled.md): A Boolean value indicating whether or not roaming is enabled on a Hotspot 2.0 Wi-Fi network.
- [naiRealmNames](nairealmnames.md): An array of Network Access Identifier (NAI) realm name strings used for Wi-Fi Hotspot 2.0 negotiation.
- [roamingConsortiumOIs](roamingconsortiumois.md): An array of Roaming Consortium Organization (RCO) identifiers used for Wi-Fi Hotspot 2.0 negotiation.
