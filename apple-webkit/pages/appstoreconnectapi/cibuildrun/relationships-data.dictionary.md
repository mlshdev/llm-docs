> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cibuildrun/relationships-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/cibuildrun/relationships-data.dictionary)

# CiBuildRun.Relationships

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The relationships of the Build Runs resource you included in the request and those on which you can operate.

## Declaration

```
object CiBuildRun.Relationships
```

## Properties

- `destinationBranch` — `CiBuildRun.Relationships.DestinationBranch`: The data and links that describe the relationship between the Build Runs resource and the Git References resource that represents the destination branch.
- `product` — `CiBuildRun.Relationships.Product`: The data and links that describe the relationship between the Build Runs and the Products resources.
- `pullRequest` — `CiBuildRun.Relationships.PullRequest`: The data and links that describe the relationship between the Build Runs and the Pull Requests resources.
- `sourceBranchOrTag` — `CiBuildRun.Relationships.SourceBranchOrTag`: The data and links that describe the relationship between the Build Runs resource and the Git References resource that represents the source branch or tag.
- `workflow` — `CiBuildRun.Relationships.Workflow`: The data and links that describe the relationship between the Build Runs and the Workflows resources.
- `builds` — `CiBuildRun.Relationships.Builds`: The data and links that describe the relationship between the Build Runs and the Builds resources.
- `actions` — `CiBuildRun.Relationships.Actions`:

## Topics

### Objects

- [CiBuildRun.Relationships.Builds](relationships-data.dictionary/builds-data.dictionary.md): The data, links, and paging information that describe the relationship between the Build Runs and the Builds resources.
- [CiBuildRun.Relationships.DestinationBranch](relationships-data.dictionary/destinationbranch-data.dictionary.md): The data and links that describe the relationship between the Build Runs resource and the Git References resource that represents the destination branch.
- [CiBuildRun.Relationships.Product](relationships-data.dictionary/product-data.dictionary.md): The data and links that describe the relationship between the Build Runs and the Products resources.
- [CiBuildRun.Relationships.PullRequest](relationships-data.dictionary/pullrequest-data.dictionary.md): The data and links that describe the relationship between the Build Runs and the Pull Requests resources.
- [CiBuildRun.Relationships.SourceBranchOrTag](relationships-data.dictionary/sourcebranchortag-data.dictionary.md): The data and links that describe the relationship between the Build Runs and the Git References resources.
- [CiBuildRun.Relationships.Workflow](relationships-data.dictionary/workflow-data.dictionary.md): The data and links that describe the relationship between the Build Runs and the Workflows resources.

### Dictionaries

- [CiBuildRun.Relationships.Actions](relationships-data.dictionary/actions-data.dictionary.md)

## See Also

### Objects

- [CiBuildRun.Attributes](attributes-data.dictionary.md): The attributes that describe a Build Runs resource.
