> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/hpkepresharedkey](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/hpkepresharedkey)

# hpkePreSharedKey (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

## Declaration

```swift
var hpkePreSharedKey: Data? { get set }
```

<a id="discussion"></a>

## Discussion

The PreSharedKey to be used for HKPE. Setting this value will change the mode to PSK or AuthPSK if the hpkeAuthPublicKey is also set. Must be at least 32 bytes.

# hpkePreSharedKey (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSData * hpkePreSharedKey;
```

<a id="discussion"></a>

## Discussion

The PreSharedKey to be used for HKPE. Setting this value will change the mode to PSK or AuthPSK if the hpkeAuthPublicKey is also set. Must be at least 32 bytes.
