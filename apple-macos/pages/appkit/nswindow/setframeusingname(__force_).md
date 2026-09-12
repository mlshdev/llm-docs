> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/setframeusingname(_:force:)](https://developer.apple.com/documentation/appkit/nswindow/setframeusingname(_:force:))

# setFrameUsingName(\_:force:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the window’s frame rectangle by reading the rectangle data stored under a given name from the defaults system. Can operate on non-resizable windows.

## Declaration

```swift
func setFrameUsingName(_ name: NSWindow.FrameAutosaveName, force: Bool) -> Bool
```

## Parameters

- `name`: The name of the frame to read.
- `force`: [true](https://developer.apple.com/documentation/swift/true) to use [setFrameUsingName(\_:)](setframeusingname%28__%29.md) on a non-resizable window; [false](https://developer.apple.com/documentation/swift/false) to fail on a non-resizable window.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when `name` is read and the frame is set successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Window Frames in User Defaults

- [removeFrame(usingName:)](removeframe%28usingname_%29.md): Removes the frame data stored under a given name from the application’s user defaults.
- [setFrameUsingName(\_:)](setframeusingname%28__%29.md): Sets the window’s frame rectangle by reading the rectangle data stored under a given name from the defaults system.
- [saveFrame(usingName:)](saveframe%28usingname_%29.md): Saves the window’s frame rectangle in the user defaults system under a given name.
- [setFrameAutosaveName(\_:)](setframeautosavename%28__%29.md): Sets the name AppKit uses to automatically save the window’s frame rectangle data in the defaults system.
- [frameAutosaveName](frameautosavename-swift.property.md): The name used to automatically save the window’s frame rectangle data in the defaults system.
- [NSWindow.FrameAutosaveName](frameautosavename-swift.typealias.md): The type of a window’s frame autosave name.
- [frameDescriptor](framedescriptor.md): A string representation of the window’s frame rectangle.
- [setFrame(from:)](setframe%28from_%29.md): Sets the window’s frame rectangle from a given string representation.
- [NSWindow.PersistableFrameDescriptor](persistableframedescriptor.md): The type of a window’s frame descriptor.

# setFrameUsingName:force: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the window’s frame rectangle by reading the rectangle data stored under a given name from the defaults system. Can operate on non-resizable windows.

## Declaration

```objectivec
- (BOOL) setFrameUsingName:(NSWindowFrameAutosaveName) name force:(BOOL) force;
```

## Parameters

- `name`: The name of the frame to read.
- `force`: [true](https://developer.apple.com/documentation/swift/true) to use [setFrameUsingName:](setframeusingname%28__%29.md) on a non-resizable window; [false](https://developer.apple.com/documentation/swift/false) to fail on a non-resizable window.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when `name` is read and the frame is set successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Window Frames in User Defaults

- [removeFrameUsingName:](removeframe%28usingname_%29.md): Removes the frame data stored under a given name from the application’s user defaults.
- [setFrameUsingName:](setframeusingname%28__%29.md): Sets the window’s frame rectangle by reading the rectangle data stored under a given name from the defaults system.
- [saveFrameUsingName:](saveframe%28usingname_%29.md): Saves the window’s frame rectangle in the user defaults system under a given name.
- [setFrameAutosaveName:](setframeautosavename%28__%29.md): Sets the name AppKit uses to automatically save the window’s frame rectangle data in the defaults system.
- [frameAutosaveName](frameautosavename-swift.property.md): The name used to automatically save the window’s frame rectangle data in the defaults system.
- [NSWindowFrameAutosaveName](frameautosavename-swift.typealias.md): The type of a window’s frame autosave name.
- [stringWithSavedFrame](framedescriptor.md): A string representation of the window’s frame rectangle.
- [setFrameFromString:](setframe%28from_%29.md): Sets the window’s frame rectangle from a given string representation.
- [NSWindowPersistableFrameDescriptor](persistableframedescriptor.md): The type of a window’s frame descriptor.
