> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/cellclass](https://developer.apple.com/documentation/appkit/nsbrowser/cellclass)

# cellClass (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the `NSBrowserCell` class.

## Declaration

```swift
class var cellClass: AnyClass { get }
```

<a id="return-value"></a>

## Return Value

Always returns the `NSBrowserCell` class (even if the developer has sent a [setCellClass(\_:)](setcellclass%28__%29.md) message to a particular instance).

<a id="Discussion"></a>

## Discussion

This method is used by `NSControl` during initialization and is not meant to be used by applications.

## See Also

### Managing Component Types

- [setCellClass(\_:)](setcellclass%28__%29.md): Sets the class of the cell to be used by the matrices in the columns of the browser.
- [cellPrototype](cellprototype.md): The prototype `NSCell` for displaying items in the matrices in the columns of the browser.

# cellClass (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the `NSBrowserCell` class.

## Declaration

```objectivec
@property (class, readonly) Class cellClass;
```

<a id="return-value"></a>

## Return Value

Always returns the `NSBrowserCell` class (even if the developer has sent a [setCellClass:](setcellclass%28__%29.md) message to a particular instance).

<a id="Discussion"></a>

## Discussion

This method is used by `NSControl` during initialization and is not meant to be used by applications.

## See Also

### Managing Component Types

- [setCellClass:](setcellclass%28__%29.md): Sets the class of the cell to be used by the matrices in the columns of the browser.
- [cellPrototype](cellprototype.md): The prototype `NSCell` for displaying items in the matrices in the columns of the browser.
