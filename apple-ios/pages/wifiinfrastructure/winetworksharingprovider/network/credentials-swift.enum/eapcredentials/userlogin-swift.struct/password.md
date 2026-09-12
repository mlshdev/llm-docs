> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.enum/eapcredentials/userlogin-swift.struct/password](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.enum/eapcredentials/userlogin-swift.struct/password)

# password

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The password a person uses to login.

## Declaration

```swift
let password: String?
```

<a id="Discussion"></a>

## Discussion

The password can be between 1-64 characters in length. This value is `nil` if the user login doesn’t use a password.

## See Also

### Login credentials

- [username](username.md): Username used to login.
