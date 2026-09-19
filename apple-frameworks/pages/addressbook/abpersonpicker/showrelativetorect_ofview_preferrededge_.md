> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/addressbook/abpersonpicker/showrelativetorect:ofview:preferrededge:

# showRelativeToRect:ofView:preferredEdge:

**Interface language:** Objective-C

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Shows the picker in a popover relative to a view.

## Declaration

```objectivec
- (void) showRelativeToRect:(NSRect) positioningRect ofView:(NSView *) positioningView preferredEdge:(NSRectEdge) preferredEdge;
```

## Parameters

- `positioningRect`: The rectangle that the picker is shown relative to.
- `positioningView`: The view that contains the position rectangle.
- `preferredEdge`: The preferred edge from which the picker appears.

## See Also

### Showing and Closing the Picker

- [close](close.md): Closes the picker.
