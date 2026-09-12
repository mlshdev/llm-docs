> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caanimationgroup/animations](https://developer.apple.com/documentation/quartzcore/caanimationgroup/animations)

# animations (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An array of `CAAnimation` objects to be evaluated in the time space of the receiver.

## Declaration

```swift
var animations: [CAAnimation]? { get set }
```

<a id="Discussion"></a>

## Discussion

The animations run concurrently in the receiver’s time space.

## See Also

### Related Documentation

- [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514)

# animations (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An array of `CAAnimation` objects to be evaluated in the time space of the receiver.

## Declaration

```objectivec
@property (copy, nullable) NSArray<CAAnimation *> * animations;
```

<a id="Discussion"></a>

## Discussion

The animations run concurrently in the receiver’s time space.

## See Also

### Related Documentation

- [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514)
