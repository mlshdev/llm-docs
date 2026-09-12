> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowcontroller/owner](https://developer.apple.com/documentation/appkit/nswindowcontroller/owner)

# owner (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The owner of the nib file containing the window managed by the receiver.

## Declaration

```swift
weak var owner: AnyObject? { get }
```

<a id="Discussion"></a>

## Discussion

The owner of the nib file containing the window managed by the receiver is usually `self`, but it can be the receiver’s document or some other object.

## See Also

### Getting Nib and Storyboard Information

- [storyboard](storyboard.md): The storyboard file from which the window controller was loaded.
- [windowNibName](windownibname.md): The name of the nib file that stores the window associated with the receiver.
- [windowNibPath](windownibpath.md): The full path of the nib file that stores the window associated with the receiver.

# owner (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The owner of the nib file containing the window managed by the receiver.

## Declaration

```objectivec
@property (weak, readonly) id owner;
```

<a id="Discussion"></a>

## Discussion

The owner of the nib file containing the window managed by the receiver is usually `self`, but it can be the receiver’s document or some other object.

## See Also

### Getting Nib and Storyboard Information

- [storyboard](storyboard.md): The storyboard file from which the window controller was loaded.
- [windowNibName](windownibname.md): The name of the nib file that stores the window associated with the receiver.
- [windowNibPath](windownibpath.md): The full path of the nib file that stores the window associated with the receiver.
