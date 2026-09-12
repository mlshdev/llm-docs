> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/coordinate(withnormalizedoffset:)](https://developer.apple.com/documentation/xcuiautomation/xcuielement/coordinate(withnormalizedoffset:))

# coordinate(withNormalizedOffset:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS · Xcode 16.3+

Creates and returns a new coordinate with a normalized offset.

## Declaration

```swift
func coordinate(withNormalizedOffset normalizedOffset: CGVector) -> XCUICoordinate
```

<a id="Discussion"></a>

## Discussion

The coordinate’s screen point is computed by adding `normalizedOffset` multiplied by the size of the element’s frame to the origin of the element’s frame.

# coordinateWithNormalizedOffset: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS · Xcode 16.3+

Creates and returns a new coordinate with a normalized offset.

## Declaration

```objectivec
- (XCUICoordinate *) coordinateWithNormalizedOffset:(CGVector) normalizedOffset;
```

<a id="Discussion"></a>

## Discussion

The coordinate’s screen point is computed by adding `normalizedOffset` multiplied by the size of the element’s frame to the origin of the element’s frame.
