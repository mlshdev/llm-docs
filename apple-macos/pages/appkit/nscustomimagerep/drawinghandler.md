> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscustomimagerep/drawinghandler](https://developer.apple.com/documentation/appkit/nscustomimagerep/drawinghandler)

# drawingHandler (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The destination rectangle of the drawing handler block.

## Declaration

```swift
var drawingHandler: ((NSRect) -> Bool)? { get }
```

# drawingHandler (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The destination rectangle of the drawing handler block.

## Declaration

```objectivec
@property (copy, readonly, nullable) _Bool (^)(struct CGRect) drawingHandler;
```
