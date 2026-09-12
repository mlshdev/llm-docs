> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1450472-utgetostypefromstring](https://developer.apple.com/documentation/coreservices/1450472-utgetostypefromstring)

# UTGetOSTypeFromString(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 12.0)

Decodes a tag string into an OSType.

## Declaration

```swift
func UTGetOSTypeFromString(_ inString: CFString) -> OSType
```

## Parameters

- `inString`: A string that encodes an OSType.

<a id="return_value"></a>

## Return Value

The OSType that was encoded in the string.

<a id="discussion"></a>

## Discussion

You call this function to convert an OSType string returned by a UTI function back into the integer-based OSType.

## See Also

### Related Documentation

- [UTCreateStringForOSType(\_:)](1442804-utcreatestringforostype.md): Deprecated. Encodes an `OSType` into a string suitable for use as a tag argument.

# UTGetOSTypeFromString (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 12.0)

Decodes a tag string into an OSType.

## Declaration

```objectivec
OSType UTGetOSTypeFromString(CFStringRef inString);
```

## Parameters

- `inString`: A string that encodes an OSType.

<a id="return_value"></a>

## Return Value

The OSType that was encoded in the string.

<a id="discussion"></a>

## Discussion

You call this function to convert an OSType string returned by a UTI function back into the integer-based OSType.

## See Also

### Related Documentation

- [UTCreateStringForOSType](1442804-utcreatestringforostype.md): Deprecated. Encodes an `OSType` into a string suitable for use as a tag argument.
