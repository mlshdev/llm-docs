> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/ksectransformerrorinvalidinputdictionary

# kSecTransformErrorInvalidInputDictionary (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary used to import a transform has invalid data.

## Declaration

```swift
var kSecTransformErrorInvalidInputDictionary: CFIndex { get }
```

<a id="Discussion"></a>

## Discussion

This error may occur when trying to import a transform from a data representation using the [SecTransformCreateFromExternalRepresentation(\_:\_:)](sectransformcreatefromexternalrepresentation%28____%29.md) function.

# kSecTransformErrorInvalidInputDictionary (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+ (deprecated in 13.0)

A dictionary used to import a transform has invalid data.

## Declaration

```objectivec
kSecTransformErrorInvalidInputDictionary
```

<a id="Discussion"></a>

## Discussion

This error may occur when trying to import a transform from a data representation using the [SecTransformCreateFromExternalRepresentation](sectransformcreatefromexternalrepresentation%28____%29.md) function.
