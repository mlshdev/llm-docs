> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/action](https://developer.apple.com/documentation/appkit/nscell/action)

# action (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The action performed by the cell.

## Declaration

```swift
var action: Selector? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is the selector to call on the cell’s [target](target.md) object. Set the value of this property to `nil` to stop the delivery of action messages.

The default value of this property is `nil`. Setting the value of this property raises with [internalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception). Subclasses are expected to override this property as part of their target/action implementation.

## See Also

### Managing the Target and Action

- [target](target.md): The object that receives the cell’s action messages.
- [isContinuous](iscontinuous.md): A Boolean value indicating whether the cell sends its action message continuously during mouse tracking.
- [sendAction(on:)](sendaction%28on_%29.md): Sets the conditions on which the receiver sends action messages to its target.

# action (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The action performed by the cell.

## Declaration

```objectivec
@property (nullable) SEL action;
```

<a id="Discussion"></a>

## Discussion

The value of this property is the selector to call on the cell’s [target](target.md) object. Set the value of this property to `nil` to stop the delivery of action messages.

The default value of this property is `nil`. Setting the value of this property raises with [NSInternalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception). Subclasses are expected to override this property as part of their target/action implementation.

## See Also

### Managing the Target and Action

- [target](target.md): The object that receives the cell’s action messages.
- [continuous](iscontinuous.md): A Boolean value indicating whether the cell sends its action message continuously during mouse tracking.
- [sendActionOn:](sendaction%28on_%29.md): Sets the conditions on which the receiver sends action messages to its target.
