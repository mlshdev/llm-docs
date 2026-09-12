> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintformatter/requiresmainthread](https://developer.apple.com/documentation/uikit/uiprintformatter/requiresmainthread)

# requiresMainThread (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A Boolean value that determines whether the system executes the print formatter’s rendering operations on the main thread.

## Declaration

```swift
var requiresMainThread: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true), which requires the printing system to execute rendering operations, like drawing and page-count calculation, on the main thread. Override this property to return [false](https://developer.apple.com/documentation/swift/false) if you want the system to execute operations like [draw(in:forPageAt:)](draw%28in_forpageat_%29.md) and [pageCount](pagecount.md) on a background thread.

# requiresMainThread (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A Boolean value that determines whether the system executes the print formatter’s rendering operations on the main thread.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL requiresMainThread;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true), which requires the printing system to execute rendering operations, like drawing and page-count calculation, on the main thread. Override this property to return [false](https://developer.apple.com/documentation/swift/false) if you want the system to execute operations like [drawInRect:forPageAtIndex:](draw%28in_forpageat_%29.md) and [pageCount](pagecount.md) on a background thread.
