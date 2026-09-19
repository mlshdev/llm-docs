> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiprintpagerenderer/prepare(fordrawingpages:)

# prepare(forDrawingPages:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Prepares the renderer for drawing a range of pages.

## Declaration

```swift
func prepare(forDrawingPages range: NSRange)
```

## Parameters

- `range`: A range of pages.

<a id="Discussion"></a>

## Discussion

UIKit calls this method before it requests drawing for a range of pages. You can optionally override this method to perform setup tasks. The default implementation does nothing.

# prepareForDrawingPages: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Prepares the renderer for drawing a range of pages.

## Declaration

```objectivec
- (void) prepareForDrawingPages:(NSRange) range;
```

## Parameters

- `range`: A range of pages.

<a id="Discussion"></a>

## Discussion

UIKit calls this method before it requests drawing for a range of pages. You can optionally override this method to perform setup tasks. The default implementation does nothing.
