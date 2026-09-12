> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspoths20settings/nairealmnames](https://developer.apple.com/documentation/networkextension/nehotspoths20settings/nairealmnames)

# naiRealmNames (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of Network Access Identifier (NAI) realm name strings used for Wi-Fi Hotspot 2.0 negotiation.

## Declaration

```swift
var naiRealmNames: [String] { get set }
```

<a id="Discussion"></a>

## Discussion

Each `naiRealmName` string must be a six-digit number.

## See Also

### Accessing Hotspot 2.0 properties

- [domainName](domainname.md): The domain name of a Hotspot 2.0 Wi-Fi Network.
- [isRoamingEnabled](isroamingenabled.md): A Boolean value indicating whether or not roaming is enabled on a Hotspot 2.0 Wi-Fi network.
- [mccAndMNCs](mccandmncs.md): An array of Mobile Country Code (MCC) and Mobile Network Code (MNC) pairs used for Wi-Fi Hotspot 2.0 negotiation.
- [roamingConsortiumOIs](roamingconsortiumois.md): An array of Roaming Consortium Organization (RCO) identifiers used for Wi-Fi Hotspot 2.0 negotiation.

# naiRealmNames (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of Network Access Identifier (NAI) realm name strings used for Wi-Fi Hotspot 2.0 negotiation.

## Declaration

```objectivec
@property (copy) NSArray<NSString *> * naiRealmNames;
```

<a id="Discussion"></a>

## Discussion

Each `naiRealmName` string must be a six-digit number.

## See Also

### Accessing Hotspot 2.0 properties

- [domainName](domainname.md): The domain name of a Hotspot 2.0 Wi-Fi Network.
- [roamingEnabled](isroamingenabled.md): A Boolean value indicating whether or not roaming is enabled on a Hotspot 2.0 Wi-Fi network.
- [MCCAndMNCs](mccandmncs.md): An array of Mobile Country Code (MCC) and Mobile Network Code (MNC) pairs used for Wi-Fi Hotspot 2.0 negotiation.
- [roamingConsortiumOIs](roamingconsortiumois.md): An array of Roaming Consortium Organization (RCO) identifiers used for Wi-Fi Hotspot 2.0 negotiation.
