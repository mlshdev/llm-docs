> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcontrol/setdraggingsourceoperationmask(_:forlocal:)](https://developer.apple.com/documentation/appkit/nspathcontrol/setdraggingsourceoperationmask(_:forlocal:))

# setDraggingSourceOperationMask(\_:forLocal:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Configures the drag operation mask.

## Declaration

```swift
func setDraggingSourceOperationMask(_ mask: NSDragOperation, forLocal isLocal: Bool)
```

## Parameters

- `mask`: The types of drag operations allowed.
- `isLocal`: If [true](https://developer.apple.com/documentation/swift/true), `mask` applies when the drag destination object is in the same application as the receiver; if [false](https://developer.apple.com/documentation/swift/false), `mask` applies when the destination object is outside the receiver’s application.

<a id="Discussion"></a>

## Discussion

This method configures the default return value of [draggingSourceOperationMaskForLocal:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/draggingsourceoperationmaskforlocal:). By default, this method returns [every](../nsdragoperation/every.md) when `isLocal` is [true](https://developer.apple.com/documentation/swift/true) and [NSDragOperationNone](../nsdragoperation/nsdragoperationnone.md) when `isLocal` is [false](https://developer.apple.com/documentation/swift/false).

# setDraggingSourceOperationMask:forLocal: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Configures the drag operation mask.

## Declaration

```objectivec
- (void) setDraggingSourceOperationMask:(NSDragOperation) mask forLocal:(BOOL) isLocal;
```

## Parameters

- `mask`: The types of drag operations allowed.
- `isLocal`: If [true](https://developer.apple.com/documentation/swift/true), `mask` applies when the drag destination object is in the same application as the receiver; if [false](https://developer.apple.com/documentation/swift/false), `mask` applies when the destination object is outside the receiver’s application.

<a id="Discussion"></a>

## Discussion

This method configures the default return value of [draggingSourceOperationMaskForLocal:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/draggingsourceoperationmaskforlocal:). By default, this method returns [NSDragOperationEvery](../nsdragoperation/every.md) when `isLocal` is [true](https://developer.apple.com/documentation/swift/true) and [NSDragOperationNone](../nsdragoperation/nsdragoperationnone.md) when `isLocal` is [false](https://developer.apple.com/documentation/swift/false).
