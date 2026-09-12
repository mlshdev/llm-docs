> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1460911-axvaluegettype](https://developer.apple.com/documentation/applicationservices/1460911-axvaluegettype)

# AXValueGetType(\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.2+

## Declaration

```swift
func AXValueGetType(_ value: AXValue) -> AXValueType
```

## Parameters

- `value`:

<a id="discussion"></a>

## Discussion

Returns the structure type encoded in value. If the type is not recognized, it returns kAXValueIllegalType.

## See Also

### Miscellaneous

- [AXValueCreate(\_:\_:)](1459351-axvaluecreate.md)
- [AXValueGetTypeID()](1460780-axvaluegettypeid.md)
- [AXValueGetValue(\_:\_:\_:)](1462933-axvaluegetvalue.md)

# AXValueGetType (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.2+

## Declaration

```objectivec
AXValueType AXValueGetType(AXValueRef value);
```

## Parameters

- `value`:

<a id="discussion"></a>

## Discussion

Returns the structure type encoded in value. If the type is not recognized, it returns kAXValueIllegalType.

## See Also

### Miscellaneous

- [AXValueCreate](1459351-axvaluecreate.md)
- [AXValueGetTypeID](1460780-axvaluegettypeid.md)
- [AXValueGetValue](1462933-axvaluegetvalue.md)
