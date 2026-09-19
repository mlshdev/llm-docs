> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gccontrollerdirectionpadvaluechangedhandler

# GCControllerDirectionPadValueChangedHandler (Swift)

**Framework:** Game Controller  
**Kind:** Type Alias  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The signature for the block that executes when either axis changes values.

## Declaration

```swift
typealias GCControllerDirectionPadValueChangedHandler = (GCControllerDirectionPad, Float, Float) -> Void
```

## Parameters

- `dpad`: The directional pad element that changed.
- `xValue`: A normalized value of the x-axis ranging from `-1` to `1`.
- `yValue`: A normalized value of the y-axis ranging from `-1` to `1`.

## See Also

### Getting change information

- [valueChangedHandler](gccontrollerdirectionpad/valuechangedhandler.md): The block that the directional pad calls when the user changes its values.

# GCControllerDirectionPadValueChangedHandler (Objective-C)

**Framework:** Game Controller  
**Kind:** Type Alias  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The signature for the block that executes when either axis changes values.

## Declaration

```objectivec
typedef void (^)(GCControllerDirectionPad *, float, float) GCControllerDirectionPadValueChangedHandler;
```

## Parameters

- `dpad`: The directional pad element that changed.
- `xValue`: A normalized value of the x-axis ranging from `-1` to `1`.
- `yValue`: A normalized value of the y-axis ranging from `-1` to `1`.

## See Also

### Getting change information

- [valueChangedHandler](gccontrollerdirectionpad/valuechangedhandler.md): The block that the directional pad calls when the user changes its values.
