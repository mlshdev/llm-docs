> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betatesterinvitationcreaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/betatesterinvitationcreaterequest/data-data.dictionary)

# BetaTesterInvitationCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The data element of the request body.

## Declaration

```
object BetaTesterInvitationCreateRequest.Data
```

## Properties

- `relationships` — `BetaTesterInvitationCreateRequest.Data.Relationships` (required): The types and IDs of the related data to update.
- `type` — `string` (required): The resource type.
  **Allowed values:** `betaTesterInvitations`

## Topics

### Objects

- [BetaTesterInvitationCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships to other resources that you can set with this request.
