> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:draggingsession:willbeginat:forrowswith:column:)

# browser(\_:draggingSession:willBeginAt:forRowsWith:column:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

## Declaration

```swift
@MainActor optional func browser(_ browser: NSBrowser, draggingSession session: NSDraggingSession, willBeginAt screenPoint: NSPoint, forRowsWith rowIndexes: IndexSet, column: Int)
```

# browser:draggingSession:willBeginAtPoint:forRowsWithIndexes:column: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

## Declaration

```objectivec
- (void) browser:(NSBrowser *) browser draggingSession:(NSDraggingSession *) session willBeginAtPoint:(NSPoint) screenPoint forRowsWithIndexes:(NSIndexSet *) rowIndexes column:(NSInteger) column;
```
