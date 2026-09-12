> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/basewritingdirection](https://developer.apple.com/documentation/appkit/nstext/basewritingdirection)

# baseWritingDirection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The initial writing direction used to determine the actual writing direction for text.

## Declaration

```swift
var baseWritingDirection: NSWritingDirection { get set }
```

<a id="Discussion"></a>

## Discussion

The Text system uses this value as a hint for calculating the actual direction for displaying Unicode characters.  If no writing direction is set, returns `NSWritingDirectionNatural`.

# baseWritingDirection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The initial writing direction used to determine the actual writing direction for text.

## Declaration

```objectivec
@property NSWritingDirection baseWritingDirection;
```

<a id="Discussion"></a>

## Discussion

The Text system uses this value as a hint for calculating the actual direction for displaying Unicode characters.  If no writing direction is set, returns `NSWritingDirectionNatural`.
