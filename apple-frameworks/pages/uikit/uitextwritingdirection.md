> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextwritingdirection](https://developer.apple.com/documentation/uikit/uitextwritingdirection)

# UITextWritingDirection (Swift)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 3.2+ (deprecated in 13.0) · iPadOS 3.2+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

The writing direction of the text for the language.

> Use [NSWritingDirection](nswritingdirection.md) instead.

## Declaration

```swift
typealias UITextWritingDirection = NSWritingDirection
```

<a id="Discussion"></a>

## Discussion

Constants of this type are returned from the [baseWritingDirection(for:in:)](uitextinput/basewritingdirection%28for_in_%29.md) method and are used as arguments of the [setBaseWritingDirection(\_:for:)](uitextinput/setbasewritingdirection%28__for_%29.md) method.

## See Also

### Deprecated

- [Style dictionary keys](style-dictionary-keys.md): A dictionary that contains properties that define text style characteristics.

# UITextWritingDirection (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 3.2+ (deprecated in 13.0) · iPadOS 3.2+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

The writing direction of the text for the language.

> Use [NSWritingDirection](nswritingdirection.md) instead.

## Declaration

```objectivec
typedef NSWritingDirection UITextWritingDirection;
```

<a id="Discussion"></a>

## Discussion

Constants of this type are returned from the [baseWritingDirectionForPosition:inDirection:](uitextinput/basewritingdirection%28for_in_%29.md) method and are used as arguments of the [setBaseWritingDirection:forRange:](uitextinput/setbasewritingdirection%28__for_%29.md) method.

## Topics

### Constants

- [UITextWritingDirectionNatural](uitextwritingdirectionnatural.md): Deprecated. The natural writing direction as defined by the Bidi algorithm.
- [UITextWritingDirectionLeftToRight](uitextwritingdirectionlefttoright.md): Deprecated. Writing that goes from left to right.
- [UITextWritingDirectionRightToLeft](uitextwritingdirectionrighttoleft.md): Deprecated. Writing that goes from right to left.

## See Also

### Deprecated

- [Style dictionary keys](style-dictionary-keys.md): A dictionary that contains properties that define text style characteristics.
