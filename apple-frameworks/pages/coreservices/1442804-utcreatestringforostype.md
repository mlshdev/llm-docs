> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1442804-utcreatestringforostype](https://developer.apple.com/documentation/coreservices/1442804-utcreatestringforostype)

# UTCreateStringForOSType(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 12.0)

Encodes an `OSType` into a string suitable for use as a tag argument.

## Declaration

```swift
func UTCreateStringForOSType(_ inOSType: OSType) -> Unmanaged<CFString>
```

## Parameters

- `inOSType`: The `OSType` to convert.

<a id="return_value"></a>

## Return Value

A string that encodes the OSType.

<a id="discussion"></a>

## Discussion

The UTI functions assume that all alternate identifier tags can be represented as Core Foundation strings. OSTypes are integer-based rather than string-based, so to pass an OSType into a UTI function, you must call this function to convert it to a string.

## See Also

### Related Documentation

- [UTGetOSTypeFromString(\_:)](1450472-utgetostypefromstring.md): Deprecated. Decodes a tag string into an OSType.

# UTCreateStringForOSType (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 12.0)

Encodes an `OSType` into a string suitable for use as a tag argument.

## Declaration

```objectivec
CFStringRef UTCreateStringForOSType(OSType inOSType);
```

## Parameters

- `inOSType`: The `OSType` to convert.

<a id="return_value"></a>

## Return Value

A string that encodes the OSType.

<a id="discussion"></a>

## Discussion

The UTI functions assume that all alternate identifier tags can be represented as Core Foundation strings. OSTypes are integer-based rather than string-based, so to pass an OSType into a UTI function, you must call this function to convert it to a string.

## See Also

### Related Documentation

- [UTGetOSTypeFromString](1450472-utgetostypefromstring.md): Deprecated. Decodes a tag string into an OSType.
