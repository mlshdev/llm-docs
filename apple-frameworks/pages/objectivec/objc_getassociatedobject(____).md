> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_getassociatedobject(_:_:)](https://developer.apple.com/documentation/objectivec/objc_getassociatedobject(_:_:))

# objc_getAssociatedObject(\_:\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the value associated with a given object for a given key.

## Declaration

```swift
func objc_getAssociatedObject(_ object: Any, _ key: UnsafeRawPointer) -> Any?
```

## Parameters

- `object`: The source object for the association.
- `key`: The key for the association.

<a id="return-value"></a>

## Return Value

The value associated with the key `key` for `object`.

## See Also

### Associative References

- [objc_setAssociatedObject(\_:\_:\_:\_:)](objc_setassociatedobject%28________%29.md): Sets an associated value for a given object using a given key and association policy.
- [objc_removeAssociatedObjects(\_:)](objc_removeassociatedobjects%28__%29.md): Removes all associations for a given object.

# objc_getAssociatedObject (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the value associated with a given object for a given key.

## Declaration

```objectivec
extern idobjc_getAssociatedObject(id object, const void *key);
```

## Parameters

- `object`: The source object for the association.
- `key`: The key for the association.

<a id="return-value"></a>

## Return Value

The value associated with the key `key` for `object`.

## See Also

### Associative References

- [objc_setAssociatedObject](objc_setassociatedobject%28________%29.md): Sets an associated value for a given object using a given key and association policy.
- [objc_removeAssociatedObjects](objc_removeassociatedobjects%28__%29.md): Removes all associations for a given object.
