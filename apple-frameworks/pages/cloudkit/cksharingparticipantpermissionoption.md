> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksharingparticipantpermissionoption](https://developer.apple.com/documentation/cloudkit/cksharingparticipantpermissionoption)

# CKSharingParticipantPermissionOption (Swift)

**Framework:** CloudKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that controls participant permission options.

## Declaration

```swift
struct CKSharingParticipantPermissionOption
```

## Topics

### Creating an access option

- [init(rawValue:)](cksharingparticipantpermissionoption/init%28rawvalue_%29.md): Creates and initializes a participant permission option object.

### Configuring the options

- [any](cksharingparticipantpermissionoption/any.md): The permission option the system uses to control whether a user can grant read-only or write access.
- [readOnly](cksharingparticipantpermissionoption/readonly.md): The permission option the system uses to control whether a user can grant read-only access.
- [readWrite](cksharingparticipantpermissionoption/readwrite.md): The permission option the system uses to control whether a user can grant write access.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Configuring the options

- [allowedParticipantAccessOptions](ckallowedsharingoptions/allowedparticipantaccessoptions.md): The permission option the system uses to control whether a user can share publicly or privately.
- [allowedParticipantPermissionOptions](ckallowedsharingoptions/allowedparticipantpermissionoptions.md): The permission option the system uses to control whether a user can grant read-only or write access.
- [CKSharingParticipantAccessOption](cksharingparticipantaccessoption.md): An object that controls participant access options.

# CKSharingParticipantPermissionOption (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that controls participant permission options.

## Declaration

```objectivec
enum CKSharingParticipantPermissionOption : NSUInteger;
```

## Topics

### Configuring the options

- [CKSharingParticipantPermissionOptionAny](cksharingparticipantpermissionoption/any.md): The permission option the system uses to control whether a user can grant read-only or write access.
- [CKSharingParticipantPermissionOptionReadOnly](cksharingparticipantpermissionoption/readonly.md): The permission option the system uses to control whether a user can grant read-only access.
- [CKSharingParticipantPermissionOptionReadWrite](cksharingparticipantpermissionoption/readwrite.md): The permission option the system uses to control whether a user can grant write access.

## See Also

### Configuring the options

- [allowedParticipantAccessOptions](ckallowedsharingoptions/allowedparticipantaccessoptions.md): The permission option the system uses to control whether a user can share publicly or privately.
- [allowedParticipantPermissionOptions](ckallowedsharingoptions/allowedparticipantpermissionoptions.md): The permission option the system uses to control whether a user can grant read-only or write access.
- [CKSharingParticipantAccessOption](cksharingparticipantaccessoption.md): An object that controls participant access options.
