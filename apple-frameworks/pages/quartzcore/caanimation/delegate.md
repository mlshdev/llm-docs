> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caanimation/delegate](https://developer.apple.com/documentation/quartzcore/caanimation/delegate)

# delegate (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Specifies the receiver’s delegate object.

## Declaration

```swift
var delegate: (any CAAnimationDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to `nil`.

> **Important**

>  The `delegate` object is retained by the receiver. This is a rare exception to the memory management rules described in [Advanced Memory Management Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/MemoryMgmt.html#//apple_ref/doc/uid/10000011i).
>
> An instance of `CAAnimation` should not be set as a delegate of itself. Doing so (outside of a garbage-collected environment) will cause retain cycles.

# delegate (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Specifies the receiver’s delegate object.

## Declaration

```objectivec
@property (strong, nullable) id<CAAnimationDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Defaults to `nil`.

> **Important**

>  The `delegate` object is retained by the receiver. This is a rare exception to the memory management rules described in [Advanced Memory Management Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/MemoryMgmt.html#//apple_ref/doc/uid/10000011i).
>
> An instance of `CAAnimation` should not be set as a delegate of itself. Doing so (outside of a garbage-collected environment) will cause retain cycles.
