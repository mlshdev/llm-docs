> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471588-atsui_attribute_selectors/gestaltatsufeatures](https://developer.apple.com/documentation/coreservices/1471588-atsui_attribute_selectors/gestaltatsufeatures)

# gestaltATSUFeatures

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
gestaltATSUFeatures = 'uisf'
```

<a id="discussion"></a>

## Discussion

Specifies the ATSUI features available on the user’s system. You pass this selector to the `Gestalt` function. On return, the `Gestalt` function passes back a value that represents the features available in the version of ATSUI installed on the user’s system.
