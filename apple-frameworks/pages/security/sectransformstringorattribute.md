> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformstringorattribute](https://developer.apple.com/documentation/security/sectransformstringorattribute)

# SecTransformStringOrAttribute (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** macOS 10.7+ (deprecated in 13.0)

A type that may be either a string or an attribute reference.

> SecTransform is no longer supported

## Declaration

```swift
typealias SecTransformStringOrAttribute = CFTypeRef
```

<a id="Discussion"></a>

## Discussion

Use a value of this type in place of either a [CFString](../corefoundation/cfstring.md) or a [SecTransformAttribute](sectransformattribute.md) when referring to transform attributes, such as with the `attribute` parameter in calls to the [SecTransformCustomSetAttribute(\_:\_:\_:\_:)](sectransformcustomsetattribute%28________%29.md)  and [SecTransformCustomGetAttribute(\_:\_:\_:)](sectransformcustomgetattribute%28______%29.md) functions. When using a name, see [Transform Attributes](transform-attributes.md) for a list of valid key names.

# SecTransformStringOrAttributeRef (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** macOS 10.7+ (deprecated in 13.0)

A type that may be either a string or an attribute reference.

> SecTransform is no longer supported

## Declaration

```objectivec
typedef CFTypeRef SecTransformStringOrAttributeRef;
```

<a id="Discussion"></a>

## Discussion

Use a value of this type in place of either a [CFStringRef](../corefoundation/cfstring.md) or a [SecTransformAttributeRef](sectransformattribute.md) when referring to transform attributes, such as with the `attribute` parameter in calls to the [SecTransformCustomSetAttribute](sectransformcustomsetattribute%28________%29.md)  and [SecTransformCustomGetAttribute](sectransformcustomgetattribute%28______%29.md) functions. When using a name, see [Transform Attributes](transform-attributes.md) for a list of valid key names.
