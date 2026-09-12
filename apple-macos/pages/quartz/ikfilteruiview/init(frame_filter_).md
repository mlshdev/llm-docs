> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikfilteruiview/init(frame:filter:)](https://developer.apple.com/documentation/quartz/ikfilteruiview/init(frame:filter:))

# init(frame:filter:) (Swift)

**Framework:** Quartz  
**Kind:** Initializer  
**Availability:** macOS 10.4+

Initializes a view that contains controls for the input parameters of a filter.

## Declaration

```swift
init!(frame frameRect: NSRect, filter inFilter: CIFilter!)
```

## Parameters

- `frameRect`: The rectangle that defines the area of the view.
- `inFilter`: A Core Image filter. The view retains the filter.

<a id="return-value"></a>

## Return Value

The  `IKFilterUIView` object initialized with controls for the input parameters of the provided filter.

## See Also

### Creating and Initializing a Filter UI View

- [view(withFrame:filter:)](view%28withframe_filter_%29.md): Creates a view that contains controls for the input parameters of a filter.

# initWithFrame:filter: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Initializes a view that contains controls for the input parameters of a filter.

## Declaration

```objectivec
- (id) initWithFrame:(NSRect) frameRect filter:(CIFilter *) inFilter;
```

## Parameters

- `frameRect`: The rectangle that defines the area of the view.
- `inFilter`: A Core Image filter. The view retains the filter.

<a id="return-value"></a>

## Return Value

The  `IKFilterUIView` object initialized with controls for the input parameters of the provided filter.

## See Also

### Creating and Initializing a Filter UI View

- [viewWithFrame:filter:](view%28withframe_filter_%29.md): Creates a view that contains controls for the input parameters of a filter.
