> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/activationlockrequest](https://developer.apple.com/documentation/devicemanagement/activationlockrequest)

# ActivationLockRequest

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** Device Assignment Services 5.0+

Request enabling activation lock for a device.

## Declaration

```
object ActivationLockRequest
```

## Properties

- `device` — `string`: Serial number of the device (required).
- `escrow_key` — `string`: Escrow key (optional). If the escrow key is not provided, the device will be locked to the person who created the MDM server in the portal. For information about creating an escrow key see [Creating and using bypass codes](creating-and-using-bypass-codes.md).
- `lost_message` — `string`: Lost message to be displayed on the device (optional).

## See Also

### Request and Response

- [ActivationLockStatusResponse](activationlockstatusresponse.md)
