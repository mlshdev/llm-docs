> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/hpkepresharedkeyid](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/hpkepresharedkeyid)

# hpkePreSharedKeyID (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

## Declaration

```swift
var hpkePreSharedKeyID: Data? { get set }
```

<a id="discussion"></a>

## Discussion

The PreSharedKey Id to be used for HPKE PSK or AuthPSK mode.  This is requred if the hpkePreSharedKey is set.

# hpkePreSharedKeyID (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSData * hpkePreSharedKeyID;
```

<a id="discussion"></a>

## Discussion

The PreSharedKey Id to be used for HPKE PSK or AuthPSK mode.  This is requred if the hpkePreSharedKey is set.
