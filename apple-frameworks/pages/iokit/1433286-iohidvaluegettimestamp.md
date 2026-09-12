> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1433286-iohidvaluegettimestamp](https://developer.apple.com/documentation/iokit/1433286-iohidvaluegettimestamp)

# IOHIDValueGetTimeStamp

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

Returns the timestamp value contained in this IOHIDValueRef.

## Declaration

```objectivec
uint64_t IOHIDValueGetTimeStamp(IOHIDValueRef value);
```

## Parameters

- `value`: The value to be queried. If this parameter is not a valid IOHIDValueRef, the behavior is undefined.

<a id="return_value"></a>

## Return Value

Returns a uint64_t representing the timestamp of this value.

<a id="discussion"></a>

## Discussion

The timestamp value returned represents OS AbsoluteTime, not CFAbsoluteTime.

## See Also

### Miscellaneous

- [IOHIDValueCreateWithBytes](1433290-iohidvaluecreatewithbytes.md): Creates a new element value using byte data.
- [IOHIDValueCreateWithBytesNoCopy](1433287-iohidvaluecreatewithbytesnocopy.md): Creates a new element value using byte data without performing a copy.
- [IOHIDValueCreateWithIntegerValue](1433294-iohidvaluecreatewithintegervalue.md): Creates a new element value using an integer value.
- [IOHIDValueGetBytePtr](1433292-iohidvaluegetbyteptr.md): Returns a byte pointer to the value contained in this IOHIDValueRef.
- [IOHIDValueGetElement](1433285-iohidvaluegetelement.md): Returns the element value associated with this IOHIDValueRef.
- [IOHIDValueGetIntegerValue](1433289-iohidvaluegetintegervalue.md): Returns an integer representaion of the value contained in this IOHIDValueRef.
- [IOHIDValueGetLength](1433291-iohidvaluegetlength.md): Returns the size, in bytes, of the value contained in this IOHIDValueRef.
- [IOHIDValueGetScaledValue](1433288-iohidvaluegetscaledvalue.md): Returns an scaled representaion of the value contained in this IOHIDValueRef based on the scale type.
- [IOHIDValueGetTypeID](1433293-iohidvaluegettypeid.md): Returns the type identifier of all IOHIDValue instances.
