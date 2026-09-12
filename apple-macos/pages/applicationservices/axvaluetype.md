> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/axvaluetype](https://developer.apple.com/documentation/applicationservices/axvaluetype)

# AXValueType (Swift)

**Framework:** Application Services  
**Kind:** Enumeration  
**Availability:** macOS 10.2+

## Declaration

```swift
enum AXValueType : UInt32, @unchecked Sendable
```

<a id="overview"></a>

## Overview

These are AXValueType wrappers for other structures. You must use the AXValueCreate and AXValueGetValue functions to convert between the wrapped structure and the native structure.

## Topics

### Constants

- [kAXValueCGPointType](axvaluetype/kaxvaluecgpointtype.md)
- [kAXValueCGSizeType](axvaluetype/kaxvaluecgsizetype.md)
- [kAXValueCGRectType](axvaluetype/kaxvaluecgrecttype.md)
- [kAXValueCFRangeType](axvaluetype/kaxvaluecfrangetype.md)
- [kAXValueAXErrorType](axvaluetype/kaxvalueaxerrortype.md)
- [kAXValueIllegalType](axvaluetype/kaxvalueillegaltype.md)

### Enumeration Cases

- [AXValueType.axError](axvaluetype/axerror.md)
- [AXValueType.cfRange](axvaluetype/cfrange.md)
- [AXValueType.cgPoint](axvaluetype/cgpoint.md)
- [AXValueType.cgRect](axvaluetype/cgrect.md)
- [AXValueType.cgSize](axvaluetype/cgsize.md)
- [AXValueType.illegal](axvaluetype/illegal.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# AXValueType (Objective-C)

**Framework:** Application Services  
**Kind:** Enumeration  
**Availability:** macOS 10.2+

## Declaration

```objectivec
typedef enum AXValueType : UInt32 {
    ...
} AXValueType;
```

<a id="overview"></a>

## Overview

These are AXValueType wrappers for other structures. You must use the AXValueCreate and AXValueGetValue functions to convert between the wrapped structure and the native structure.

## Topics

### Constants

- [kAXValueCGPointType](axvaluetype/kaxvaluecgpointtype.md)
- [kAXValueCGSizeType](axvaluetype/kaxvaluecgsizetype.md)
- [kAXValueCGRectType](axvaluetype/kaxvaluecgrecttype.md)
- [kAXValueCFRangeType](axvaluetype/kaxvaluecfrangetype.md)
- [kAXValueAXErrorType](axvaluetype/kaxvalueaxerrortype.md)
- [kAXValueIllegalType](axvaluetype/kaxvalueillegaltype.md)

### Enumeration Cases

- [kAXValueTypeAXError](axvaluetype/kaxvaluetypeaxerror.md)
- [kAXValueTypeCFRange](axvaluetype/kaxvaluetypecfrange.md)
- [kAXValueTypeCGPoint](axvaluetype/kaxvaluetypecgpoint.md)
- [kAXValueTypeCGRect](axvaluetype/kaxvaluetypecgrect.md)
- [kAXValueTypeCGSize](axvaluetype/kaxvaluetypecgsize.md)
- [kAXValueTypeIllegal](axvaluetype/kaxvaluetypeillegal.md)
