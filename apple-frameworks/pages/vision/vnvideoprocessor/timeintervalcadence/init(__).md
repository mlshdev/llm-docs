> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnvideoprocessor/timeintervalcadence/init(_:)](https://developer.apple.com/documentation/vision/vnvideoprocessor/timeintervalcadence/init(_:))

# init(\_:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a new time-based cadence with a time interval.

## Declaration

```swift
init(_ timeInterval: CFTimeInterval)
```

## Parameters

- `timeInterval`: The time interval at which to process video.

## See Also

### Creating a Cadence

- [init(timeInterval:)](init%28timeinterval_%29.md)

# initWithTimeInterval: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a new time-based cadence with a time interval.

## Declaration

```objectivec
- (instancetype) initWithTimeInterval:(CFTimeInterval) timeInterval;
```

## Parameters

- `timeInterval`: The time interval at which to process video.
