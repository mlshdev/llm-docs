> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformmetaattributetype](https://developer.apple.com/documentation/security/sectransformmetaattributetype)

# SecTransformMetaAttributeType (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The keys that describe the metadata attributes of transform attributes.

> SecTransform is no longer supported

## Declaration

```swift
enum SecTransformMetaAttributeType
```

<a id="overview"></a>

## Overview

Use one of these values as the `type` parameter in a call to the [SecTransformCustomSetAttribute(\_:\_:\_:\_:)](sectransformcustomsetattribute%28________%29.md) or [SecTransformCustomGetAttribute(\_:\_:\_:)](sectransformcustomgetattribute%28______%29.md) function. These values allow you to access not only the value of an attribute, as you would do directly with calls the [SecTransformSetAttribute(\_:\_:\_:\_:)](sectransformsetattribute%28________%29.md) or [SecTransformGetAttribute(\_:\_:)](sectransformgetattribute%28____%29.md) function, but also the metadata associated with that attribute, such as the name of an attribute, or whether it is required to have a value.

## Topics

### Constants

- [SecTransformMetaAttributeType.canCycle](sectransformmetaattributetype/cancycle.md): Deprecated. The transform allows cyclic behavior.
- [SecTransformMetaAttributeType.deferred](sectransformmetaattributetype/deferred.md): Deprecated. The attribute defers notifications.
- [SecTransformMetaAttributeType.externalize](sectransformmetaattributetype/externalize.md): Deprecated. The attribute is exportable.
- [SecTransformMetaAttributeType.hasInboundConnection](sectransformmetaattributetype/hasinboundconnection.md): Deprecated. The attribute has an inbound connection.
- [SecTransformMetaAttributeType.hasOutboundConnections](sectransformmetaattributetype/hasoutboundconnections.md): Deprecated. The attribute has an outbound connection.
- [SecTransformMetaAttributeType.name](sectransformmetaattributetype/name.md): Deprecated. The name of the attribute.
- [SecTransformMetaAttributeType.ref](sectransformmetaattributetype/ref.md): Deprecated. A direct reference to an attribute’s value.
- [SecTransformMetaAttributeType.required](sectransformmetaattributetype/required.md): Deprecated. Indicates whether the attribute value is optional.
- [SecTransformMetaAttributeType.requiresOutboundConnection](sectransformmetaattributetype/requiresoutboundconnection.md): Deprecated. The attribute requires an outbound connection.
- [SecTransformMetaAttributeType.stream](sectransformmetaattributetype/stream.md): Deprecated. The attribute expects stream operation.
- [SecTransformMetaAttributeType.value](sectransformmetaattributetype/value.md): Deprecated. The actual value of the attribute.

### Initializers

- [init(rawValue:)](sectransformmetaattributetype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SecTransformMetaAttributeType (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The keys that describe the metadata attributes of transform attributes.

> SecTransform is no longer supported

## Declaration

```objectivec
enum SecTransformMetaAttributeType : CFIndex;
```

<a id="overview"></a>

## Overview

Use one of these values as the `type` parameter in a call to the [SecTransformCustomSetAttribute](sectransformcustomsetattribute%28________%29.md) or [SecTransformCustomGetAttribute](sectransformcustomgetattribute%28______%29.md) function. These values allow you to access not only the value of an attribute, as you would do directly with calls the [SecTransformSetAttribute](sectransformsetattribute%28________%29.md) or [SecTransformGetAttribute](sectransformgetattribute%28____%29.md) function, but also the metadata associated with that attribute, such as the name of an attribute, or whether it is required to have a value.

## Topics

### Constants

- [kSecTransformMetaAttributeCanCycle](sectransformmetaattributetype/cancycle.md): Deprecated. The transform allows cyclic behavior.
- [kSecTransformMetaAttributeDeferred](sectransformmetaattributetype/deferred.md): Deprecated. The attribute defers notifications.
- [kSecTransformMetaAttributeExternalize](sectransformmetaattributetype/externalize.md): Deprecated. The attribute is exportable.
- [kSecTransformMetaAttributeHasInboundConnection](sectransformmetaattributetype/hasinboundconnection.md): Deprecated. The attribute has an inbound connection.
- [kSecTransformMetaAttributeHasOutboundConnections](sectransformmetaattributetype/hasoutboundconnections.md): Deprecated. The attribute has an outbound connection.
- [kSecTransformMetaAttributeName](sectransformmetaattributetype/name.md): Deprecated. The name of the attribute.
- [kSecTransformMetaAttributeRef](sectransformmetaattributetype/ref.md): Deprecated. A direct reference to an attribute’s value.
- [kSecTransformMetaAttributeRequired](sectransformmetaattributetype/required.md): Deprecated. Indicates whether the attribute value is optional.
- [kSecTransformMetaAttributeRequiresOutboundConnection](sectransformmetaattributetype/requiresoutboundconnection.md): Deprecated. The attribute requires an outbound connection.
- [kSecTransformMetaAttributeStream](sectransformmetaattributetype/stream.md): Deprecated. The attribute expects stream operation.
- [kSecTransformMetaAttributeValue](sectransformmetaattributetype/value.md): Deprecated. The actual value of the attribute.
