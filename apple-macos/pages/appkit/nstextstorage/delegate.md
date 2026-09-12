> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextstorage/delegate](https://developer.apple.com/documentation/appkit/nstextstorage/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The delegate for the text storage object.

## Declaration

```swift
weak var delegate: (any NSTextStorageDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Use a delegate object to monitor edits occurring to the text contents. Your delegate object must conform to the [NSTextStorageDelegate](../nstextstoragedelegate.md) protocol.

## See Also

### Processing the editing actions

- [NSTextStorageDelegate](../nstextstoragedelegate.md): The optional methods that delegates of text storage objects implement to handle text-edit processing.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The delegate for the text storage object.

## Declaration

```objectivec
@property (weak, nullable) id<NSTextStorageDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Use a delegate object to monitor edits occurring to the text contents. Your delegate object must conform to the [NSTextStorageDelegate](../nstextstoragedelegate.md) protocol.

## See Also

### Processing the editing actions

- [NSTextStorageDelegate](../nstextstoragedelegate.md): The optional methods that delegates of text storage objects implement to handle text-edit processing.
