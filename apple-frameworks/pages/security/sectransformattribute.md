> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformattribute](https://developer.apple.com/documentation/security/sectransformattribute)

# SecTransformAttribute (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** macOS 10.7+ (deprecated in 13.0)

A direct reference to a security transform attribute.

> SecTransform is no longer supported

## Declaration

```swift
typealias SecTransformAttribute = CFTypeRef
```

<a id="Discussion"></a>

## Discussion

Using an attribute reference rather than referring to it by name, such as in calls to the [SecTransformCustomSetAttribute(\_:\_:\_:\_:)](sectransformcustomsetattribute%28________%29.md) function, speeds up the operation.

# SecTransformAttributeRef (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** macOS 10.7+ (deprecated in 13.0)

A direct reference to a security transform attribute.

> SecTransform is no longer supported

## Declaration

```objectivec
typedef CFTypeRef SecTransformAttributeRef;
```

<a id="Discussion"></a>

## Discussion

Using an attribute reference rather than referring to it by name, such as in calls to the [SecTransformCustomSetAttribute](sectransformcustomsetattribute%28________%29.md) function, speeds up the operation.
