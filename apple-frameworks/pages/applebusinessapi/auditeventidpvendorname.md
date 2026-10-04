> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applebusinessapi/auditeventidpvendorname

# AuditEventIdpVendorName

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Type  
**Availability:** Apple Business API 2.6+

Strings that represent the identity provider vendor.

## Declaration

```
string AuditEventIdpVendorName
```

## Possible Values

- `GOOGLE`:
- `MICROSOFT`:
- `MICROSOFT_OIDC`:
- `GENERIC_IDP`:

<a id="discussion"></a>

## Discussion

- Possible Values

  - GOOGLE: Google as the identity provider.
  - MICROSOFT: Microsoft as the identity provider.
  - MICROSOFT_OIDC: Microsoft using the OpenID Connect protocol as the identity provider.
  - GENERIC_IDP: A generic (custom) identity provider.
