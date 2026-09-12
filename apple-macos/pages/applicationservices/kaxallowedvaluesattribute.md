> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kaxallowedvaluesattribute](https://developer.apple.com/documentation/applicationservices/kaxallowedvaluesattribute)

# kAXAllowedValuesAttribute (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

## Declaration

```swift
var kAXAllowedValuesAttribute: String { get }
```

<a id="discussion"></a>

## Discussion

An array of the allowed values for an accessibility object. This attribute indicates the subset of values to which an accessibility object can be set. For example, a slider control displays a large range of values, but the accessibility object representing the slider can be set to only a few specific values within that range. This attribute is used only in conjunction with the `AXValue` attribute.

# kAXAllowedValuesAttribute (Objective-C)

**Framework:** Application Services  
**Kind:** Macro  
**Availability:** macOS 10.4+

## Declaration

```objectivec
#define kAXAllowedValuesAttribute
```

<a id="discussion"></a>

## Discussion

An array of the allowed values for an accessibility object. This attribute indicates the subset of values to which an accessibility object can be set. For example, a slider control displays a large range of values, but the accessibility object representing the slider can be set to only a few specific values within that range. This attribute is used only in conjunction with the `AXValue` attribute.
