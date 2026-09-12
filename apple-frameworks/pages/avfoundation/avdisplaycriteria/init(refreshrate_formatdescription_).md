> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdisplaycriteria/init(refreshrate:formatdescription:)](https://developer.apple.com/documentation/avfoundation/avdisplaycriteria/init(refreshrate:formatdescription:))

# init(refreshRate:formatDescription:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** tvOS 17.0+ · visionOS 1.0+

Creates a display criteria object with the specified refresh rate and format description.

## Declaration

```swift
init(refreshRate: Float, formatDescription: CMFormatDescription)
```

## Parameters

- `refreshRate`: The requested screen refresh rate.
- `formatDescription`: An object that describes the format of the video.

# initWithRefreshRate:formatDescription: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** tvOS 17.0+ · visionOS 1.0+

Creates a display criteria object with the specified refresh rate and format description.

## Declaration

```objectivec
- (instancetype) initWithRefreshRate:(float) refreshRate formatDescription:(CMFormatDescriptionRef) formatDescription;
```

## Parameters

- `refreshRate`: The requested screen refresh rate.
- `formatDescription`: An object that describes the format of the video.
