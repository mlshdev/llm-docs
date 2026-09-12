> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/background-assets](https://developer.apple.com/documentation/appstoreconnectapi/background-assets)

# Background assets

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Assets for your app that you can upload and download separately from the Apple hosted app.

<a id="overview"></a>

## Overview

Use the Background Assets API to manage content that Apple hosts, so people can download that content outside your main app bundle on the App Store. You submit asset packs to app review; your app can have:

- Multiple background asset packs
- Versions of asset packs, each with unique content
- One active beta version and one App Store version per asset pack
- Updates to content without creating a new app version

To learn more about integrating Apple-hosted background assets into your app, see [Downloading asset packs hosted by Apple](https://developer.apple.com/documentation/backgroundassets/downloading-asset-packs-hosted-by-apple) and to learn more about validating the behavior of your background assets, see [Testing your asset packs locally](https://developer.apple.com/documentation/backgroundassets/testing-asset-packs-locally).

To manage Apple-hosted background assets, be sure you have one of the following user roles:

- `ADMIN`
- `APP MANAGER`
- `DEVELOPER`

## Topics

### Essentials

- [Uploading and versioning Apple hosted background assets](managing-apple-hosted-background-assets.md): Manage background assets for your App store apps.

### Relating background assets to your app

- [Create Asset Pack Record](post-v1-backgroundassets.md): Create an asset pack record for your Apple-hosted background assets.
- [Create Asset Pack Version Record](post-v1-backgroundassetversions.md): Create an asset pack version record for your Apple-hosted background assets.

### Uploading background asset files

- [Read Information for an Uploaded Asset Pack](get-v1-backgroundassetuploadfiles-_id_.md): Get details about an uploaded asset pack for Apple hosted background asset.
- [Create a Reservation for an Asset Pack Upload](post-v1-backgroundassetuploadfiles.md): Begin the process of uploading an asset pack for Apple-hosted background assets.
- [Commit an Uploaded Asset Pack to a Background Asset Version](patch-v1-backgroundassetuploadfiles-_id_.md): Associate an uploaded asset pack with a background asset version to finish the upload process.

### Reading background asset information

- [List all background assets for an app](get-v1-apps-_id_-backgroundassets.md): Get information about the Apple-hosted background assets for a specific app.
- [List the assets packs ids for an app](get-v1-apps-_id_-relationships-backgroundassets.md): Get a list of the Apple hosted background asset IDs for a specific app.
- [Read Background Assets Information](get-v1-backgroundassets-_id_.md): Get details about a specific background asset.
- [Read Version Details for a Background Asset](get-v1-backgroundassets-_id_-versions.md): Get details about a specific background asset version.
- [Read version ids for a background asset](get-v1-backgroundassets-_id_-relationships-versions.md): Get version IDs about a specific background asset version.

### Reading background asset version information

- [Read background asset version app store releases information](get-v1-backgroundassetversionappstorereleases-_id_.md): Get the state of a background asset version App Store release.
- [Read Background Assets External Beta Release Information](get-v1-backgroundassetversionexternalbetareleases-_id_.md): Get the state of a background asset version external beta release.
- [Read Background Assets Internal Beta Release Information](get-v1-backgroundassetversioninternalbetareleases-_id_.md): Get the state of a background asset version internal beta release.
- [Read background asset version information](get-v1-backgroundassetversions-_id_.md): Get details about a specific background asset version.
- [Read Background Asset Upload File Information for a Background Asset Version](get-v1-backgroundassetversions-_id_-backgroundassetuploadfiles.md): Get details about a background asset upload file for a specific background asset version.
- [Get the background asset upload files resource id for a background asset version](get-v1-backgroundassetversions-_id_-relationships-backgroundassetuploadfiles.md): Get the ID for an uploaded asset pack Apple hosted background asset version

### Objects

- [AppBackgroundAssetsLinkagesResponse](appbackgroundassetslinkagesresponse.md): A response containing the resource identifiers of background asset versions linked to an app.
- [BackgroundAsset](backgroundasset.md): A downloadable content package that your app fetches in the background before or after installation, managed through Apple-hosted background assets.
- [BackgroundAssetCreateRequest](backgroundassetcreaterequest.md): The request body you use to create a background asset record.
- [BackgroundAssetResponse](backgroundassetresponse.md): A response containing a single background asset downloadable content package.
- [BackgroundAssetsResponse](backgroundassetsresponse.md): A response containing a list of background assets for an app.
- [BackgroundAssetUploadFile](backgroundassetuploadfile.md): A file included in a background asset upload operation, with its upload URL and verification checksum.
- [BackgroundAssetUploadFileCreateRequest](backgroundassetuploadfilecreaterequest.md): The request body you use to create a background asset upload file.
- [BackgroundAssetUploadFileResponse](backgroundassetuploadfileresponse.md): A response containing a single background asset upload file record.
- [BackgroundAssetUploadFilesResponse](backgroundassetuploadfilesresponse.md): A response containing a list of upload files for a background asset.
- [BackgroundAssetUploadFileUpdateRequest](backgroundassetuploadfileupdaterequest.md): The request body you use to update a background asset upload file.
- [BackgroundAssetVersion](backgroundassetversion.md): A specific version of a background asset, containing the upload files your app downloads after installation.
- [BackgroundAssetVersionAppStoreRelease](backgroundassetversionappstorerelease.md): A release of a background asset version to App Store customers, making the background content available on their devices.
- [BackgroundAssetVersionAppStoreReleaseResponse](backgroundassetversionappstorereleaseresponse.md): A response containing a single App Store release record for a background asset version.
- [BackgroundAssetVersionAppStoreReleaseState](backgroundassetversionappstorereleasestate.md): A string that represents the release state of a background asset.
- [BackgroundAssetVersionBackgroundAssetUploadFilesLinkagesResponse](backgroundassetversionbackgroundassetuploadfileslinkagesresponse.md): A response containing the resource identifiers of upload files associated with a background asset version.
- [BackgroundAssetVersionCreateRequest](backgroundassetversioncreaterequest.md): The request body you use to create a background asset version.
- [BackgroundAssetVersionExternalBetaRelease](backgroundassetversionexternalbetarelease.md): A release of a background asset version to external TestFlight testers for validation.
- [BackgroundAssetVersionExternalBetaReleaseResponse](backgroundassetversionexternalbetareleaseresponse.md): A response containing a single external beta release record for a background asset version.
- [BackgroundAssetVersionExternalBetaReleaseState](backgroundassetversionexternalbetareleasestate.md): A string value identifying the current state of a background asset version’s external beta release.
- [BackgroundAssetVersionInternalBetaRelease](backgroundassetversioninternalbetarelease.md): A release of a background asset version to internal testers, allowing you to validate asset delivery before public distribution.
- [BackgroundAssetVersionInternalBetaReleaseResponse](backgroundassetversioninternalbetareleaseresponse.md): A response containing a single internal beta release record for a background asset version.
- [BackgroundAssetVersionResponse](backgroundassetversionresponse.md): A response containing a single version of a background asset.
- [BackgroundAssetVersionsLinkagesResponse](backgroundassetversionslinkagesresponse.md): A response containing the resource identifiers of background asset versions linked to an app.
- [BackgroundAssetVersionsResponse](backgroundassetversionsresponse.md): A response containing a list of versions for a background asset.
- [BackgroundAssetVersionState](backgroundassetversionstate.md): The possible states for a background asset version.
- [ChecksumAlgorithm](checksumalgorithm.md): A string value identifying the algorithm used to verify the integrity of an uploaded background asset file.
- [Checksums](checksums.md): A collection of integrity checksums for a background asset upload file, used to verify successful delivery.
- [StateDetail](statedetail.md): A resource describing import validation errors, warnings and information.
- [DeliveryFileUploadOperation](deliveryfileuploadoperation.md): An upload operation descriptor containing the URL, HTTP method, and required headers for uploading a background asset file to Apple’s servers.
