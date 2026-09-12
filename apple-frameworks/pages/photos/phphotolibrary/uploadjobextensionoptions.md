> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotolibrary/uploadjobextensionoptions](https://developer.apple.com/documentation/photos/phphotolibrary/uploadjobextensionoptions)

# uploadJobExtensionOptions (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

The options for the calling app’s background asset resource upload job configuration.

## Declaration

```swift
var uploadJobExtensionOptions: PHAssetResourceUploadJobOptions? { get }
```

<a id="discussion"></a>

## Discussion

The value is `nil` if the extension isn’t enabled or the caller isn’t authorized. Otherwise, the value is an options object with default values if the configuration exists but no options have been set.

# uploadJobExtensionOptions (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

The options for the calling app’s background asset resource upload job configuration.

## Declaration

```objectivec
@property (readonly, nullable) PHAssetResourceUploadJobOptions * uploadJobExtensionOptions;
```

<a id="discussion"></a>

## Discussion

The value is `nil` if the extension isn’t enabled or the caller isn’t authorized. Otherwise, the value is an options object with default values if the configuration exists but no options have been set.
