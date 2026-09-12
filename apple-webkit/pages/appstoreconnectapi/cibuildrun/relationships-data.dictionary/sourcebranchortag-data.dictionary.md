> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cibuildrun/relationships-data.dictionary/sourcebranchortag-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/cibuildrun/relationships-data.dictionary/sourcebranchortag-data.dictionary)

# CiBuildRun.Relationships.SourceBranchOrTag

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The data and links that describe the relationship between the Build Runs and the Git References resources.

## Declaration

```
object CiBuildRun.Relationships.SourceBranchOrTag
```

## Properties

- `data` — `CiBuildRun.Relationships.SourceBranchOrTag.Data`: The ID and type of the related Git References resource that represents the source branch or tag.

## Topics

### Objects

- [CiBuildRun.Relationships.SourceBranchOrTag.Data](sourcebranchortag-data.dictionary/data-data.dictionary.md): The type and ID of a related Git References resource that represents the source branch or tag.

## See Also

### Objects

- [CiBuildRun.Relationships.Builds](builds-data.dictionary.md): The data, links, and paging information that describe the relationship between the Build Runs and the Builds resources.
- [CiBuildRun.Relationships.DestinationBranch](destinationbranch-data.dictionary.md): The data and links that describe the relationship between the Build Runs resource and the Git References resource that represents the destination branch.
- [CiBuildRun.Relationships.Product](product-data.dictionary.md): The data and links that describe the relationship between the Build Runs and the Products resources.
- [CiBuildRun.Relationships.PullRequest](pullrequest-data.dictionary.md): The data and links that describe the relationship between the Build Runs and the Pull Requests resources.
- [CiBuildRun.Relationships.Workflow](workflow-data.dictionary.md): The data and links that describe the relationship between the Build Runs and the Workflows resources.
