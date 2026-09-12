> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/scmrepository/relationships-data.dictionary/defaultbranch-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/scmrepository/relationships-data.dictionary/defaultbranch-data.dictionary)

# ScmRepository.Relationships.DefaultBranch

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The data and links that describe the relationship between the Repositories resource and the Git References resource that represents the default branch.

## Declaration

```
object ScmRepository.Relationships.DefaultBranch
```

## Properties

- `data` — `ScmRepository.Relationships.DefaultBranch.Data`: The ID and type of the related Git References resource that represents the default branch.

## Topics

### Objects

- [ScmRepository.Relationships.DefaultBranch.Data](defaultbranch-data.dictionary/data-data.dictionary.md): The type and ID of a related Git References resource that represents the repository’s default branch.

## See Also

### Objects

- [ScmRepository.Relationships.ScmProvider](scmprovider-data.dictionary.md): The data and links that describe the relationship between the Repositories and the Source Code Management Provider resources.
