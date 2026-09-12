> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotolibrary/enableuploadjobextension(with:)](https://developer.apple.com/documentation/photos/phphotolibrary/enableuploadjobextension(with:))

# enableUploadJobExtension(with:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Enables the background asset resource upload job feature with the given options, atomically.

## Declaration

```swift
func enableUploadJobExtension(with options: PHAssetResourceUploadJobOptions?) throws
```

## Parameters

- `options`: The options to set for the newly enabled configuration, or `nil` to use default values.

<a id="discussion"></a>

## Discussion

The configuration is created with `options` already set, as a single change — unlike calling [setUploadJobExtensionOptions(\_:)](setuploadjobextensionoptions%28__%29.md) afterward, as a separate change.

# enableUploadJobExtensionWithOptions:error: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Enables the background asset resource upload job feature with the given options, atomically.

## Declaration

```objectivec
- (BOOL) enableUploadJobExtensionWithOptions:(PHAssetResourceUploadJobOptions *) options error:(NSError **) error;
```

## Parameters

- `options`: The options to set for the newly enabled configuration, or `nil` to use default values.
- `error`: If enabling was unsuccessful, `false` is returned and an error is set on the `error` parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="discussion"></a>

## Discussion

The configuration is created with `options` already set, as a single change — unlike calling [setUploadJobExtensionOptions:error:](setuploadjobextensionoptions%28__%29.md) afterward, as a separate change.
