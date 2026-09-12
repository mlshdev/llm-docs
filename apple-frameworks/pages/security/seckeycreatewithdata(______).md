> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeycreatewithdata(_:_:_:)](https://developer.apple.com/documentation/security/seckeycreatewithdata(_:_:_:))

# SecKeyCreateWithData(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Restores a key from an external representation of that key.

## Declaration

```swift
func SecKeyCreateWithData(_ keyData: CFData, _ attributes: CFDictionary, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> SecKey?
```

## Parameters

- `keyData`: Data representing the key. The format of the data depends on the type of key being created. See the description of the return value of the [SecKeyCopyExternalRepresentation(\_:\_:)](seckeycopyexternalrepresentation%28____%29.md) function for details.
- `attributes`: A dictionary containing attributes describing the key to be imported. This dictionary must include at least the following keys:

  - [kSecAttrKeyType](ksecattrkeytype.md)
  - [kSecAttrKeyClass](ksecattrkeyclass.md)
- `error`: The address of a [CFError](../corefoundation/cferror.md) object. If an error occurs, this is set to point at an error instance that describes the failure.

<a id="return-value"></a>

## Return Value

The restored key or `NULL` on failure. In Objective-C, call [CFRelease](../corefoundation/cfrelease.md) to free the key’s memory when you are done with it.

## Mentioned In

- [Storing Keys as Data](storing-keys-as-data.md)

# SecKeyCreateWithData (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Restores a key from an external representation of that key.

## Declaration

```objectivec
SecKeyRefSecKeyCreateWithData(CFDataRef keyData, CFDictionaryRef attributes, CFErrorRef*error);
```

## Parameters

- `keyData`: Data representing the key. The format of the data depends on the type of key being created. See the description of the return value of the [SecKeyCopyExternalRepresentation](seckeycopyexternalrepresentation%28____%29.md) function for details.
- `attributes`: A dictionary containing attributes describing the key to be imported. This dictionary must include at least the following keys:

  - [kSecAttrKeyType](ksecattrkeytype.md)
  - [kSecAttrKeyClass](ksecattrkeyclass.md)
- `error`: The address of a [CFErrorRef](../corefoundation/cferror.md) object. If an error occurs, this is set to point at an error instance that describes the failure.

<a id="return-value"></a>

## Return Value

The restored key or `NULL` on failure. In Objective-C, call [CFRelease](../corefoundation/cfrelease.md) to free the key’s memory when you are done with it.

## Mentioned In

- [Storing Keys as Data](storing-keys-as-data.md)
