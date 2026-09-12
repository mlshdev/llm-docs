> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472830-window_manager_attribute_selecto/gestaltwindowmgrattr](https://developer.apple.com/documentation/coreservices/1472830-window_manager_attribute_selecto/gestaltwindowmgrattr)

# gestaltWindowMgrAttr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
gestaltWindowMgrAttr = 'wind'
```

<a id="discussion"></a>

## Discussion

The `Gestalt` selector passed to determine what features of the Window Manager are present. This selector is available with Mac OS 8.5 and later. The `Gestalt` function produces a 32-bit value whose bits you should test to determine which Window Manager features are available.
