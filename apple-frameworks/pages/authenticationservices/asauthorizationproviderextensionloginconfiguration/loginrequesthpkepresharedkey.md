> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/loginrequesthpkepresharedkey

# loginRequestHPKEPreSharedKey (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

## Declaration

```swift
var loginRequestHPKEPreSharedKey: Data? { get set }
```

<a id="discussion"></a>

## Discussion

The PreSharedKey to be used for HKPE for embedded login assertions. Setting this value will change the mode to PSK if the loginRequestHPKEPreSharedKeyID is also set. Must be at least 32 bytes.

# loginRequestHPKEPreSharedKey (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSData * loginRequestHPKEPreSharedKey;
```

<a id="discussion"></a>

## Discussion

The PreSharedKey to be used for HKPE for embedded login assertions. Setting this value will change the mode to PSK if the loginRequestHPKEPreSharedKeyID is also set. Must be at least 32 bytes.
