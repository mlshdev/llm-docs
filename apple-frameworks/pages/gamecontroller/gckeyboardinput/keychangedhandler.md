> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gckeyboardinput/keychangedhandler](https://developer.apple.com/documentation/gamecontroller/gckeyboardinput/keychangedhandler)

# keyChangedHandler (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The block that the profile calls when the user presses a key.

## Declaration

```swift
var keyChangedHandler: GCKeyboardValueChangedHandler? { get set }
```

<a id="Discussion"></a>

## Discussion

If multiple keys change values at the same time, the profile calls this block once for each key that changes.

## See Also

### Getting Change Information

- [GCKeyboardValueChangedHandler](../gckeyboardvaluechangedhandler.md): The signature for the block that the keyboard input profile calls when a key value changes.

# keyChangedHandler (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The block that the profile calls when the user presses a key.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) GCKeyboardValueChangedHandler keyChangedHandler;
```

<a id="Discussion"></a>

## Discussion

If multiple keys change values at the same time, the profile calls this block once for each key that changes.

## See Also

### Getting Change Information

- [GCKeyboardValueChangedHandler](../gckeyboardvaluechangedhandler.md): The signature for the block that the keyboard input profile calls when a key value changes.
