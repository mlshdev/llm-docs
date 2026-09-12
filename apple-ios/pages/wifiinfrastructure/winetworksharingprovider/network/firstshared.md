> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/network/firstshared](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/network/firstshared)

# firstShared

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

The date when this network was first shared to the accessory.

## Declaration

```swift
let firstShared: Date
```

<a id="discussion"></a>

## Discussion

Use this property for informational purposes or broad filtering policies. Avoid deriving subsets of changed networks based on specific timestamps due to potential wall time fluctuations.

## See Also

### Getting the date

- [lastModified](lastmodified.md): The date when this network was last modified.
