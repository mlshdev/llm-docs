> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/loginrequesthpkepresharedkeyid](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/loginrequesthpkepresharedkeyid)

# loginRequestHPKEPreSharedKeyID (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

## Declaration

```swift
var loginRequestHPKEPreSharedKeyID: Data? { get set }
```

<a id="discussion"></a>

## Discussion

The PreSharedKey Id to be used for HPKE PSK for embedded login assertions.  This is required if the loginRequestHPKEPreSharedKey is set.

# loginRequestHPKEPreSharedKeyID (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSData * loginRequestHPKEPreSharedKeyID;
```

<a id="discussion"></a>

## Discussion

The PreSharedKey Id to be used for HPKE PSK for embedded login assertions.  This is required if the loginRequestHPKEPreSharedKey is set.
