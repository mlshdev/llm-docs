> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivitydata/user-swift.struct](https://developer.apple.com/documentation/deviceactivity/deviceactivitydata/user-swift.struct)

# DeviceActivityData.User

**Framework:** Device Activity  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Information about a person associated with an activity report.

## Declaration

```swift
struct User
```

## Topics

### Identifying the person

- [appleID](user-swift.struct/appleid.md): Access the Apple ID of the person.
- [nameComponents](user-swift.struct/namecomponents.md): Access the name of the person.

### Defining the account role

- [role](user-swift.struct/role.md): Access the role of the person.
- [DeviceActivityData.User.FamilyRole](user-swift.struct/familyrole.md): Role of a person in their iCloud family.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Accessing device and user information

- [user](user-swift.property.md): Access the person associated with the activity report.
- [device](device-swift.property.md): Access the device associated with the activity report.
- [DeviceActivityData.Device](device-swift.struct.md): Device information for activity reporting.
