> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avurlassetpreferprecisedurationandtimingkey](https://developer.apple.com/documentation/avfoundation/avurlassetpreferprecisedurationandtimingkey)

# AVURLAssetPreferPreciseDurationAndTimingKey (Swift)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the asset should provide accurate duration and precise random access by time.

## Declaration

```swift
let AVURLAssetPreferPreciseDurationAndTimingKey: String
```

<a id="Discussion"></a>

## Discussion

Setting a value of [true](https://developer.apple.com/documentation/swift/true) indicates longer loading times are acceptable in cases where you require precise timing. Container formats like QuickTime and MPEG-4 provide sufficient timing information and don’t require additional parsing to retrieve it. Other formats don’t provide sufficient summary information, and the system can’t accurately calculate the resource’s duration and timing without examining the media content.

If you only intend to play the asset, the default value of [false](https://developer.apple.com/documentation/swift/false) is sufficient because [AVPlayer](avplayer.md) supports approximate random access by time when full precision isn’t available. If you intend to insert the asset into [AVMutableComposition](avmutablecomposition.md) or [AVMutableMovie](avmutablemovie.md), precise random access is typically desirable, and you should set this option to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Options

- [AVURLAssetAllowsCellularAccessKey](avurlassetallowscellularaccesskey.md): A Boolean value that indicates whether the system can make network requests on behalf of the asset when connected to a cellular network.
- [AVURLAssetAllowsConstrainedNetworkAccessKey](avurlassetallowsconstrainednetworkaccesskey.md): A Boolean value that indicates whether the system allows network requests on behalf of this asset to use the constrained interface.
- [AVURLAssetAllowsExpensiveNetworkAccessKey](avurlassetallowsexpensivenetworkaccesskey.md): A Boolean value that indicates whether the system allows network requests on behalf of this asset to use the expensive interface.
- [AVURLAssetHTTPCookiesKey](avurlassethttpcookieskey.md): The HTTP cookies that a URL asset may send with HTTP requests.
- [AVURLAssetHTTPUserAgentKey](avurlassethttpuseragentkey.md): A key that specifies the user agent of requests that an asset makes.
- [AVURLAssetOverrideMIMETypeKey](avurlassetoverridemimetypekey.md): A key that specifies the MIME type to use to identify the format of a media resource.
- [AVURLAssetPrimarySessionIdentifierKey](avurlassetprimarysessionidentifierkey.md): Specifies a UUID to set as the session identifier for HTTP requests that the asset makes.
- [AVURLAssetReferenceRestrictionsKey](avurlassetreferencerestrictionskey.md): A value that represents the restrictions used by the asset when resolving references to external media data.
- [AVURLAssetShouldSupportAliasDataReferencesKey](avurlassetshouldsupportaliasdatareferenceskey.md): A Boolean value that indicates whether the system parses and resolves alias data references in the asset.
- [AVURLAssetURLRequestAttributionKey](avurlasseturlrequestattributionkey.md): A value that specifies the attribution of the URLs that this asset requests.
- [AVURLAssetShouldParseExternalSphericalTagsKey](avurlassetshouldparseexternalsphericaltagskey.md): Indicates whether additional projected media signaling in the asset should be parsed and resolved as format description extensions.

# AVURLAssetPreferPreciseDurationAndTimingKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the asset should provide accurate duration and precise random access by time.

## Declaration

```objectivec
extern NSString * const AVURLAssetPreferPreciseDurationAndTimingKey;
```

<a id="Discussion"></a>

## Discussion

Setting a value of [true](https://developer.apple.com/documentation/swift/true) indicates longer loading times are acceptable in cases where you require precise timing. Container formats like QuickTime and MPEG-4 provide sufficient timing information and don’t require additional parsing to retrieve it. Other formats don’t provide sufficient summary information, and the system can’t accurately calculate the resource’s duration and timing without examining the media content.

If you only intend to play the asset, the default value of [false](https://developer.apple.com/documentation/swift/false) is sufficient because [AVPlayer](avplayer.md) supports approximate random access by time when full precision isn’t available. If you intend to insert the asset into [AVMutableComposition](avmutablecomposition.md) or [AVMutableMovie](avmutablemovie.md), precise random access is typically desirable, and you should set this option to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Options

- [AVURLAssetAllowsCellularAccessKey](avurlassetallowscellularaccesskey.md): A Boolean value that indicates whether the system can make network requests on behalf of the asset when connected to a cellular network.
- [AVURLAssetAllowsConstrainedNetworkAccessKey](avurlassetallowsconstrainednetworkaccesskey.md): A Boolean value that indicates whether the system allows network requests on behalf of this asset to use the constrained interface.
- [AVURLAssetAllowsExpensiveNetworkAccessKey](avurlassetallowsexpensivenetworkaccesskey.md): A Boolean value that indicates whether the system allows network requests on behalf of this asset to use the expensive interface.
- [AVURLAssetHTTPCookiesKey](avurlassethttpcookieskey.md): The HTTP cookies that a URL asset may send with HTTP requests.
- [AVURLAssetHTTPUserAgentKey](avurlassethttpuseragentkey.md): A key that specifies the user agent of requests that an asset makes.
- [AVURLAssetOverrideMIMETypeKey](avurlassetoverridemimetypekey.md): A key that specifies the MIME type to use to identify the format of a media resource.
- [AVURLAssetPrimarySessionIdentifierKey](avurlassetprimarysessionidentifierkey.md): Specifies a UUID to set as the session identifier for HTTP requests that the asset makes.
- [AVURLAssetReferenceRestrictionsKey](avurlassetreferencerestrictionskey.md): A value that represents the restrictions used by the asset when resolving references to external media data.
- [AVURLAssetShouldSupportAliasDataReferencesKey](avurlassetshouldsupportaliasdatareferenceskey.md): A Boolean value that indicates whether the system parses and resolves alias data references in the asset.
- [AVURLAssetURLRequestAttributionKey](avurlasseturlrequestattributionkey.md): A value that specifies the attribution of the URLs that this asset requests.
- [AVURLAssetShouldParseExternalSphericalTagsKey](avurlassetshouldparseexternalsphericaltagskey.md): Indicates whether additional projected media signaling in the asset should be parsed and resolved as format description extensions.
