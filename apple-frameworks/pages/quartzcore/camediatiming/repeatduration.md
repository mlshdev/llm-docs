> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartzcore/camediatiming/repeatduration

# repeatDuration (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Determines how many seconds the animation will repeat for.

## Declaration

```swift
var repeatDuration: CFTimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to 0. If the `repeatDuration` is 0, it is ignored. If both [repeatDuration](repeatduration.md) and [repeatCount](repeatcount.md) are specified the behavior is undefined.

## See Also

### Repeating Animations

- [repeatCount](repeatcount.md): Determines the number of times the animation will repeat.

# repeatDuration (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Determines how many seconds the animation will repeat for.

## Declaration

```objectivec
@property CFTimeInterval repeatDuration;
```

<a id="Discussion"></a>

## Discussion

Defaults to 0. If the `repeatDuration` is 0, it is ignored. If both [repeatDuration](repeatduration.md) and [repeatCount](repeatcount.md) are specified the behavior is undefined.

## See Also

### Repeating Animations

- [repeatCount](repeatcount.md): Determines the number of times the animation will repeat.
