> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appleschoolmanagerapi/mdmserverstatus](https://developer.apple.com/documentation/appleschoolmanagerapi/mdmserverstatus)

# MdmServerStatus

**Interface language:** Data

**Framework:** Apple School Manager API  
**Kind:** Type  
**Availability:** Apple School Manager API 1.6+

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
