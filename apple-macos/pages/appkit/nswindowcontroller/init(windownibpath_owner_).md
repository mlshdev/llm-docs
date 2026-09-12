> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowcontroller/init(windownibpath:owner:)](https://developer.apple.com/documentation/appkit/nswindowcontroller/init(windownibpath:owner:))

# init(windowNibPath:owner:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Returns a window controller initialized with a nib file at an absolute path and a specified owner.

## Declaration

```swift
convenience init(windowNibPath: String, owner: Any)
```

## Parameters

- `windowNibPath`: The full path to the nib file that archives the receiver’s window; cannot be `nil`.
- `owner`: The nib file’s owner; cannot be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method if your nib file is at a fixed location (which is not inside either the file’s owner’s class’s bundle or in the application’s main bundle). The default initialization turns on cascading, sets the [shouldCloseDocument](shouldclosedocument.md) property to [false](https://developer.apple.com/documentation/swift/false), and sets the autosave name for the window’s frame to an empty string.

## See Also

### Initializing Window Controllers

- [init(window:)](init%28window_%29.md): Returns a window controller initialized with a given window.
- [init(windowNibName:)](init%28windownibname_%29.md): Returns a window controller initialized with a nib file.
- [init(windowNibName:owner:)](init%28windownibname_owner_%29.md): Returns a window controller initialized with a nib file and a specified owner for that nib file.

# initWithWindowNibPath:owner: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a window controller initialized with a nib file at an absolute path and a specified owner.

## Declaration

```objectivec
- (instancetype) initWithWindowNibPath:(NSString *) windowNibPath owner:(id) owner;
```

## Parameters

- `windowNibPath`: The full path to the nib file that archives the receiver’s window; cannot be `nil`.
- `owner`: The nib file’s owner; cannot be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method if your nib file is at a fixed location (which is not inside either the file’s owner’s class’s bundle or in the application’s main bundle). The default initialization turns on cascading, sets the [shouldCloseDocument](shouldclosedocument.md) property to [false](https://developer.apple.com/documentation/swift/false), and sets the autosave name for the window’s frame to an empty string.

## See Also

### Initializing Window Controllers

- [initWithWindow:](init%28window_%29.md): Returns a window controller initialized with a given window.
- [initWithWindowNibName:](init%28windownibname_%29.md): Returns a window controller initialized with a nib file.
- [initWithWindowNibName:owner:](init%28windownibname_owner_%29.md): Returns a window controller initialized with a nib file and a specified owner for that nib file.
