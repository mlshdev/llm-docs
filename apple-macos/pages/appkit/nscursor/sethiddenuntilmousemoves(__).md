> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscursor/sethiddenuntilmousemoves(_:)](https://developer.apple.com/documentation/appkit/nscursor/sethiddenuntilmousemoves(_:))

# setHiddenUntilMouseMoves(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.0+

Sets whether the cursor is hidden until the mouse moves.

## Declaration

```swift
class func setHiddenUntilMouseMoves(_ flag: Bool)
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) to hide the cursor until one of the following occurs:

  - The mouse moves.
  - You invoke the method again, with `flag` set to [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Do not try to counter this method by invoking [unhide()](unhide%28%29.md). The results are undefined.

## See Also

### Setting cursor attributes

- [image](image.md): The cursor’s image.
- [hotSpot](hotspot.md): The position of the click location within the cursor.
- [hide()](hide%28%29.md): Makes the current cursor invisible.
- [unhide()](unhide%28%29.md): Negates an earlier call to [hide()](hide%28%29.md) by showing the current cursor.

# setHiddenUntilMouseMoves: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.0+

Sets whether the cursor is hidden until the mouse moves.

## Declaration

```objectivec
+ (void) setHiddenUntilMouseMoves:(BOOL) flag;
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) to hide the cursor until one of the following occurs:

  - The mouse moves.
  - You invoke the method again, with `flag` set to [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Do not try to counter this method by invoking [unhide](unhide%28%29.md). The results are undefined.

## See Also

### Setting cursor attributes

- [image](image.md): The cursor’s image.
- [hotSpot](hotspot.md): The position of the click location within the cursor.
- [hide](hide%28%29.md): Makes the current cursor invisible.
- [unhide](unhide%28%29.md): Negates an earlier call to [hide](hide%28%29.md) by showing the current cursor.
