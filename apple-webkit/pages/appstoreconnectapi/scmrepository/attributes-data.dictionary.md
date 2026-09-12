> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/scmrepository/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/scmrepository/attributes-data.dictionary)

# ScmRepository.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The attributes that describe a Repositories resource.

## Declaration

```
object ScmRepository.Attributes
```

## Properties

- `httpCloneUrl` — `uri`: The Git repository’s URL for cloning it using HTTP.
- `lastAccessedDate` — `date-time`: The date and time when Xcode Cloud last accessed the repository.
- `ownerName` — `string`: The name of the Git repository’s owner.
- `repositoryName` — `string`: The name of the Git repository.
- `sshCloneUrl` — `uri`: The Git repository’s URL for cloning it using SSH.

## See Also

### Objects

- [ScmRepository.Relationships](relationships-data.dictionary.md): The relationships of the Repositories resource you included in the request and those on which you can operate.
