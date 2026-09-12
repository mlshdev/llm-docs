> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/issubclass(of:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/issubclass(of:))

# isSubclass(of:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a Boolean value that indicates whether the receiving class is a subclass of, or identical to, a given class.

## Declaration

```swift
class func isSubclass(of aClass: AnyClass) -> Bool
```

## Parameters

- `aClass`: A class object.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the receiving class is a subclass of—or identical to—`aClass`, otherwise [NO](../no.md).

## See Also

### Identifying Classes

- [superclass()](superclass%28%29.md): Returns the class object for the receiver’s superclass.

# isSubclassOfClass: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a Boolean value that indicates whether the receiving class is a subclass of, or identical to, a given class.

## Declaration

```objectivec
+ (BOOL) isSubclassOfClass:(Class) aClass;
```

## Parameters

- `aClass`: A class object.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the receiving class is a subclass of—or identical to—`aClass`, otherwise [NO](../no.md).

## See Also

### Identifying Classes

- [class](class.md): Returns the class object.
- [superclass](superclass%28%29.md): Returns the class object for the receiver’s superclass.
