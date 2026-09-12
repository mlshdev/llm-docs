> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscreen/main](https://developer.apple.com/documentation/appkit/nsscreen/main)

# main (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the screen object containing the window with the keyboard focus.

## Declaration

```swift
class var main: NSScreen? { get }
```

<a id="return-value"></a>

## Return Value

The main screen object.

<a id="Discussion"></a>

## Discussion

The main screen is not necessarily the same screen that contains the menu bar or has its origin at `(0, 0)`. The main screen refers to the screen containing the window that is currently receiving keyboard events. It is the main screen because it is the one with which the user is most likely interacting.

The screen containing the menu bar is always the first object (index `0`) in the array returned by the [screens](screens.md) method.

## See Also

### Getting Screen Objects

- [deepest](deepest.md): Returns a screen object representing the screen that can best represent color.
- [screens](screens.md): Returns an array of screen objects representing all of the screens available on the system.

# mainScreen (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the screen object containing the window with the keyboard focus.

## Declaration

```objectivec
@property (class, strong, readonly, nullable) NSScreen * mainScreen;
```

<a id="return-value"></a>

## Return Value

The main screen object.

<a id="Discussion"></a>

## Discussion

The main screen is not necessarily the same screen that contains the menu bar or has its origin at `(0, 0)`. The main screen refers to the screen containing the window that is currently receiving keyboard events. It is the main screen because it is the one with which the user is most likely interacting.

The screen containing the menu bar is always the first object (index `0`) in the array returned by the [screens](screens.md) method.

## See Also

### Getting Screen Objects

- [deepestScreen](deepest.md): Returns a screen object representing the screen that can best represent color.
- [screens](screens.md): Returns an array of screen objects representing all of the screens available on the system.
