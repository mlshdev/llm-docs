> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/recordpermission-swift.enum](https://developer.apple.com/documentation/avfaudio/avaudiosession/recordpermission-swift.enum)

# AVAudioSession.RecordPermission (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

The values that define the current state of the record permission request.

## Declaration

```swift
enum RecordPermission
```

<a id="overview"></a>

## Overview

The [recordPermission](recordpermission-swift.property.md) property returns these values.

## Topics

### Record Permissions

- [AVAudioSession.RecordPermission.undetermined](recordpermission-swift.enum/undetermined.md): Deprecated. A value that indicates that the user hasn’t granted or denied recording permission.
- [AVAudioSession.RecordPermission.denied](recordpermission-swift.enum/denied.md): Deprecated. A value that indicates that the user has denied recording permission.
- [AVAudioSession.RecordPermission.granted](recordpermission-swift.enum/granted.md): Deprecated. A value that indicates that the user has granted recording permission.

### Initializers

- [init(rawValue:)](recordpermission-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# AVAudioSessionRecordPermission (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The values that define the current state of the record permission request.

## Declaration

```objectivec
enum AVAudioSessionRecordPermission : NSUInteger;
```

<a id="overview"></a>

## Overview

The [recordPermission](recordpermission-swift.property.md) property returns these values.

## Topics

### Record Permissions

- [AVAudioSessionRecordPermissionUndetermined](recordpermission-swift.enum/undetermined.md): Deprecated. A value that indicates that the user hasn’t granted or denied recording permission.
- [AVAudioSessionRecordPermissionDenied](recordpermission-swift.enum/denied.md): Deprecated. A value that indicates that the user has denied recording permission.
- [AVAudioSessionRecordPermissionGranted](recordpermission-swift.enum/granted.md): Deprecated. A value that indicates that the user has granted recording permission.
