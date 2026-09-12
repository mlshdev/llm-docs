> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/pasteboardchangedowner:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/pasteboardchangedowner:)

# pasteboardChangedOwner:

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Notifies a prior owner of the specified pasteboard (and owners of representations on the pasteboard) that the pasteboard has changed owners.

## Declaration

```objectivec
- (void) pasteboardChangedOwner:(NSPasteboard *) sender;
```

## Parameters

- `sender`: The pasteboard object whose owner changed.

<a id="Discussion"></a>

## Discussion

Pasteboard owners only need to implement this method if they need to know when they have lost ownership.

The owner is not able to read the contents of the pasteboard when responding to this method. The owner should be prepared to receive this method at any time, even from within the [declareTypes:owner:](https://developer.apple.com/documentation/appkit/nspasteboard/declaretypes%28_:owner:%29) method used to declare ownership.

Once an owner has provided all of its data for declared types, it will not receive a `pasteboardChangedOwner:` message. If, therefore, you are maintaining an object just for the purpose of providing data lazily, rather than relying solely on receipt of a `pasteboardChangedOwner:` message you need to keep track of what types were promised and what types have been provided. When all the types have been provided, you may release the owner.

## See Also

### Related Documentation

- [changeCount](https://developer.apple.com/documentation/appkit/nspasteboard/changecount): The receiver’s change count.
- [declareTypes:owner:](https://developer.apple.com/documentation/appkit/nspasteboard/declaretypes%28_:owner:%29): Prepares the receiver for a change in its contents by declaring the new types of data it will contain and a new owner.
