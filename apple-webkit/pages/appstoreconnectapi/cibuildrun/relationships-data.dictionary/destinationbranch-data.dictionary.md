> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cibuildrun/relationships-data.dictionary/destinationbranch-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/cibuildrun/relationships-data.dictionary/destinationbranch-data.dictionary)

# CiBuildRun.Relationships.DestinationBranch

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The data and links that describe the relationship between the Build Runs resource and the Git References resource that represents the destination branch.

## Declaration

```
object CiBuildRun.Relationships.DestinationBranch
```

## Properties

- `data` — `CiBuildRun.Relationships.DestinationBranch.Data`: The ID of the related Git References resource that represents the destination branch.

## Topics

### Objects

- [CiBuildRun.Relationships.DestinationBranch.Data](destinationbranch-data.dictionary/data-data.dictionary.md): The type and ID of a related Git References resource that represents the build run’s destination branch.

## See Also

### Objects

- [CiBuildRun.Relationships.Builds](builds-data.dictionary.md): The data, links, and paging information that describe the relationship between the Build Runs and the Builds resources.
- [CiBuildRun.Relationships.Product](product-data.dictionary.md): The data and links that describe the relationship between the Build Runs and the Products resources.
- [CiBuildRun.Relationships.PullRequest](pullrequest-data.dictionary.md): The data and links that describe the relationship between the Build Runs and the Pull Requests resources.
- [CiBuildRun.Relationships.SourceBranchOrTag](sourcebranchortag-data.dictionary.md): The data and links that describe the relationship between the Build Runs and the Git References resources.
- [CiBuildRun.Relationships.Workflow](workflow-data.dictionary.md): The data and links that describe the relationship between the Build Runs and the Workflows resources.
