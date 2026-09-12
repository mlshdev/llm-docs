> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/camediatiming/autoreverses](https://developer.apple.com/documentation/quartzcore/camediatiming/autoreverses)

# autoreverses (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Determines if the receiver plays in the reverse upon completion.

## Declaration

```swift
var autoreverses: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), the receiver plays backwards after playing forwards. Defaults to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Playback Modes

- [fillMode](fillmode.md): Determines if the receiver’s presentation is frozen or removed once its active duration has completed.

# autoreverses (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Determines if the receiver plays in the reverse upon completion.

## Declaration

```objectivec
@property BOOL autoreverses;
```

<a id="Discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), the receiver plays backwards after playing forwards. Defaults to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Playback Modes

- [fillMode](fillmode.md): Determines if the receiver’s presentation is frozen or removed once its active duration has completed.
