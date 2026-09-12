> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwkeychainseteapidentity](https://developer.apple.com/documentation/corewlan/cwkeychainseteapidentity)

# CWKeychainSetEAPIdentity

**Interface language:** Objective-C

**Framework:** Core WLAN  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 10.9)

Associates an exisiting identity item to the specified SSID.

## Declaration

```objectivec
OSStatus CWKeychainSetEAPIdentity(CFDataRef ssidData, SecIdentityRef identity);
```

## Parameters

- `identity`: The identity containing the certificate to use for EAPOL.

<a id="return-value"></a>

## Return Value

An OSStatus error code which will indicate whether or not a failure occurred during execution. *errSecSuccess* indicates no error occurred.

<a id="Discussion"></a>

## Discussion

If the *identity* is *nil the method will disassociate the specified SSID from its identitiy.*

## See Also

### Utility Methods

- [CWKeychainCopyEAPIdentity](cwkeychaincopyeapidentity.md): Deprecated. Finds and returns the identity stored for corresponding network with the specified SSID.
- [CWKeychainCopyEAPIdentityList](cwkeychaincopyeapidentitylist%28__%29.md): Finds and returns the available identities stored in the keychain.
- [CWKeychainCopyEAPUsernameAndPassword](cwkeychaincopyeapusernameandpassword.md): Deprecated. Finds and returns the username and password stored for corresponding network with the specified SSID.
- [CWKeychainCopyPassword](cwkeychaincopypassword.md): Deprecated. Finds and returns the keychain password stored for the corresponding network with the specified SSID.
- [CWKeychainDeleteEAPUsernameAndPassword](cwkeychaindeleteeapusernameandpassword.md): Deprecated. Deletes the keychain item containing the 802.1X username and password for the specified SSID.
- [CWKeychainDeletePassword](cwkeychaindeletepassword.md): Deprecated. Deletes the network password for the specified SSID from the default keychain.
- [CWKeychainSetEAPUsernameAndPassword](cwkeychainseteapusernameandpassword.md): Deprecated. Sets the keychain item containing the 802.1X username and password for the specified SSID.
- [CWKeychainSetPassword](cwkeychainsetpassword.md): Deprecated. Sets the network keychain password for the specified SSID.
- [CWMergeNetworks](cwmergenetworks%28__%29.md): Merges the specified set of CWNetwork objects.
