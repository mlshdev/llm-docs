> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-swift.struct/setmaycontainprotectedcontent(_:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/setmaycontainprotectedcontent(_:))

# setMayContainProtectedContent(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Sets whether the app may have protected content.

## Declaration

```swift
static func setMayContainProtectedContent(_ flag: Bool) -> Bool
```

<a id="Discussion"></a>

## Discussion

Uses the value of `flag` to specify whether the app may have protected content. Protected content is identified by a value of [true](https://developer.apple.com/documentation/swift/true) for `NSAccessibilityContainsProtectedContentAttribute`, but if `NSAccessibilitySetMayContainProtectedContent` returns [false](https://developer.apple.com/documentation/swift/false), the value of `NSAccessibilityContainsProtectedContentAttribute` is ignored. This function returns [true](https://developer.apple.com/documentation/swift/true) on success.

# NSAccessibilitySetMayContainProtectedContent (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Sets whether the app may have protected content.

## Declaration

```objectivec
extern BOOL NSAccessibilitySetMayContainProtectedContent(BOOL flag);
```

<a id="Discussion"></a>

## Discussion

Uses the value of `flag` to specify whether the app may have protected content. Protected content is identified by a value of [true](https://developer.apple.com/documentation/swift/true) for `NSAccessibilityContainsProtectedContentAttribute`, but if `NSAccessibilitySetMayContainProtectedContent` returns [false](https://developer.apple.com/documentation/swift/false), the value of `NSAccessibilityContainsProtectedContentAttribute` is ignored. This function returns [true](https://developer.apple.com/documentation/swift/true) on success.
