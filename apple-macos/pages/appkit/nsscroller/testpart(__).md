> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller/testpart(_:)](https://developer.apple.com/documentation/appkit/nsscroller/testpart(_:))

# testPart(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the part that would be hit by a mouse-down event at `aPoint` (expressed in the window’s coordinate system).

## Declaration

```swift
func testPart(_ point: NSPoint) -> NSScroller.Part
```

<a id="Discussion"></a>

## Discussion

See [NSScroller.Part](part.md) for a list of possible return values. In macOS 10.7 and later, this method no longer returns [NSScroller.Part.incrementLine](part/incrementline.md) or [NSScroller.Part.decrementLine](part/decrementline.md).

Note the interpretations of `NSScrollerDecrementPage` and `NSScrollerIncrementPage`. The actual part of a scroller that causes page-by-page scrolling varies, so as a convenience these part codes refer to useful parts different from the scroll buttons.

## See Also

### Related Documentation

- [hitPart](hitpart.md): A part code indicating the manner in which the scrolling should be performed.

### Calculating Layout

- [rect(for:)](rect%28for_%29.md): Returns the rectangle occupied by `aPart`, which for this method is interpreted literally rather than as an indicator of scrolling direction.
- [checkSpaceForParts()](checkspaceforparts%28%29.md): Checks to see if there is enough room in the receiver to display the knob and buttons.
- [usableParts](usableparts-swift.property.md): A value that indicates which parts of the receiver are displayed and usable.

# testPart: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the part that would be hit by a mouse-down event at `aPoint` (expressed in the window’s coordinate system).

## Declaration

```objectivec
- (NSScrollerPart) testPart:(NSPoint) point;
```

<a id="Discussion"></a>

## Discussion

See [NSScrollerPart](part.md) for a list of possible return values. In macOS 10.7 and later, this method no longer returns [NSScrollerIncrementLine](part/incrementline.md) or [NSScrollerDecrementLine](part/decrementline.md).

Note the interpretations of `NSScrollerDecrementPage` and `NSScrollerIncrementPage`. The actual part of a scroller that causes page-by-page scrolling varies, so as a convenience these part codes refer to useful parts different from the scroll buttons.

## See Also

### Related Documentation

- [hitPart](hitpart.md): A part code indicating the manner in which the scrolling should be performed.

### Calculating Layout

- [rectForPart:](rect%28for_%29.md): Returns the rectangle occupied by `aPart`, which for this method is interpreted literally rather than as an indicator of scrolling direction.
- [checkSpaceForParts](checkspaceforparts%28%29.md): Checks to see if there is enough room in the receiver to display the knob and buttons.
- [usableParts](usableparts-swift.property.md): A value that indicates which parts of the receiver are displayed and usable.
