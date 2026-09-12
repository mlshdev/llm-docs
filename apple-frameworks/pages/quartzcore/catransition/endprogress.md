> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransition/endprogress](https://developer.apple.com/documentation/quartzcore/catransition/endprogress)

# endProgress (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Indicates the end point of the receiver as a fraction of the entire transition.

## Declaration

```swift
var endProgress: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The value must be greater than or equal to [startProgress](startprogress.md), and not greater than 1.0.  If `endProgress` is less than [startProgress](startprogress.md) the behavior is undefined. The default value is 1.0.

## See Also

### Transition start and end point

- [startProgress](startprogress.md): Indicates the start point of the receiver as a fraction of the entire transition.

# endProgress (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Indicates the end point of the receiver as a fraction of the entire transition.

## Declaration

```objectivec
@property float endProgress;
```

<a id="Discussion"></a>

## Discussion

The value must be greater than or equal to [startProgress](startprogress.md), and not greater than 1.0.  If `endProgress` is less than [startProgress](startprogress.md) the behavior is undefined. The default value is 1.0.

## See Also

### Transition start and end point

- [startProgress](startprogress.md): Indicates the start point of the receiver as a fraction of the entire transition.
