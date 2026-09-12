> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiosessionpropertylistener](https://developer.apple.com/documentation/audiotoolbox/audiosessionpropertylistener)

# AudioSessionPropertyListener (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Invoked when an audio session property changes in iOS.

> Deprecated in iOS 7.0.

## Declaration

```swift
typealias AudioSessionPropertyListener = (UnsafeMutableRawPointer?, AudioSessionPropertyID, UInt32, UnsafeRawPointer?) -> Void
```

## Parameters

- `inClientData`: Data that you specified in the `inClientData` parameter of the [AudioSessionAddPropertyListener(\_:\_:\_:)](audiosessionaddpropertylistener%28______%29.md) function. Can be `NULL`.
- `inID`: The identifier for the audio session property whose value just changed. See [Audio Session Property Identifiers](1618455-audio-session-property-identifie.md).
- `inDataSize`: The size, in bytes, of the value of the changed property.
- `inData`: The new value of the changed property.

<a id="Discussion"></a>

## Discussion

If you named your function `MyPropertyListener`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

You can register one or more property listener callbacks with your application’s audio session object by calling the [AudioSessionAddPropertyListener(\_:\_:\_:)](audiosessionaddpropertylistener%28______%29.md) function.

## See Also

### Callbacks

- [AudioSessionInterruptionListener](audiosessioninterruptionlistener.md): Deprecated. Invoked when an audio interruption in iOS begins or ends.

# AudioSessionPropertyListener (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Invoked when an audio session property changes in iOS.

> Deprecated in iOS 7.0.

## Declaration

```objectivec
typedef void (*)(void *, unsigned int, unsigned int, const void *) AudioSessionPropertyListener;
```

## Parameters

- `inClientData`: Data that you specified in the `inClientData` parameter of the [AudioSessionAddPropertyListener](audiosessionaddpropertylistener%28______%29.md) function. Can be `NULL`.
- `inID`: The identifier for the audio session property whose value just changed. See [Audio Session Property Identifiers](1618455-audio-session-property-identifie.md).
- `inDataSize`: The size, in bytes, of the value of the changed property.
- `inData`: The new value of the changed property.

<a id="Discussion"></a>

## Discussion

If you named your function `MyPropertyListener`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

You can register one or more property listener callbacks with your application’s audio session object by calling the [AudioSessionAddPropertyListener](audiosessionaddpropertylistener%28______%29.md) function.

## See Also

### Callbacks

- [AudioSessionInterruptionListener](audiosessioninterruptionlistener.md): Deprecated. Invoked when an audio interruption in iOS begins or ends.
