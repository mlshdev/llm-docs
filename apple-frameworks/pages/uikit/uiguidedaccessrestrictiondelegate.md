> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiguidedaccessrestrictiondelegate](https://developer.apple.com/documentation/uikit/uiguidedaccessrestrictiondelegate)

# UIGuidedAccessRestrictionDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A set of methods you use to add custom restrictions for the Guided Access feature in iOS.

## Declaration

```swift
@MainActor protocol UIGuidedAccessRestrictionDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Custom restrictions are represented by string identifiers provided by the developer in the [guidedAccessRestrictionIdentifiers](uiguidedaccessrestrictiondelegate/guidedaccessrestrictionidentifiers.md) method. Each identifier represents an operation in the app that the developer wishes to allow users to restrict using Guided Access. The default for all operations is allow. Users can deny operations using the normal Guided Access user interface. See [http://support.apple.com/kb/HT5509](http://support.apple.com/kb/HT5509) for a description of how to enable and configure Guided Access on iOS.

Apps describe their custom restrictions by implementing the [textForGuidedAccessRestriction(withIdentifier:)](uiguidedaccessrestrictiondelegate/textforguidedaccessrestriction%28withidentifier_%29.md) and [detailTextForGuidedAccessRestriction(withIdentifier:)](uiguidedaccessrestrictiondelegate/detailtextforguidedaccessrestriction%28withidentifier_%29.md) methods to return appropriate localized, human-readable strings.

For example, a photo editing app might allow users to disable deleting photos. The app would return an identifier representing this restriction in its [guidedAccessRestrictionIdentifiers](uiguidedaccessrestrictiondelegate/guidedaccessrestrictionidentifiers.md) method. It would also implement [textForGuidedAccessRestriction(withIdentifier:)](uiguidedaccessrestrictiondelegate/textforguidedaccessrestriction%28withidentifier_%29.md) to provide a human-readable description of the restriction. Finally, the app would implement [guidedAccessRestriction(withIdentifier:didChange:)](uiguidedaccessrestrictiondelegate/guidedaccessrestriction%28withidentifier_didchange_%29.md) to notice when a user indicates that they want to enable the restriction. When the app sees the state change to “deny”, it would configure itself to prevent the deletion of photos by any means. Similarly, when the app sees the state change to “allow”, it would configure itself to allow photo deletion.

Apps can use the [guidedAccessRestrictionState(forIdentifier:)](uiaccessibility/guidedaccessrestrictionstate%28foridentifier_%29.md) function to check the state of a restriction at any time.

## Topics

### Identifying custom Guided Access restrictions

- [guidedAccessRestrictionIdentifiers](uiguidedaccessrestrictiondelegate/guidedaccessrestrictionidentifiers.md): An array of strings identifying custom restrictions.
- [textForGuidedAccessRestriction(withIdentifier:)](uiguidedaccessrestrictiondelegate/textforguidedaccessrestriction%28withidentifier_%29.md): Provides a succinct description of the restriction for the specified identifier.
- [detailTextForGuidedAccessRestriction(withIdentifier:)](uiguidedaccessrestrictiondelegate/detailtextforguidedaccessrestriction%28withidentifier_%29.md): Provides more detailed information about the restriction for the specified identifier.

### Implementing restrictions

- [guidedAccessRestriction(withIdentifier:didChange:)](uiguidedaccessrestrictiondelegate/guidedaccessrestriction%28withidentifier_didchange_%29.md): Tells the delegate that the restriction associated with the identifier has changed state.
- [UIAccessibility.GuidedAccessRestrictionState](uiaccessibility/guidedaccessrestrictionstate.md): Constants that describe the state of a restriction, either allow or deny.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Guided Access

- [guidedAccessRestrictionState(forIdentifier:)](uiaccessibility/guidedaccessrestrictionstate%28foridentifier_%29.md): Returns the restriction state for the specified guided access restriction.

# UIGuidedAccessRestrictionDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A set of methods you use to add custom restrictions for the Guided Access feature in iOS.

## Declaration

```objectivec
@protocol UIGuidedAccessRestrictionDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Custom restrictions are represented by string identifiers provided by the developer in the [guidedAccessRestrictionIdentifiers](uiguidedaccessrestrictiondelegate/guidedaccessrestrictionidentifiers.md) method. Each identifier represents an operation in the app that the developer wishes to allow users to restrict using Guided Access. The default for all operations is allow. Users can deny operations using the normal Guided Access user interface. See [http://support.apple.com/kb/HT5509](http://support.apple.com/kb/HT5509) for a description of how to enable and configure Guided Access on iOS.

Apps describe their custom restrictions by implementing the [textForGuidedAccessRestrictionWithIdentifier:](uiguidedaccessrestrictiondelegate/textforguidedaccessrestriction%28withidentifier_%29.md) and [detailTextForGuidedAccessRestrictionWithIdentifier:](uiguidedaccessrestrictiondelegate/detailtextforguidedaccessrestriction%28withidentifier_%29.md) methods to return appropriate localized, human-readable strings.

For example, a photo editing app might allow users to disable deleting photos. The app would return an identifier representing this restriction in its [guidedAccessRestrictionIdentifiers](uiguidedaccessrestrictiondelegate/guidedaccessrestrictionidentifiers.md) method. It would also implement [textForGuidedAccessRestrictionWithIdentifier:](uiguidedaccessrestrictiondelegate/textforguidedaccessrestriction%28withidentifier_%29.md) to provide a human-readable description of the restriction. Finally, the app would implement [guidedAccessRestrictionWithIdentifier:didChangeState:](uiguidedaccessrestrictiondelegate/guidedaccessrestriction%28withidentifier_didchange_%29.md) to notice when a user indicates that they want to enable the restriction. When the app sees the state change to “deny”, it would configure itself to prevent the deletion of photos by any means. Similarly, when the app sees the state change to “allow”, it would configure itself to allow photo deletion.

Apps can use the [UIGuidedAccessRestrictionStateForIdentifier](uiaccessibility/guidedaccessrestrictionstate%28foridentifier_%29.md) function to check the state of a restriction at any time.

## Topics

### Identifying custom Guided Access restrictions

- [guidedAccessRestrictionIdentifiers](uiguidedaccessrestrictiondelegate/guidedaccessrestrictionidentifiers.md): An array of strings identifying custom restrictions.
- [textForGuidedAccessRestrictionWithIdentifier:](uiguidedaccessrestrictiondelegate/textforguidedaccessrestriction%28withidentifier_%29.md): Provides a succinct description of the restriction for the specified identifier.
- [detailTextForGuidedAccessRestrictionWithIdentifier:](uiguidedaccessrestrictiondelegate/detailtextforguidedaccessrestriction%28withidentifier_%29.md): Provides more detailed information about the restriction for the specified identifier.

### Implementing restrictions

- [guidedAccessRestrictionWithIdentifier:didChangeState:](uiguidedaccessrestrictiondelegate/guidedaccessrestriction%28withidentifier_didchange_%29.md): Tells the delegate that the restriction associated with the identifier has changed state.
- [UIGuidedAccessRestrictionState](uiaccessibility/guidedaccessrestrictionstate.md): Constants that describe the state of a restriction, either allow or deny.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Guided Access

- [UIGuidedAccessRestrictionStateForIdentifier](uiaccessibility/guidedaccessrestrictionstate%28foridentifier_%29.md): Returns the restriction state for the specified guided access restriction.
