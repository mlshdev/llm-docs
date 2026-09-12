> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyrequest/originatingrecipient](https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/originatingrecipient)

# originatingRecipient (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The AVContentKeyRecipient which initiated this request, if any.

## Declaration

```swift
weak var originatingRecipient: (any AVContentKeyRecipient)? { get }
```

<a id="discussion"></a>

## Discussion

The originatingRecipient is an AVFoundation object responsible for initiating an AVContentKeyRequest. For example, an AVURLAsset used for playback can trigger an AVContentKeyRequest.

If an application triggers key loading directly, for example with -\[AVContentKeySession processContentKeyRequestWithIdentifier:initializationData:options:\], the value of originatingRecipient will be nil.

The originatingRecipient of key requests from HLS interstitials will always be the corresponding interstitial AVURLAsset. To receive key requests for DRM-protected interstitial content, applications must ensure their AVContentKeySession is attached to these interstitial AVURLAssets.

These interstitial AVURLAssets may be retrieved from the primary AVURLAsset via AVPlayerInterstitialEventMonitor.

## See Also

### Getting content key request properties

- [identifier](identifier.md): The identifier for the content key.
- [canProvidePersistableContentKey](canprovidepersistablecontentkey.md): The content key request used to create a persistable content key or respond to a previous request with a persistable content key.
- [error](error.md): The error description for a failed key request.
- [initializationData](initializationdata.md): The data used to obtain a key response.
- [renewsExpiringResponseData](renewsexpiringresponsedata.md): A Boolean value that indicates whether the content key request renews previously provided response data.
- [status](status-swift.property.md): The current state of the content key request.
- [AVContentKeyRequest.Status](status-swift.enum.md): The status for a content key request.

# originatingRecipient (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The AVContentKeyRecipient which initiated this request, if any.

## Declaration

```objectivec
@property (weak, readonly, nullable) id<AVContentKeyRecipient> originatingRecipient;
```

<a id="discussion"></a>

## Discussion

The originatingRecipient is an AVFoundation object responsible for initiating an AVContentKeyRequest. For example, an AVURLAsset used for playback can trigger an AVContentKeyRequest.

If an application triggers key loading directly, for example with -\[AVContentKeySession processContentKeyRequestWithIdentifier:initializationData:options:\], the value of originatingRecipient will be nil.

The originatingRecipient of key requests from HLS interstitials will always be the corresponding interstitial AVURLAsset. To receive key requests for DRM-protected interstitial content, applications must ensure their AVContentKeySession is attached to these interstitial AVURLAssets.

These interstitial AVURLAssets may be retrieved from the primary AVURLAsset via AVPlayerInterstitialEventMonitor.

## See Also

### Getting content key request properties

- [identifier](identifier.md): The identifier for the content key.
- [canProvidePersistableContentKey](canprovidepersistablecontentkey.md): The content key request used to create a persistable content key or respond to a previous request with a persistable content key.
- [error](error.md): The error description for a failed key request.
- [initializationData](initializationdata.md): The data used to obtain a key response.
- [renewsExpiringResponseData](renewsexpiringresponsedata.md): A Boolean value that indicates whether the content key request renews previously provided response data.
- [status](status-swift.property.md): The current state of the content key request.
- [AVContentKeyRequestStatus](status-swift.enum.md): The status for a content key request.
