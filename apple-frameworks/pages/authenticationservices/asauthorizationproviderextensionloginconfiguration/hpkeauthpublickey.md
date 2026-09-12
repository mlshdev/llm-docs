> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/hpkeauthpublickey](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/hpkeauthpublickey)

# hpkeAuthPublicKey (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

## Declaration

```swift
var hpkeAuthPublicKey: SecKey? { get set }
```

<a id="discussion"></a>

## Discussion

The Authentication public key to be used for HPKE.  Setting this value with changet the mode to Auth or AuthPSK if the hpkePreSharedKey is also set.  This public key is used to authenticate HPKE responses.

# hpkeAuthPublicKey (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

## Declaration

```objectivec
@property (nonatomic, nullable) SecKeyRef hpkeAuthPublicKey;
```

<a id="discussion"></a>

## Discussion

The Authentication public key to be used for HPKE.  Setting this value with changet the mode to Auth or AuthPSK if the hpkePreSharedKey is also set.  This public key is used to authenticate HPKE responses.
