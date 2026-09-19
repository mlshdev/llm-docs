> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/hpkepresharedkeyid

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
