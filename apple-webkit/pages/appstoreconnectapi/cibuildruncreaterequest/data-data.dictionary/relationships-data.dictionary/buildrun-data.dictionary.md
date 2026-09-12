> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cibuildruncreaterequest/data-data.dictionary/relationships-data.dictionary/buildrun-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/cibuildruncreaterequest/data-data.dictionary/relationships-data.dictionary/buildrun-data.dictionary)

# CiBuildRunCreateRequest.Data.Relationships.BuildRun

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The relationship to the Build Runs resource you can set with the request that creates a Build Runs resource.

## Declaration

```
object CiBuildRunCreateRequest.Data.Relationships.BuildRun
```

## Properties

- `data` — `CiBuildRunCreateRequest.Data.Relationships.BuildRun.Data`: The ID and type of the related Build Runs resource.

## Topics

### Objects

- [CiBuildRunCreateRequest.Data.Relationships.BuildRun.Data](buildrun-data.dictionary/data-data.dictionary.md): The type and ID of the Build Runs resource that you’re relating with the Build Runs resource you’re creating.

## See Also

### Objects

- [CiBuildRunCreateRequest.Data.Relationships.PullRequest](pullrequest-data.dictionary.md): The relationship to the Pull Requests resource you can set with the request that creates a Build Runs resource.
- [CiBuildRunCreateRequest.Data.Relationships.SourceBranchOrTag](sourcebranchortag-data.dictionary.md): The relationship to the Git References resource that represents the source branch or tag you can set with the request that creates a Build Runs resource.
- [CiBuildRunCreateRequest.Data.Relationships.Workflow](workflow-data.dictionary.md): The relationship to the Workflows resource you can set with the request that creates a Build Runs resource.
