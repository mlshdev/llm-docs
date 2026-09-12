> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectransformerrormorethanoneoutput](https://developer.apple.com/documentation/security/ksectransformerrormorethanoneoutput)

# kSecTransformErrorMoreThanOneOutput (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A transform has an internal routing error that has caused multiple outputs instead of a single discrete output.

## Declaration

```swift
var kSecTransformErrorMoreThanOneOutput: CFIndex { get }
```

<a id="Discussion"></a>

## Discussion

This error occurs if [SecTransformExecute(\_:\_:)](sectransformexecute%28____%29.md) has already been called.

# kSecTransformErrorMoreThanOneOutput (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+ (deprecated in 13.0)

A transform has an internal routing error that has caused multiple outputs instead of a single discrete output.

## Declaration

```objectivec
kSecTransformErrorMoreThanOneOutput
```

<a id="Discussion"></a>

## Discussion

This error occurs if [SecTransformExecute](sectransformexecute%28____%29.md) has already been called.
