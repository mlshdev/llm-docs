> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/guidedaccessrestrictionstate](https://developer.apple.com/documentation/uikit/uiaccessibility/guidedaccessrestrictionstate)

# UIAccessibility.GuidedAccessRestrictionState (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that describe the state of a restriction, either allow or deny.

## Declaration

```swift
enum GuidedAccessRestrictionState
```

## Topics

### Constants

- [UIAccessibility.GuidedAccessRestrictionState.allow](guidedaccessrestrictionstate/allow.md): The app should allow the user to perform the action controlled by the restriction.
- [UIAccessibility.GuidedAccessRestrictionState.deny](guidedaccessrestrictionstate/deny.md): The app should deny the user from performing the action controlled by the restriction.

### Initializers

- [init(rawValue:)](guidedaccessrestrictionstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Implementing restrictions

- [guidedAccessRestriction(withIdentifier:didChange:)](../uiguidedaccessrestrictiondelegate/guidedaccessrestriction%28withidentifier_didchange_%29.md): Tells the delegate that the restriction associated with the identifier has changed state.

# UIGuidedAccessRestrictionState (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that describe the state of a restriction, either allow or deny.

## Declaration

```objectivec
enum UIGuidedAccessRestrictionState : NSInteger;
```

## Topics

### Constants

- [UIGuidedAccessRestrictionStateAllow](guidedaccessrestrictionstate/allow.md): The app should allow the user to perform the action controlled by the restriction.
- [UIGuidedAccessRestrictionStateDeny](guidedaccessrestrictionstate/deny.md): The app should deny the user from performing the action controlled by the restriction.

## See Also

### Implementing restrictions

- [guidedAccessRestrictionWithIdentifier:didChangeState:](../uiguidedaccessrestrictiondelegate/guidedaccessrestriction%28withidentifier_didchange_%29.md): Tells the delegate that the restriction associated with the identifier has changed state.
