> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspoths20settings/domainname](https://developer.apple.com/documentation/networkextension/nehotspoths20settings/domainname)

# domainName (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The domain name of a Hotspot 2.0 Wi-Fi Network.

## Declaration

```swift
var domainName: String { get }
```

<a id="Discussion"></a>

## Discussion

The domain name string may be 1-253 characters, inclusive.

## See Also

### Accessing Hotspot 2.0 properties

- [isRoamingEnabled](isroamingenabled.md): A Boolean value indicating whether or not roaming is enabled on a Hotspot 2.0 Wi-Fi network.
- [mccAndMNCs](mccandmncs.md): An array of Mobile Country Code (MCC) and Mobile Network Code (MNC) pairs used for Wi-Fi Hotspot 2.0 negotiation.
- [naiRealmNames](nairealmnames.md): An array of Network Access Identifier (NAI) realm name strings used for Wi-Fi Hotspot 2.0 negotiation.
- [roamingConsortiumOIs](roamingconsortiumois.md): An array of Roaming Consortium Organization (RCO) identifiers used for Wi-Fi Hotspot 2.0 negotiation.

# domainName (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The domain name of a Hotspot 2.0 Wi-Fi Network.

## Declaration

```objectivec
@property (readonly, nonnull) NSString * domainName;
```

<a id="Discussion"></a>

## Discussion

The domain name string may be 1-253 characters, inclusive.

## See Also

### Accessing Hotspot 2.0 properties

- [roamingEnabled](isroamingenabled.md): A Boolean value indicating whether or not roaming is enabled on a Hotspot 2.0 Wi-Fi network.
- [MCCAndMNCs](mccandmncs.md): An array of Mobile Country Code (MCC) and Mobile Network Code (MNC) pairs used for Wi-Fi Hotspot 2.0 negotiation.
- [naiRealmNames](nairealmnames.md): An array of Network Access Identifier (NAI) realm name strings used for Wi-Fi Hotspot 2.0 negotiation.
- [roamingConsortiumOIs](roamingconsortiumois.md): An array of Roaming Consortium Organization (RCO) identifiers used for Wi-Fi Hotspot 2.0 negotiation.
