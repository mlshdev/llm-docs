> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsanimationcontext/duration

# duration (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The duration used by animations created as a result of setting new values for an animatable property.

## Declaration

```swift
var duration: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

Any animations that occur as a result of setting the values of animatable properties in the current context will run for this duration.

## See Also

### Modifying the Animation Duration

- [timingFunction](timingfunction.md): The timing function used for all animations within this animation proxy group.

# duration (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The duration used by animations created as a result of setting new values for an animatable property.

## Declaration

```objectivec
@property NSTimeInterval duration;
```

<a id="Discussion"></a>

## Discussion

Any animations that occur as a result of setting the values of animatable properties in the current context will run for this duration.

## See Also

### Modifying the Animation Duration

- [timingFunction](timingfunction.md): The timing function used for all animations within this animation proxy group.
