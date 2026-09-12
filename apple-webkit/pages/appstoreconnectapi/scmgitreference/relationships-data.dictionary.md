> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/scmgitreference/relationships-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/scmgitreference/relationships-data.dictionary)

# ScmGitReference.Relationships

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The relationships of the Git References resource you included in the request and those on which you can operate.

## Declaration

```
object ScmGitReference.Relationships
```

## Properties

- `repository` — `ScmGitReference.Relationships.Repository`: The related Repositories resource.

## Topics

### Objects

- [ScmGitReference.Relationships.Repository](relationships-data.dictionary/repository-data.dictionary.md): The data and links that describe the relationship between the Git References and the Repositories resources.

## See Also

### Objects and types

- [ScmGitReference.Attributes](attributes-data.dictionary.md): The attributes that describe a Git Reference resource.
- [CiGitRefKind](../cigitrefkind.md): A string that represents the kind of a Git References resource.
