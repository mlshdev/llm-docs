> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avurlasset/mediaextensionproperties](https://developer.apple.com/documentation/avfoundation/avurlasset/mediaextensionproperties)

# mediaExtensionProperties (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The properties of the media extension format reader that decodes the asset.

## Declaration

```swift
var mediaExtensionProperties: AVMediaExtensionProperties? { get }
```

<a id="Discussion"></a>

## Discussion

If the system decodes the asset using a MediaExtension format reader, the property value contains a valid object that describes the extension. Otherwise, this property value is `nil`.

## See Also

### Accessing Media Extension properties

- [AVMediaExtensionProperties](../avmediaextensionproperties.md): An object that describes a Media Extension.

# mediaExtensionProperties (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The properties of the media extension format reader that decodes the asset.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVMediaExtensionProperties * mediaExtensionProperties;
```

<a id="Discussion"></a>

## Discussion

If the system decodes the asset using a MediaExtension format reader, the property value contains a valid object that describes the extension. Otherwise, this property value is `nil`.

## See Also

### Accessing Media Extension properties

- [AVMediaExtensionProperties](../avmediaextensionproperties.md): An object that describes a Media Extension.
- [sidecarURL](sidecarurl.md): The sidecar URL used by the MediaExtension.
