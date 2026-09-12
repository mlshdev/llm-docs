> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstream/init(filter:configuration:delegate:)](https://developer.apple.com/documentation/screencapturekit/scstream/init(filter:configuration:delegate:))

# init(filter:configuration:delegate:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

Creates a stream with a content filter and configuration.

## Declaration

```swift
init(filter contentFilter: SCContentFilter, configuration streamConfig: SCStreamConfiguration, delegate: (any SCStreamDelegate)?)
```

## Parameters

- `contentFilter`: The content to capture.
- `streamConfig`: The configuration to apply to the stream.
- `delegate`: An optional object that responds to stream events.

# initWithFilter:configuration:delegate: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

Creates a stream with a content filter and configuration.

## Declaration

```objectivec
- (instancetype) initWithFilter:(SCContentFilter *) contentFilter configuration:(SCStreamConfiguration *) streamConfig delegate:(id<SCStreamDelegate>) delegate;
```

## Parameters

- `contentFilter`: The content to capture.
- `streamConfig`: The configuration to apply to the stream.
- `delegate`: An optional object that responds to stream events.
