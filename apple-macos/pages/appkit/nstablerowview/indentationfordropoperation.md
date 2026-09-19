> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstablerowview/indentationfordropoperation

# indentationForDropOperation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Defines the amount the drag target for a row should be indented.

## Declaration

```swift
var indentationForDropOperation: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default is `0`.

## See Also

### Drag and Drop

- [draggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle.md): Specifies the dragging destination feedback style.
- [isTargetForDropOperation](istargetfordropoperation.md): Specifies whether this row will draw a drop indicator based on the current dragging feedback style.

# indentationForDropOperation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Defines the amount the drag target for a row should be indented.

## Declaration

```objectivec
@property CGFloat indentationForDropOperation;
```

<a id="Discussion"></a>

## Discussion

The default is `0`.

## See Also

### Drag and Drop

- [draggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle.md): Specifies the dragging destination feedback style.
- [targetForDropOperation](istargetfordropoperation.md): Specifies whether this row will draw a drop indicator based on the current dragging feedback style.
