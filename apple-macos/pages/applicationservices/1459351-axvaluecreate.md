> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1459351-axvaluecreate](https://developer.apple.com/documentation/applicationservices/1459351-axvaluecreate)

# AXValueCreate(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.2+

## Declaration

```swift
func AXValueCreate(_ theType: AXValueType, _ valuePtr: UnsafeRawPointer) -> AXValue?
```

## Parameters

- `theType`:
- `valuePtr`:

<a id="discussion"></a>

## Discussion

Encodes a structure pointed to by valuePtr into a CFTypeRef.

## See Also

### Miscellaneous

- [AXValueGetType(\_:)](1460911-axvaluegettype.md)
- [AXValueGetTypeID()](1460780-axvaluegettypeid.md)
- [AXValueGetValue(\_:\_:\_:)](1462933-axvaluegetvalue.md)

# AXValueCreate (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.2+

## Declaration

```objectivec
AXValueRef AXValueCreate(AXValueType theType, const void *valuePtr);
```

## Parameters

- `theType`:
- `valuePtr`:

<a id="discussion"></a>

## Discussion

Encodes a structure pointed to by valuePtr into a CFTypeRef.

## See Also

### Miscellaneous

- [AXValueGetType](1460911-axvaluegettype.md)
- [AXValueGetTypeID](1460780-axvaluegettypeid.md)
- [AXValueGetValue](1462933-axvaluegetvalue.md)
