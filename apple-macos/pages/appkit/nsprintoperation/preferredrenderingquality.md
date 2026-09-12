> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation/preferredrenderingquality](https://developer.apple.com/documentation/appkit/nsprintoperation/preferredrenderingquality)

# preferredRenderingQuality (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The printing quality.

## Declaration

```swift
var preferredRenderingQuality: NSPrintOperation.RenderingQuality { get }
```

<a id="return-value"></a>

## Return Value

The preferred printing quality. See [NSPrintOperation.RenderingQuality](renderingquality.md) for the possible values.

<a id="Discussion"></a>

## Discussion

If the print sheet is unresponsive or sluggish due to the time is takes to fully render a page, you can check this method in `drawRect:` and other printing methods such as `beginDocument` and `knowsPageRage:` to determine if the print operation prefers speed over fidelity. Most applications render each page fast enough and do not need to call this method. Only use this method after establishing that best quality rendering does indeed make the user interface unresponsive.

The following is an example use of this method:

```objc
- (void)drawRect:(NSRect)rect {
    NSGraphicsContext *currentContext = [NSGraphicsContext currentContext];
    if (![currentContext isDrawingToScreen]) {
        NSPrintOperation *printOperation = [NSPrintOperation currentOperation]
        if ([printOperation preferredRenderingQuality] == NSPrintRenderingQualityResponsive) {
            // Render with the best possible quality such that the user interface remains responsive
        } else {
            // Printing, do a full render
        }
    }
}
```

## See Also

### Getting the Printing Quality

- [NSPrintOperation.RenderingQuality](renderingquality.md): Constants that specify the print quality in use.

# preferredRenderingQuality (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The printing quality.

## Declaration

```objectivec
@property (readonly) NSPrintRenderingQuality preferredRenderingQuality;
```

<a id="return-value"></a>

## Return Value

The preferred printing quality. See [NSPrintRenderingQuality](renderingquality.md) for the possible values.

<a id="Discussion"></a>

## Discussion

If the print sheet is unresponsive or sluggish due to the time is takes to fully render a page, you can check this method in `drawRect:` and other printing methods such as `beginDocument` and `knowsPageRage:` to determine if the print operation prefers speed over fidelity. Most applications render each page fast enough and do not need to call this method. Only use this method after establishing that best quality rendering does indeed make the user interface unresponsive.

The following is an example use of this method:

```objc
- (void)drawRect:(NSRect)rect {
    NSGraphicsContext *currentContext = [NSGraphicsContext currentContext];
    if (![currentContext isDrawingToScreen]) {
        NSPrintOperation *printOperation = [NSPrintOperation currentOperation]
        if ([printOperation preferredRenderingQuality] == NSPrintRenderingQualityResponsive) {
            // Render with the best possible quality such that the user interface remains responsive
        } else {
            // Printing, do a full render
        }
    }
}
```

## See Also

### Getting the Printing Quality

- [NSPrintRenderingQuality](renderingquality.md): Constants that specify the print quality in use.
