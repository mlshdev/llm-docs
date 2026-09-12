> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ciproductresponse](https://developer.apple.com/documentation/appstoreconnectapi/ciproductresponse)

# CiProductResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The response body for endpoints that read a single Xcode Cloud product.

## Declaration

```
object CiProductResponse
```

## Properties

- `data` — `CiProduct` (required): The resource data.
- `included` — `[*]`: The requested relationship data.
  **Allowed types:** `App`, `BundleId`, `ScmRepository`
- `links` — `DocumentLinks` (required): The navigational links that include the self-link.

## See Also

### Objects

- [CiProduct](ciproduct.md): An app or framework registered in Xcode Cloud that has one or more workflows and build history.
- [CiProductsResponse](ciproductsresponse.md): The response body for endpoints that list Xcode Cloud products.
- [CiProductAdditionalRepositoriesLinkagesResponse](ciproductadditionalrepositorieslinkagesresponse.md)
- [CiProductAppLinkageResponse](ciproductapplinkageresponse.md)
- [CiProductBuildRunsLinkagesResponse](ciproductbuildrunslinkagesresponse.md)
- [CiProductPrimaryRepositoriesLinkagesResponse](ciproductprimaryrepositorieslinkagesresponse.md)
- [CiProductWorkflowsLinkagesResponse](ciproductworkflowslinkagesresponse.md)
- [CiBranchStartCondition](cibranchstartcondition.md): Settings for a start condition that starts a build if a branch changes.
- [CiFilesAndFoldersRule](cifilesandfoldersrule.md): Settings Xcode Cloud uses to determine whether a change should start a new build or not.
- [CiGitUser](cigituser.md): The Git identity (name and email) of the person who authored or committed the code change that triggered an Xcode Cloud build.
- [CiIssueCounts](ciissuecounts.md): A summary of the warnings, errors, analyzer warnings, and test failures in an Xcode Cloud build run.
- [CiPullRequestStartCondition](cipullrequeststartcondition.md): Settings for a start condition that starts a build if a pull request changes.
- [CiScheduledStartCondition](cischeduledstartcondition.md): Settings for a start condition that starts a build based on a schedule.
- [CiTagStartCondition](citagstartcondition.md): Settings for a start condition that starts a build if a Git tag changes.
- [CiTestDestination](citestdestination.md): The test destination of a test action that Xcode Cloud performs.
