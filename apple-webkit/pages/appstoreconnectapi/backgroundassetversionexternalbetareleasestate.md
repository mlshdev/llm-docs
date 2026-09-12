> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/backgroundassetversionexternalbetareleasestate](https://developer.apple.com/documentation/appstoreconnectapi/backgroundassetversionexternalbetareleasestate)

# BackgroundAssetVersionExternalBetaReleaseState

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Type  
**Availability:** App Store Connect API 4.1+

A string value identifying the current state of a background asset version’s external beta release.

## Declaration

```
string BackgroundAssetVersionExternalBetaReleaseState
```

## Possible Values

- `READY_FOR_BETA_SUBMISSION`:
- `WAITING_FOR_REVIEW`:
- `IN_REVIEW`:
- `REJECTED`:
- `PROCESSING_FOR_TESTING`:
- `READY_FOR_TESTING`:
- `SUPERSEDED`:

## See Also

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
