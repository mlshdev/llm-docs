> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1472964-drag_manager_attribute_selectors/gestaltdragmgrattr

# gestaltDragMgrAttr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

The Gestalt selector passed to determine what features of the Drag Manager are present. Passing the `gestaltDragMgrAttr` constant produces a 32-bit value whose bits you should test to determine what Drag Manager functionality is available.

## Declaration

```objectivec
gestaltDragMgrAttr = 'drag'
```
