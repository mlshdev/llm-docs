> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocomposition/outputbufferdescription](https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/outputbufferdescription)

# outputBufferDescription

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The output buffers of the video composition can be specified with the outputBufferDescription. The value is an array of CMTagCollectionRef objects that describes the output buffers.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray * outputBufferDescription;
```

<a id="discussion"></a>

## Discussion

If the video composition will output tagged buffers, the details of those buffers should be specified with CMTags. Specifically, the StereoView (eyes) and ProjectionKind must be specified. The behavior is undefined if the output tagged buffers do not match the outputBufferDescription. The default is nil, which means monoscopic output. Note that an empty array is not valid. An exception will be thrown if the objects in the array are not of type CMTagCollectionRef. Note that tagged buffers are only supported for custom compositors.

## See Also

### Configuring video composition properties

- [frameDuration](frameduration.md): Deprecated. A time interval for which the video composition should render composed video frames.
- [renderSize](rendersize.md): Deprecated. The size at which the video composition should render.
- [renderScale](renderscale.md): Deprecated. The scale at which the video composition should render.
- [animationTool](animationtool.md): Deprecated. A video composition tool to use with Core Animation in offline rendering.
