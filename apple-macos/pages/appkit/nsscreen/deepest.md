> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscreen/deepest](https://developer.apple.com/documentation/appkit/nsscreen/deepest)

# deepest (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns a screen object representing the screen that can best represent color.

## Declaration

```swift
class var deepest: NSScreen? { get }
```

<a id="return-value"></a>

## Return Value

The screen with the highest bit depth.

<a id="Discussion"></a>

## Discussion

This method always returns an object, even if there is only one screen and it is not a color screen.

## See Also

### Getting Screen Objects

- [main](main.md): Returns the screen object containing the window with the keyboard focus.
- [screens](screens.md): Returns an array of screen objects representing all of the screens available on the system.

# deepestScreen (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns a screen object representing the screen that can best represent color.

## Declaration

```objectivec
@property (class, strong, readonly, nullable) NSScreen * deepestScreen;
```

<a id="return-value"></a>

## Return Value

The screen with the highest bit depth.

<a id="Discussion"></a>

## Discussion

This method always returns an object, even if there is only one screen and it is not a color screen.

## See Also

### Getting Screen Objects

- [mainScreen](main.md): Returns the screen object containing the window with the keyboard focus.
- [screens](screens.md): Returns an array of screen objects representing all of the screens available on the system.
