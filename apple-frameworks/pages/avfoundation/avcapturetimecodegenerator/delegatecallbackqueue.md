> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecodegenerator/delegatecallbackqueue](https://developer.apple.com/documentation/avfoundation/avcapturetimecodegenerator/delegatecallbackqueue)

# delegateCallbackQueue (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The dispatch queue on which delegate callbacks are invoked.

## Declaration

```swift
var delegateCallbackQueue: dispatch_queue_t? { get }
```

<a id="discussion"></a>

## Discussion

Provides the queue set in [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md). If no delegate is assigned, this property is `nil`.

## See Also

### Handling delegate callbacks

- [delegate](delegate.md): The delegate that receives timecode updates from the timecode generator.

# delegateCallbackQueue (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The dispatch queue on which delegate callbacks are invoked.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) dispatch_queue_t delegateCallbackQueue;
```

<a id="discussion"></a>

## Discussion

Provides the queue set in [setDelegate:queue:](setdelegate%28__queue_%29.md). If no delegate is assigned, this property is `nil`.

## See Also

### Handling delegate callbacks

- [delegate](delegate.md): The delegate that receives timecode updates from the timecode generator.
