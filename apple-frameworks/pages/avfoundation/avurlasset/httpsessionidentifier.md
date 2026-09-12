> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avurlasset/httpsessionidentifier](https://developer.apple.com/documentation/avfoundation/avurlasset/httpsessionidentifier)

# httpSessionIdentifier (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A session identifier that the asset sends in HTTP requests that it makes.

## Declaration

```swift
var httpSessionIdentifier: UUID { get }
```

<a id="Discussion"></a>

## Discussion

The asset uses this value to set as the `X-Playback-Session-Id` header of HTTP requests that it creates.

> **Note**

>  Copies of an [AVURLAsset](../avurlasset.md) have the same session identifier as the original asset.

# httpSessionIdentifier (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A session identifier that the asset sends in HTTP requests that it makes.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUUID * httpSessionIdentifier;
```

<a id="Discussion"></a>

## Discussion

The asset uses this value to set as the `X-Playback-Session-Id` header of HTTP requests that it creates.

> **Note**

>  Copies of an [AVURLAsset](../avurlasset.md) have the same session identifier as the original asset.
