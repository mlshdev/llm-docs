> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cifilesandfoldersrule](https://developer.apple.com/documentation/appstoreconnectapi/cifilesandfoldersrule)

# CiFilesAndFoldersRule

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

Settings Xcode Cloud uses to determine whether a change should start a new build or not.

## Declaration

```
object CiFilesAndFoldersRule
```

## Properties

- `matchers` — `[CiStartConditionFileMatcher]`: Directory and file information Xcode Cloud uses to determine if a change to a file or directory matches a custom start condition.
- `mode` — `string`: A string that indicates whether a workflow’s start condition’s Files and Folders setting should start a new build or not for a change.
  **Allowed values:** `START_IF_ANY_FILE_MATCHES`, `DO_NOT_START_IF_ALL_FILES_MATCH`

## Topics

### Objects

- [CiStartConditionFileMatcher](cistartconditionfilematcher.md): A path pattern filter applied to an Xcode Cloud workflow start condition, restricting triggers to changes in specific files or directories.

## See Also

### Objects

- [CiProduct](ciproduct.md): An app or framework registered in Xcode Cloud that has one or more workflows and build history.
- [CiProductResponse](ciproductresponse.md): The response body for endpoints that read a single Xcode Cloud product.
- [CiProductsResponse](ciproductsresponse.md): The response body for endpoints that list Xcode Cloud products.
- [CiProductAdditionalRepositoriesLinkagesResponse](ciproductadditionalrepositorieslinkagesresponse.md)
- [CiProductAppLinkageResponse](ciproductapplinkageresponse.md)
- [CiProductBuildRunsLinkagesResponse](ciproductbuildrunslinkagesresponse.md)
- [CiProductPrimaryRepositoriesLinkagesResponse](ciproductprimaryrepositorieslinkagesresponse.md)
- [CiProductWorkflowsLinkagesResponse](ciproductworkflowslinkagesresponse.md)
- [CiBranchStartCondition](cibranchstartcondition.md): Settings for a start condition that starts a build if a branch changes.
- [CiGitUser](cigituser.md): The Git identity (name and email) of the person who authored or committed the code change that triggered an Xcode Cloud build.
- [CiIssueCounts](ciissuecounts.md): A summary of the warnings, errors, analyzer warnings, and test failures in an Xcode Cloud build run.
- [CiPullRequestStartCondition](cipullrequeststartcondition.md): Settings for a start condition that starts a build if a pull request changes.
- [CiScheduledStartCondition](cischeduledstartcondition.md): Settings for a start condition that starts a build based on a schedule.
- [CiTagStartCondition](citagstartcondition.md): Settings for a start condition that starts a build if a Git tag changes.
- [CiTestDestination](citestdestination.md): The test destination of a test action that Xcode Cloud performs.
