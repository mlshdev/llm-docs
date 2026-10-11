> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-2d7a1d789740; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applebusinessapi/auditeventidpcreated

# AuditEventIdpCreated

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Object  
**Availability:** Apple Business API 2.6+

The data structure that represents the event data for an identity provider created audit event.

## Declaration

```
object AuditEventIdpCreated
```

## Properties

- `vendorName` — `AuditEventIdpVendorName`: The identity provider vendor.
- `protocol` — `AuditEventIdpProtocol`: The federation protocol used by the identity provider.
