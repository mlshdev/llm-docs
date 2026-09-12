> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiooutputunitproperty_osworkgroup](https://developer.apple.com/documentation/audiotoolbox/kaudiooutputunitproperty_osworkgroup)

# kAudioOutputUnitProperty_OSWorkgroup

**Interface language:** Objective-C

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The workgroup associated with the audio device underlying this Audio Unit.

## Declaration

```objectivec
kAudioOutputUnitProperty_OSWorkgroup
```

## Mentioned In

- [Adding Parallel Real-Time Threads to Audio Workgroups](adding-parallel-real-time-threads-to-audio-workgroups.md)

<a id="Discussion"></a>

## Discussion

The value of this key is an [os_workgroup_t](../os/os_workgroup_t.md) object.

Workgroups allow multiple threads to coordinate their activities for realtime operations. For Audio Units, this coordination occurs between the Audio Unit and other processes, such as the audio server and host app. The system uses the workgroup to observe the threads’ CPU usage and dynamically balance the competing considerations of power consumption and real-time rendering capacity.

This version 2 property is bridged to the version 3 [osWorkgroup](auaudiounit/osworkgroup.md) property of [AUAudioUnit](auaudiounit.md).

## See Also

### Device Workgroup

- [kAudioDevicePropertyIOThreadOSWorkgroup](../coreaudio/kaudiodevicepropertyiothreadosworkgroup.md): The device’s workgroup object, which you use to coordinate your threads with the threads of the device.
