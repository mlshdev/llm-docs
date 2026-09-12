> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityelementloading/accessibilityelement(withtoken:)](https://developer.apple.com/documentation/appkit/nsaccessibilityelementloading/accessibilityelement(withtoken:))

# accessibilityElement(withToken:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Loads the target accessibility element with the specified load token.

## Declaration

```swift
func accessibilityElement(withToken token: NSAccessibilityLoadingToken) -> (any NSAccessibilityElementProtocol)?
```

## See Also

### Supporting Accessibility

- [accessibilityRangeInTargetElement(withToken:)](accessibilityrangeintargetelement%28withtoken_%29.md): Returns the range that specifies the area of interest in text-based accessibility elements with the specified load token.
- [NSAccessibilityLoadingToken](../nsaccessibilityloadingtoken.md): A token type for loading accessibility elements.

# accessibilityElementWithToken: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Loads the target accessibility element with the specified load token.

## Declaration

```objectivec
- (id<NSAccessibilityElement>) accessibilityElementWithToken:(NSAccessibilityLoadingToken) token;
```

## See Also

### Supporting Accessibility

- [accessibilityRangeInTargetElementWithToken:](accessibilityrangeintargetelement%28withtoken_%29.md): Returns the range that specifies the area of interest in text-based accessibility elements with the specified load token.
- [NSAccessibilityLoadingToken](../nsaccessibilityloadingtoken.md): A token type for loading accessibility elements.
