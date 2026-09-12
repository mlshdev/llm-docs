> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellulardatarestrictedstate](https://developer.apple.com/documentation/coretelephony/ctcellulardatarestrictedstate)

# CTCellularDataRestrictedState (Swift)

**Framework:** Core Telephony  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.10+

The possible states of the cellular data policy.

## Declaration

```swift
enum CTCellularDataRestrictedState
```

## Topics

### Constants

- [CTCellularDataRestrictedState.notRestricted](ctcellulardatarestrictedstate/notrestricted.md): A state that allows access to cellular data.
- [CTCellularDataRestrictedState.restricted](ctcellulardatarestrictedstate/restricted.md): A state that denies access to cellular data.
- [CTCellularDataRestrictedState.restrictedStateUnknown](ctcellulardatarestrictedstate/restrictedstateunknown.md): A state whose access to cellular data is unknown.

### Initializers

- [init(rawValue:)](ctcellulardatarestrictedstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining the Cellular Data Restricted State

- [restrictedState](ctcellulardata/restrictedstate.md): The current state of cellular data restrictions.

# CTCellularDataRestrictedState (Objective-C)

**Framework:** Core Telephony  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.10+

The possible states of the cellular data policy.

## Declaration

```objectivec
enum CTCellularDataRestrictedState : NSUInteger;
```

## Topics

### Constants

- [kCTCellularDataNotRestricted](ctcellulardatarestrictedstate/notrestricted.md): A state that allows access to cellular data.
- [kCTCellularDataRestricted](ctcellulardatarestrictedstate/restricted.md): A state that denies access to cellular data.
- [kCTCellularDataRestrictedStateUnknown](ctcellulardatarestrictedstate/restrictedstateunknown.md): A state whose access to cellular data is unknown.

## See Also

### Determining the Cellular Data Restricted State

- [restrictedState](ctcellulardata/restrictedstate.md): The current state of cellular data restrictions.
