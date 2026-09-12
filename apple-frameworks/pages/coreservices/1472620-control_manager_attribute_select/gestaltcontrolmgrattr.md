> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472620-control_manager_attribute_select/gestaltcontrolmgrattr](https://developer.apple.com/documentation/coreservices/1472620-control_manager_attribute_select/gestaltcontrolmgrattr)

# gestaltControlMgrAttr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
gestaltControlMgrAttr = 'cntl'
```

<a id="discussion"></a>

## Discussion

The `Gestalt` selector passed to determine what features of the Control Manager are present. This selector is available with Mac OS 8.5 and later. The `Gestalt` function produces a 32-bit value whose bits you should test to determine what Control Manager functionality is available.
