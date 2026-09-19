> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applebusinessapi/mdmserverproductfamily

# MdmServerProductFamily

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Type  
**Availability:** Apple Business API 2.5+

Strings that represent a product family that can be assigned as a default to a device management service.

## Declaration

```
string MdmServerProductFamily
```

## Possible Values

- `APPLE_TV`:
- `IPAD`:
- `IPHONE`:
- `IPOD`:
- `MAC`:
- `VISION`:
- `WATCH`:

<a id="discussion"></a>

## Discussion

- Possible Values

  - APPLE_TV: Apple TV.
  - IPAD: iPad.
  - IPHONE: iPhone.
  - IPOD: iPod touch.
  - MAC: Mac.
  - VISION: Apple Vision Pro.
  - WATCH: Apple Watch.

## See Also

### Related Types

- [MdmServerStatus](mdmserverstatus.md): Strings that represent the operational status of a device management service.
- [MdmServerCertificate](mdmservercertificate.md): The X.509 certificate to associate with a device management service.
