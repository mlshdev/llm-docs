> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuicoordinate/screenpoint](https://developer.apple.com/documentation/xcuiautomation/xcuicoordinate/screenpoint)

# screenPoint (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS · Xcode 16.3+

The dynamically computed value of the coordinate’s location on screen.

## Declaration

```swift
var screenPoint: CGPoint { get }
```

<a id="Discussion"></a>

## Discussion

Note that this value is dependent on the current frame of the referenced element. If the element’s frame changes, so does the value returned by this property. If the referenced element doesn’t exist when you call this property, the system fails the current test. Check the referenced element’s [exists](../xcuielement/exists.md) property to veryify whether the element is present.

## See Also

### Getting coordinate properties

- [referencedElement](referencedelement.md): The element that the coordinate is based on, either directly or through the coordinate from which it was derived.

# screenPoint (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS · Xcode 16.3+

The dynamically computed value of the coordinate’s location on screen.

## Declaration

```objectivec
@property (readonly) CGPoint screenPoint;
```

<a id="Discussion"></a>

## Discussion

Note that this value is dependent on the current frame of the referenced element. If the element’s frame changes, so does the value returned by this property. If the referenced element doesn’t exist when you call this property, the system fails the current test. Check the referenced element’s [exists](../xcuielement/exists.md) property to veryify whether the element is present.

## See Also

### Getting coordinate properties

- [referencedElement](referencedelement.md): The element that the coordinate is based on, either directly or through the coordinate from which it was derived.
