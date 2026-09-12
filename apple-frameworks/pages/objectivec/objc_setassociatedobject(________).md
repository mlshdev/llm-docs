> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_setassociatedobject(_:_:_:_:)](https://developer.apple.com/documentation/objectivec/objc_setassociatedobject(_:_:_:_:))

# objc_setAssociatedObject(\_:\_:\_:\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Sets an associated value for a given object using a given key and association policy.

## Declaration

```swift
func objc_setAssociatedObject(_ object: Any, _ key: UnsafeRawPointer, _ value: Any?, _ policy: objc_AssociationPolicy)
```

## Parameters

- `object`: The source object for the association.
- `key`: The key for the association.
- `value`: The value to associate with the key `key` for `object`. Pass `nil` to clear an existing association.
- `policy`: The policy for the association. For possible values, see [objc_AssociationPolicy](objc_associationpolicy.md).

## See Also

### Associative References

- [objc_getAssociatedObject(\_:\_:)](objc_getassociatedobject%28____%29.md): Returns the value associated with a given object for a given key.
- [objc_removeAssociatedObjects(\_:)](objc_removeassociatedobjects%28__%29.md): Removes all associations for a given object.

# objc_setAssociatedObject (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Sets an associated value for a given object using a given key and association policy.

## Declaration

```objectivec
extern void objc_setAssociatedObject(id object, const void *key, id value, objc_AssociationPolicy policy);
```

## Parameters

- `object`: The source object for the association.
- `key`: The key for the association.
- `value`: The value to associate with the key `key` for `object`. Pass `nil` to clear an existing association.
- `policy`: The policy for the association. For possible values, see [objc_AssociationPolicy](objc_associationpolicy.md).

## See Also

### Associative References

- [objc_getAssociatedObject](objc_getassociatedobject%28____%29.md): Returns the value associated with a given object for a given key.
- [objc_removeAssociatedObjects](objc_removeassociatedobjects%28__%29.md): Removes all associations for a given object.
