> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/cellclass](https://developer.apple.com/documentation/appkit/nscontrol/cellclass)

# cellClass (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the type of cell used by the receiver.

## Declaration

```swift
class var cellClass: AnyClass? { get set }
```

<a id="return-value"></a>

## Return Value

The class of the cell used to manage the receiver’s contents, or `nil` if no cell class has been set for the receiver or its superclasses (up to NSControl).

## See Also

### Deprecated Properties

- [cell](cell.md): The receiver’s cell object.

# cellClass (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the type of cell used by the receiver.

## Declaration

```objectivec
@property (class, nullable) Class cellClass;
```

<a id="return-value"></a>

## Return Value

The class of the cell used to manage the receiver’s contents, or `nil` if no cell class has been set for the receiver or its superclasses (up to NSControl).

## See Also

### Deprecated Properties

- [cell](cell.md): The receiver’s cell object.
