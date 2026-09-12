> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivitydata/user-swift.struct/familyrole](https://developer.apple.com/documentation/deviceactivity/deviceactivitydata/user-swift.struct/familyrole)

# DeviceActivityData.User.FamilyRole

**Framework:** Device Activity  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Role of a person in their iCloud family.

## Declaration

```swift
enum FamilyRole
```

<a id="overview"></a>

## Overview

If the person is not signed into an iCloud account or in an iCloud family, they are an individual.

## Topics

### Defining family roles

- [DeviceActivityData.User.FamilyRole.individual](familyrole/individual.md): A person who has authorized your app.
- [DeviceActivityData.User.FamilyRole.child](familyrole/child.md): A child being managed by a parent or guardian in their iCloud family.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Defining the account role

- [role](role.md): Access the role of the person.
