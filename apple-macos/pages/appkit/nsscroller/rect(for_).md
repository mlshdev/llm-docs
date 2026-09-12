> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller/rect(for:)](https://developer.apple.com/documentation/appkit/nsscroller/rect(for:))

# rect(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle occupied by `aPart`, which for this method is interpreted literally rather than as an indicator of scrolling direction.

## Declaration

```swift
func rect(for partCode: NSScroller.Part) -> NSRect
```

<a id="Discussion"></a>

## Discussion

See [NSScroller.Part](part.md) for a list of possible values for `aPart`.

Note the interpretations of `NSScrollerDecrementPage` and `NSScrollerIncrementPage`. The actual part of an NSScroller that causes page-by-page scrolling varies, so as a convenience these part codes refer to useful parts different from the scroll buttons.

Returns `NSZeroRect` if the part requested isn’t present on the receiver.

## See Also

### Related Documentation

- [hitPart](hitpart.md): A part code indicating the manner in which the scrolling should be performed.

### Calculating Layout

- [testPart(\_:)](testpart%28__%29.md): Returns the part that would be hit by a mouse-down event at `aPoint` (expressed in the window’s coordinate system).
- [checkSpaceForParts()](checkspaceforparts%28%29.md): Checks to see if there is enough room in the receiver to display the knob and buttons.
- [usableParts](usableparts-swift.property.md): A value that indicates which parts of the receiver are displayed and usable.

# rectForPart: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle occupied by `aPart`, which for this method is interpreted literally rather than as an indicator of scrolling direction.

## Declaration

```objectivec
- (NSRect) rectForPart:(NSScrollerPart) partCode;
```

<a id="Discussion"></a>

## Discussion

See [NSScrollerPart](part.md) for a list of possible values for `aPart`.

Note the interpretations of `NSScrollerDecrementPage` and `NSScrollerIncrementPage`. The actual part of an NSScroller that causes page-by-page scrolling varies, so as a convenience these part codes refer to useful parts different from the scroll buttons.

Returns `NSZeroRect` if the part requested isn’t present on the receiver.

## See Also

### Related Documentation

- [hitPart](hitpart.md): A part code indicating the manner in which the scrolling should be performed.

### Calculating Layout

- [testPart:](testpart%28__%29.md): Returns the part that would be hit by a mouse-down event at `aPoint` (expressed in the window’s coordinate system).
- [checkSpaceForParts](checkspaceforparts%28%29.md): Checks to see if there is enough room in the receiver to display the knob and buttons.
- [usableParts](usableparts-swift.property.md): A value that indicates which parts of the receiver are displayed and usable.
