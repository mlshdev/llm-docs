> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tctouchcontroller/automaticallylayoutcontrols(for:)](https://developer.apple.com/documentation/touchcontroller/tctouchcontroller/automaticallylayoutcontrols(for:))

# automaticallyLayoutControls(for:) (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Automatically lays out the provided control labels, creating them if needed.

## Declaration

```swift
func automaticallyLayoutControls(for labels: [TCControlLabel])
```

## Parameters

- `labels`: An array of `TCControlLabel` objects to be laid out.

## See Also

### Handling layout updates

- [render(using:)](render%28using_%29.md): Renders the touch controls using the provided Metal render command encoder.

# automaticallyLayoutControlsForLabels: (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Automatically lays out the provided control labels, creating them if needed.

## Declaration

```objectivec
- (void) automaticallyLayoutControlsForLabels:(NSArray<TCControlLabel *> *) labels;
```

## Parameters

- `labels`: An array of `TCControlLabel` objects to be laid out.

## See Also

### Handling layout updates

- [renderUsingRenderCommandEncoder:](render%28using_%29.md): Renders the touch controls using the provided Metal render command encoder.
