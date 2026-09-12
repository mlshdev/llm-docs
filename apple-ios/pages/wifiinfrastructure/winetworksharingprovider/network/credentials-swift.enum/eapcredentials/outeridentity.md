> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.enum/eapcredentials/outeridentity](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.enum/eapcredentials/outeridentity)

# outerIdentity

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A name that hides the user’s actual name.

## Declaration

```swift
let outerIdentity: String?
```

<a id="Discussion"></a>

## Discussion

The user’s actual name appears only inside the encrypted tunnel. For example, the system configuration might set this to `anonymous` or `anon`, or `anon@mycompany.net`. It can increase security because an attacker can’t see the authenticating user’s name in the clear. This key is only relevant to TTLS, PEAP, and EAP-FAST.
