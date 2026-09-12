> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionkerberosmapping/ticketkeypath](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionkerberosmapping/ticketkeypath)

# ticketKeyPath (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The keypath in the response JSON that uses this set of mappings.

## Declaration

```swift
var ticketKeyPath: String? { get set }
```

<a id="Discussion"></a>

## Discussion

If the response tokens from the login contain this keypath, the system uses this mapping to create a Kerberos ticket. The expected response is a JSON dictionary with the supplied key names containing Kerberos ticket values.

## See Also

### Getting the properties

- [clientNameKeyName](clientnamekeyname.md): The key name of the Kerberos client name string.
- [encryptionKeyTypeKeyName](encryptionkeytypekeyname.md): The key name of the Kerberos session key type number.
- [messageBufferKeyName](messagebufferkeyname.md): The key name of the Base 64-encoded Kerberos AS-REP string.
- [realmKeyName](realmkeyname.md): The key name of the Kerberos realm string.
- [serviceNameKeyName](servicenamekeyname.md): The key name of the Kerberos service name string.
- [sessionKeyKeyName](sessionkeykeyname.md): The key name of the Kerberos session key.

# ticketKeyPath (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The keypath in the response JSON that uses this set of mappings.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * ticketKeyPath;
```

<a id="Discussion"></a>

## Discussion

If the response tokens from the login contain this keypath, the system uses this mapping to create a Kerberos ticket. The expected response is a JSON dictionary with the supplied key names containing Kerberos ticket values.

## See Also

### Getting the properties

- [clientNameKeyName](clientnamekeyname.md): The key name of the Kerberos client name string.
- [encryptionKeyTypeKeyName](encryptionkeytypekeyname.md): The key name of the Kerberos session key type number.
- [messageBufferKeyName](messagebufferkeyname.md): The key name of the Base 64-encoded Kerberos AS-REP string.
- [realmKeyName](realmkeyname.md): The key name of the Kerberos realm string.
- [serviceNameKeyName](servicenamekeyname.md): The key name of the Kerberos service name string.
- [sessionKeyKeyName](sessionkeykeyname.md): The key name of the Kerberos session key.
