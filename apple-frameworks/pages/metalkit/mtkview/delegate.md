> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/delegate](https://developer.apple.com/documentation/metalkit/mtkview/delegate)

# delegate (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The view’s delegate.

## Declaration

```swift
weak var delegate: (any MTKViewDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

A delegate is optional. If you provide one, the view calls the delegate when it needs to update its contents. You should either provide a delegate or subclass the view to override the [draw(\_:)](../../uikit/uiview/draw%28__%29.md) method, but not both.

# delegate (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The view’s delegate.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<MTKViewDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

A delegate is optional. If you provide one, the view calls the delegate when it needs to update its contents. You should either provide a delegate or subclass the view to override the [drawRect:](../../uikit/uiview/draw%28__%29.md) method, but not both.
