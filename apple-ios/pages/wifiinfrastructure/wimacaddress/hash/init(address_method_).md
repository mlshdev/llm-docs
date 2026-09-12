> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/wimacaddress/hash/init(address:method:)](https://developer.apple.com/documentation/wifiinfrastructure/wimacaddress/hash/init(address:method:))

# init(address:method:)

**Framework:** Wi-Fi Infrastructure  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates a new `Hash` from the given MAC Address, using a randomly-generated salt.

## Declaration

```swift
init?(address: WIMACAddress, method: WIMACAddress.Hash.Method = .sha256)
```

## Parameters

- `address`: The MAC Address to hash.
- `method`: The method to use to generate the hash. Defaults to `.sha256`.
