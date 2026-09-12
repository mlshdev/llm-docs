> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformmetaattributetype/stream](https://developer.apple.com/documentation/security/sectransformmetaattributetype/stream)

# SecTransformMetaAttributeType.stream (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The attribute expects stream operation.

> SecTransform is no longer supported

## Declaration

```swift
case stream
```

<a id="Discussion"></a>

## Discussion

Specifies if the attribute should expect a series of values ending with a `NULL` to specify the end of the data stream. This metadata has a default value of [true](https://developer.apple.com/documentation/swift/true) for the input and output attributes, but is [false](https://developer.apple.com/documentation/swift/false) for all other attributes.

# kSecTransformMetaAttributeStream (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The attribute expects stream operation.

> SecTransform is no longer supported

## Declaration

```objectivec
kSecTransformMetaAttributeStream
```

<a id="Discussion"></a>

## Discussion

Specifies if the attribute should expect a series of values ending with a `NULL` to specify the end of the data stream. This metadata has a default value of [true](https://developer.apple.com/documentation/swift/true) for the input and output attributes, but is [false](https://developer.apple.com/documentation/swift/false) for all other attributes.
