> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/recordpermission-swift.property](https://developer.apple.com/documentation/avfaudio/avaudiosession/recordpermission-swift.property)

# recordPermission (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 10.0)

The current recording permission status.

> Use [recordPermission](../avaudioapplication/recordpermission-swift.property.md) on [AVAudioApplication](../avaudioapplication.md) instead.

## Declaration

```swift
var recordPermission: AVAudioSession.RecordPermission { get }
```

<a id="return-value"></a>

## Return Value

Returns one of three status values:

<a id="discussion"></a>

## Discussion

- The user granted permission to record ([AVAudioSession.RecordPermission.granted](recordpermission-swift.enum/granted.md)).
- The user denied recording permission ([AVAudioSession.RecordPermission.denied](recordpermission-swift.enum/denied.md)).
- Recording permission hasn’t been requested ([AVAudioSession.RecordPermission.undetermined](recordpermission-swift.enum/undetermined.md)).

## Topics

### Data Types

- [AVAudioSession.RecordPermission](recordpermission-swift.enum.md): The values that define the current state of the record permission request.

## See Also

### Requesting permission to record

- [requestRecordPermission(\_:)](requestrecordpermission%28__%29.md): Deprecated. Requests the user’s permission to record audio.

# recordPermission (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 10.0)

The current recording permission status.

> Use [recordPermission](../avaudioapplication/recordpermission-swift.property.md) on [AVAudioApplication](../avaudioapplication.md) instead.

## Declaration

```objectivec
@property (readonly) AVAudioSessionRecordPermission recordPermission;
```

<a id="return-value"></a>

## Return Value

Returns one of three status values:

<a id="discussion"></a>

## Discussion

- The user granted permission to record ([AVAudioSessionRecordPermissionGranted](recordpermission-swift.enum/granted.md)).
- The user denied recording permission ([AVAudioSessionRecordPermissionDenied](recordpermission-swift.enum/denied.md)).
- Recording permission hasn’t been requested ([AVAudioSessionRecordPermissionUndetermined](recordpermission-swift.enum/undetermined.md)).

## Topics

### Data Types

- [AVAudioSessionRecordPermission](recordpermission-swift.enum.md): The values that define the current state of the record permission request.

## See Also

### Requesting permission to record

- [requestRecordPermission:](requestrecordpermission%28__%29.md): Deprecated. Requests the user’s permission to record audio.
