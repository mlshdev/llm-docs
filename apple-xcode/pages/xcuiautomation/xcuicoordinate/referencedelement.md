> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuicoordinate/referencedelement](https://developer.apple.com/documentation/xcuiautomation/xcuicoordinate/referencedelement)

# referencedElement (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS · Xcode 16.3+

The element that the coordinate is based on, either directly or through the coordinate from which it was derived.

## Declaration

```swift
var referencedElement: XCUIElement { get }
```

## See Also

### Getting coordinate properties

- [screenPoint](screenpoint.md): The dynamically computed value of the coordinate’s location on screen.

# referencedElement (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS · Xcode 16.3+

The element that the coordinate is based on, either directly or through the coordinate from which it was derived.

## Declaration

```objectivec
@property (readonly) XCUIElement * referencedElement;
```

## See Also

### Getting coordinate properties

- [screenPoint](screenpoint.md): The dynamically computed value of the coordinate’s location on screen.
