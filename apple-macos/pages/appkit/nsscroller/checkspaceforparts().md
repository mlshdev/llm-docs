> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller/checkspaceforparts()](https://developer.apple.com/documentation/appkit/nsscroller/checkspaceforparts())

# checkSpaceForParts() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Checks to see if there is enough room in the receiver to display the knob and buttons.

## Declaration

```swift
func checkSpaceForParts()
```

<a id="Discussion"></a>

## Discussion

The  [usableParts](usableparts-swift.property.md) property contains the state calculated by this method. You should never need to invoke this method; it’s invoked automatically whenever the scroller’s size changes.

## See Also

### Calculating Layout

- [rect(for:)](rect%28for_%29.md): Returns the rectangle occupied by `aPart`, which for this method is interpreted literally rather than as an indicator of scrolling direction.
- [testPart(\_:)](testpart%28__%29.md): Returns the part that would be hit by a mouse-down event at `aPoint` (expressed in the window’s coordinate system).
- [usableParts](usableparts-swift.property.md): A value that indicates which parts of the receiver are displayed and usable.

# checkSpaceForParts (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Checks to see if there is enough room in the receiver to display the knob and buttons.

## Declaration

```objectivec
- (void) checkSpaceForParts;
```

<a id="Discussion"></a>

## Discussion

The  [usableParts](usableparts-swift.property.md) property contains the state calculated by this method. You should never need to invoke this method; it’s invoked automatically whenever the scroller’s size changes.

## See Also

### Calculating Layout

- [rectForPart:](rect%28for_%29.md): Returns the rectangle occupied by `aPart`, which for this method is interpreted literally rather than as an indicator of scrolling direction.
- [testPart:](testpart%28__%29.md): Returns the part that would be hit by a mouse-down event at `aPoint` (expressed in the window’s coordinate system).
- [usableParts](usableparts-swift.property.md): A value that indicates which parts of the receiver are displayed and usable.
