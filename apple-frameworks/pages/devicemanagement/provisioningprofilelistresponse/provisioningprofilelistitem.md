> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/provisioningprofilelistresponse/provisioningprofilelistitem](https://developer.apple.com/documentation/devicemanagement/provisioningprofilelistresponse/provisioningprofilelistitem)

# ProvisioningProfileListResponse.ProvisioningProfileListItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 11.0+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

A dictionary that describes a provisioning profile list item.

## Declaration

```
object ProvisioningProfileListResponse.ProvisioningProfileListItem
```

## Properties

- `ExpiryDate` — `date`: The expiry date of the provisioning profile.
- `Name` — `string` (required): The display name of the provisioning profile.
- `UUID` — `string` (required): The unique identifier for the provisioning profile.

## See Also

### Objects

- [ProvisioningProfileListResponse.ErrorChainItem](errorchainitem.md): A dictionary that describes an error chain item.
