> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/guidedaccessrestrictionstate(foridentifier:)](https://developer.apple.com/documentation/uikit/uiaccessibility/guidedaccessrestrictionstate(foridentifier:))

# guidedAccessRestrictionState(forIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the restriction state for the specified guided access restriction.

## Declaration

```swift
@MainActor static func guidedAccessRestrictionState(forIdentifier restrictionIdentifier: String) -> UIAccessibility.GuidedAccessRestrictionState
```

## Parameters

- `restrictionIdentifier`: The string that uniquely identifies the guided access restriction.

<a id="return-value"></a>

## Return Value

The current state of the guided access restriction. The initial state of all restrictions is [UIAccessibility.GuidedAccessRestrictionState.allow](guidedaccessrestrictionstate/allow.md).

## See Also

### Guided Access

- [UIGuidedAccessRestrictionDelegate](../uiguidedaccessrestrictiondelegate.md): A set of methods you use to add custom restrictions for the Guided Access feature in iOS.

# UIGuidedAccessRestrictionStateForIdentifier (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the restriction state for the specified guided access restriction.

## Declaration

```objectivec
extern UIGuidedAccessRestrictionState UIGuidedAccessRestrictionStateForIdentifier(NSString *restrictionIdentifier);
```

## Parameters

- `restrictionIdentifier`: The string that uniquely identifies the guided access restriction.

<a id="return-value"></a>

## Return Value

The current state of the guided access restriction. The initial state of all restrictions is [UIGuidedAccessRestrictionStateAllow](guidedaccessrestrictionstate/allow.md).

## See Also

### Guided Access

- [UIGuidedAccessRestrictionDelegate](../uiguidedaccessrestrictiondelegate.md): A set of methods you use to add custom restrictions for the Guided Access feature in iOS.
