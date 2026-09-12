> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/loginrequesthpkepresharedkey](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/loginrequesthpkepresharedkey)

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
