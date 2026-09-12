> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwkeychaincopywifieapidentity(_:_:_:)](https://developer.apple.com/documentation/corewlan/cwkeychaincopywifieapidentity(_:_:_:))

# CWKeychainCopyWiFiEAPIdentity(\_:\_:\_:) (Swift)

**Framework:** Core WLAN  
**Kind:** Function  
**Availability:** macOS 10.9+

Finds and returns the identity stored for the SSID and keychain domain you specify.

## Declaration

```swift
func CWKeychainCopyWiFiEAPIdentity(_ domain: CWKeychainDomain, _ ssid: Data, _ identity: UnsafeMutablePointer<Unmanaged<SecIdentity>?>?) -> OSStatus
```

## See Also

### Functions

- [CWKeychainDeleteWiFiEAPUsernameAndPassword(\_:\_:)](cwkeychaindeletewifieapusernameandpassword%28____%29.md): Deletes the 802.1X username and password for the SSID and keychain domain you specify.
- [CWKeychainDeleteWiFiPassword(\_:\_:)](cwkeychaindeletewifipassword%28____%29.md): Deletes the password for the SSID and keychain domain you specify.
- [CWKeychainFindWiFiEAPUsernameAndPassword(\_:\_:\_:\_:)](cwkeychainfindwifieapusernameandpassword%28________%29.md): Finds and returns the 802.1X username and password stored for the SSID and keychain domain you specify.
- [CWKeychainFindWiFiPassword(\_:\_:\_:)](cwkeychainfindwifipassword%28______%29.md): Finds and returns, by reference, the password for the SSID and keychain domain you specify.
- [CWKeychainSetWiFiEAPIdentity(\_:\_:\_:)](cwkeychainsetwifieapidentity%28______%29.md): Associates an identity to the SSID and keychain domain you specify.
- [CWKeychainSetWiFiEAPUsernameAndPassword(\_:\_:\_:\_:)](cwkeychainsetwifieapusernameandpassword%28________%29.md): Sets the 802.1X username and password for the SSID and keychain domain you specify.
- [CWKeychainSetWiFiPassword(\_:\_:\_:)](cwkeychainsetwifipassword%28______%29.md): Sets the Wi-Fi network keychain password for the SSID and keychain domain you specify.

# CWKeychainCopyWiFiEAPIdentity (Objective-C)

**Framework:** Core WLAN  
**Kind:** Function  
**Availability:** macOS 10.9+

Finds and returns the identity stored for the SSID and keychain domain you specify.

## Declaration

```objectivec
OSStatus CWKeychainCopyWiFiEAPIdentity(CWKeychainDomain domain, NSData *ssid, SecIdentityRef*identity);
```

## See Also

### Functions

- [CWKeychainDeleteWiFiEAPUsernameAndPassword](cwkeychaindeletewifieapusernameandpassword%28____%29.md): Deletes the 802.1X username and password for the SSID and keychain domain you specify.
- [CWKeychainDeleteWiFiPassword](cwkeychaindeletewifipassword%28____%29.md): Deletes the password for the SSID and keychain domain you specify.
- [CWKeychainFindWiFiEAPUsernameAndPassword](cwkeychainfindwifieapusernameandpassword%28________%29.md): Finds and returns the 802.1X username and password stored for the SSID and keychain domain you specify.
- [CWKeychainFindWiFiPassword](cwkeychainfindwifipassword%28______%29.md): Finds and returns, by reference, the password for the SSID and keychain domain you specify.
- [CWKeychainSetWiFiEAPIdentity](cwkeychainsetwifieapidentity%28______%29.md): Associates an identity to the SSID and keychain domain you specify.
- [CWKeychainSetWiFiEAPUsernameAndPassword](cwkeychainsetwifieapusernameandpassword%28________%29.md): Sets the 802.1X username and password for the SSID and keychain domain you specify.
- [CWKeychainSetWiFiPassword](cwkeychainsetwifipassword%28______%29.md): Sets the Wi-Fi network keychain password for the SSID and keychain domain you specify.
