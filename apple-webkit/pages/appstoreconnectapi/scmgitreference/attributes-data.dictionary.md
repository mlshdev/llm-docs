> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/scmgitreference/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/scmgitreference/attributes-data.dictionary)

# ScmGitReference.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The attributes that describe a Git Reference resource.

## Declaration

```
object ScmGitReference.Attributes
```

## Properties

- `canonicalName` — `string`: The canonical name of the Git reference.
- `isDeleted` — `boolean`: A Boolean value that indicates whether the Git reference was deleted.
- `kind` — `CiGitRefKind`: A value that indicates whether the Git reference is a tag or a branch.
- `name` — `string`: The name of the Git reference.

## See Also

### Objects and types

- [ScmGitReference.Relationships](relationships-data.dictionary.md): The relationships of the Git References resource you included in the request and those on which you can operate.
- [CiGitRefKind](../cigitrefkind.md): A string that represents the kind of a Git References resource.
