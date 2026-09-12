> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffergenerator/init(asset:timebase:)](https://developer.apple.com/documentation/avfoundation/avsamplebuffergenerator/init(asset:timebase:))

# init(asset:timebase:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a new sample buffer generator.

## Declaration

```swift
init(asset: AVAsset, timebase: CMTimebase?)
```

## Parameters

- `asset`: The asset.
- `timebase`: If `NULL`, requests will be handled synchronously.

<a id="return-value"></a>

## Return Value

An initialized `AVSampleBufferGenerator` instance.

# initWithAsset:timebase: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a new sample buffer generator.

## Declaration

```objectivec
- (instancetype) initWithAsset:(AVAsset *) asset timebase:(CMTimebaseRef) timebase;
```

## Parameters

- `asset`: The asset.
- `timebase`: If `NULL`, requests will be handled synchronously.

<a id="return-value"></a>

## Return Value

An initialized `AVSampleBufferGenerator` instance.
