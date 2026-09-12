> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowsercell/isloaded](https://developer.apple.com/documentation/appkit/nsbrowsercell/isloaded)

# isLoaded (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the cell is ready to display.

## Declaration

```swift
var isLoaded: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the browser cell’s state has been set and the cell is ready to display.

## See Also

### Managing Browser Cell State

- [reset()](reset%28%29.md): Unhighlights the receiver and unsets its state.
- [set()](set%28%29.md): Highlights the receiver and sets its state.
- [isLeaf](isleaf.md): A Boolean that indicates whether the browser cell is a leaf or a branch cell.
- [highlightColor(in:)](highlightcolor%28in_%29.md): Returns the highlight color that the receiver wants to display.

# loaded (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the cell is ready to display.

## Declaration

```objectivec
@property (getter=isLoaded) BOOL loaded;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the browser cell’s state has been set and the cell is ready to display.

## See Also

### Managing Browser Cell State

- [reset](reset%28%29.md): Unhighlights the receiver and unsets its state.
- [set](set%28%29.md): Highlights the receiver and sets its state.
- [leaf](isleaf.md): A Boolean that indicates whether the browser cell is a leaf or a branch cell.
- [highlightColorInView:](highlightcolor%28in_%29.md): Returns the highlight color that the receiver wants to display.
