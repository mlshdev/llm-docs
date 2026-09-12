> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/catapdescription/initwithprocesses:anddeviceuid:withstream:](https://developer.apple.com/documentation/coreaudio/catapdescription/initwithprocesses:anddeviceuid:withstream:)

# initWithProcesses:andDeviceUID:withStream:

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.0+ · macOS 12.0+

## Declaration

```objectivec
- (instancetype) initWithProcesses:(NSArray<NSNumber *> *) processesObjectIDsToIncludeInTap andDeviceUID:(NSString *) deviceUID withStream:(NSInteger) stream;
```

## Parameters

- `processesObjectIDsToIncludeInTap`: An NSArray of NSNumbers where each NSNumber holds an AudioObjectID of the process object to exclude from the tap. All other processes that output audio will be included in the tap.
- `deviceUID`: The device UID of the output device whose audio will be captured
- `stream`: NSInteger that represents the index of the stream on the device whose audio will be captured. The format of the tap will match the format of this stream.

<a id="discussion"></a>

## Discussion

Mix all given process audio streams destined for the selected device stream
