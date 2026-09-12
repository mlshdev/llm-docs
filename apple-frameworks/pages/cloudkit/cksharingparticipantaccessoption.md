> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksharingparticipantaccessoption](https://developer.apple.com/documentation/cloudkit/cksharingparticipantaccessoption)

# CKSharingParticipantAccessOption (Swift)

**Framework:** CloudKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that controls participant access options.

## Declaration

```swift
struct CKSharingParticipantAccessOption
```

## Topics

### Creating an access option

- [init(rawValue:)](cksharingparticipantaccessoption/init%28rawvalue_%29.md): Creates and initializes a participant access option object.

### Configuring the options

- [any](cksharingparticipantaccessoption/any.md): The permission option the system uses to control whether a user can share publicly or privately.
- [anyoneWithLink](cksharingparticipantaccessoption/anyonewithlink.md): The permission option the system uses to control whether a user can share publicly.
- [specifiedRecipientsOnly](cksharingparticipantaccessoption/specifiedrecipientsonly.md): The permission option the system uses to control whether a user can share privately.

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
- [CKSharingParticipantPermissionOption](cksharingparticipantpermissionoption.md): An object that controls participant permission options.

# CKSharingParticipantAccessOption (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that controls participant access options.

## Declaration

```objectivec
enum CKSharingParticipantAccessOption : NSUInteger;
```

## Topics

### Configuring the options

- [CKSharingParticipantAccessOptionAny](cksharingparticipantaccessoption/any.md): The permission option the system uses to control whether a user can share publicly or privately.
- [CKSharingParticipantAccessOptionAnyoneWithLink](cksharingparticipantaccessoption/anyonewithlink.md): The permission option the system uses to control whether a user can share publicly.
- [CKSharingParticipantAccessOptionSpecifiedRecipientsOnly](cksharingparticipantaccessoption/specifiedrecipientsonly.md): The permission option the system uses to control whether a user can share privately.

## See Also

### Configuring the options

- [allowedParticipantAccessOptions](ckallowedsharingoptions/allowedparticipantaccessoptions.md): The permission option the system uses to control whether a user can share publicly or privately.
- [allowedParticipantPermissionOptions](ckallowedsharingoptions/allowedparticipantpermissionoptions.md): The permission option the system uses to control whether a user can grant read-only or write access.
- [CKSharingParticipantPermissionOption](cksharingparticipantpermissionoption.md): An object that controls participant permission options.
