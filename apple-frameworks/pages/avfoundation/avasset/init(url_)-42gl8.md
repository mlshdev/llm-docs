> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/init(url:)-42gl8](https://developer.apple.com/documentation/avfoundation/avasset/init(url:)-42gl8)

# init(url:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ (deprecated in 18.0) · iPadOS 4.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 1.0+ (deprecated in 11.0)

Creates an asset that models the media at the specified URL.

> Use AVURLAsset(url:) instead

## Declaration

```swift
convenience init(url URL: URL)
```

## Parameters

- `URL`: A URL to a local, remote, or HTTP Live Streaming media resource.

# assetWithURL: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates an asset that models the media at the specified URL.

## Declaration

```objectivec
+ (instancetype) assetWithURL:(NSURL *) URL;
```

## Parameters

- `URL`: A URL to a local, remote, or HTTP Live Streaming media resource.
