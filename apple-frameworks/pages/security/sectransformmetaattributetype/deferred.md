> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformmetaattributetype/deferred](https://developer.apple.com/documentation/security/sectransformmetaattributetype/deferred)

# SecTransformMetaAttributeType.deferred (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The attribute defers notifications.

> SecTransform is no longer supported

## Declaration

```swift
case deferred
```

<a id="Discussion"></a>

## Discussion

Determines if the AttributeSetNotification notification or the ProcessData blocks are deferred until [SecTransformExecute(\_:\_:)](../sectransformexecute%28____%29.md) is called. This metadata value has a default value of [true](https://developer.apple.com/documentation/swift/true) for the input attribute but is [false](https://developer.apple.com/documentation/swift/false) for all other attributes.

# kSecTransformMetaAttributeDeferred (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The attribute defers notifications.

> SecTransform is no longer supported

## Declaration

```objectivec
kSecTransformMetaAttributeDeferred
```

<a id="Discussion"></a>

## Discussion

Determines if the AttributeSetNotification notification or the ProcessData blocks are deferred until [SecTransformExecute](../sectransformexecute%28____%29.md) is called. This metadata value has a default value of [true](https://developer.apple.com/documentation/swift/true) for the input attribute but is [false](https://developer.apple.com/documentation/swift/false) for all other attributes.
