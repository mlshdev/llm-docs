> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiguidedaccessrestrictiondelegate/textforguidedaccessrestriction(withidentifier:)

# textForGuidedAccessRestriction(withIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Provides a succinct description of the restriction for the specified identifier.

## Declaration

```swift
func textForGuidedAccessRestriction(withIdentifier restrictionIdentifier: String) -> String?
```

## Parameters

- `restrictionIdentifier`: The identifer of the restriction the system is interested in.

<a id="return-value"></a>

## Return Value

A localized, human-readable string that succinctly describes the restriction for the provided identifier.

## See Also

### Identifying custom Guided Access restrictions

- [guidedAccessRestrictionIdentifiers](guidedaccessrestrictionidentifiers.md): An array of strings identifying custom restrictions.
- [detailTextForGuidedAccessRestriction(withIdentifier:)](detailtextforguidedaccessrestriction%28withidentifier_%29.md): Provides more detailed information about the restriction for the specified identifier.

# textForGuidedAccessRestrictionWithIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Provides a succinct description of the restriction for the specified identifier.

## Declaration

```objectivec
- (NSString *) textForGuidedAccessRestrictionWithIdentifier:(NSString *) restrictionIdentifier;
```

## Parameters

- `restrictionIdentifier`: The identifer of the restriction the system is interested in.

<a id="return-value"></a>

## Return Value

A localized, human-readable string that succinctly describes the restriction for the provided identifier.

## See Also

### Identifying custom Guided Access restrictions

- [guidedAccessRestrictionIdentifiers](guidedaccessrestrictionidentifiers.md): An array of strings identifying custom restrictions.
- [detailTextForGuidedAccessRestrictionWithIdentifier:](detailtextforguidedaccessrestriction%28withidentifier_%29.md): Provides more detailed information about the restriction for the specified identifier.
