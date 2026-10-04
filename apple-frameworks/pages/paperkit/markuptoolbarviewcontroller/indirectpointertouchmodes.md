> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paperkit/markuptoolbarviewcontroller/indirectpointertouchmodes

# indirectPointerTouchModes

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

The modes available for a user to select.

## Declaration

```swift
@MainActor @preconcurrency var indirectPointerTouchModes: [PaperMarkupViewController.TouchMode] { get set }
```

<a id="discussion"></a>

## Discussion

Default is `[.selection, .drawing]`

## See Also

### Managing touch modes

- [selectedIndirectPointerTouchMode](selectedindirectpointertouchmode.md): The currently selected pointer mode.
