> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tctouchcontroller/handletouchbegan(at:index:)](https://developer.apple.com/documentation/touchcontroller/tctouchcontroller/handletouchbegan(at:index:))

# handleTouchBegan(at:index:) (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Handles a touch began event at the specified point.

## Declaration

```swift
func handleTouchBegan(at point: CGPoint, index: Int) -> Bool
```

## Parameters

- `point`: The point where the touch began.
- `index`: An integer representing a unique index for the touch

<a id="return-value"></a>

## Return Value

`YES` if the touch was handled by a control; otherwise `NO`.

## See Also

### Handling a touch

- [handleTouchEnded(at:index:)](handletouchended%28at_index_%29.md): Handles a touch ended event at the specified point.
- [handleTouchMoved(at:index:)](handletouchmoved%28at_index_%29.md): Handles a touch moved event at the specified point.

# handleTouchBeganAtPoint:index: (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Handles a touch began event at the specified point.

## Declaration

```objectivec
- (BOOL) handleTouchBeganAtPoint:(CGPoint) point index:(NSInteger) index;
```

## Parameters

- `point`: The point where the touch began.
- `index`: An integer representing a unique index for the touch

<a id="return-value"></a>

## Return Value

`YES` if the touch was handled by a control; otherwise `NO`.

## See Also

### Handling a touch

- [handleTouchEndedAtPoint:index:](handletouchended%28at_index_%29.md): Handles a touch ended event at the specified point.
- [handleTouchMovedAtPoint:index:](handletouchmoved%28at_index_%29.md): Handles a touch moved event at the specified point.
