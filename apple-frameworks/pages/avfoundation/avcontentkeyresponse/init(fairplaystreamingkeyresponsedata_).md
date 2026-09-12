> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyresponse/init(fairplaystreamingkeyresponsedata:)](https://developer.apple.com/documentation/avfoundation/avcontentkeyresponse/init(fairplaystreamingkeyresponsedata:))

# init(fairPlayStreamingKeyResponseData:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

Creates a content key response with an encrypted key response data blob when FairPlay Streaming is the key delivery method.

## Declaration

```swift
convenience init(fairPlayStreamingKeyResponseData keyResponseData: Data)
```

## Parameters

- `keyResponseData`: The key data from the FairPlay Streaming key server.

<a id="return-value"></a>

## Return Value

Returns a new [AVContentKeyResponse](../avcontentkeyresponse.md) object to decrypt content.

<a id="Discussion"></a>

## Discussion

Use the results of this initializer when the content key session creates a key request using the [fairPlayStreaming](../avcontentkeysystem/fairplaystreaming.md) parameter. The results are then passed to the [processContentKeyResponse(\_:)](../avcontentkeyrequest/processcontentkeyresponse%28__%29.md) method to supply the decrypter with key data.

## See Also

### Creating new content key responses

- [init(clearKeyData:initializationVector:)](init%28clearkeydata_initializationvector_%29.md): Creates a new key response object for key data and initialization vector sent in the clear.
- [init(authorizationTokenData:)](init%28authorizationtokendata_%29.md): Creates a content key response with an authorization token.

# contentKeyResponseWithFairPlayStreamingKeyResponseData: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

Creates a content key response with an encrypted key response data blob when FairPlay Streaming is the key delivery method.

## Declaration

```objectivec
+ (instancetype) contentKeyResponseWithFairPlayStreamingKeyResponseData:(NSData *) keyResponseData;
```

## Parameters

- `keyResponseData`: The key data from the FairPlay Streaming key server.

<a id="return-value"></a>

## Return Value

Returns a new [AVContentKeyResponse](../avcontentkeyresponse.md) object to decrypt content.

<a id="Discussion"></a>

## Discussion

Use the results of this initializer when the content key session creates a key request using the [AVContentKeySystemFairPlayStreaming](../avcontentkeysystem/fairplaystreaming.md) parameter. The results are then passed to the [processContentKeyResponse:](../avcontentkeyrequest/processcontentkeyresponse%28__%29.md) method to supply the decrypter with key data.

## See Also

### Creating new content key responses

- [contentKeyResponseWithClearKeyData:initializationVector:](init%28clearkeydata_initializationvector_%29.md): Creates a new key response object for key data and initialization vector sent in the clear.
- [contentKeyResponseWithAuthorizationTokenData:](init%28authorizationtokendata_%29.md): Creates a content key response with an authorization token.
