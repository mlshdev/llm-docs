> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paperkit/markuptoolbarviewcontroller/selectedindirectpointertouchmode

# selectedIndirectPointerTouchMode

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

The currently selected pointer mode.

## Declaration

```swift
@MainActor @preconcurrency var selectedIndirectPointerTouchMode: PaperMarkupViewController.TouchMode { get set }
```

<a id="discussion"></a>

## Discussion

Default is `.selection`

## See Also

### Managing touch modes

- [indirectPointerTouchModes](indirectpointertouchmodes.md): The modes available for a user to select.
