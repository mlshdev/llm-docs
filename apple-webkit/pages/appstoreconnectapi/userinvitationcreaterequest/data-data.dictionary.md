> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/userinvitationcreaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/userinvitationcreaterequest/data-data.dictionary)

# UserInvitationCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The data element of the request body.

## Declaration

```
object UserInvitationCreateRequest.Data
```

## Properties

- `attributes` — `UserInvitationCreateRequest.Data.Attributes` (required): The resource’s attributes.
- `relationships` — `UserInvitationCreateRequest.Data.Relationships`: The types and IDs of the related data to update.
- `type` — `string` (required): The resource type.
  **Allowed values:** `userInvitations`

## Topics

### Objects

- [UserInvitationCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes that you set that describe the new resource.
- [UserInvitationCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships to other resources that you can set with this request.
