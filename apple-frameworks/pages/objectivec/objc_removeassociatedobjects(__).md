> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_removeassociatedobjects(_:)](https://developer.apple.com/documentation/objectivec/objc_removeassociatedobjects(_:))

# objc_removeAssociatedObjects(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Removes all associations for a given object.

## Declaration

```swift
func objc_removeAssociatedObjects(_ object: Any)
```

## Parameters

- `object`: An object that maintains associated objects.

<a id="Discussion"></a>

## Discussion

The main purpose of this function is to make it easy to return an object to a “pristine state”. You should not use this function for general removal of associations from objects, since it also removes associations that other clients may have added to the object. Typically you should use [objc_setAssociatedObject(\_:\_:\_:\_:)](objc_setassociatedobject%28________%29.md) with a `nil` value to clear an association.

## See Also

### Associative References

- [objc_setAssociatedObject(\_:\_:\_:\_:)](objc_setassociatedobject%28________%29.md): Sets an associated value for a given object using a given key and association policy.
- [objc_getAssociatedObject(\_:\_:)](objc_getassociatedobject%28____%29.md): Returns the value associated with a given object for a given key.

# objc_removeAssociatedObjects (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Removes all associations for a given object.

## Declaration

```objectivec
extern void objc_removeAssociatedObjects(id object);
```

## Parameters

- `object`: An object that maintains associated objects.

<a id="Discussion"></a>

## Discussion

The main purpose of this function is to make it easy to return an object to a “pristine state”. You should not use this function for general removal of associations from objects, since it also removes associations that other clients may have added to the object. Typically you should use [objc_setAssociatedObject](objc_setassociatedobject%28________%29.md) with a `nil` value to clear an association.

## See Also

### Associative References

- [objc_setAssociatedObject](objc_setassociatedobject%28________%29.md): Sets an associated value for a given object using a given key and association policy.
- [objc_getAssociatedObject](objc_getassociatedobject%28____%29.md): Returns the value associated with a given object for a given key.
