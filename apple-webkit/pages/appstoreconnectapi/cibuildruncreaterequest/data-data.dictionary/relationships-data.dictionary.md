> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cibuildruncreaterequest/data-data.dictionary/relationships-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/cibuildruncreaterequest/data-data.dictionary/relationships-data.dictionary)

# CiBuildRunCreateRequest.Data.Relationships

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The relationships to other resources that you can set with this request.

## Declaration

```
object CiBuildRunCreateRequest.Data.Relationships
```

## Properties

- `workflow` — `CiBuildRunCreateRequest.Data.Relationships.Workflow`: The related Workflows resource.
- `buildRun` — `CiBuildRunCreateRequest.Data.Relationships.BuildRun`: The related Build Runs resource.
- `pullRequest` — `CiBuildRunCreateRequest.Data.Relationships.PullRequest`: The related Pull Requests resource.
- `sourceBranchOrTag` — `CiBuildRunCreateRequest.Data.Relationships.SourceBranchOrTag`: The related Git References resource.

## Topics

### Objects

- [CiBuildRunCreateRequest.Data.Relationships.BuildRun](relationships-data.dictionary/buildrun-data.dictionary.md): The relationship to the Build Runs resource you can set with the request that creates a Build Runs resource.
- [CiBuildRunCreateRequest.Data.Relationships.PullRequest](relationships-data.dictionary/pullrequest-data.dictionary.md): The relationship to the Pull Requests resource you can set with the request that creates a Build Runs resource.
- [CiBuildRunCreateRequest.Data.Relationships.SourceBranchOrTag](relationships-data.dictionary/sourcebranchortag-data.dictionary.md): The relationship to the Git References resource that represents the source branch or tag you can set with the request that creates a Build Runs resource.
- [CiBuildRunCreateRequest.Data.Relationships.Workflow](relationships-data.dictionary/workflow-data.dictionary.md): The relationship to the Workflows resource you can set with the request that creates a Build Runs resource.

## See Also

### Objects

- [CiBuildRunCreateRequest.Data.Attributes](attributes-data.dictionary.md): The attributes you set that describe the new Build Runs resource.
