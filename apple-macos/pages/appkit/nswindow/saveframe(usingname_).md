> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/saveframe(usingname:)](https://developer.apple.com/documentation/appkit/nswindow/saveframe(usingname:))

# saveFrame(usingName:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Saves the window’s frame rectangle in the user defaults system under a given name.

## Declaration

```swift
func saveFrame(usingName name: NSWindow.FrameAutosaveName)
```

## Parameters

- `name`: The name under which the frame is to be saved.

<a id="Discussion"></a>

## Discussion

With the companion method [setFrameUsingName(\_:)](setframeusingname%28__%29.md), you can save and reset an `NSWindow` object’s frame over various launches of an application. The default is owned by the application and stored under the name “`NSWindow Frame name`”. See [UserDefaults](https://developer.apple.com/documentation/foundation/userdefaults) for more information.

## See Also

### Managing Window Frames in User Defaults

- [removeFrame(usingName:)](removeframe%28usingname_%29.md): Removes the frame data stored under a given name from the application’s user defaults.
- [setFrameUsingName(\_:)](setframeusingname%28__%29.md): Sets the window’s frame rectangle by reading the rectangle data stored under a given name from the defaults system.
- [setFrameUsingName(\_:force:)](setframeusingname%28__force_%29.md): Sets the window’s frame rectangle by reading the rectangle data stored under a given name from the defaults system. Can operate on non-resizable windows.
- [setFrameAutosaveName(\_:)](setframeautosavename%28__%29.md): Sets the name AppKit uses to automatically save the window’s frame rectangle data in the defaults system.
- [frameAutosaveName](frameautosavename-swift.property.md): The name used to automatically save the window’s frame rectangle data in the defaults system.
- [NSWindow.FrameAutosaveName](frameautosavename-swift.typealias.md): The type of a window’s frame autosave name.
- [frameDescriptor](framedescriptor.md): A string representation of the window’s frame rectangle.
- [setFrame(from:)](setframe%28from_%29.md): Sets the window’s frame rectangle from a given string representation.
- [NSWindow.PersistableFrameDescriptor](persistableframedescriptor.md): The type of a window’s frame descriptor.

# saveFrameUsingName: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Saves the window’s frame rectangle in the user defaults system under a given name.

## Declaration

```objectivec
- (void) saveFrameUsingName:(NSWindowFrameAutosaveName) name;
```

## Parameters

- `name`: The name under which the frame is to be saved.

<a id="Discussion"></a>

## Discussion

With the companion method [setFrameUsingName:](setframeusingname%28__%29.md), you can save and reset an `NSWindow` object’s frame over various launches of an application. The default is owned by the application and stored under the name “`NSWindow Frame name`”. See [NSUserDefaults](https://developer.apple.com/documentation/foundation/userdefaults) for more information.

## See Also

### Managing Window Frames in User Defaults

- [removeFrameUsingName:](removeframe%28usingname_%29.md): Removes the frame data stored under a given name from the application’s user defaults.
- [setFrameUsingName:](setframeusingname%28__%29.md): Sets the window’s frame rectangle by reading the rectangle data stored under a given name from the defaults system.
- [setFrameUsingName:force:](setframeusingname%28__force_%29.md): Sets the window’s frame rectangle by reading the rectangle data stored under a given name from the defaults system. Can operate on non-resizable windows.
- [setFrameAutosaveName:](setframeautosavename%28__%29.md): Sets the name AppKit uses to automatically save the window’s frame rectangle data in the defaults system.
- [frameAutosaveName](frameautosavename-swift.property.md): The name used to automatically save the window’s frame rectangle data in the defaults system.
- [NSWindowFrameAutosaveName](frameautosavename-swift.typealias.md): The type of a window’s frame autosave name.
- [stringWithSavedFrame](framedescriptor.md): A string representation of the window’s frame rectangle.
- [setFrameFromString:](setframe%28from_%29.md): Sets the window’s frame rectangle from a given string representation.
- [NSWindowPersistableFrameDescriptor](persistableframedescriptor.md): The type of a window’s frame descriptor.
