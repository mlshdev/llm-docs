> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/osworkgroup](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/osworkgroup)

# osWorkgroup

**Interface language:** Objective-C

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The workgroup associated with the audio device underlying this Audio Unit.

## Declaration

```objectivec
@property (nonatomic, readonly) os_workgroup_t osWorkgroup;
```

```objectivec
@property (atomic, readonly) os_workgroup_t osWorkgroup;
```

## Mentioned In

- [Adding Parallel Real-Time Threads to Audio Workgroups](../adding-parallel-real-time-threads-to-audio-workgroups.md)

<a id="Discussion"></a>

## Discussion

Workgroups allow multiple threads to coordinate their activities for realtime operations. For Audio Units, this coordination occurs between the Audio Unit and other processes, such as the audio server and host app. The system uses the workgroup to observe the threads’ CPU usage and dynamically balance the competing considerations of power consumption and real-time rendering capacity.

This version 3 property is bridged to the version 2 [kAudioOutputUnitProperty_OSWorkgroup](../kaudiooutputunitproperty_osworkgroup.md) property.

## See Also

### Optimizing Performance

- [latency](latency.md): The audio unit’s processing latency, in seconds.
- [tailTime](tailtime.md): The audio unit’s tail time, in seconds.
- [renderQuality](renderquality.md): Provides a trade-off between rendering quality and CPU load.
- [shouldBypassEffect](shouldbypasseffect.md): Determines whether an effect should route input directly to output, without any processing.
- [canProcessInPlace](canprocessinplace.md): Determines whether an audio unit can process in place.
- [renderingOffline](isrenderingoffline.md): Communicates to an audio unit that it is rendering offline.
