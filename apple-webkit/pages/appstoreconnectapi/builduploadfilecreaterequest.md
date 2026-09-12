> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/builduploadfilecreaterequest](https://developer.apple.com/documentation/appstoreconnectapi/builduploadfilecreaterequest)

# BuildUploadFileCreateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.1+

The request body for creating a file upload record within a build upload operation.

## Declaration

```
object BuildUploadFileCreateRequest
```

## Properties

- `data` — `BuildUploadFileCreateRequest.Data` (required):

## Topics

### Dictionaries

- [BuildUploadFileCreateRequest.Data](builduploadfilecreaterequest/data-data.dictionary.md): The data wrapper for a build upload file create request.

## See Also

### Objects

- [BuildUpload](buildupload.md): A multi-file upload operation for submitting an app build to App Store Connect.
- [BuildUploadBuildUploadFilesLinkagesResponse](builduploadbuilduploadfileslinkagesresponse.md): A response containing the resource identifiers of upload files associated with a build upload.
- [BuildUploadCreateRequest](builduploadcreaterequest.md): The request body for initiating a build upload operation.
- [BuildUploadFile](builduploadfile.md): A single file upload record within a build upload operation, containing the upload URL and checksum for verification.
- [BuildUploadFileResponse](builduploadfileresponse.md): A response containing a single file upload record for a build upload.
- [BuildUploadFilesResponse](builduploadfilesresponse.md): A response containing a list of file upload records for a build upload operation.
- [BuildUploadFileUpdateRequest](builduploadfileupdaterequest.md): The request body you use to commit a build upload file.
- [BuildUploadResponse](builduploadresponse.md): A response containing a single build upload operation record.
- [BuildUploadsResponse](builduploadsresponse.md): A response containing a list of build upload operations.
- [BuildUploadState](builduploadstate.md): A string that represents the state of a build upload.
- [AppBuildUploadsLinkagesResponse](appbuilduploadslinkagesresponse.md): A response containing the resource identifiers of builds associated with an app’s upload operations.
- [StateDetail](statedetail.md): A resource describing import validation errors, warnings and information.
- [DeliveryFileUploadOperation](deliveryfileuploadoperation.md): An upload operation descriptor containing the URL, HTTP method, and required headers for uploading a background asset file to Apple’s servers.
