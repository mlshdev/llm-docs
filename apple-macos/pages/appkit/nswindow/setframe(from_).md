> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/setframe(from:)](https://developer.apple.com/documentation/appkit/nswindow/setframe(from:))

# setFrame(from:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the window’s frame rectangle from a given string representation.

## Declaration

```swift
func setFrame(from string: NSWindow.PersistableFrameDescriptor)
```

## Parameters

- `string`: A string representation of a frame rectangle, previously accessed using [frameDescriptor](framedescriptor.md).

<a id="Discussion"></a>

## Discussion

If the window is not resizable, this method will not resize the window. The frame is constrained according to the window’s minimum and maximum size settings. This method causes a [windowWillResize(\_:to:)](../nswindowdelegate/windowwillresize%28__to_%29.md) message to be sent to the delegate.

## See Also

### Managing Window Frames in User Defaults

- [removeFrame(usingName:)](removeframe%28usingname_%29.md): Removes the frame data stored under a given name from the application’s user defaults.
- [setFrameUsingName(\_:)](setframeusingname%28__%29.md): Sets the window’s frame rectangle by reading the rectangle data stored under a given name from the defaults system.
- [setFrameUsingName(\_:force:)](setframeusingname%28__force_%29.md): Sets the window’s frame rectangle by reading the rectangle data stored under a given name from the defaults system. Can operate on non-resizable windows.
- [saveFrame(usingName:)](saveframe%28usingname_%29.md): Saves the window’s frame rectangle in the user defaults system under a given name.
- [setFrameAutosaveName(\_:)](setframeautosavename%28__%29.md): Sets the name AppKit uses to automatically save the window’s frame rectangle data in the defaults system.
- [frameAutosaveName](frameautosavename-swift.property.md): The name used to automatically save the window’s frame rectangle data in the defaults system.
- [NSWindow.FrameAutosaveName](frameautosavename-swift.typealias.md): The type of a window’s frame autosave name.
- [frameDescriptor](framedescriptor.md): A string representation of the window’s frame rectangle.
- [NSWindow.PersistableFrameDescriptor](persistableframedescriptor.md): The type of a window’s frame descriptor.

# setFrameFromString: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the window’s frame rectangle from a given string representation.

## Declaration

```objectivec
- (void) setFrameFromString:(NSWindowPersistableFrameDescriptor) string;
```

## Parameters

- `string`: A string representation of a frame rectangle, previously accessed using [stringWithSavedFrame](framedescriptor.md).

<a id="Discussion"></a>

## Discussion

If the window is not resizable, this method will not resize the window. The frame is constrained according to the window’s minimum and maximum size settings. This method causes a [windowWillResize:toSize:](../nswindowdelegate/windowwillresize%28__to_%29.md) message to be sent to the delegate.

## See Also

### Managing Window Frames in User Defaults

- [removeFrameUsingName:](removeframe%28usingname_%29.md): Removes the frame data stored under a given name from the application’s user defaults.
- [setFrameUsingName:](setframeusingname%28__%29.md): Sets the window’s frame rectangle by reading the rectangle data stored under a given name from the defaults system.
- [setFrameUsingName:force:](setframeusingname%28__force_%29.md): Sets the window’s frame rectangle by reading the rectangle data stored under a given name from the defaults system. Can operate on non-resizable windows.
- [saveFrameUsingName:](saveframe%28usingname_%29.md): Saves the window’s frame rectangle in the user defaults system under a given name.
- [setFrameAutosaveName:](setframeautosavename%28__%29.md): Sets the name AppKit uses to automatically save the window’s frame rectangle data in the defaults system.
- [frameAutosaveName](frameautosavename-swift.property.md): The name used to automatically save the window’s frame rectangle data in the defaults system.
- [NSWindowFrameAutosaveName](frameautosavename-swift.typealias.md): The type of a window’s frame autosave name.
- [stringWithSavedFrame](framedescriptor.md): A string representation of the window’s frame rectangle.
- [NSWindowPersistableFrameDescriptor](persistableframedescriptor.md): The type of a window’s frame descriptor.
