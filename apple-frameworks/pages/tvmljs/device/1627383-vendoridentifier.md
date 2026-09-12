> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/device/1627383-vendoridentifier](https://developer.apple.com/documentation/tvmljs/device/1627383-vendoridentifier)

# vendorIdentifier

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

The universally unique identifier (UUID) of the device.

## Declaration

```
readonly attribute String vendorIdentifier;
```

<a id="discussion"></a>

## Discussion

The UUID for a device stays the same across all apps from a vendor.

## See Also

### Retrieving Device Information

- [appIdentifier](1627339-appidentifier.md): The unique identifier for the app.
- [appVersion](1627395-appversion.md): The current app version.
- [model](1627347-model.md): A string that identifies the device model.
- [productType](1627386-producttype.md): The version of the product installed on the Apple TV.
- [systemVersion](1627323-systemversion.md): The tvOS version.
