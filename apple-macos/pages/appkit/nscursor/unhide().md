> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscursor/unhide()](https://developer.apple.com/documentation/appkit/nscursor/unhide())

# unhide() (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.0+

Negates an earlier call to [hide()](hide%28%29.md) by showing the current cursor.

## Declaration

```swift
class func unhide()
```

<a id="Discussion"></a>

## Discussion

Each invocation of `unhide` must be balanced by an invocation of [hide()](hide%28%29.md) in order for the cursor display to be correct.

## See Also

### Setting cursor attributes

- [image](image.md): The cursor’s image.
- [hotSpot](hotspot.md): The position of the click location within the cursor.
- [hide()](hide%28%29.md): Makes the current cursor invisible.
- [setHiddenUntilMouseMoves(\_:)](sethiddenuntilmousemoves%28__%29.md): Sets whether the cursor is hidden until the mouse moves.

# unhide (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.0+

Negates an earlier call to [hide](hide%28%29.md) by showing the current cursor.

## Declaration

```objectivec
+ (void) unhide;
```

<a id="Discussion"></a>

## Discussion

Each invocation of `unhide` must be balanced by an invocation of [hide](hide%28%29.md) in order for the cursor display to be correct.

## See Also

### Setting cursor attributes

- [image](image.md): The cursor’s image.
- [hotSpot](hotspot.md): The position of the click location within the cursor.
- [hide](hide%28%29.md): Makes the current cursor invisible.
- [setHiddenUntilMouseMoves:](sethiddenuntilmousemoves%28__%29.md): Sets whether the cursor is hidden until the mouse moves.
