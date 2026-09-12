> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotolibrary/uploadjobextensionenabled](https://developer.apple.com/documentation/photos/phphotolibrary/uploadjobextensionenabled)

# uploadJobExtensionEnabled (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether background asset resource uploading is enabled.

## Declaration

```swift
var uploadJobExtensionEnabled: Bool { get }
```

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

<a id="discussion"></a>

## Discussion

The value is `true` if the extension is enabled and active, and is `false` otherwise.

The extension’s host app uses this property to determine the background processing status. See [PHAssetResourceUploadJob](../phassetresourceuploadjob.md) and \`\`\`\`PHAssetResourceUploadJobChangeRequest\`\` for more information.

## See Also

### Enabling an Upload Job Extension

- [setUploadJobExtensionEnabled(\_:)](setuploadjobextensionenabled%28__%29.md): Deprecated. Enables or disables the background asset resource upload job feature.

# uploadJobExtensionEnabled (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether background asset resource uploading is enabled.

## Declaration

```objectivec
@property (readonly, getter=isUploadJobExtensionEnabled) BOOL uploadJobExtensionEnabled;
```

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

<a id="discussion"></a>

## Discussion

The value is `true` if the extension is enabled and active, and is `false` otherwise.

The extension’s host app uses this property to determine the background processing status. See [PHAssetResourceUploadJob](../phassetresourceuploadjob.md) and \`\`\`\`PHAssetResourceUploadJobChangeRequest\`\` for more information.

## See Also

### Enabling an Upload Job Extension

- [setUploadJobExtensionEnabled:error:](setuploadjobextensionenabled%28__%29.md): Deprecated. Enables or disables the background asset resource upload job feature.
