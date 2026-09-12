> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwkeychaindeletepassword](https://developer.apple.com/documentation/corewlan/cwkeychaindeletepassword)

# CWKeychainDeletePassword

**Interface language:** Objective-C

**Framework:** Core WLAN  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 10.9)

Deletes the network password for the specified SSID from the default keychain.

## Declaration

```objectivec
OSStatus CWKeychainDeletePassword(CFDataRef ssidData);
```

## See Also

### Utility Methods

- [CWKeychainCopyEAPIdentity](cwkeychaincopyeapidentity.md): Deprecated. Finds and returns the identity stored for corresponding network with the specified SSID.
- [CWKeychainCopyEAPIdentityList](cwkeychaincopyeapidentitylist%28__%29.md): Finds and returns the available identities stored in the keychain.
- [CWKeychainCopyEAPUsernameAndPassword](cwkeychaincopyeapusernameandpassword.md): Deprecated. Finds and returns the username and password stored for corresponding network with the specified SSID.
- [CWKeychainCopyPassword](cwkeychaincopypassword.md): Deprecated. Finds and returns the keychain password stored for the corresponding network with the specified SSID.
- [CWKeychainDeleteEAPUsernameAndPassword](cwkeychaindeleteeapusernameandpassword.md): Deprecated. Deletes the keychain item containing the 802.1X username and password for the specified SSID.
- [CWKeychainSetEAPIdentity](cwkeychainseteapidentity.md): Deprecated. Associates an exisiting identity item to the specified SSID.
- [CWKeychainSetEAPUsernameAndPassword](cwkeychainseteapusernameandpassword.md): Deprecated. Sets the keychain item containing the 802.1X username and password for the specified SSID.
- [CWKeychainSetPassword](cwkeychainsetpassword.md): Deprecated. Sets the network keychain password for the specified SSID.
- [CWMergeNetworks](cwmergenetworks%28__%29.md): Merges the specified set of CWNetwork objects.
