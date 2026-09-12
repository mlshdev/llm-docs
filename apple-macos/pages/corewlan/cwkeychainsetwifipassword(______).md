> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwkeychainsetwifipassword(_:_:_:)](https://developer.apple.com/documentation/corewlan/cwkeychainsetwifipassword(_:_:_:))

# CWKeychainSetWiFiPassword(\_:\_:\_:) (Swift)

**Framework:** Core WLAN  
**Kind:** Function  
**Availability:** macOS 10.9+

Sets the Wi-Fi network keychain password for the SSID and keychain domain you specify.

## Declaration

```swift
func CWKeychainSetWiFiPassword(_ domain: CWKeychainDomain, _ ssid: Data, _ password: String) -> OSStatus
```

## See Also

### Functions

- [CWKeychainCopyWiFiEAPIdentity(\_:\_:\_:)](cwkeychaincopywifieapidentity%28______%29.md): Finds and returns the identity stored for the SSID and keychain domain you specify.
- [CWKeychainDeleteWiFiEAPUsernameAndPassword(\_:\_:)](cwkeychaindeletewifieapusernameandpassword%28____%29.md): Deletes the 802.1X username and password for the SSID and keychain domain you specify.
- [CWKeychainDeleteWiFiPassword(\_:\_:)](cwkeychaindeletewifipassword%28____%29.md): Deletes the password for the SSID and keychain domain you specify.
- [CWKeychainFindWiFiEAPUsernameAndPassword(\_:\_:\_:\_:)](cwkeychainfindwifieapusernameandpassword%28________%29.md): Finds and returns the 802.1X username and password stored for the SSID and keychain domain you specify.
- [CWKeychainFindWiFiPassword(\_:\_:\_:)](cwkeychainfindwifipassword%28______%29.md): Finds and returns, by reference, the password for the SSID and keychain domain you specify.
- [CWKeychainSetWiFiEAPIdentity(\_:\_:\_:)](cwkeychainsetwifieapidentity%28______%29.md): Associates an identity to the SSID and keychain domain you specify.
- [CWKeychainSetWiFiEAPUsernameAndPassword(\_:\_:\_:\_:)](cwkeychainsetwifieapusernameandpassword%28________%29.md): Sets the 802.1X username and password for the SSID and keychain domain you specify.

# CWKeychainSetWiFiPassword (Objective-C)

**Framework:** Core WLAN  
**Kind:** Function  
**Availability:** macOS 10.9+

Sets the Wi-Fi network keychain password for the SSID and keychain domain you specify.

## Declaration

```objectivec
OSStatus CWKeychainSetWiFiPassword(CWKeychainDomain domain, NSData *ssid, NSString *password);
```

## See Also

### Functions

- [CWKeychainCopyWiFiEAPIdentity](cwkeychaincopywifieapidentity%28______%29.md): Finds and returns the identity stored for the SSID and keychain domain you specify.
- [CWKeychainDeleteWiFiEAPUsernameAndPassword](cwkeychaindeletewifieapusernameandpassword%28____%29.md): Deletes the 802.1X username and password for the SSID and keychain domain you specify.
- [CWKeychainDeleteWiFiPassword](cwkeychaindeletewifipassword%28____%29.md): Deletes the password for the SSID and keychain domain you specify.
- [CWKeychainFindWiFiEAPUsernameAndPassword](cwkeychainfindwifieapusernameandpassword%28________%29.md): Finds and returns the 802.1X username and password stored for the SSID and keychain domain you specify.
- [CWKeychainFindWiFiPassword](cwkeychainfindwifipassword%28______%29.md): Finds and returns, by reference, the password for the SSID and keychain domain you specify.
- [CWKeychainSetWiFiEAPIdentity](cwkeychainsetwifieapidentity%28______%29.md): Associates an identity to the SSID and keychain domain you specify.
- [CWKeychainSetWiFiEAPUsernameAndPassword](cwkeychainsetwifieapusernameandpassword%28________%29.md): Sets the 802.1X username and password for the SSID and keychain domain you specify.
