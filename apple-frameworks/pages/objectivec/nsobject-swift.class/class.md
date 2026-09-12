> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/class](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/class)

# class

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the class object.

## Declaration

```objectivec
+ (Class) class;
```

<a id="return-value"></a>

## Return Value

The class object.

<a id="Discussion"></a>

## Discussion

Refer to a class only by its name when it is the receiver of a message. In all other cases, the class object must be obtained through this or a similar method. For example, here `SomeClass` is passed as an argument to the [isKindOfClass:](../nsobjectprotocol/iskind%28of_%29.md) method (declared in the `NSObject` protocol):

```objc
BOOL test = [self isKindOfClass:[SomeClass class]];
```

## See Also

### Related Documentation

- [NSStringFromClass](../../foundation/nsstringfromclass%28__%29.md): Returns the name of a class as a string.
- [class](../nsobject-c.protocol/class.md): Returns the class object for the receiver’s class.
- [NSClassFromString](../../foundation/nsclassfromstring%28__%29.md): Obtains a class by name.

### Identifying Classes

- [superclass](superclass%28%29.md): Returns the class object for the receiver’s superclass.
- [isSubclassOfClass:](issubclass%28of_%29.md): Returns a Boolean value that indicates whether the receiving class is a subclass of, or identical to, a given class.
