> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/enterpriseprogramapi/userupdaterequest/data-data.dictionary

# UserUpdateRequest.Data

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

The data element of the request body.

## Declaration

```
object UserUpdateRequest.Data
```

## Properties

- `attributes` — `UserUpdateRequest.Data.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `users`

## Topics

### Objects

- [UserUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes for which you change values as part of the update request.
