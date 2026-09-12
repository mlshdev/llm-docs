> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectransformerrorinvalidinput](https://developer.apple.com/documentation/security/ksectransformerrorinvalidinput)

# kSecTransformErrorInvalidInput (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The input set on a transform is invalid.

## Declaration

```swift
var kSecTransformErrorInvalidInput: CFIndex { get }
```

<a id="Discussion"></a>

## Discussion

This can occur if the data set for an attribute does not meet certain requirements such as correct key usage for signing data.

# kSecTransformErrorInvalidInput (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The input set on a transform is invalid.

## Declaration

```objectivec
kSecTransformErrorInvalidInput
```

<a id="Discussion"></a>

## Discussion

This can occur if the data set for an attribute does not meet certain requirements such as correct key usage for signing data.
