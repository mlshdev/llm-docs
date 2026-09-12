> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471646-memory_attribute_selectors/gestaltosattr](https://developer.apple.com/documentation/coreservices/1471646-memory_attribute_selectors/gestaltosattr)

# gestaltOSAttr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
gestaltOSAttr = 'os  '
```

<a id="discussion"></a>

## Discussion

The `Gestalt` selector you pass to determine general Operating System attributes, such as whether temporary memory handles are real handles. The low-order bits of the response parameter are interpreted as bit flags. A flag is set to 1 to indicate that the corresponding feature is available. Currently, the following bits are significant.
