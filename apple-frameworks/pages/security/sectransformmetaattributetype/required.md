> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformmetaattributetype/required](https://developer.apple.com/documentation/security/sectransformmetaattributetype/required)

# SecTransformMetaAttributeType.required (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Indicates whether the attribute value is optional.

> SecTransform is no longer supported

## Declaration

```swift
case required
```

<a id="Discussion"></a>

## Discussion

Specifies if an attribute must have a non `NULL` value set or have an incoming connection before the transform starts to execute. This metadata has a default value of [true](https://developer.apple.com/documentation/swift/true) for the input attribute, but [false](https://developer.apple.com/documentation/swift/false) for all other attributes.

# kSecTransformMetaAttributeRequired (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Indicates whether the attribute value is optional.

> SecTransform is no longer supported

## Declaration

```objectivec
kSecTransformMetaAttributeRequired
```

<a id="Discussion"></a>

## Discussion

Specifies if an attribute must have a non `NULL` value set or have an incoming connection before the transform starts to execute. This metadata has a default value of [true](https://developer.apple.com/documentation/swift/true) for the input attribute, but [false](https://developer.apple.com/documentation/swift/false) for all other attributes.
