> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartzcore/camediatiming/speed

# speed (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Specifies how time is mapped to receiver’s time space from the parent time space.

## Declaration

```swift
var speed: Float { get set }
```

<a id="Discussion"></a>

## Discussion

For example, if `speed` is 2.0 local time progresses twice as fast as parent time. Defaults to 1.0.

## See Also

### Duration and Speed

- [duration](duration.md): Specifies the basic duration of the animation, in seconds.

# speed (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Specifies how time is mapped to receiver’s time space from the parent time space.

## Declaration

```objectivec
@property float speed;
```

<a id="Discussion"></a>

## Discussion

For example, if `speed` is 2.0 local time progresses twice as fast as parent time. Defaults to 1.0.

## See Also

### Duration and Speed

- [duration](duration.md): Specifies the basic duration of the animation, in seconds.
