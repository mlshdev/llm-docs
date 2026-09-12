> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tctouchcontroller/handletouchended(at:index:)](https://developer.apple.com/documentation/touchcontroller/tctouchcontroller/handletouchended(at:index:))

# handleTouchEnded(at:index:) (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Handles a touch ended event at the specified point.

## Declaration

```swift
func handleTouchEnded(at point: CGPoint, index: Int) -> Bool
```

## Parameters

- `point`: The point where the touch ended.
- `index`: An integer representing a unique index for the touch

<a id="return-value"></a>

## Return Value

`YES` if the touch was handled by a control, `NO` otherwise.

## See Also

### Handling a touch

- [handleTouchBegan(at:index:)](handletouchbegan%28at_index_%29.md): Handles a touch began event at the specified point.
- [handleTouchMoved(at:index:)](handletouchmoved%28at_index_%29.md): Handles a touch moved event at the specified point.

# handleTouchEndedAtPoint:index: (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Handles a touch ended event at the specified point.

## Declaration

```objectivec
- (BOOL) handleTouchEndedAtPoint:(CGPoint) point index:(NSInteger) index;
```

## Parameters

- `point`: The point where the touch ended.
- `index`: An integer representing a unique index for the touch

<a id="return-value"></a>

## Return Value

`YES` if the touch was handled by a control, `NO` otherwise.

## See Also

### Handling a touch

- [handleTouchBeganAtPoint:index:](handletouchbegan%28at_index_%29.md): Handles a touch began event at the specified point.
- [handleTouchMovedAtPoint:index:](handletouchmoved%28at_index_%29.md): Handles a touch moved event at the specified point.
