> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1462933-axvaluegetvalue](https://developer.apple.com/documentation/applicationservices/1462933-axvaluegetvalue)

# AXValueGetValue(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.2+

## Declaration

```swift
func AXValueGetValue(_ value: AXValue, _ theType: AXValueType, _ valuePtr: UnsafeMutableRawPointer) -> Bool
```

## Parameters

- `value`:

<a id="discussion"></a>

## Discussion

Decodes the structure stored in value and copies it into valuePtr. If the structure stored in value is not the same as requested by theType, the function returns false.

## See Also

### Miscellaneous

- [AXValueCreate(\_:\_:)](1459351-axvaluecreate.md)
- [AXValueGetType(\_:)](1460911-axvaluegettype.md)
- [AXValueGetTypeID()](1460780-axvaluegettypeid.md)

# AXValueGetValue (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.2+

## Declaration

```objectivec
Boolean AXValueGetValue(AXValueRef value, AXValueType theType, void *valuePtr);
```

## Parameters

- `value`:

<a id="discussion"></a>

## Discussion

Decodes the structure stored in value and copies it into valuePtr. If the structure stored in value is not the same as requested by theType, the function returns false.

## See Also

### Miscellaneous

- [AXValueCreate](1459351-axvaluecreate.md)
- [AXValueGetType](1460911-axvaluegettype.md)
- [AXValueGetTypeID](1460780-axvaluegettypeid.md)
