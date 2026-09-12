> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/backgroundassetversionappstorerelease](https://developer.apple.com/documentation/appstoreconnectapi/backgroundassetversionappstorerelease)

# BackgroundAssetVersionAppStoreRelease

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.1+

A release of a background asset version to App Store customers, making the background content available on their devices.

## Declaration

```
object BackgroundAssetVersionAppStoreRelease
```

## Properties

- `attributes` — `BackgroundAssetVersionAppStoreRelease.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `BackgroundAssetVersionAppStoreRelease.Relationships`:
- `type` — `string` (required): **Allowed values:** `backgroundAssetVersionAppStoreReleases`

## Topics

### Dictionaries

- [BackgroundAssetVersionAppStoreRelease.Attributes](backgroundassetversionappstorerelease/attributes-data.dictionary.md): Attributes that describe a background asset version App Store release resource.
- [BackgroundAssetVersionAppStoreRelease.Relationships](backgroundassetversionappstorerelease/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Related Documentation

- [BackgroundAsset](backgroundasset.md): A downloadable content package that your app fetches in the background before or after installation, managed through Apple-hosted background assets.
- [BackgroundAssetCreateRequest](backgroundassetcreaterequest.md): The request body you use to create a background asset record.
- [BackgroundAssetResponse](backgroundassetresponse.md): A response containing a single background asset downloadable content package.
- [BackgroundAssetVersion](backgroundassetversion.md): A specific version of a background asset, containing the upload files your app downloads after installation.
- [BackgroundAssetVersionAppStoreReleaseResponse](backgroundassetversionappstorereleaseresponse.md): A response containing a single App Store release record for a background asset version.
- [BackgroundAssetVersionBackgroundAssetUploadFilesLinkagesResponse](backgroundassetversionbackgroundassetuploadfileslinkagesresponse.md): A response containing the resource identifiers of upload files associated with a background asset version.
- [BackgroundAssetVersionCreateRequest](backgroundassetversioncreaterequest.md): The request body you use to create a background asset version.
- [BackgroundAssetVersionExternalBetaRelease](backgroundassetversionexternalbetarelease.md): A release of a background asset version to external TestFlight testers for validation.
- [BackgroundAssetVersionExternalBetaReleaseResponse](backgroundassetversionexternalbetareleaseresponse.md): A response containing a single external beta release record for a background asset version.
- [BackgroundAssetVersionInternalBetaRelease](backgroundassetversioninternalbetarelease.md): A release of a background asset version to internal testers, allowing you to validate asset delivery before public distribution.
- [BackgroundAssetVersionInternalBetaReleaseResponse](backgroundassetversioninternalbetareleaseresponse.md): A response containing a single internal beta release record for a background asset version.
- [BackgroundAssetVersionsLinkagesResponse](backgroundassetversionslinkagesresponse.md): A response containing the resource identifiers of background asset versions linked to an app.
- [BackgroundAssetVersionResponse](backgroundassetversionresponse.md): A response containing a single version of a background asset.
- [BackgroundAssetVersionsResponse](backgroundassetversionsresponse.md): A response containing a list of versions for a background asset.
- [BackgroundAssetsResponse](backgroundassetsresponse.md): A response containing a list of background assets for an app.

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
- [BackgroundAssetVersionAppStoreReleaseResponse](backgroundassetversionappstorereleaseresponse.md): A response containing a single App Store release record for a background asset version.
- [BackgroundAssetVersionAppStoreReleaseState](backgroundassetversionappstorereleasestate.md): A string that represents the release state of a background asset.
- [BackgroundAssetVersionBackgroundAssetUploadFilesLinkagesResponse](backgroundassetversionbackgroundassetuploadfileslinkagesresponse.md): A response containing the resource identifiers of upload files associated with a background asset version.
- [BackgroundAssetVersionCreateRequest](backgroundassetversioncreaterequest.md): The request body you use to create a background asset version.
