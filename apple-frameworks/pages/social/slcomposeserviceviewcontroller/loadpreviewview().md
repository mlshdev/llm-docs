> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/social/slcomposeserviceviewcontroller/loadpreviewview()

# loadPreviewView() (Swift)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+

Loads a view that displays a preview of the attachments in the extension context.

## Declaration

```swift
func loadPreviewView() -> UIView!
```

<a id="return-value"></a>

## Return Value

A view that can appropriately display a preview of the attachments in the context, or `nil` if a preview is unnecessary for the context.

<a id="Discussion"></a>

## Discussion

A preview view appears next to the text editing area in a compose view. A subclass can override this method to provide a custom preview view.

# loadPreviewView (Objective-C)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+

Loads a view that displays a preview of the attachments in the extension context.

## Declaration

```objectivec
- (UIView *) loadPreviewView;
```

<a id="return-value"></a>

## Return Value

A view that can appropriately display a preview of the attachments in the context, or `nil` if a preview is unnecessary for the context.

<a id="Discussion"></a>

## Discussion

A preview view appears next to the text editing area in a compose view. A subclass can override this method to provide a custom preview view.
