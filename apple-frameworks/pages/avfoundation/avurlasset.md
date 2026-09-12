> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avurlasset](https://developer.apple.com/documentation/avfoundation/avurlasset)

# AVURLAsset (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An asset that represents media at a local or remote URL.

## Declaration

```swift
class AVURLAsset
```

<a id="overview"></a>

## Overview

This class is a concrete subclass of [AVAsset](avasset.md). When you create an asset as shown below, the system creates and returns an instance of [AVURLAsset](avurlasset.md).

```swift
// A local or remote asset URL.
guard let url: URL = Bundle.main.url(forResource: "Image",
                                     withExtension: "png") else { return }
let asset = AVAsset(url: url)
```

In many cases, this is an appropriate way to create asset instances, but you can also directly instantiate an [AVURLAsset](avurlasset.md) when you need more fine-grained control over its initialization. The initializer for [AVURLAsset](avurlasset.md) accepts an options dictionary, which you use to customize the asset’s initialization for your particular purpose. For example, if you’re creating an asset for an HLS stream, you may want to prevent it from retrieving its media when it connects over a cellular network. You can do this by providing the initialization option and value as shown below.

```swift
let url: URL = // A remote asset URL.
let options = [AVURLAssetAllowsCellularAccessKey: false]
let asset = AVURLAsset(url: url, options: options)
```

## Topics

### Creating an asset

- [init(url:)](avurlasset/init%28url_%29.md): Creates an asset that models the media at the specified URL.
- [init(url:options:)](avurlasset/init%28url_options_%29-2x8uu.md): Creates an asset that models the media resource at the specified URL.
- [Initialization options](avurlasset-initialization-options.md): Specify options to configure the initialization of a media asset.

### Loading tracks

- [tracks](avpartialasyncproperty/tracks-44ptx.md): Conforms when `Root` inherits `AVURLAsset`. The tracks an asset contains.
- [findCompatibleTrack(for:completionHandler:)](avurlasset/findcompatibletrack%28for_completionhandler_%29.md): Loads an asset track from which you can insert any time range into the composition track.

### Loading variants

- [variants](avpartialasyncproperty/variants.md): Conforms when `Root` inherits `AVURLAsset`. An array of variants that an asset contains.

### Determining supported media types

- [audiovisualTypes()](avurlasset/audiovisualtypes%28%29.md): Deprecated. Returns an array of the file types the asset supports.
- [audiovisualMIMETypes()](avurlasset/audiovisualmimetypes%28%29.md): Returns an array of the MIME types the asset supports.
- [isPlayableExtendedMIMEType(\_:)](avurlasset/isplayableextendedmimetype%28__%29.md): Returns a Boolean value that indicates whether the asset is playable with the specified codecs and container type.
- [audiovisualContentTypes](avurlasset/audiovisualcontenttypes.md): Provides the content types the AVURLAsset class understands.

### Assisting with resource loading

- [resourceLoader](avurlasset/resourceloader.md): The resource loader for the asset.
- [mayRequireContentKeysForMediaDataProcessing](avurlasset/mayrequirecontentkeysformediadataprocessing.md): A Boolean value that indicates whether you can add this asset as a content key recipient to a content key session.

### Working with offline assets

- [assetCache](avurlasset/assetcache.md): The asset’s associated asset cache, if it exists.

### Accessing the media URL

- [url](avurlasset/url.md): A URL to the asset’s media.

### Accessing asset variants

- [variants](avurlasset/variants.md): Deprecated. An array of variants that an asset contains.

### Accessing compatible tracks

- [compatibleTrack(for:)](avurlasset/compatibletrack%28for_%29.md): Deprecated. Returns an asset track from which you can insert any time range into a given composition track.

### Accessing the session identifier

- [httpSessionIdentifier](avurlasset/httpsessionidentifier.md): A session identifier that the asset sends in HTTP requests that it makes.

### Accessing Media Extension properties

- [mediaExtensionProperties](avurlasset/mediaextensionproperties.md): The properties of the media extension format reader that decodes the asset.
- [AVMediaExtensionProperties](avmediaextensionproperties.md): An object that describes a Media Extension.

### Initializers

- [init(URL:options:)](avurlasset/init%28url_options_%29-1t08s.md)
- [init(URL:options:)](avurlasset/init%28url_options_%29-4zhx7.md)

## Relationships

### Inherits From

- [AVAsset](avasset.md)

### Inherited By

- [AVFragmentedAsset](avfragmentedasset.md)

### Conforms To

- [AVAsynchronousKeyValueLoading](avasynchronouskeyvalueloading.md)
- [AVContentKeyRecipient](avcontentkeyrecipient.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSItemProviderReading](../foundation/nsitemproviderreading.md)
- [NSItemProviderWriting](../foundation/nsitemproviderwriting.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Assets

- [AVAsset](avasset.md): An object that models timed audiovisual media.
- [AVAssetTrack](avassettrack.md): An object that models a track of media that an asset contains.
- [AVAssetTrackSegment](avassettracksegment.md): An object that represents a time range segment of an asset track.
- [AVAssetTrackGroup](avassettrackgroup.md): A group of related tracks in an asset.

# AVURLAsset (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An asset that represents media at a local or remote URL.

## Declaration

```objectivec
@interface AVURLAsset : AVAsset
```

<a id="overview"></a>

## Overview

This class is a concrete subclass of [AVAsset](avasset.md). When you create an asset as shown below, the system creates and returns an instance of [AVURLAsset](avurlasset.md).

```swift
// A local or remote asset URL.
guard let url: URL = Bundle.main.url(forResource: "Image",
                                     withExtension: "png") else { return }
let asset = AVAsset(url: url)
```

In many cases, this is an appropriate way to create asset instances, but you can also directly instantiate an [AVURLAsset](avurlasset.md) when you need more fine-grained control over its initialization. The initializer for [AVURLAsset](avurlasset.md) accepts an options dictionary, which you use to customize the asset’s initialization for your particular purpose. For example, if you’re creating an asset for an HLS stream, you may want to prevent it from retrieving its media when it connects over a cellular network. You can do this by providing the initialization option and value as shown below.

```swift
let url: URL = // A remote asset URL.
let options = [AVURLAssetAllowsCellularAccessKey: false]
let asset = AVURLAsset(url: url, options: options)
```

## Topics

### Creating an asset

- [initWithURL:options:](avurlasset/init%28url_options_%29-2x8uu.md): Creates an asset that models the media resource at the specified URL.
- [URLAssetWithURL:options:](avurlasset/urlassetwithurl_options_.md): Returns an asset that models the media resource found at the specified URL.
- [Initialization options](avurlasset-initialization-options.md): Specify options to configure the initialization of a media asset.

### Loading tracks

- [findCompatibleTrackForCompositionTrack:completionHandler:](avurlasset/findcompatibletrack%28for_completionhandler_%29.md): Loads an asset track from which you can insert any time range into the composition track.

### Determining supported media types

- [audiovisualTypes](avurlasset/audiovisualtypes%28%29.md): Deprecated. Returns an array of the file types the asset supports.
- [audiovisualMIMETypes](avurlasset/audiovisualmimetypes%28%29.md): Returns an array of the MIME types the asset supports.
- [isPlayableExtendedMIMEType:](avurlasset/isplayableextendedmimetype%28__%29.md): Returns a Boolean value that indicates whether the asset is playable with the specified codecs and container type.
- [audiovisualContentTypes](avurlasset/audiovisualcontenttypes.md): Provides the content types the AVURLAsset class understands.

### Assisting with resource loading

- [resourceLoader](avurlasset/resourceloader.md): The resource loader for the asset.
- [mayRequireContentKeysForMediaDataProcessing](avurlasset/mayrequirecontentkeysformediadataprocessing.md): A Boolean value that indicates whether you can add this asset as a content key recipient to a content key session.

### Working with offline assets

- [assetCache](avurlasset/assetcache.md): The asset’s associated asset cache, if it exists.

### Accessing the media URL

- [URL](avurlasset/url.md): A URL to the asset’s media.

### Accessing asset variants

- [variants](avurlasset/variants.md): Deprecated. An array of variants that an asset contains.

### Accessing compatible tracks

- [compatibleTrackForCompositionTrack:](avurlasset/compatibletrack%28for_%29.md): Deprecated. Returns an asset track from which you can insert any time range into a given composition track.

### Accessing the session identifier

- [httpSessionIdentifier](avurlasset/httpsessionidentifier.md): A session identifier that the asset sends in HTTP requests that it makes.

### Accessing Media Extension properties

- [mediaExtensionProperties](avurlasset/mediaextensionproperties.md): The properties of the media extension format reader that decodes the asset.
- [AVMediaExtensionProperties](avmediaextensionproperties.md): An object that describes a Media Extension.
- [sidecarURL](avurlasset/sidecarurl.md): The sidecar URL used by the MediaExtension.

## Relationships

### Inherits From

- [AVAsset](avasset.md)

### Inherited By

- [AVFragmentedAsset](avfragmentedasset.md)

### Conforms To

- [AVContentKeyRecipient](avcontentkeyrecipient.md)
- [NSItemProviderReading](../foundation/nsitemproviderreading.md)
- [NSItemProviderWriting](../foundation/nsitemproviderwriting.md)

## See Also

### Assets

- [AVAsset](avasset.md): An object that models timed audiovisual media.
- [AVAssetTrack](avassettrack.md): An object that models a track of media that an asset contains.
- [AVAssetTrackSegment](avassettracksegment.md): An object that represents a time range segment of an asset track.
- [AVAssetTrackGroup](avassettrackgroup.md): A group of related tracks in an asset.
