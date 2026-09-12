> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webscriptobject/throwexception(_:)](https://developer.apple.com/documentation/webkit/webscriptobject/throwexception(_:))

# throwException(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Raises an exception in the current script execution context.

## Declaration

```swift
class func throwException(_ exceptionMessage: String!) -> Bool
```

## Parameters

- `exceptionMessage`: The exception message.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Raising exceptions

- [setException(\_:)](setexception%28__%29.md): Deprecated. Raises a scripting environment exception in the context of the current object.

# throwException: (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Raises an exception in the current script execution context.

## Declaration

```objectivec
+ (BOOL) throwException:(NSString *) exceptionMessage;
```

## Parameters

- `exceptionMessage`: The exception message.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Raising exceptions

- [setException:](setexception%28__%29.md): Deprecated. Raises a scripting environment exception in the context of the current object.
