> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiguidedaccessrestrictiondelegate/guidedaccessrestriction(withidentifier:didchange:)](https://developer.apple.com/documentation/uikit/uiguidedaccessrestrictiondelegate/guidedaccessrestriction(withidentifier:didchange:))

# guidedAccessRestriction(withIdentifier:didChange:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the restriction associated with the identifier has changed state.

## Declaration

```swift
func guidedAccessRestriction(withIdentifier restrictionIdentifier: String, didChange newRestrictionState: UIAccessibility.GuidedAccessRestrictionState)
```

## Parameters

- `restrictionIdentifier`: The identifier of the restriction whose state has changed.
- `newRestrictionState`: The new state for the restriction.

<a id="Discussion"></a>

## Discussion

Your app should adjust its behavior to allow or deny the operation controlled by the specified restriction each time it receives this message.

## See Also

### Implementing restrictions

- [UIAccessibility.GuidedAccessRestrictionState](../uiaccessibility/guidedaccessrestrictionstate.md): Constants that describe the state of a restriction, either allow or deny.

# guidedAccessRestrictionWithIdentifier:didChangeState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the restriction associated with the identifier has changed state.

## Declaration

```objectivec
- (void) guidedAccessRestrictionWithIdentifier:(NSString *) restrictionIdentifier didChangeState:(UIGuidedAccessRestrictionState) newRestrictionState;
```

## Parameters

- `restrictionIdentifier`: The identifier of the restriction whose state has changed.
- `newRestrictionState`: The new state for the restriction.

<a id="Discussion"></a>

## Discussion

Your app should adjust its behavior to allow or deny the operation controlled by the specified restriction each time it receives this message.

## See Also

### Implementing restrictions

- [UIGuidedAccessRestrictionState](../uiaccessibility/guidedaccessrestrictionstate.md): Constants that describe the state of a restriction, either allow or deny.
