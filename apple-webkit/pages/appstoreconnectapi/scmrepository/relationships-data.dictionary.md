> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/scmrepository/relationships-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/scmrepository/relationships-data.dictionary)

# ScmRepository.Relationships

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The relationships of the Repositories resource you included in the request and those on which you can operate.

## Declaration

```
object ScmRepository.Relationships
```

## Properties

- `defaultBranch` — `ScmRepository.Relationships.DefaultBranch`: The Git repository’s default branch.
- `gitReferences` — `ScmRepository.Relationships.GitReferences`:
- `pullRequests` — `ScmRepository.Relationships.PullRequests`:
- `scmProvider` — `ScmRepository.Relationships.ScmProvider`: The related Providers resource.

## Topics

### Objects

- [ScmRepository.Relationships.DefaultBranch](relationships-data.dictionary/defaultbranch-data.dictionary.md): The data and links that describe the relationship between the Repositories resource and the Git References resource that represents the default branch.
- [ScmRepository.Relationships.ScmProvider](relationships-data.dictionary/scmprovider-data.dictionary.md): The data and links that describe the relationship between the Repositories and the Source Code Management Provider resources.

### Dictionaries

- [ScmRepository.Relationships.GitReferences](relationships-data.dictionary/gitreferences-data.dictionary.md)
- [ScmRepository.Relationships.PullRequests](relationships-data.dictionary/pullrequests-data.dictionary.md)

## See Also

### Objects

- [ScmRepository.Attributes](attributes-data.dictionary.md): The attributes that describe a Repositories resource.
