> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/mdmservercertificate](https://developer.apple.com/documentation/applebusinessapi/mdmservercertificate)

# MdmServerCertificate

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Object  
**Availability:** Apple Business API 2.4+

The X.509 certificate to associate with a device management service.

## Declaration

```
object MdmServerCertificate
```

## Properties

- `name` — `string` (required): The certificate’s file name.
- `data` — `byte` (required): The Base64-encoded certificate data.

## See Also

### Related Types

- [MdmServerStatus](mdmserverstatus.md): Strings that represent the operational status of a device management service.
- [MdmServerProductFamily](mdmserverproductfamily.md): Strings that represent a product family that can be assigned as a default to a device management service.
