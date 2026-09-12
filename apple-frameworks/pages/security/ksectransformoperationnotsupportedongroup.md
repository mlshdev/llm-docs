> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectransformoperationnotsupportedongroup](https://developer.apple.com/documentation/security/ksectransformoperationnotsupportedongroup)

# kSecTransformOperationNotSupportedOnGroup (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An illegal action on a group transform has occurred.

## Declaration

```swift
var kSecTransformOperationNotSupportedOnGroup: CFIndex { get }
```

<a id="Discussion"></a>

## Discussion

This might happen, for example, if you call [SecTransformSetAttribute(\_:\_:\_:\_:)](sectransformsetattribute%28________%29.md) on a group.

# kSecTransformOperationNotSupportedOnGroup (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+ (deprecated in 13.0)

An illegal action on a group transform has occurred.

## Declaration

```objectivec
kSecTransformOperationNotSupportedOnGroup
```

<a id="Discussion"></a>

## Discussion

This might happen, for example, if you call [SecTransformSetAttribute](sectransformsetattribute%28________%29.md) on a group.
