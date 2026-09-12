> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/cellprototype](https://developer.apple.com/documentation/appkit/nsbrowser/cellprototype)

# cellPrototype (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The prototype `NSCell` for displaying items in the matrices in the columns of the browser.

## Declaration

```swift
var cellPrototype: Any! { get set }
```

<a id="Discussion"></a>

## Discussion

The prototype `NSCell` instance is copied to display items in the matrices of the browser.

## See Also

### Managing Component Types

- [cellClass](cellclass.md): Returns the `NSBrowserCell` class.
- [setCellClass(\_:)](setcellclass%28__%29.md): Sets the class of the cell to be used by the matrices in the columns of the browser.

# cellPrototype (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The prototype `NSCell` for displaying items in the matrices in the columns of the browser.

## Declaration

```objectivec
@property (strong, null_resettable) id cellPrototype;
```

<a id="Discussion"></a>

## Discussion

The prototype `NSCell` instance is copied to display items in the matrices of the browser.

## See Also

### Managing Component Types

- [cellClass](cellclass.md): Returns the `NSBrowserCell` class.
- [setCellClass:](setcellclass%28__%29.md): Sets the class of the cell to be used by the matrices in the columns of the browser.
