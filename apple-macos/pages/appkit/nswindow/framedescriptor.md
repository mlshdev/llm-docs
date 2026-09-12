> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/framedescriptor](https://developer.apple.com/documentation/appkit/nswindow/framedescriptor)

# frameDescriptor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A string representation of the window’s frame rectangle.

## Declaration

```swift
var frameDescriptor: NSWindow.PersistableFrameDescriptor { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is a string that can be used in a later call to [setFrame(from:)](setframe%28from_%29.md).

## See Also

### Managing Window Frames in User Defaults

- [removeFrame(usingName:)](removeframe%28usingname_%29.md): Removes the frame data stored under a given name from the application’s user defaults.
- [setFrameUsingName(\_:)](setframeusingname%28__%29.md): Sets the window’s frame rectangle by reading the rectangle data stored under a given name from the defaults system.
- [setFrameUsingName(\_:force:)](setframeusingname%28__force_%29.md): Sets the window’s frame rectangle by reading the rectangle data stored under a given name from the defaults system. Can operate on non-resizable windows.
- [saveFrame(usingName:)](saveframe%28usingname_%29.md): Saves the window’s frame rectangle in the user defaults system under a given name.
- [setFrameAutosaveName(\_:)](setframeautosavename%28__%29.md): Sets the name AppKit uses to automatically save the window’s frame rectangle data in the defaults system.
- [frameAutosaveName](frameautosavename-swift.property.md): The name used to automatically save the window’s frame rectangle data in the defaults system.
- [NSWindow.FrameAutosaveName](frameautosavename-swift.typealias.md): The type of a window’s frame autosave name.
- [setFrame(from:)](setframe%28from_%29.md): Sets the window’s frame rectangle from a given string representation.
- [NSWindow.PersistableFrameDescriptor](persistableframedescriptor.md): The type of a window’s frame descriptor.

# stringWithSavedFrame (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A string representation of the window’s frame rectangle.

## Declaration

```objectivec
@property (copy, readonly) NSWindowPersistableFrameDescriptor stringWithSavedFrame;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a string that can be used in a later call to [setFrameFromString:](setframe%28from_%29.md).

## See Also

### Managing Window Frames in User Defaults

- [removeFrameUsingName:](removeframe%28usingname_%29.md): Removes the frame data stored under a given name from the application’s user defaults.
- [setFrameUsingName:](setframeusingname%28__%29.md): Sets the window’s frame rectangle by reading the rectangle data stored under a given name from the defaults system.
- [setFrameUsingName:force:](setframeusingname%28__force_%29.md): Sets the window’s frame rectangle by reading the rectangle data stored under a given name from the defaults system. Can operate on non-resizable windows.
- [saveFrameUsingName:](saveframe%28usingname_%29.md): Saves the window’s frame rectangle in the user defaults system under a given name.
- [setFrameAutosaveName:](setframeautosavename%28__%29.md): Sets the name AppKit uses to automatically save the window’s frame rectangle data in the defaults system.
- [frameAutosaveName](frameautosavename-swift.property.md): The name used to automatically save the window’s frame rectangle data in the defaults system.
- [NSWindowFrameAutosaveName](frameautosavename-swift.typealias.md): The type of a window’s frame autosave name.
- [setFrameFromString:](setframe%28from_%29.md): Sets the window’s frame rectangle from a given string representation.
- [NSWindowPersistableFrameDescriptor](persistableframedescriptor.md): The type of a window’s frame descriptor.
