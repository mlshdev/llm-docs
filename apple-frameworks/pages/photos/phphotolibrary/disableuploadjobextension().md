> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phphotolibrary/disableuploadjobextension()

# disableUploadJobExtension() (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Disables the background asset resource upload job feature.

## Declaration

```swift
func disableUploadJobExtension() throws
```

# disableUploadJobExtensionWithError: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Disables the background asset resource upload job feature.

## Declaration

```objectivec
- (BOOL) disableUploadJobExtensionWithError:(NSError **) error;
```

## Parameters

- `error`: If disabling was unsuccessful, `false` is returned and an error is set on the `error` parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.
