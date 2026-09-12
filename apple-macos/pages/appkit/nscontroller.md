> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontroller](https://developer.apple.com/documentation/appkit/nscontroller)

# NSController (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An abstract class that implements the [NSEditor](nseditor.md) and [NSEditorRegistration](nseditorregistration.md) informal protocols required for controller classes.

## Declaration

```swift
class NSController
```

## Topics

### Managing editing

- [objectDidBeginEditing(\_:)](nscontroller/objectdidbeginediting%28__%29.md): Invoked to inform the receiver that `editor` has uncommitted changes that can affect the receiver.
- [objectDidEndEditing(\_:)](nscontroller/objectdidendediting%28__%29.md): Invoked to inform the receiver that `editor` has committed or discarded its changes.
- [commitEditing()](nscontroller/commitediting%28%29.md): Attempts to commit any pending edits.
- [commitEditing(withDelegate:didCommit:contextInfo:)](nscontroller/commitediting%28withdelegate_didcommit_contextinfo_%29.md): Attempts to commit any pending changes in known editors of the receiver.
- [discardEditing()](nscontroller/discardediting%28%29.md): Discards any pending changes by registered editors.
- [isEditing](nscontroller/isediting.md): A Boolean value indicating if any editors are registered with the controller.

### Initializers

- [init()](nscontroller/init%28%29.md)
- [init(coder:)](nscontroller/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSObjectController](nsobjectcontroller.md)
- [NSUserDefaultsController](nsuserdefaultscontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSEditor](nseditor.md)
- [NSEditorRegistration](nseditorregistration.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Core Controllers

- [NSObjectController](nsobjectcontroller.md): A controller that can manage an object’s properties referenced by key-value paths.

# NSController (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An abstract class that implements the [NSEditor](nseditor.md) and [NSEditorRegistration](nseditorregistration.md) informal protocols required for controller classes.

## Declaration

```objectivec
@interface NSController : NSObject
```

## Topics

### Managing editing

- [objectDidBeginEditing:](nscontroller/objectdidbeginediting%28__%29.md): Invoked to inform the receiver that `editor` has uncommitted changes that can affect the receiver.
- [objectDidEndEditing:](nscontroller/objectdidendediting%28__%29.md): Invoked to inform the receiver that `editor` has committed or discarded its changes.
- [commitEditing](nscontroller/commitediting%28%29.md): Attempts to commit any pending edits.
- [commitEditingWithDelegate:didCommitSelector:contextInfo:](nscontroller/commitediting%28withdelegate_didcommit_contextinfo_%29.md): Attempts to commit any pending changes in known editors of the receiver.
- [discardEditing](nscontroller/discardediting%28%29.md): Discards any pending changes by registered editors.
- [editing](nscontroller/isediting.md): A Boolean value indicating if any editors are registered with the controller.

### Initializers

- [init](nscontroller/init%28%29.md)
- [initWithCoder:](nscontroller/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSObjectController](nsobjectcontroller.md)
- [NSUserDefaultsController](nsuserdefaultscontroller.md)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSEditor](nseditor.md)
- [NSEditorRegistration](nseditorregistration.md)

## See Also

### Core Controllers

- [NSObjectController](nsobjectcontroller.md): A controller that can manage an object’s properties referenced by key-value paths.
