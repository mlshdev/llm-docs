> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowsercell/cellstate()](https://developer.apple.com/documentation/quartz/ikimagebrowsercell/cellstate())

# cellState() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the current cell state of the receiver.

## Declaration

```swift
func cellState() -> IKImageBrowserCellState
```

<a id="return-value"></a>

## Return Value

The current state of the cell. See [IKImageBrowserCellState](../ikimagebrowsercellstate.md) for possible values.

<a id="Discussion"></a>

## Discussion

The [IKImageBrowserView](../ikimagebrowserview.md) creates thumbnails asynchronously. This method returns the current state.

# cellState (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the current cell state of the receiver.

## Declaration

```objectivec
- (IKImageBrowserCellState) cellState;
```

<a id="return-value"></a>

## Return Value

The current state of the cell. See [IKImageBrowserCellState](../ikimagebrowsercellstate.md) for possible values.

<a id="Discussion"></a>

## Discussion

The [IKImageBrowserView](../ikimagebrowserview.md) creates thumbnails asynchronously. This method returns the current state.
