> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureancillarydataencoder/setuserinstanceuid(_:foruserudamversion:)](https://developer.apple.com/documentation/avfoundation/avcaptureancillarydataencoder/setuserinstanceuid(_:foruserudamversion:))

# setUserInstanceUID(\_:forUserUDAMVersion:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Set the UID and Version number for the user data.

## Declaration

```swift
func setUserInstanceUID(_ uuid: UUID, forUserUDAMVersion version: NSNumber)
```

## Parameters

- `uuid`: The UUID for the SMPTE RDD 18 ancillary data instance
- `version`: The SMPTE RDD 18 User Defined Acquisition Metadata (UDAM) Set Version

<a id="discussion"></a>

## Discussion

Allows the user to set the instance and version of the ancillary data.

# setUserInstanceUID:forUserUDAMVersion: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Set the UID and Version number for the user data.

## Declaration

```objectivec
- (void) setUserInstanceUID:(NSUUID *) uuid forUserUDAMVersion:(NSNumber *) version;
```

## Parameters

- `uuid`: The UUID for the SMPTE RDD 18 ancillary data instance
- `version`: The SMPTE RDD 18 User Defined Acquisition Metadata (UDAM) Set Version

<a id="discussion"></a>

## Discussion

Allows the user to set the instance and version of the ancillary data.
