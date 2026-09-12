> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/mdmserverstatus](https://developer.apple.com/documentation/applebusinessapi/mdmserverstatus)

# MdmServerStatus

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Type  
**Availability:** Apple Business API 2.4+

Strings that represent the operational status of a device management service.

## Declaration

```
string MdmServerStatus
```

## Possible Values

- `ACTIVE`:
- `DELETED`:
- `INACTIVE`:

<a id="discussion"></a>

## Discussion

- Possible Values

  - ACTIVE: The server is active and able to manage devices.
  - INACTIVE: The server is currently inactive.
  - DELETED: The server has been removed from the organization.

## See Also

### Related Types

- [MdmServerProductFamily](mdmserverproductfamily.md): Strings that represent a product family that can be assigned as a default to a device management service.
- [MdmServerCertificate](mdmservercertificate.md): The X.509 certificate to associate with a device management service.
