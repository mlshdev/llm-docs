> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyresponse/init(authorizationtokendata:)](https://developer.apple.com/documentation/avfoundation/avcontentkeyresponse/init(authorizationtokendata:))

# init(authorizationTokenData:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a content key response with an authorization token.

## Declaration

```swift
convenience init(authorizationTokenData: Data)
```

## Parameters

- `authorizationTokenData`: A data value that contains the authorization token.

## See Also

### Creating new content key responses

- [init(clearKeyData:initializationVector:)](init%28clearkeydata_initializationvector_%29.md): Creates a new key response object for key data and initialization vector sent in the clear.
- [init(fairPlayStreamingKeyResponseData:)](init%28fairplaystreamingkeyresponsedata_%29.md): Creates a content key response with an encrypted key response data blob when FairPlay Streaming is the key delivery method.

# contentKeyResponseWithAuthorizationTokenData: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a content key response with an authorization token.

## Declaration

```objectivec
+ (instancetype) contentKeyResponseWithAuthorizationTokenData:(NSData *) authorizationTokenData;
```

## Parameters

- `authorizationTokenData`: A data value that contains the authorization token.

## See Also

### Creating new content key responses

- [contentKeyResponseWithClearKeyData:initializationVector:](init%28clearkeydata_initializationvector_%29.md): Creates a new key response object for key data and initialization vector sent in the clear.
- [contentKeyResponseWithFairPlayStreamingKeyResponseData:](init%28fairplaystreamingkeyresponsedata_%29.md): Creates a content key response with an encrypted key response data blob when FairPlay Streaming is the key delivery method.
