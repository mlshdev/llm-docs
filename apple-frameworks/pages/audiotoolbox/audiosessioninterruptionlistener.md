> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiosessioninterruptionlistener](https://developer.apple.com/documentation/audiotoolbox/audiosessioninterruptionlistener)

# AudioSessionInterruptionListener (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Invoked when an audio interruption in iOS begins or ends.

> Deprecated in iOS 7.0.

## Declaration

```swift
typealias AudioSessionInterruptionListener = (UnsafeMutableRawPointer?, UInt32) -> Void
```

## Parameters

- `inClientData`: Data that you specified in the `inClientData` parameter of the [AudioSessionInitialize(\_:\_:\_:\_:)](audiosessioninitialize%28________%29.md) function. Can be `NULL`.
- `inInterruptionState`: A constant that indicates whether the interruption has just started or just ended. See [Audio Session Interruption States](1618425-audio-session-interruption-state.md).

<a id="Discussion"></a>

## Discussion

If you named your function `MyInterruptionListener`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

To register your interruption listener callback with your application’s audio session object, specify it in the [AudioSessionInitialize(\_:\_:\_:\_:)](audiosessioninitialize%28________%29.md) function.

## See Also

### Callbacks

- [AudioSessionPropertyListener](audiosessionpropertylistener.md): Deprecated. Invoked when an audio session property changes in iOS.

# AudioSessionInterruptionListener (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Invoked when an audio interruption in iOS begins or ends.

> Deprecated in iOS 7.0.

## Declaration

```objectivec
typedef void (*)(void *, unsigned int) AudioSessionInterruptionListener;
```

## Parameters

- `inClientData`: Data that you specified in the `inClientData` parameter of the [AudioSessionInitialize](audiosessioninitialize%28________%29.md) function. Can be `NULL`.
- `inInterruptionState`: A constant that indicates whether the interruption has just started or just ended. See [Audio Session Interruption States](1618425-audio-session-interruption-state.md).

<a id="Discussion"></a>

## Discussion

If you named your function `MyInterruptionListener`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

To register your interruption listener callback with your application’s audio session object, specify it in the [AudioSessionInitialize](audiosessioninitialize%28________%29.md) function.

## See Also

### Callbacks

- [AudioSessionPropertyListener](audiosessionpropertylistener.md): Deprecated. Invoked when an audio session property changes in iOS.
