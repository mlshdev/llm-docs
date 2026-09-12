> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-ciworkflows-_id_-buildruns](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-ciworkflows-_id_-buildruns)

# List all xcode cloud builds for a workflow

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.5+

List all builds Xcode Cloud performed for a specific workflow.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/ciWorkflows/{id}/buildRuns
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Workflows resource.

## Query Parameters

- `fields[builds]` — `[string]`: Additional fields to include for each Build Runs resource returned by the response.
  **Allowed values:** `version`, `uploadedDate`, `expirationDate`, `expired`, `minOsVersion`, `lsMinimumSystemVersion`, `computedMinMacOsVersion`, `computedMinVisionOsVersion`, `iconAssetToken`, `processingState`, `buildAudienceType`, `usesNonExemptEncryption`, `preReleaseVersion`, `individualTesters`, `betaGroups`, `betaBuildLocalizations`, `appEncryptionDeclaration`, `betaAppReviewSubmission`, `app`, `buildBetaDetail`, `appStoreVersion`, `icons`, `buildBundles`, `buildUpload`, `perfPowerMetrics`, `diagnosticSignatures`
- `fields[ciBuildRuns]` — `[string]`: Additional fields to include for each Build Runs resource returned by the response.
  **Allowed values:** `number`, `createdDate`, `startedDate`, `finishedDate`, `sourceCommit`, `destinationCommit`, `isPullRequestBuild`, `issueCounts`, `executionProgress`, `completionStatus`, `startReason`, `cancelReason`, `builds`, `workflow`, `product`, `sourceBranchOrTag`, `destinationBranch`, `actions`, `pullRequest`
- `filter[builds]` — `[string]`: Filter the returned build runs using the ID of the related Builds resource.
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `builds`, `workflow`, `product`, `sourceBranchOrTag`, `destinationBranch`, `pullRequest`
- `limit` — `integer`: The number of Build Runs resources to return.
  **Maximum:** `200`
- `limit[builds]` — `integer`: The number of included Build Runs resources to return if the builds relationship is included.
  **Maximum:** `50`
- `fields[scmGitReferences]` — `[string]`: **Allowed values:** `name`, `canonicalName`, `isDeleted`, `kind`, `repository`
- `fields[ciWorkflows]` — `[string]`: **Allowed values:** `name`, `description`, `branchStartCondition`, `tagStartCondition`, `pullRequestStartCondition`, `scheduledStartCondition`, `manualBranchStartCondition`, `manualTagStartCondition`, `manualPullRequestStartCondition`, `actions`, `isEnabled`, `isLockedForEditing`, `clean`, `containerFilePath`, `lastModifiedDate`, `product`, `repository`, `xcodeVersion`, `macOsVersion`, `buildRuns`
- `fields[scmPullRequests]` — `[string]`: **Allowed values:** `title`, `number`, `webUrl`, `sourceRepositoryOwner`, `sourceRepositoryName`, `sourceBranchName`, `destinationRepositoryOwner`, `destinationRepositoryName`, `destinationBranchName`, `isClosed`, `isCrossRepository`, `repository`
- `fields[ciProducts]` — `[string]`: **Allowed values:** `name`, `createdDate`, `productType`, `app`, `bundleId`, `workflows`, `primaryRepositories`, `additionalRepositories`, `buildRuns`
- `sort` — `[string]`: **Allowed values:** `number`, `-number`

## Response Codes

- `200` OK — `CiBuildRunsResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Xcode Cloud Workflows

- [Read xcode cloud workflow information](get-v1-ciworkflows-_id_.md): Get information about a specific Xcode Cloud workflow.
- [Read the repository information for an xcode cloud workflow](get-v1-ciworkflows-_id_-repository.md): Get information about the Git repository of a specific Xcode Cloud workflow.
- [List build run IDs for a CI workflow](get-v1-ciworkflows-_id_-relationships-buildruns.md)
- [Get the repository ID for a CI workflow](get-v1-ciworkflows-_id_-relationships-repository.md)
