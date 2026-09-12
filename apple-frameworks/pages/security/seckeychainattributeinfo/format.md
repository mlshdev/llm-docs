> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainattributeinfo/format](https://developer.apple.com/documentation/security/seckeychainattributeinfo/format)

# format (Swift)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A pointer to the first attribute format in the array.

## Declaration

```swift
var format: UnsafeMutablePointer<UInt32>?
```

<a id="Discussion"></a>

## Discussion

Attribute formats are of type `CSSM_DB_ATTRIBUTE_FORMAT` (`CSSM_DB_ATTRIBUTE_FORMAT_STRING`, for example), and are defined in the `cssmtype.h` header.

# format (Objective-C)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A pointer to the first attribute format in the array.

## Declaration

```objectivec
UInt32 * format;
```

<a id="Discussion"></a>

## Discussion

Attribute formats are of type `CSSM_DB_ATTRIBUTE_FORMAT` (`CSSM_DB_ATTRIBUTE_FORMAT_STRING`, for example), and are defined in the `cssmtype.h` header.
