> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiguidedaccessrestrictiondelegate/guidedaccessrestrictionidentifiers](https://developer.apple.com/documentation/uikit/uiguidedaccessrestrictiondelegate/guidedaccessrestrictionidentifiers)

# guidedAccessRestrictionIdentifiers (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An array of strings identifying custom restrictions.

## Declaration

```swift
var guidedAccessRestrictionIdentifiers: [String]? { get }
```

<a id="return-value"></a>

## Return Value

An array of NSString objects, each of which represents a custom restriction.

<a id="Discussion"></a>

## Discussion

Your delegate must implement this method and return an array with an identifier string for each custom guided access restriction you wish to provide in your app.

## See Also

### Identifying custom Guided Access restrictions

- [textForGuidedAccessRestriction(withIdentifier:)](textforguidedaccessrestriction%28withidentifier_%29.md): Provides a succinct description of the restriction for the specified identifier.
- [detailTextForGuidedAccessRestriction(withIdentifier:)](detailtextforguidedaccessrestriction%28withidentifier_%29.md): Provides more detailed information about the restriction for the specified identifier.

# guidedAccessRestrictionIdentifiers (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An array of strings identifying custom restrictions.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<NSString *> * guidedAccessRestrictionIdentifiers;
```

<a id="return-value"></a>

## Return Value

An array of NSString objects, each of which represents a custom restriction.

<a id="Discussion"></a>

## Discussion

Your delegate must implement this method and return an array with an identifier string for each custom guided access restriction you wish to provide in your app.

## See Also

### Identifying custom Guided Access restrictions

- [textForGuidedAccessRestrictionWithIdentifier:](textforguidedaccessrestriction%28withidentifier_%29.md): Provides a succinct description of the restriction for the specified identifier.
- [detailTextForGuidedAccessRestrictionWithIdentifier:](detailtextforguidedaccessrestriction%28withidentifier_%29.md): Provides more detailed information about the restriction for the specified identifier.
