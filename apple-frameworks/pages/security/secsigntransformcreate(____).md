> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secsigntransformcreate(_:_:)](https://developer.apple.com/documentation/security/secsigntransformcreate(_:_:))

# SecSignTransformCreate(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Creates a signing transform object.

> SecTransform is no longer supported

## Declaration

```swift
func SecSignTransformCreate(_ key: SecKey, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> SecTransform?
```

## Parameters

- `key`: A [SecKey](seckey.md) with the private key used for signing.
- `error`: A pointer to a [CFError](../corefoundation/cferror.md). This pointer will be set if an error occurred. This value may be `NULL` if you do not want an error returned.

<a id="return-value"></a>

## Return Value

A pointer to a new transform or `NULL` on error. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this object’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

This function creates a transform which computes a cryptographic signature. The [kSecInputIsAttributeName](ksecinputisattributename.md) attribute defaults to [kSecInputIsPlainText](ksecinputisplaintext.md), and the [kSecDigestTypeAttribute](ksecdigesttypeattribute.md) and [kSecDigestLengthAttribute](ksecdigestlengthattribute.md) attributes default to something appropriate for the type of key you have supplied.

# SecSignTransformCreate (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Creates a signing transform object.

> SecTransform is no longer supported

## Declaration

```objectivec
SecTransformRefSecSignTransformCreate(SecKeyRef key, CFErrorRef*error);
```

## Parameters

- `key`: A [SecKeyRef](seckey.md) with the private key used for signing.
- `error`: A pointer to a [CFErrorRef](../corefoundation/cferror.md). This pointer will be set if an error occurred. This value may be `NULL` if you do not want an error returned.

<a id="return-value"></a>

## Return Value

A pointer to a new transform or `NULL` on error. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this object’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

This function creates a transform which computes a cryptographic signature. The [kSecInputIsAttributeName](ksecinputisattributename.md) attribute defaults to [kSecInputIsPlainText](ksecinputisplaintext.md), and the [kSecDigestTypeAttribute](ksecdigesttypeattribute.md) and [kSecDigestLengthAttribute](ksecdigestlengthattribute.md) attributes default to something appropriate for the type of key you have supplied.
