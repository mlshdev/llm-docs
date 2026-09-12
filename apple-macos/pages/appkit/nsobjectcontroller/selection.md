> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsobjectcontroller/selection](https://developer.apple.com/documentation/appkit/nsobjectcontroller/selection)

# selection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A proxy object representing the receiver’s selection.

## Declaration

```swift
var selection: Any { get }
```

<a id="Discussion"></a>

## Discussion

This object is fully key-value coding compliant, but note that it is a proxy and so does not provide the full range of functionality that might be available in the source object.

## See Also

### Obtaining selections

- [selectedObjects](selectedobjects.md): An array of all objects to be affected by editing.

# selection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A proxy object representing the receiver’s selection.

## Declaration

```objectivec
@property (strong, readonly) id selection;
```

<a id="Discussion"></a>

## Discussion

This object is fully key-value coding compliant, but note that it is a proxy and so does not provide the full range of functionality that might be available in the source object.

## See Also

### Obtaining selections

- [selectedObjects](selectedobjects.md): An array of all objects to be affected by editing.
