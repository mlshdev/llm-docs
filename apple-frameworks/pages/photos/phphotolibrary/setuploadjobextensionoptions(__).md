> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotolibrary/setuploadjobextensionoptions(_:)](https://developer.apple.com/documentation/photos/phphotolibrary/setuploadjobextensionoptions(_:))

# setUploadJobExtensionOptions(\_:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Sets the options for the calling app’s background asset resource upload job configuration.

## Declaration

```swift
func setUploadJobExtensionOptions(_ options: PHAssetResourceUploadJobOptions) throws
```

## Parameters

- `options`: The options to set.

<a id="discussion"></a>

## Discussion

To reset the configuration’s options to their default values, pass a newly-initialized `PHAssetResourceUploadJobOptions` instance.

# setUploadJobExtensionOptions:error: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Sets the options for the calling app’s background asset resource upload job configuration.

## Declaration

```objectivec
- (BOOL) setUploadJobExtensionOptions:(PHAssetResourceUploadJobOptions *) options error:(NSError **) error;
```

## Parameters

- `options`: The options to set.
- `error`: If the configuration could not be found, the caller isn’t authorized, or the update failed, `false` is returned and an error is set on the `error` parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="discussion"></a>

## Discussion

To reset the configuration’s options to their default values, pass a newly-initialized `PHAssetResourceUploadJobOptions` instance.
