> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/isdrawingtoscreen](https://developer.apple.com/documentation/appkit/nsgraphicscontext/isdrawingtoscreen)

# isDrawingToScreen (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the drawing destination is the screen.

## Declaration

```swift
var isDrawingToScreen: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the drawing destination is the screen. If the value of the property is [false](https://developer.apple.com/documentation/swift/false) may mean that the drawing destination is a printer, but the destination may also be a PDF or EPS file. You can call [attributes](attributes.md) to see if additional information is available about the drawing destination.

## See Also

### Testing the Drawing Destination

- [currentContextDrawingToScreen()](currentcontextdrawingtoscreen%28%29.md): Returns a Boolean value that indicates whether the current context is drawing to the screen.

# drawingToScreen (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the drawing destination is the screen.

## Declaration

```objectivec
@property (readonly, getter=isDrawingToScreen) BOOL drawingToScreen;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the drawing destination is the screen. If the value of the property is [false](https://developer.apple.com/documentation/swift/false) may mean that the drawing destination is a printer, but the destination may also be a PDF or EPS file. You can call [attributes](attributes.md) to see if additional information is available about the drawing destination.

## See Also

### Testing the Drawing Destination

- [currentContextDrawingToScreen](currentcontextdrawingtoscreen%28%29.md): Returns a Boolean value that indicates whether the current context is drawing to the screen.
