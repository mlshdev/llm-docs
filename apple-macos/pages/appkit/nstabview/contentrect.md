> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabview/contentrect](https://developer.apple.com/documentation/appkit/nstabview/contentrect)

# contentRect (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The rectangle describing the content area of the tab view.

## Declaration

```swift
var contentRect: NSRect { get }
```

<a id="Discussion"></a>

## Discussion

This area does not include the space required for the tab view’s tabs or borders (if any).

## See Also

### Determining the Size

- [minimumSize](minimumsize.md): The minimum size necessary for the tab view to display tabs in a useful way.
- [controlSize](controlsize.md): The size of the tab view.

# contentRect (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The rectangle describing the content area of the tab view.

## Declaration

```objectivec
@property (readonly) NSRect contentRect;
```

<a id="Discussion"></a>

## Discussion

This area does not include the space required for the tab view’s tabs or borders (if any).

## See Also

### Determining the Size

- [minimumSize](minimumsize.md): The minimum size necessary for the tab view to display tabs in a useful way.
- [controlSize](controlsize.md): The size of the tab view.
