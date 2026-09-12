> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnvideoprocessor/init(url:)-94b7](https://developer.apple.com/documentation/vision/vnvideoprocessor/init(url:)-94b7)

# init(url:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a video processor to perform Vision requests against the specified video asset.

## Declaration

```swift
init(url videoURL: URL)
```

## Parameters

- `videoURL`: The video asset URL. The specified asset must be a video format supported by AVFoundation.

## See Also

### Creating a Video Processor

- [init(URL:)](init%28url_%29-38vj9.md)

# initWithURL: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a video processor to perform Vision requests against the specified video asset.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) videoURL;
```

## Parameters

- `videoURL`: The video asset URL. The specified asset must be a video format supported by AVFoundation.
