> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsaccessibilityelementloading/accessibilityrangeintargetelement(withtoken:)

# accessibilityRangeInTargetElement(withToken:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Returns the range that specifies the area of interest in text-based accessibility elements with the specified load token.

## Declaration

```swift
optional func accessibilityRangeInTargetElement(withToken token: NSAccessibilityLoadingToken) -> NSRange
```

## See Also

### Supporting Accessibility

- [accessibilityElement(withToken:)](accessibilityelement%28withtoken_%29.md): Loads the target accessibility element with the specified load token.
- [NSAccessibilityLoadingToken](../nsaccessibilityloadingtoken.md): A token type for loading accessibility elements.

# accessibilityRangeInTargetElementWithToken: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Returns the range that specifies the area of interest in text-based accessibility elements with the specified load token.

## Declaration

```objectivec
- (NSRange) accessibilityRangeInTargetElementWithToken:(NSAccessibilityLoadingToken) token;
```

## See Also

### Supporting Accessibility

- [accessibilityElementWithToken:](accessibilityelement%28withtoken_%29.md): Loads the target accessibility element with the specified load token.
- [NSAccessibilityLoadingToken](../nsaccessibilityloadingtoken.md): A token type for loading accessibility elements.
