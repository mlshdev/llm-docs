> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiodeviceioproc](https://developer.apple.com/documentation/coreaudio/audiodeviceioproc)

# AudioDeviceIOProc (Swift)

**Framework:** Core Audio  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
typealias AudioDeviceIOProc = (AudioObjectID, UnsafePointer<AudioTimeStamp>, UnsafePointer<AudioBufferList>, UnsafePointer<AudioTimeStamp>, UnsafeMutablePointer<AudioBufferList>, UnsafePointer<AudioTimeStamp>, UnsafeMutableRawPointer?) -> OSStatus
```

## Parameters

- `inDevice`: The AudioDevice doing the IO.
- `inNow`: An AudioTimeStamp that indicates the IO cycle started. Note that this time includes any scheduling latency that may have been incurred waking the thread on which IO is being done.
- `inInputData`: An AudioBufferList containing the input data for the current IO cycle. For streams that are disabled, the AudioBuffer’s mData field will be NULL but the mDataByteSize field will still say how much data would have been there if it was enabled. Note that the contents of this structure should never be modified.
- `inInputTime`: An AudioTimeStamp that indicates the time at which the first frame in the data was acquired from the hardware. If the device has no input streams, the time stamp will be zeroed out.
- `outOutputData`: An AudioBufferList in which the output data for the current IO cycle is to be placed. On entry, each AudioBuffer’s mDataByteSize field indicates the maximum amount of data that can be placed in the buffer and the buffer’s memory has been zeroed out. For formats where the number of bytes per packet can vary (as with AC-3, for example), the client has to fill out on exit each mDataByteSize field in each AudioBuffer with the amount of data that was put in the buffer. Otherwise, the mDataByteSize field should not be changed. For streams that are disabled, the AudioBuffer’s mData field will be NULL but the mDataByteSize field will still say how much data would have been there if it was enabled. Except as noted above, the contents of this structure should not other wise be modified.
- `inOutputTime`: An AudioTimeStamp that indicates the time at which the first frame in the data will be passed to the hardware. If the device has no output streams, the time stamp will be zeroed out.
- `inClientData`: A pointer to client data established when the AudioDeviceIOProc was registered with the AudioDevice.

<a id="return-value"></a>

## Return Value

The return value is currently unused and should always be 0.

<a id="discussion"></a>

## Discussion

An AudioDeviceIOProc is called by an AudioDevice to provide input data read from the device and collect output data to be written to the device for the current IO cycle.

## See Also

### Data Types

- [AudioClassID](audioclassid.md)
- [AudioDeviceID](audiodeviceid.md)
- [AudioDeviceIOBlock](audiodeviceioblock.md)
- [AudioDeviceIOProcID](audiodeviceioprocid.md)
- [AudioDevicePropertyID](audiodevicepropertyid.md)
- [AudioDevicePropertyListenerProc](audiodevicepropertylistenerproc.md)
- [AudioHardwarePropertyID](audiohardwarepropertyid.md)
- [AudioHardwarePropertyListenerProc](audiohardwarepropertylistenerproc.md)
- [AudioObjectID](audioobjectid.md)
- [AudioObjectPropertyElement](audioobjectpropertyelement.md)
- [AudioObjectPropertyListenerBlock](audioobjectpropertylistenerblock.md)
- [AudioObjectPropertyListenerProc](audioobjectpropertylistenerproc.md)
- [AudioObjectPropertyScope](audioobjectpropertyscope.md)
- [AudioObjectPropertySelector](audioobjectpropertyselector.md)
- [AudioStreamID](audiostreamid.md)

# AudioDeviceIOProc (Objective-C)

**Framework:** Core Audio  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
typedef int (*)(unsigned int, const struct AudioTimeStamp *, const struct AudioBufferList *, const struct AudioTimeStamp *, struct AudioBufferList *, const struct AudioTimeStamp *, void *) __attribute__((nonblocking)) AudioDeviceIOProc;
```

## Parameters

- `inDevice`: The AudioDevice doing the IO.
- `inNow`: An AudioTimeStamp that indicates the IO cycle started. Note that this time includes any scheduling latency that may have been incurred waking the thread on which IO is being done.
- `inInputData`: An AudioBufferList containing the input data for the current IO cycle. For streams that are disabled, the AudioBuffer’s mData field will be NULL but the mDataByteSize field will still say how much data would have been there if it was enabled. Note that the contents of this structure should never be modified.
- `inInputTime`: An AudioTimeStamp that indicates the time at which the first frame in the data was acquired from the hardware. If the device has no input streams, the time stamp will be zeroed out.
- `outOutputData`: An AudioBufferList in which the output data for the current IO cycle is to be placed. On entry, each AudioBuffer’s mDataByteSize field indicates the maximum amount of data that can be placed in the buffer and the buffer’s memory has been zeroed out. For formats where the number of bytes per packet can vary (as with AC-3, for example), the client has to fill out on exit each mDataByteSize field in each AudioBuffer with the amount of data that was put in the buffer. Otherwise, the mDataByteSize field should not be changed. For streams that are disabled, the AudioBuffer’s mData field will be NULL but the mDataByteSize field will still say how much data would have been there if it was enabled. Except as noted above, the contents of this structure should not other wise be modified.
- `inOutputTime`: An AudioTimeStamp that indicates the time at which the first frame in the data will be passed to the hardware. If the device has no output streams, the time stamp will be zeroed out.
- `inClientData`: A pointer to client data established when the AudioDeviceIOProc was registered with the AudioDevice.

<a id="return-value"></a>

## Return Value

The return value is currently unused and should always be 0.

<a id="discussion"></a>

## Discussion

An AudioDeviceIOProc is called by an AudioDevice to provide input data read from the device and collect output data to be written to the device for the current IO cycle.

## See Also

### Data Types

- [AudioClassID](audioclassid.md)
- [AudioDeviceID](audiodeviceid.md)
- [AudioDeviceIOBlock](audiodeviceioblock.md)
- [AudioDeviceIOProcID](audiodeviceioprocid.md)
- [AudioDevicePropertyID](audiodevicepropertyid.md)
- [AudioDevicePropertyListenerProc](audiodevicepropertylistenerproc.md)
- [AudioDriverPlugInDevicePropertyChangedProc](audiodriverplugindevicepropertychangedproc.md)
- [AudioDriverPlugInStreamPropertyChangedProc](audiodriverpluginstreampropertychangedproc.md)
- [AudioHardwarePropertyID](audiohardwarepropertyid.md)
- [AudioHardwarePropertyListenerProc](audiohardwarepropertylistenerproc.md)
- [AudioObjectID](audioobjectid.md)
- [AudioObjectPropertyElement](audioobjectpropertyelement.md)
- [AudioObjectPropertyListenerBlock](audioobjectpropertylistenerblock.md)
- [AudioObjectPropertyListenerProc](audioobjectpropertylistenerproc.md)
- [AudioObjectPropertyScope](audioobjectpropertyscope.md)
