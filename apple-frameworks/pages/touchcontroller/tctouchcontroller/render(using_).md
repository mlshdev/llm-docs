> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tctouchcontroller/render(using:)](https://developer.apple.com/documentation/touchcontroller/tctouchcontroller/render(using:))

# render(using:) (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Renders the touch controls using the provided Metal render command encoder.

## Declaration

```swift
func render(using encoder: any MTLRenderCommandEncoder)
```

## Parameters

- `encoder`: The `MTLRenderCommandEncoder` to use for rendering.

## See Also

### Handling layout updates

- [automaticallyLayoutControls(for:)](automaticallylayoutcontrols%28for_%29.md): Automatically lays out the provided control labels, creating them if needed.

# renderUsingRenderCommandEncoder: (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Renders the touch controls using the provided Metal render command encoder.

## Declaration

```objectivec
- (void) renderUsingRenderCommandEncoder:(id<MTLRenderCommandEncoder>) encoder;
```

## Parameters

- `encoder`: The `MTLRenderCommandEncoder` to use for rendering.

## See Also

### Handling layout updates

- [automaticallyLayoutControlsForLabels:](automaticallylayoutcontrols%28for_%29.md): Automatically lays out the provided control labels, creating them if needed.
