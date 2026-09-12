> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/audiodriverkit/kiouseraudioobjectiddriver](https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/kiouseraudioobjectiddriver)

# kIOUserAudioObjectIDDriver

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Global Variable  
**Availability:** DriverKit 21.0+

The audio object ID of the driver.

## Declaration

```objectivec
constexpr const IOUserAudioObjectID kIOUserAudioObjectIDDriver;
```

<a id="Discussion"></a>

## Discussion

This [IOUserAudioObjectID](iouseraudioobjectid.md) always refers to the one and only instance of the [IOUserAudioDriver](../iouseraudiodriver.md).
