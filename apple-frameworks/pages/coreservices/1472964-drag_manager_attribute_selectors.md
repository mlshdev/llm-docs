> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472964-drag_manager_attribute_selectors](https://developer.apple.com/documentation/coreservices/1472964-drag_manager_attribute_selectors)

# Drag Manager Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability information for the Drag Manager.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltDragMgrAttr](1472964-drag_manager_attribute_selectors/gestaltdragmgrattr.md): The Gestalt selector passed to determine what features of the Drag Manager are present. Passing the `gestaltDragMgrAttr` constant produces a 32-bit value whose bits you should test to determine what Drag Manager functionality is available.
- [gestaltDragMgrPresent](1472964-drag_manager_attribute_selectors/gestaltdragmgrpresent.md): If the bit specified by this mask is set, the Drag Manager functions are available.
- [gestaltDragMgrFloatingWind](1472964-drag_manager_attribute_selectors/gestaltdragmgrfloatingwind.md): If the bit specified by this mask is set, the Drag Manager floating window support functions are available.
- [gestaltPPCDragLibPresent](1472964-drag_manager_attribute_selectors/gestaltppcdraglibpresent.md): If the bit specified by this mask is set, the Drag Manager PPC Drag Library functions are available.
- [gestaltDragMgrHasImageSupport](1472964-drag_manager_attribute_selectors/gestaltdragmgrhasimagesupport.md): If the bit specified by this mask is set, the Drag Manager image support functions are available.
- [gestaltCanStartDragInFloatWindow](1472964-drag_manager_attribute_selectors/gestaltcanstartdraginfloatwindow.md): If the bit specified by this mask is set, the Drag Manager can start a drag in a floating window.
- [gestaltSetDragImageUpdates](1472964-drag_manager_attribute_selectors/gestaltsetdragimageupdates.md)
