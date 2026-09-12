> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/commitediting(withdelegate:didcommit:contextinfo:)](https://developer.apple.com/documentation/appkit/nsviewcontroller/commitediting(withdelegate:didcommit:contextinfo:))

# commitEditing(withDelegate:didCommit:contextInfo:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Attempt to commit any currently edited results of the receiver.

## Declaration

```swift
@MainActor func commitEditing(withDelegate delegate: Any?, didCommit didCommitSelector: Selector?, contextInfo: UnsafeMutableRawPointer?)
```

## Parameters

- `delegate`: An object that can serve as the receiver’s delegate. It should implement the method specified by `didCommitSelector`.
- `didCommitSelector`: A selector that is invoked on delegate.
- `contextInfo`: Contextual information that is sent as the `contextInfo` argument to delegate when `didCommitSelector` is invoked.

<a id="Discussion"></a>

## Discussion

The receiver must have been registered as the editor of an object using [objectDidBeginEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/objectdidbeginediting:), and has not yet been unregistered by a subsequent invocation of [objectDidEndEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/objectdidendediting:). When the committing has either succeeded or failed, send the `delegate` the message specified by `didCommitSelector`.

The `didCommitSelector` method must have the following method signature:.

```objc
- (void)editor:(id)editor didCommit:(BOOL)didCommit contextInfo:(void  *)contextInfo
```

If an error occurs while attempting to commit, for example if key-value coding validation fails, an implementation of this method should typically send the receiver’s view a[presentError(\_:modalFor:delegate:didPresent:contextInfo:)](../nsresponder/presenterror%28__modalfor_delegate_didpresent_contextinfo_%29.md) message, specifying the view’s containing window.

You may find this method useful in some situations when you want to ensure that pending changes are applied before a change in user interface state. For example, you may need to ensure that changes pending in a text field are applied before a window is closed. See also [commitEditing()](commitediting%28%29.md) which performs a similar function but which allows you to handle any errors directly, although it provides no information beyond simple success/failure.

## See Also

### NSEditor Conformance

- [commitEditing()](commitediting%28%29.md): Returns whether the receiver was able to commit any pending edits.
- [discardEditing()](discardediting%28%29.md): Causes the receiver to discard any changes, restoring the previous values.

# commitEditingWithDelegate:didCommitSelector:contextInfo: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Attempt to commit any currently edited results of the receiver.

## Declaration

```objectivec
- (void) commitEditingWithDelegate:(id) delegate didCommitSelector:(SEL) didCommitSelector contextInfo:(void *) contextInfo;
```

## Parameters

- `delegate`: An object that can serve as the receiver’s delegate. It should implement the method specified by `didCommitSelector`.
- `didCommitSelector`: A selector that is invoked on delegate.
- `contextInfo`: Contextual information that is sent as the `contextInfo` argument to delegate when `didCommitSelector` is invoked.

<a id="Discussion"></a>

## Discussion

The receiver must have been registered as the editor of an object using [objectDidBeginEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/objectdidbeginediting:), and has not yet been unregistered by a subsequent invocation of [objectDidEndEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/objectdidendediting:). When the committing has either succeeded or failed, send the `delegate` the message specified by `didCommitSelector`.

The `didCommitSelector` method must have the following method signature:.

```objc
- (void)editor:(id)editor didCommit:(BOOL)didCommit contextInfo:(void  *)contextInfo
```

If an error occurs while attempting to commit, for example if key-value coding validation fails, an implementation of this method should typically send the receiver’s view a[presentError:modalForWindow:delegate:didPresentSelector:contextInfo:](../nsresponder/presenterror%28__modalfor_delegate_didpresent_contextinfo_%29.md) message, specifying the view’s containing window.

You may find this method useful in some situations when you want to ensure that pending changes are applied before a change in user interface state. For example, you may need to ensure that changes pending in a text field are applied before a window is closed. See also [commitEditing](commitediting%28%29.md) which performs a similar function but which allows you to handle any errors directly, although it provides no information beyond simple success/failure.

## See Also

### NSEditor Conformance

- [commitEditing](commitediting%28%29.md): Returns whether the receiver was able to commit any pending edits.
- [discardEditing](discardediting%28%29.md): Causes the receiver to discard any changes, restoring the previous values.
