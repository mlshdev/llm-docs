> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avurlasset/resourceloader](https://developer.apple.com/documentation/avfoundation/avurlasset/resourceloader)

# resourceLoader (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The resource loader for the asset.

## Declaration

```swift
var resourceLoader: AVAssetResourceLoader { get }
```

<a id="Discussion"></a>

## Discussion

During loading, the system may ask the resource loader to assist loading the resource. For example, a resource that requires decryption may require the resource loader to provide the appropriate decryption keys. You can assign a delegate object to the resource loader object and use your delegate to intercept these requests and provide appropriate responses.

## See Also

### Assisting with resource loading

- [mayRequireContentKeysForMediaDataProcessing](mayrequirecontentkeysformediadataprocessing.md): A Boolean value that indicates whether you can add this asset as a content key recipient to a content key session.

# resourceLoader (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The resource loader for the asset.

## Declaration

```objectivec
@property (nonatomic, readonly) AVAssetResourceLoader * resourceLoader;
```

<a id="Discussion"></a>

## Discussion

During loading, the system may ask the resource loader to assist loading the resource. For example, a resource that requires decryption may require the resource loader to provide the appropriate decryption keys. You can assign a delegate object to the resource loader object and use your delegate to intercept these requests and provide appropriate responses.

## See Also

### Assisting with resource loading

- [mayRequireContentKeysForMediaDataProcessing](mayrequirecontentkeysformediadataprocessing.md): A Boolean value that indicates whether you can add this asset as a content key recipient to a content key session.
