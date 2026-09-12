> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyresponse/init(clearkeydata:initializationvector:)](https://developer.apple.com/documentation/avfoundation/avcontentkeyresponse/init(clearkeydata:initializationvector:))

# init(clearKeyData:initializationVector:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a new key response object for key data and initialization vector sent in the clear.

## Declaration

```swift
convenience init(clearKeyData keyData: Data, initializationVector: Data?)
```

## Parameters

- `keyData`: The key used for decrypting content.
- `initializationVector`: The initialization vector used for decrypting content. This value is `nil` when the initialization vector is contained in the media to be decrypted.

<a id="return-value"></a>

## Return Value

Returns a new [AVContentKeyResponse](../avcontentkeyresponse.md) object to decrypt content.

<a id="Discussion"></a>

## Discussion

Use the results of this initializer when the content key session creates a key request using the [clearKey](../avcontentkeysystem/clearkey.md) parameter. The results are then passed to the [processContentKeyResponse(\_:)](../avcontentkeyrequest/processcontentkeyresponse%28__%29.md) method to supply the decrypter with key data.

## See Also

### Creating new content key responses

- [init(fairPlayStreamingKeyResponseData:)](init%28fairplaystreamingkeyresponsedata_%29.md): Creates a content key response with an encrypted key response data blob when FairPlay Streaming is the key delivery method.
- [init(authorizationTokenData:)](init%28authorizationtokendata_%29.md): Creates a content key response with an authorization token.

# contentKeyResponseWithClearKeyData:initializationVector: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a new key response object for key data and initialization vector sent in the clear.

## Declaration

```objectivec
+ (instancetype) contentKeyResponseWithClearKeyData:(NSData *) keyData initializationVector:(NSData *) initializationVector;
```

## Parameters

- `keyData`: The key used for decrypting content.
- `initializationVector`: The initialization vector used for decrypting content. This value is `nil` when the initialization vector is contained in the media to be decrypted.

<a id="return-value"></a>

## Return Value

Returns a new [AVContentKeyResponse](../avcontentkeyresponse.md) object to decrypt content.

<a id="Discussion"></a>

## Discussion

Use the results of this initializer when the content key session creates a key request using the [AVContentKeySystemClearKey](../avcontentkeysystem/clearkey.md) parameter. The results are then passed to the [processContentKeyResponse:](../avcontentkeyrequest/processcontentkeyresponse%28__%29.md) method to supply the decrypter with key data.

## See Also

### Creating new content key responses

- [contentKeyResponseWithFairPlayStreamingKeyResponseData:](init%28fairplaystreamingkeyresponsedata_%29.md): Creates a content key response with an encrypted key response data blob when FairPlay Streaming is the key delivery method.
- [contentKeyResponseWithAuthorizationTokenData:](init%28authorizationtokendata_%29.md): Creates a content key response with an authorization token.
