> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwmergenetworks(_:)](https://developer.apple.com/documentation/corewlan/cwmergenetworks(_:))

# CWMergeNetworks(\_:) (Swift)

**Framework:** Core WLAN  
**Kind:** Function  
**Availability:** macOS 10.7+

Merges the specified set of CWNetwork objects.

## Declaration

```swift
func CWMergeNetworks(_ networks: Set<CWNetwork>) -> Set<CWNetwork>
```

## Parameters

- `networks`: The set of networks to merge.

<a id="Discussion"></a>

## Discussion

Duplicate networks are defined as networks with the same SSID, security type, and BSS type. When duplicates are found, the network with the best RSSI value will remain.

## See Also

### Utility Methods

- [CWKeychainCopyEAPIdentityList(\_:)](cwkeychaincopyeapidentitylist%28__%29.md): Finds and returns the available identities stored in the keychain.

# CWMergeNetworks (Objective-C)

**Framework:** Core WLAN  
**Kind:** Function  
**Availability:** macOS 10.7+

Merges the specified set of CWNetwork objects.

## Declaration

```objectivec
NSSet<CWNetwork *> *CWMergeNetworks(NSSet<CWNetwork *> *networks);
```

## Parameters

- `networks`: The set of networks to merge.

<a id="Discussion"></a>

## Discussion

Duplicate networks are defined as networks with the same SSID, security type, and BSS type. When duplicates are found, the network with the best RSSI value will remain.

## See Also

### Utility Methods

- [CWKeychainCopyEAPIdentity](cwkeychaincopyeapidentity.md): Deprecated. Finds and returns the identity stored for corresponding network with the specified SSID.
- [CWKeychainCopyEAPIdentityList](cwkeychaincopyeapidentitylist%28__%29.md): Finds and returns the available identities stored in the keychain.
- [CWKeychainCopyEAPUsernameAndPassword](cwkeychaincopyeapusernameandpassword.md): Deprecated. Finds and returns the username and password stored for corresponding network with the specified SSID.
- [CWKeychainCopyPassword](cwkeychaincopypassword.md): Deprecated. Finds and returns the keychain password stored for the corresponding network with the specified SSID.
- [CWKeychainDeleteEAPUsernameAndPassword](cwkeychaindeleteeapusernameandpassword.md): Deprecated. Deletes the keychain item containing the 802.1X username and password for the specified SSID.
- [CWKeychainDeletePassword](cwkeychaindeletepassword.md): Deprecated. Deletes the network password for the specified SSID from the default keychain.
- [CWKeychainSetEAPIdentity](cwkeychainseteapidentity.md): Deprecated. Associates an exisiting identity item to the specified SSID.
- [CWKeychainSetEAPUsernameAndPassword](cwkeychainseteapusernameandpassword.md): Deprecated. Sets the keychain item containing the 802.1X username and password for the specified SSID.
- [CWKeychainSetPassword](cwkeychainsetpassword.md): Deprecated. Sets the network keychain password for the specified SSID.
