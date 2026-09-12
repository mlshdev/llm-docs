> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/citeststatus](https://developer.apple.com/documentation/appstoreconnectapi/citeststatus)

# CiTestStatus

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Type  
**Availability:** App Store Connect API 1.5+

A string that represents test status information.

## Declaration

```
string CiTestStatus
```

## Possible Values

- `SUCCESS`: The tests passed.
- `FAILURE`: The tests failed.
- `MIXED`: Some tests passed and some failed.
- `SKIPPED`: Xcode Cloud skipped some tests.
- `EXPECTED_FAILURE`: Tests failed that you marked as expected to fail with [XCTExpectFailure](https://developer.apple.com/documentation/xctest/xctexpectfailure).

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
- [CiFilesAndFoldersRule](cifilesandfoldersrule.md): Settings Xcode Cloud uses to determine whether a change should start a new build or not.
- [CiGitUser](cigituser.md): The Git identity (name and email) of the person who authored or committed the code change that triggered an Xcode Cloud build.
- [CiIssueCounts](ciissuecounts.md): A summary of the warnings, errors, analyzer warnings, and test failures in an Xcode Cloud build run.
- [CiPullRequestStartCondition](cipullrequeststartcondition.md): Settings for a start condition that starts a build if a pull request changes.
- [CiScheduledStartCondition](cischeduledstartcondition.md): Settings for a start condition that starts a build based on a schedule.
- [CiTagStartCondition](citagstartcondition.md): Settings for a start condition that starts a build if a Git tag changes.
