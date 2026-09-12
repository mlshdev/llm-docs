> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewreply/initwithcontextsize:isbitmap:drawingblock:](https://developer.apple.com/documentation/quicklookui/qlpreviewreply/initwithcontextsize:isbitmap:drawingblock:)

# initWithContextSize:isBitmap:drawingBlock:

**Interface language:** Objective-C

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
- (instancetype) initWithContextSize:(CGSize) contextSize isBitmap:(BOOL) isBitmap drawingBlock:(BOOL (^)(CGContextRef context, QLPreviewReply *reply, NSError **error)) drawingBlock;
```

## Parameters

- `contextSize`: The size of your image.
- `isBitmap`: Whether the context should be bitmap or vector.
- `drawingBlock`: The preview should be drawn into the context passed to this block. The QLPreviewReply passed into this block is the same as the one created by this method and is provided for convenience for any further updates to its properties during the drawing block. Return YES if the preview was successfully drawn into the context. Return NO and populate error otherwise.

<a id="Discussion"></a>

## Discussion

Use this method to provide a preview by drawing into a context.
