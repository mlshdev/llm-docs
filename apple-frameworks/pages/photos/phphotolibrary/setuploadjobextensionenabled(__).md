> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotolibrary/setuploadjobextensionenabled(_:)](https://developer.apple.com/documentation/photos/phphotolibrary/setuploadjobextensionenabled(_:))

# setUploadJobExtensionEnabled(\_:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 26.1+ (deprecated in 27.0) · iPadOS 26.1+ (deprecated in 27.0) · Mac Catalyst 26.1+ (deprecated in 27.0)

Enables or disables the background asset resource upload job feature.

> Use -enableUploadJobExtensionWithOptions:error: and -disableUploadJobExtensionWithError: instead

## Declaration

```swift
func setUploadJobExtensionEnabled(_ enable: Bool) throws
```

## Parameters

- `enable`: `true` allows calls to the extension’s host application; you can fulfill that protocol to create [PHAssetResourceUploadJob](../phassetresourceuploadjob.md) objects. `false` stops calls to the extension’s host application.

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

<a id="discussion"></a>

## Discussion

You must call this function before you create [PHAssetResourceUploadJob](../phassetresourceuploadjob.md) in the extension’s host application.

To enable background uploads, you must have both full library access and register the extension with the extension point: “com.apple.photos.background-upload”.

## See Also

### Enabling an Upload Job Extension

- [uploadJobExtensionEnabled](uploadjobextensionenabled.md): A Boolean value that indicates whether background asset resource uploading is enabled.

# setUploadJobExtensionEnabled:error: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 26.1+ (deprecated in 27.0) · iPadOS 26.1+ (deprecated in 27.0)

Enables or disables the background asset resource upload job feature.

> Use -enableUploadJobExtensionWithOptions:error: and -disableUploadJobExtensionWithError: instead

## Declaration

```objectivec
- (BOOL) setUploadJobExtensionEnabled:(BOOL) enable error:(NSError **) error;
```

## Parameters

- `enable`: `true` allows calls to the extension’s host application; you can fulfill that protocol to create [PHAssetResourceUploadJob](../phassetresourceuploadjob.md) objects. `false` stops calls to the extension’s host application.
- `error`: If either enabling or disabling was unsuccessful, `false` is returned and an error is set on the `error` parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

<a id="discussion"></a>

## Discussion

You must call this function before you create [PHAssetResourceUploadJob](../phassetresourceuploadjob.md) in the extension’s host application.

To enable background uploads, you must have both full library access and register the extension with the extension point: “com.apple.photos.background-upload”.

## See Also

### Enabling an Upload Job Extension

- [uploadJobExtensionEnabled](uploadjobextensionenabled.md): A Boolean value that indicates whether background asset resource uploading is enabled.
