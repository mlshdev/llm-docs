> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/setcellclass(_:)](https://developer.apple.com/documentation/appkit/nsbrowser/setcellclass(_:))

# setCellClass(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the class of the cell to be used by the matrices in the columns of the browser.

## Declaration

```swift
func setCellClass(_ factoryId: AnyClass)
```

## Parameters

- `factoryId`: The class of `NSCell` used by the matrices in the columns of the browser. This method creates an instance of the class and sets [cellPrototype](cellprototype.md).

## See Also

### Managing Component Types

- [cellClass](cellclass.md): Returns the `NSBrowserCell` class.
- [cellPrototype](cellprototype.md): The prototype `NSCell` for displaying items in the matrices in the columns of the browser.

# setCellClass: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the class of the cell to be used by the matrices in the columns of the browser.

## Declaration

```objectivec
- (void) setCellClass:(Class) factoryId;
```

## Parameters

- `factoryId`: The class of `NSCell` used by the matrices in the columns of the browser. This method creates an instance of the class and sets [cellPrototype](cellprototype.md).

## See Also

### Managing Component Types

- [cellClass](cellclass.md): Returns the `NSBrowserCell` class.
- [cellPrototype](cellprototype.md): The prototype `NSCell` for displaying items in the matrices in the columns of the browser.
