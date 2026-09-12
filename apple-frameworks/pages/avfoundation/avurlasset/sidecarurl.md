> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avurlasset/sidecarurl](https://developer.apple.com/documentation/avfoundation/avurlasset/sidecarurl)

# sidecarURL

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The sidecar URL used by the MediaExtension.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSURL * sidecarURL;
```

<a id="discussion"></a>

## Discussion

The sidecar URL is returned only if the MediaExtension format reader supports sidecar files, and implements this property \[MEFileInfo setSidecarFilename:\]. Will return nil otherwise.

## See Also

### Accessing Media Extension properties

- [mediaExtensionProperties](mediaextensionproperties.md): The properties of the media extension format reader that decodes the asset.
- [AVMediaExtensionProperties](../avmediaextensionproperties.md): An object that describes a Media Extension.
