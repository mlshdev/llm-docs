> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1510389-nodeflags/kiofwmusthavegap63](https://developer.apple.com/documentation/iokit/1510389-nodeflags/kiofwmusthavegap63)

# kIOFWMustHaveGap63

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

## Declaration

```objectivec
kIOFWMustHaveGap63 = (1 << 7)
```

<a id="discussion"></a>

## Discussion

Attempt to ensure the gap count is 63, when this device is on the bus. Gap 63 reduces bus performance significantly, so this flag should be used only when absolutely necessary. There is no guarentee Mac OS will succeed in forcing the gap count to 63.
