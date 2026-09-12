> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowsercell/isleaf](https://developer.apple.com/documentation/appkit/nsbrowsercell/isleaf)

# isLeaf (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the browser cell is a leaf or a branch cell.

## Declaration

```swift
var isLeaf: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the browser cell is a leaf cell.

A branch `NSBrowserCell` has an image near its right edge indicating that more, hierarchically related information is available; when the user selects the cell, the `NSBrowser` displays a new column of `NSBrowserCell` objects. A leaf `NSBrowserCell` has no image, indicating that the user has reached a terminal piece of information; it doesn’t point to additional information.

## See Also

### Managing Browser Cell State

- [reset()](reset%28%29.md): Unhighlights the receiver and unsets its state.
- [set()](set%28%29.md): Highlights the receiver and sets its state.
- [isLoaded](isloaded.md): A Boolean that indicates whether the cell is ready to display.
- [highlightColor(in:)](highlightcolor%28in_%29.md): Returns the highlight color that the receiver wants to display.

# leaf (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the browser cell is a leaf or a branch cell.

## Declaration

```objectivec
@property (getter=isLeaf) BOOL leaf;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the browser cell is a leaf cell.

A branch `NSBrowserCell` has an image near its right edge indicating that more, hierarchically related information is available; when the user selects the cell, the `NSBrowser` displays a new column of `NSBrowserCell` objects. A leaf `NSBrowserCell` has no image, indicating that the user has reached a terminal piece of information; it doesn’t point to additional information.

## See Also

### Managing Browser Cell State

- [reset](reset%28%29.md): Unhighlights the receiver and unsets its state.
- [set](set%28%29.md): Highlights the receiver and sets its state.
- [loaded](isloaded.md): A Boolean that indicates whether the cell is ready to display.
- [highlightColorInView:](highlightcolor%28in_%29.md): Returns the highlight color that the receiver wants to display.
