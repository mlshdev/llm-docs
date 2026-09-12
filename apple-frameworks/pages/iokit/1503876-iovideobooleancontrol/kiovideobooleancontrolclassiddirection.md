> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1503876-iovideobooleancontrol/kiovideobooleancontrolclassiddirection](https://developer.apple.com/documentation/iokit/1503876-iovideobooleancontrol/kiovideobooleancontrolclassiddirection)

# kIOVideoBooleanControlClassIDDirection

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 18.4+ · macOS 10.7+

## Declaration

```objectivec
kIOVideoBooleanControlClassIDDirection = 'dire'
```

<a id="discussion"></a>

## Discussion

A IOVideoBooleanControl where a true value means the element is operating in input mode, and false means the element is operating in output mode. This control is only needed for devices which can do input and output, but not at the same time.
