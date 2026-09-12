> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscursor/hide()](https://developer.apple.com/documentation/appkit/nscursor/hide())

# hide() (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.0+

Makes the current cursor invisible.

## Declaration

```swift
class func hide()
```

<a id="Discussion"></a>

## Discussion

If another cursor becomes current, that cursor will be invisible, too. It will remain invisible until you invoke the [unhide()](unhide%28%29.md) method.

Each invocation of `hide` must be balanced by an invocation of [unhide()](unhide%28%29.md) in order for the cursor to be displayed.

The [hide()](hide%28%29.md) method overrides [setHiddenUntilMouseMoves(\_:)](sethiddenuntilmousemoves%28__%29.md).

## See Also

### Setting cursor attributes

- [image](image.md): The cursor’s image.
- [hotSpot](hotspot.md): The position of the click location within the cursor.
- [unhide()](unhide%28%29.md): Negates an earlier call to [hide()](hide%28%29.md) by showing the current cursor.
- [setHiddenUntilMouseMoves(\_:)](sethiddenuntilmousemoves%28__%29.md): Sets whether the cursor is hidden until the mouse moves.

# hide (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.0+

Makes the current cursor invisible.

## Declaration

```objectivec
+ (void) hide;
```

<a id="Discussion"></a>

## Discussion

If another cursor becomes current, that cursor will be invisible, too. It will remain invisible until you invoke the [unhide](unhide%28%29.md) method.

Each invocation of `hide` must be balanced by an invocation of [unhide](unhide%28%29.md) in order for the cursor to be displayed.

The [hide](hide%28%29.md) method overrides [setHiddenUntilMouseMoves:](sethiddenuntilmousemoves%28__%29.md).

## See Also

### Setting cursor attributes

- [image](image.md): The cursor’s image.
- [hotSpot](hotspot.md): The position of the click location within the cursor.
- [unhide](unhide%28%29.md): Negates an earlier call to [hide](hide%28%29.md) by showing the current cursor.
- [setHiddenUntilMouseMoves:](sethiddenuntilmousemoves%28__%29.md): Sets whether the cursor is hidden until the mouse moves.
