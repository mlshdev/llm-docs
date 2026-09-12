> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/currentcontextdrawingtoscreen()](https://developer.apple.com/documentation/appkit/nsgraphicscontext/currentcontextdrawingtoscreen())

# currentContextDrawingToScreen() (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the current context is drawing to the screen.

## Declaration

```swift
class func currentContextDrawingToScreen() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the current context is drawing to the screen, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This convenience method is equivalent to sending [isDrawingToScreen](isdrawingtoscreen.md) to the result of [current](current.md).

## See Also

### Testing the Drawing Destination

- [isDrawingToScreen](isdrawingtoscreen.md): A Boolean value that indicates whether the drawing destination is the screen.

# currentContextDrawingToScreen (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the current context is drawing to the screen.

## Declaration

```objectivec
+ (BOOL) currentContextDrawingToScreen;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the current context is drawing to the screen, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This convenience method is equivalent to sending [drawingToScreen](isdrawingtoscreen.md) to the result of [currentContext](current.md).

## See Also

### Testing the Drawing Destination

- [drawingToScreen](isdrawingtoscreen.md): A Boolean value that indicates whether the drawing destination is the screen.
