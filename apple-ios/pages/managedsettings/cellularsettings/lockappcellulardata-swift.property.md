> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/cellularsettings/lockappcellulardata-swift.property](https://developer.apple.com/documentation/managedsettings/cellularsettings/lockappcellulardata-swift.property)

# lockAppCellularData

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A Boolean value that indicates whether to prevent the user from changing cellular data settings.

## Declaration

```swift
var lockAppCellularData: Bool? { get set }
```

<a id="discussion"></a>

## Discussion

Use this setting to prevent the user from changing which apps on their device can use cellular data. If your app doesn’t constrain this setting, this value is `nil`.

## See Also

### Locking app access to cell data

- [lockAppCellularData](lockappcellulardata-swift.type.property.md): The metadata associated with the constraint that locks the cellular data setting.
