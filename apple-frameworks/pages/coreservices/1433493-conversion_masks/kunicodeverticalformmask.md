> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1433493-conversion_masks/kunicodeverticalformmask](https://developer.apple.com/documentation/coreservices/1433493-conversion_masks/kunicodeverticalformmask)

# kUnicodeVerticalFormMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
kUnicodeVerticalFormMask = 1L << kUnicodeVerticalFormBit
```

<a id="discussion"></a>

## Discussion

A mask for setting the vertical form control flag. The vertical form control flag tells the Unicode Converter how to map text elements for which there are both abstract and vertical presentation forms in the destination encoding. 

If set, the converter maps these text elements to their vertical forms, if they are available.
