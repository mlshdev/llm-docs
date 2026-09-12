> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/flushgraphics()](https://developer.apple.com/documentation/appkit/nsgraphicscontext/flushgraphics())

# flushGraphics() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Forces any buffered operations or data to be sent to the graphics context’s destination.

## Declaration

```swift
func flushGraphics()
```

<a id="Discussion"></a>

## Discussion

Graphics contexts use buffers to queue pending operations but for efficiency reasons may not always empty those buffers immediately. This method forces the buffers to be emptied.

# flushGraphics (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Forces any buffered operations or data to be sent to the graphics context’s destination.

## Declaration

```objectivec
- (void) flushGraphics;
```

<a id="Discussion"></a>

## Discussion

Graphics contexts use buffers to queue pending operations but for efficiency reasons may not always empty those buffers immediately. This method forces the buffers to be emptied.
