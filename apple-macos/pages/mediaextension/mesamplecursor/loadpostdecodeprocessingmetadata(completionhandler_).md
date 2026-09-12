> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mesamplecursor/loadpostdecodeprocessingmetadata(completionhandler:)](https://developer.apple.com/documentation/mediaextension/mesamplecursor/loadpostdecodeprocessingmetadata(completionhandler:))

# loadPostDecodeProcessingMetadata(completionHandler:) (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Asynchronously loads a dictionary that represents frame level metadata for post decode processing.

## Declaration

```swift
optional func loadPostDecodeProcessingMetadata(completionHandler: @escaping @Sendable ([String : any Sendable]?, (any Error)?) -> Void)
```

```swift
optional func postDecodeProcessingMetadata() async throws -> [String : any Sendable]
```

## Parameters

- `completionHandler`: The handler that will be invoked when the method completes.

<a id="Discussion"></a>

## Discussion

This method should provide either a valid NSDictionary or `nil`. If the method fails, the NSError will contain error information.

The post decode processing metadata could either be contained in the media asset primary file or be located in a separate related “sidecar” file. If contained in a separate file with a different extension, that file extension should be included in the EXAppExtensionAttributes and UTExportedTypeDeclarations dictionaries in the MediaExtension format reader `Info.plist`. The metadata returned should contain sequence level metadata for post decode processing, along with optional frame level metadata if present.

Typically the metadata returned by this method is delivered to the video decoder through sample buffer attachments.

# loadPostDecodeProcessingMetadataWithCompletionHandler: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Asynchronously loads a dictionary that represents frame level metadata for post decode processing.

## Declaration

```objectivec
- (void) loadPostDecodeProcessingMetadataWithCompletionHandler:(void (^)(NSDictionary<NSString *,id> *postDecodeProcessingMetadata, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The handler that will be invoked when the method completes.

<a id="Discussion"></a>

## Discussion

This method should provide either a valid NSDictionary or `nil`. If the method fails, the NSError will contain error information.

The post decode processing metadata could either be contained in the media asset primary file or be located in a separate related “sidecar” file. If contained in a separate file with a different extension, that file extension should be included in the EXAppExtensionAttributes and UTExportedTypeDeclarations dictionaries in the MediaExtension format reader `Info.plist`. The metadata returned should contain sequence level metadata for post decode processing, along with optional frame level metadata if present.

Typically the metadata returned by this method is delivered to the video decoder through sample buffer attachments.
