> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1646204-anonymous/kiovideobooleancontrolclassiddirection](https://developer.apple.com/documentation/kernel/1646204-anonymous/kiovideobooleancontrolclassiddirection)

# kIOVideoBooleanControlClassIDDirection

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIOVideoBooleanControlClassIDDirection = 'dire'
```

<a id="discussion"></a>

## Discussion

A IOVideoBooleanControl where a true value means the element is operating in input mode, and false means the element is operating in output mode. This control is only needed for devices which can do input and output, but not at the same time.
