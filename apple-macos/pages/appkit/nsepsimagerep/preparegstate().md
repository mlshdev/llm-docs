> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsepsimagerep/preparegstate()

# prepareGState() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Implemented by subclasses to configure the graphics state prior to drawing.

## Declaration

```swift
func prepareGState()
```

<a id="Discussion"></a>

## Discussion

The [draw()](../nsimagerep/draw%28%29.md) method of [NSEPSImageRep](../nsepsimagerep.md) sends this message to itself just before rendering the EPS code. The default implementation of this method does nothing. You can override it in your subclass to prepare the graphics state as needed.

# prepareGState (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Implemented by subclasses to configure the graphics state prior to drawing.

## Declaration

```objectivec
- (void) prepareGState;
```

<a id="Discussion"></a>

## Discussion

The [draw](../nsimagerep/draw%28%29.md) method of [NSEPSImageRep](../nsepsimagerep.md) sends this message to itself just before rendering the EPS code. The default implementation of this method does nothing. You can override it in your subclass to prepare the graphics state as needed.
