> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicalendarviewdecoration/initwithcustomviewprovider:

# initWithCustomViewProvider:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates a new calendar view decoration with a custom view, using your view provider.

## Declaration

```objectivec
- (instancetype) initWithCustomViewProvider:(UIView * (^)()) customViewProvider;
```

## Parameters

- `customViewProvider`: A block of code that creates and returns a calendar view decoration.

<a id="return-value"></a>

## Return Value

A calendar view decoration.

<a id="Discussion"></a>

## Discussion

Create and return a decoration view for the calendar view in your `customViewProvider` block. The calendar view will clip the decoration view to its parent’s bounds. The decoration view may not have any interactions.

## See Also

### Creating a Custom Decoration View

- [decorationWithCustomViewProvider:](../uicalendarview/decoration/customview%28__%29.md): Creates a new calendar view decoration with a custom view, using your view provider.
