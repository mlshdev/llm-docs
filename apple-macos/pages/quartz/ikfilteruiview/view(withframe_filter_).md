> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikfilteruiview/view(withframe:filter:)](https://developer.apple.com/documentation/quartz/ikfilteruiview/view(withframe:filter:))

# view(withFrame:filter:) (Swift)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+

Creates a view that contains controls for the input parameters of a filter.

## Declaration

```swift
class func view(withFrame frameRect: NSRect, filter inFilter: CIFilter!) -> Any!
```

## Parameters

- `frameRect`: The rectangle that defines the area of the view.
- `inFilter`: A Core Image filter. The view retains the filter.

<a id="return-value"></a>

## Return Value

An `IKFilterUIView` object that contains controls for the input parameters of the provided filter.

## See Also

### Creating and Initializing a Filter UI View

- [init(frame:filter:)](init%28frame_filter_%29.md): Initializes a view that contains controls for the input parameters of a filter.

# viewWithFrame:filter: (Objective-C)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+

Creates a view that contains controls for the input parameters of a filter.

## Declaration

```objectivec
+ (id) viewWithFrame:(NSRect) frameRect filter:(CIFilter *) inFilter;
```

## Parameters

- `frameRect`: The rectangle that defines the area of the view.
- `inFilter`: A Core Image filter. The view retains the filter.

<a id="return-value"></a>

## Return Value

An `IKFilterUIView` object that contains controls for the input parameters of the provided filter.

## See Also

### Creating and Initializing a Filter UI View

- [initWithFrame:filter:](init%28frame_filter_%29.md): Initializes a view that contains controls for the input parameters of a filter.
