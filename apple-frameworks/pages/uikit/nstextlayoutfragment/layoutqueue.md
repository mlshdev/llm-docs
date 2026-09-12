> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutfragment/layoutqueue](https://developer.apple.com/documentation/uikit/nstextlayoutfragment/layoutqueue)

# layoutQueue (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The queue on which the framework dispatches layout operations.

## Declaration

```swift
var layoutQueue: OperationQueue? { get set }
```

<a id="Discussion"></a>

## Discussion

If non-`nil`, the queue the framework uses for layout operations.

# layoutQueue (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The queue on which the framework dispatches layout operations.

## Declaration

```objectivec
@property (strong, nullable) NSOperationQueue * layoutQueue;
```

<a id="Discussion"></a>

## Discussion

If non-`nil`, the queue the framework uses for layout operations.
