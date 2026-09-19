> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pencilkit/pkcanvasview/selection

# selection (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

The identifiers of the strokes selected on the canvas.

## Declaration

```swift
var selection: Set<UUID> { get set }
```

## Mentioned In

- [Recognizing handwriting and converting it to text](../recognizing-handwriting-and-converting-to-text.md)

# selectedStrokeIDs (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

The identifiers of the strokes selected on the canvas.

## Declaration

```objectivec
@property (nonatomic, copy) NSSet<NSUUID *> * selectedStrokeIDs;
```

## Mentioned In

- [Recognizing handwriting and converting it to text](../recognizing-handwriting-and-converting-to-text.md)
