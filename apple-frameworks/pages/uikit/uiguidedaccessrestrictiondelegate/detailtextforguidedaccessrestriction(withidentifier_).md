> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiguidedaccessrestrictiondelegate/detailtextforguidedaccessrestriction(withidentifier:)](https://developer.apple.com/documentation/uikit/uiguidedaccessrestrictiondelegate/detailtextforguidedaccessrestriction(withidentifier:))

# detailTextForGuidedAccessRestriction(withIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Provides more detailed information about the restriction for the specified identifier.

## Declaration

```swift
optional func detailTextForGuidedAccessRestriction(withIdentifier restrictionIdentifier: String) -> String?
```

## Parameters

- `restrictionIdentifier`: The identifer of the restriction the system is interested in.

<a id="return-value"></a>

## Return Value

A localized, human-readable string that provides additional information about the restriction for the provided identifier.

## See Also

### Identifying custom Guided Access restrictions

- [guidedAccessRestrictionIdentifiers](guidedaccessrestrictionidentifiers.md): An array of strings identifying custom restrictions.
- [textForGuidedAccessRestriction(withIdentifier:)](textforguidedaccessrestriction%28withidentifier_%29.md): Provides a succinct description of the restriction for the specified identifier.

# detailTextForGuidedAccessRestrictionWithIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Provides more detailed information about the restriction for the specified identifier.

## Declaration

```objectivec
- (NSString *) detailTextForGuidedAccessRestrictionWithIdentifier:(NSString *) restrictionIdentifier;
```

## Parameters

- `restrictionIdentifier`: The identifer of the restriction the system is interested in.

<a id="return-value"></a>

## Return Value

A localized, human-readable string that provides additional information about the restriction for the provided identifier.

## See Also

### Identifying custom Guided Access restrictions

- [guidedAccessRestrictionIdentifiers](guidedaccessrestrictionidentifiers.md): An array of strings identifying custom restrictions.
- [textForGuidedAccessRestrictionWithIdentifier:](textforguidedaccessrestriction%28withidentifier_%29.md): Provides a succinct description of the restriction for the specified identifier.
