> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransition/startprogress](https://developer.apple.com/documentation/quartzcore/catransition/startprogress)

# startProgress (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Indicates the start point of the receiver as a fraction of the entire transition.

## Declaration

```swift
var startProgress: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Legal values are numbers between 0.0 and 1.0. For example, to start the transition half way through its progress set `startProgress` to 0.5. The default value is 0.

## See Also

### Related Documentation

- [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514)

### Transition start and end point

- [endProgress](endprogress.md): Indicates the end point of the receiver as a fraction of the entire transition.

# startProgress (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Indicates the start point of the receiver as a fraction of the entire transition.

## Declaration

```objectivec
@property float startProgress;
```

<a id="Discussion"></a>

## Discussion

Legal values are numbers between 0.0 and 1.0. For example, to start the transition half way through its progress set `startProgress` to 0.5. The default value is 0.

## See Also

### Related Documentation

- [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514)

### Transition start and end point

- [endProgress](endprogress.md): Indicates the end point of the receiver as a fraction of the entire transition.
