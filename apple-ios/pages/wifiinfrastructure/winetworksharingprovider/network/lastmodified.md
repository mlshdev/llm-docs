> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/network/lastmodified](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/network/lastmodified)

# lastModified

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

The date when this network was last modified.

## Declaration

```swift
let lastModified: Date
```

<a id="discussion"></a>

## Discussion

Use this property for informational purposes or broad filtering policies. Avoid deriving subsets of changed networks based on specific timestamps due to potential wall time fluctuations.

## See Also

### Getting the date

- [firstShared](firstshared.md): The date when this network was first shared to the accessory.
