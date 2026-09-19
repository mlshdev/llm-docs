> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsaccessibilityloadingtoken

# NSAccessibilityLoadingToken (Swift)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

A token type for loading accessibility elements.

## Declaration

```swift
typealias NSAccessibilityLoadingToken = any NSSecureCoding & NSObjectProtocol
```

## See Also

### Supporting Accessibility

- [accessibilityElement(withToken:)](nsaccessibilityelementloading/accessibilityelement%28withtoken_%29.md): Loads the target accessibility element with the specified load token.
- [accessibilityRangeInTargetElement(withToken:)](nsaccessibilityelementloading/accessibilityrangeintargetelement%28withtoken_%29.md): Returns the range that specifies the area of interest in text-based accessibility elements with the specified load token.

# NSAccessibilityLoadingToken (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

A token type for loading accessibility elements.

## Declaration

```objectivec
typedef id<NSObject,NSSecureCoding> NSAccessibilityLoadingToken;
```

## See Also

### Supporting Accessibility

- [accessibilityElementWithToken:](nsaccessibilityelementloading/accessibilityelement%28withtoken_%29.md): Loads the target accessibility element with the specified load token.
- [accessibilityRangeInTargetElementWithToken:](nsaccessibilityelementloading/accessibilityrangeintargetelement%28withtoken_%29.md): Returns the range that specifies the area of interest in text-based accessibility elements with the specified load token.
