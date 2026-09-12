> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vttemporalnoisefilterconfiguration/init(framewidth:frameheight:sourcepixelformat:)](https://developer.apple.com/documentation/videotoolbox/vttemporalnoisefilterconfiguration/init(framewidth:frameheight:sourcepixelformat:))

# init(frameWidth:frameHeight:sourcePixelFormat:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Creates a new temporal noise-processor configuration.

## Declaration

```swift
init?(frameWidth: Int, frameHeight: Int, sourcePixelFormat: OSType)
```

## Parameters

- `frameWidth`: Width of source frame in pixels.
- `frameHeight`: Height of source frame in pixels.

<a id="discussion"></a>

## Discussion

Returns nil if frameWidth, frameHeight, or sourcePixelFormat is unsupported.

# initWithFrameWidth:frameHeight:sourcePixelFormat: (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Creates a new temporal noise-processor configuration.

## Declaration

```objectivec
- (instancetype) initWithFrameWidth:(NSInteger) frameWidth frameHeight:(NSInteger) frameHeight sourcePixelFormat:(OSType) sourcePixelFormat;
```

## Parameters

- `frameWidth`: Width of source frame in pixels.
- `frameHeight`: Height of source frame in pixels.

<a id="discussion"></a>

## Discussion

Returns nil if frameWidth, frameHeight, or sourcePixelFormat is unsupported.
