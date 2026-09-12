> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusenvironment/soundidentifierforfocusupdate(in:)](https://developer.apple.com/documentation/uikit/uifocusenvironment/soundidentifierforfocusupdate(in:))

# soundIdentifierForFocusUpdate(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** tvOS 11.0+

Asks the delegate for the identifier of the sound to play when the object gains focus.

## Declaration

```swift
optional func soundIdentifierForFocusUpdate(in context: UIFocusUpdateContext) -> UIFocusSoundIdentifier?
```

## Parameters

- `context`: The context object associated with the update.

<a id="return-value"></a>

## Return Value

The identifier of the sound to be played. Return `nil` if you want to let the parent focus environment determine which sound to play.

## Mentioned In

- [Using custom sounds for focus movement](../using-custom-sounds-for-focus-movement.md)

<a id="Discussion"></a>

## Discussion

Use this method to return a custom sound when the focus environment object gains focus. Return [default](../uifocussoundidentifier/default.md) to play the default system sound, or return [none](../uifocussoundidentifier/none.md) to avoid playing a sound altogether. If you previously registered custom sounds using the [register(\_:forSoundIdentifier:)](../uifocussystem/register%28__forsoundidentifier_%29.md) method of [UIFocusSystem](../uifocussystem.md), you may also return an identifier for a sound that you registered.

If you do not implement this method, the system assumes a `nil` return value. If no ancestor environment defines a custom sound, the system plays the [default](../uifocussoundidentifier/default.md) sound.

> **Important**

>  You must register custom sounds before returning the associated identifiers from this method. Returning an identifier that is unknown to UIKit will result in an assertion failure and an immediate crash.

## See Also

### Getting the sound to play during updates

- [Using custom sounds for focus movement](../using-custom-sounds-for-focus-movement.md): Customize the sounds users hear when focus moves.
- [UIFocusSoundIdentifier](../uifocussoundidentifier.md): An identifier for a focus-related sound.

# soundIdentifierForFocusUpdateInContext: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** tvOS 11.0+

Asks the delegate for the identifier of the sound to play when the object gains focus.

## Declaration

```objectivec
- (UIFocusSoundIdentifier) soundIdentifierForFocusUpdateInContext:(UIFocusUpdateContext *) context;
```

## Parameters

- `context`: The context object associated with the update.

<a id="return-value"></a>

## Return Value

The identifier of the sound to be played. Return `nil` if you want to let the parent focus environment determine which sound to play.

## Mentioned In

- [Using custom sounds for focus movement](../using-custom-sounds-for-focus-movement.md)

<a id="Discussion"></a>

## Discussion

Use this method to return a custom sound when the focus environment object gains focus. Return [UIFocusSoundIdentifierDefault](../uifocussoundidentifier/default.md) to play the default system sound, or return [UIFocusSoundIdentifierNone](../uifocussoundidentifier/none.md) to avoid playing a sound altogether. If you previously registered custom sounds using the [registerURL:forSoundIdentifier:](../uifocussystem/register%28__forsoundidentifier_%29.md) method of [UIFocusSystem](../uifocussystem.md), you may also return an identifier for a sound that you registered.

If you do not implement this method, the system assumes a `nil` return value. If no ancestor environment defines a custom sound, the system plays the [UIFocusSoundIdentifierDefault](../uifocussoundidentifier/default.md) sound.

> **Important**

>  You must register custom sounds before returning the associated identifiers from this method. Returning an identifier that is unknown to UIKit will result in an assertion failure and an immediate crash.

## See Also

### Getting the sound to play during updates

- [Using custom sounds for focus movement](../using-custom-sounds-for-focus-movement.md): Customize the sounds users hear when focus moves.
- [UIFocusSoundIdentifier](../uifocussoundidentifier.md): An identifier for a focus-related sound.
