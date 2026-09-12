> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1645951-anonymous/kiofwmusthavegap63](https://developer.apple.com/documentation/kernel/1645951-anonymous/kiofwmusthavegap63)

# kIOFWMustHaveGap63

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIOFWMustHaveGap63 = (1 << 7)
```

<a id="discussion"></a>

## Discussion

Attempt to ensure the gap count is 63, when this device is on the bus. Gap 63 reduces bus performance significantly, so this flag should be used only when absolutely necessary. There is no guarentee Mac OS will succeed in forcing the gap count to 63.
