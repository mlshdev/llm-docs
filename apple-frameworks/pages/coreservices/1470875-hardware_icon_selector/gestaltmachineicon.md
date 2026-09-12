> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1470875-hardware_icon_selector/gestaltmachineicon](https://developer.apple.com/documentation/coreservices/1470875-hardware_icon_selector/gestaltmachineicon)

# gestaltMachineIcon

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
gestaltMachineIcon = 'micn'
```

<a id="discussion"></a>

## Discussion

The selector  you pass to the `Gestalt` function to determine the icon family resource ID for the current type of Macintosh.

Never infer the existence of certain hardware or software features from the responses that `Gestalt` returns when you pass it this selector.
