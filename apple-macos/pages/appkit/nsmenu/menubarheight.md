> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/menubarheight](https://developer.apple.com/documentation/appkit/nsmenu/menubarheight)

# menuBarHeight (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The menu bar height for the main menu in pixels.

## Declaration

```swift
var menuBarHeight: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

For the main menu, the value of this property is a value of type `CGFloat`, indicating the height of the menu bar in pixels. For any other menu, the value of this property is `0`.

This property supersedes the `menuBarHeight` class method of the `NSMenuView` class.

## See Also

### Managing the Menu Bar

- [menuBarVisible()](menubarvisible%28%29.md): Returns a Boolean value that indicates whether the menu bar is visible.
- [setMenuBarVisible(\_:)](setmenubarvisible%28__%29.md): Sets whether the menu bar is visible and selectable by the user.

# menuBarHeight (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The menu bar height for the main menu in pixels.

## Declaration

```objectivec
@property (readonly) CGFloat menuBarHeight;
```

<a id="Discussion"></a>

## Discussion

For the main menu, the value of this property is a value of type `CGFloat`, indicating the height of the menu bar in pixels. For any other menu, the value of this property is `0`.

This property supersedes the `menuBarHeight` class method of the `NSMenuView` class.

## See Also

### Managing the Menu Bar

- [menuBarVisible](menubarvisible%28%29.md): Returns a Boolean value that indicates whether the menu bar is visible.
- [setMenuBarVisible:](setmenubarvisible%28__%29.md): Sets whether the menu bar is visible and selectable by the user.
