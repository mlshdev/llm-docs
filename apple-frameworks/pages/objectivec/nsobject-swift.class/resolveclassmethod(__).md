> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/resolveclassmethod(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/resolveclassmethod(_:))

# resolveClassMethod(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Dynamically provides an implementation for a given selector for a class method.

## Declaration

```swift
class func resolveClassMethod(_ sel: Selector!) -> Bool
```

## Parameters

- `sel`: The name of a selector to resolve.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the method was found and added to the receiver, otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

This method allows you to dynamically provide an implementation for a given selector. See [resolveInstanceMethod(\_:)](resolveinstancemethod%28__%29.md) for further discussion.

## See Also

### Dynamically Resolving Methods

- [resolveInstanceMethod(\_:)](resolveinstancemethod%28__%29.md): Dynamically provides an implementation for a given selector for an instance method.

# resolveClassMethod: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Dynamically provides an implementation for a given selector for a class method.

## Declaration

```objectivec
+ (BOOL) resolveClassMethod:(SEL) sel;
```

## Parameters

- `sel`: The name of a selector to resolve.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the method was found and added to the receiver, otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

This method allows you to dynamically provide an implementation for a given selector. See [resolveInstanceMethod:](resolveinstancemethod%28__%29.md) for further discussion.

## See Also

### Dynamically Resolving Methods

- [resolveInstanceMethod:](resolveinstancemethod%28__%29.md): Dynamically provides an implementation for a given selector for an instance method.
