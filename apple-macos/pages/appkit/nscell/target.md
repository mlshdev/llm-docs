> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/target](https://developer.apple.com/documentation/appkit/nscell/target)

# target (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The object that receives the cell’s action messages.

## Declaration

```swift
weak var target: AnyObject? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is the object that implements the selector specified by the [action](action.md) property. Set the value of this property to `nil` to stop the delivery of action messages.

The default value of this property is `nil`. Setting the value of this property raises with [internalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception). Subclasses are expected to override this property as part of their target/action implementation.

## See Also

### Managing the Target and Action

- [action](action.md): The action performed by the cell.
- [isContinuous](iscontinuous.md): A Boolean value indicating whether the cell sends its action message continuously during mouse tracking.
- [sendAction(on:)](sendaction%28on_%29.md): Sets the conditions on which the receiver sends action messages to its target.

# target (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The object that receives the cell’s action messages.

## Declaration

```objectivec
@property (weak, nullable) id target;
```

<a id="Discussion"></a>

## Discussion

The value of this property is the object that implements the selector specified by the [action](action.md) property. Set the value of this property to `nil` to stop the delivery of action messages.

The default value of this property is `nil`. Setting the value of this property raises with [NSInternalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception). Subclasses are expected to override this property as part of their target/action implementation.

## See Also

### Managing the Target and Action

- [action](action.md): The action performed by the cell.
- [continuous](iscontinuous.md): A Boolean value indicating whether the cell sends its action message continuously during mouse tracking.
- [sendActionOn:](sendaction%28on_%29.md): Sets the conditions on which the receiver sends action messages to its target.
