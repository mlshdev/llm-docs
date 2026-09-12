> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformattributeactionblock](https://developer.apple.com/documentation/security/sectransformattributeactionblock)

# SecTransformAttributeActionBlock (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** macOS 10.7+ (deprecated in 13.0)

A block used to override the default attribute handling for when an attribute is set.

> SecTransform is no longer supported

## Declaration

```swift
typealias SecTransformAttributeActionBlock = (SecTransformAttribute, CFTypeRef) -> Unmanaged<CFTypeRef>?
```

## Parameters

- `attribute`: The attribute whose default is being overridden or NULL if this is a generic notification override
- `value`: Proposed new value for the attribute.

<a id="return-value"></a>

## Return Value

The new value of the attribute if successful or a [CFError](../corefoundation/cferror.md) object on failure. If a transform needs to have a [CFError](../corefoundation/cferror.md) as the value of an attribute, then place the object in a container, such as a [CFArray](../corefoundation/cfarray.md) or [CFDictionary](../corefoundation/cfdictionary.md) object.

# SecTransformAttributeActionBlock (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** macOS 10.7+ (deprecated in 13.0)

A block used to override the default attribute handling for when an attribute is set.

> SecTransform is no longer supported

## Declaration

```objectivec
typedef const void *(^)(const void *, const void *) SecTransformAttributeActionBlock;
```

## Parameters

- `attribute`: The attribute whose default is being overridden or NULL if this is a generic notification override
- `value`: Proposed new value for the attribute.

<a id="return-value"></a>

## Return Value

The new value of the attribute if successful or a [CFErrorRef](../corefoundation/cferror.md) object on failure. If a transform needs to have a [CFErrorRef](../corefoundation/cferror.md) as the value of an attribute, then place the object in a container, such as a [CFArrayRef](../corefoundation/cfarray.md) or [CFDictionaryRef](../corefoundation/cfdictionary.md) object.
