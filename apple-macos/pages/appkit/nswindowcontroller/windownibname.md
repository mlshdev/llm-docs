> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowcontroller/windownibname](https://developer.apple.com/documentation/appkit/nswindowcontroller/windownibname)

# windowNibName (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The name of the nib file that stores the window associated with the receiver.

## Declaration

```swift
var windowNibName: NSNib.Name? { get }
```

<a id="Discussion"></a>

## Discussion

If [init(windowNibPath:owner:)](init%28windownibpath_owner_%29.md) was used to initialize the instance, [windowNibName](windownibname.md) contains the last path component with the “`.nib`” extension stripped off. If [init(windowNibName:)](init%28windownibname_%29.md) or [init(windowNibName:owner:)](init%28windownibname_owner_%29.md) was used, [NSWindowController](../nswindowcontroller.md) contains the name without the “`.nib`” extension.

## See Also

### Getting Nib and Storyboard Information

- [owner](owner.md): The owner of the nib file containing the window managed by the receiver.
- [storyboard](storyboard.md): The storyboard file from which the window controller was loaded.
- [windowNibPath](windownibpath.md): The full path of the nib file that stores the window associated with the receiver.

# windowNibName (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The name of the nib file that stores the window associated with the receiver.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSNibName windowNibName;
```

<a id="Discussion"></a>

## Discussion

If [initWithWindowNibPath:owner:](init%28windownibpath_owner_%29.md) was used to initialize the instance, [windowNibName](windownibname.md) contains the last path component with the “`.nib`” extension stripped off. If [initWithWindowNibName:](init%28windownibname_%29.md) or [initWithWindowNibName:owner:](init%28windownibname_owner_%29.md) was used, [NSWindowController](../nswindowcontroller.md) contains the name without the “`.nib`” extension.

## See Also

### Getting Nib and Storyboard Information

- [owner](owner.md): The owner of the nib file containing the window managed by the receiver.
- [storyboard](storyboard.md): The storyboard file from which the window controller was loaded.
- [windowNibPath](windownibpath.md): The full path of the nib file that stores the window associated with the receiver.
