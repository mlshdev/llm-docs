> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextlayoutfragment/layoutqueue

# layoutQueue (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The queue on which the framework dispatches layout operations.

## Declaration

```swift
var layoutQueue: OperationQueue? { get set }
```

<a id="Discussion"></a>

## Discussion

If non-`nil`, the queue the framework uses for layout operations.

# layoutQueue (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The queue on which the framework dispatches layout operations.

## Declaration

```objectivec
@property (strong, nullable) NSOperationQueue * layoutQueue;
```

<a id="Discussion"></a>

## Discussion

If non-`nil`, the queue the framework uses for layout operations.
