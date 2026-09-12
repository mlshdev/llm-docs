> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cibuildrun/relationships-data.dictionary/builds-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/cibuildrun/relationships-data.dictionary/builds-data.dictionary)

# CiBuildRun.Relationships.Builds

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The data, links, and paging information that describe the relationship between the Build Runs and the Builds resources.

## Declaration

```
object CiBuildRun.Relationships.Builds
```

## Properties

- `data` — `[CiBuildRun.Relationships.Builds.Data]`: The ID and type of the related Builds resource.
- `links` — `RelationshipLinks`: The navigational links that include the self-link.
- `meta` — `PagingInformation`: The paging information.

## Topics

### Objects

- [CiBuildRun.Relationships.Builds.Data](builds-data.dictionary/data-data.dictionary.md): The type and ID of a related Builds resource.

## See Also

### Objects

- [CiBuildRun.Relationships.DestinationBranch](destinationbranch-data.dictionary.md): The data and links that describe the relationship between the Build Runs resource and the Git References resource that represents the destination branch.
- [CiBuildRun.Relationships.Product](product-data.dictionary.md): The data and links that describe the relationship between the Build Runs and the Products resources.
- [CiBuildRun.Relationships.PullRequest](pullrequest-data.dictionary.md): The data and links that describe the relationship between the Build Runs and the Pull Requests resources.
- [CiBuildRun.Relationships.SourceBranchOrTag](sourcebranchortag-data.dictionary.md): The data and links that describe the relationship between the Build Runs and the Git References resources.
- [CiBuildRun.Relationships.Workflow](workflow-data.dictionary.md): The data and links that describe the relationship between the Build Runs and the Workflows resources.
