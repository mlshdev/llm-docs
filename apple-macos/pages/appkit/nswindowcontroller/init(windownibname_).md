> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowcontroller/init(windownibname:)](https://developer.apple.com/documentation/appkit/nswindowcontroller/init(windownibname:))

# init(windowNibName:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Returns a window controller initialized with a nib file.

## Declaration

```swift
convenience init(windowNibName: NSNib.Name)
```

## Parameters

- `windowNibName`: The name of the nib file (minus the “`.nib`” extension) that archives the receiver’s window; cannot be `nil`.

<a id="Discussion"></a>

## Discussion

Sets the owner of the nib file to the receiver. The default initialization turns on cascading, sets the [shouldCloseDocument](shouldclosedocument.md) property to [false](https://developer.apple.com/documentation/swift/false), and sets the autosave name for the window’s frame to an empty string.

## See Also

### Initializing Window Controllers

- [init(window:)](init%28window_%29.md): Returns a window controller initialized with a given window.
- [init(windowNibName:owner:)](init%28windownibname_owner_%29.md): Returns a window controller initialized with a nib file and a specified owner for that nib file.
- [init(windowNibPath:owner:)](init%28windownibpath_owner_%29.md): Returns a window controller initialized with a nib file at an absolute path and a specified owner.

# initWithWindowNibName: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a window controller initialized with a nib file.

## Declaration

```objectivec
- (instancetype) initWithWindowNibName:(NSNibName) windowNibName;
```

## Parameters

- `windowNibName`: The name of the nib file (minus the “`.nib`” extension) that archives the receiver’s window; cannot be `nil`.

<a id="Discussion"></a>

## Discussion

Sets the owner of the nib file to the receiver. The default initialization turns on cascading, sets the [shouldCloseDocument](shouldclosedocument.md) property to [false](https://developer.apple.com/documentation/swift/false), and sets the autosave name for the window’s frame to an empty string.

## See Also

### Initializing Window Controllers

- [initWithWindow:](init%28window_%29.md): Returns a window controller initialized with a given window.
- [initWithWindowNibName:owner:](init%28windownibname_owner_%29.md): Returns a window controller initialized with a nib file and a specified owner for that nib file.
- [initWithWindowNibPath:owner:](init%28windownibpath_owner_%29.md): Returns a window controller initialized with a nib file at an absolute path and a specified owner.
