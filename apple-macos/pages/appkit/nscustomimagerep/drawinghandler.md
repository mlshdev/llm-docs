> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nscustomimagerep/drawinghandler

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
