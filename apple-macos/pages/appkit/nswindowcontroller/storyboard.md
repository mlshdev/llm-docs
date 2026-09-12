> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowcontroller/storyboard](https://developer.apple.com/documentation/appkit/nswindowcontroller/storyboard)

# storyboard (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The storyboard file from which the window controller was loaded.

## Declaration

```swift
var storyboard: NSStoryboard? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if the window controller was not loaded from a storyboard.

## See Also

### Getting Nib and Storyboard Information

- [owner](owner.md): The owner of the nib file containing the window managed by the receiver.
- [windowNibName](windownibname.md): The name of the nib file that stores the window associated with the receiver.
- [windowNibPath](windownibpath.md): The full path of the nib file that stores the window associated with the receiver.

# storyboard (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The storyboard file from which the window controller was loaded.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSStoryboard * storyboard;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if the window controller was not loaded from a storyboard.

## See Also

### Getting Nib and Storyboard Information

- [owner](owner.md): The owner of the nib file containing the window managed by the receiver.
- [windowNibName](windownibname.md): The name of the nib file that stores the window associated with the receiver.
- [windowNibPath](windownibpath.md): The full path of the nib file that stores the window associated with the receiver.
