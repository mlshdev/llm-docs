> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/valuetransformer](https://developer.apple.com/documentation/foundation/valuetransformer)

# ValueTransformer (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract class used to transform values from one representation to another.

## Declaration

```swift
class ValueTransformer
```

<a id="overview"></a>

## Overview

You create a value transformer by subclassing [ValueTransformer](valuetransformer.md) and overriding the necessary methods to provide the required custom transformation. You then register the value transformer using the [setValueTransformer(\_:forName:)](valuetransformer/setvaluetransformer%28__forname_%29.md) method, so that other parts of your app can access it by name with [init(forName:)](valuetransformer/init%28forname_%29.md).

Use the [transformedValue(\_:)](valuetransformer/transformedvalue%28__%29.md) method to transform a value from one representation into another. If a value transformer designates that its transformation is reversible by returning [true](https://developer.apple.com/documentation/swift/true) for [allowsReverseTransformation()](valuetransformer/allowsreversetransformation%28%29.md), you can also use the [reverseTransformedValue(\_:)](valuetransformer/reversetransformedvalue%28__%29.md) to perform the transformation in reverse. For example, reversing the characters in a string is a reversible operation, whereas changing the characters in a string to be uppercase is a nonreversible operation.

A value transformer can take inputs of one type and return a value of a different type. For example,  a value transformer could take an [NSImage](https://developer.apple.com/documentation/appkit/nsimage) or [UIImage](../uikit/uiimage.md) object and return an [NSData](nsdata.md) object containing the PNG representation of that image.

<a id="Example-Usage"></a>

### Example Usage

The following example defines a new value transformer that takes an object and returns a string based on the object’s class type. This transformer isn’t reversible because it doesn’t make sense to transform a class name into an object.

**Swift**

```swift
class ClassNameTransformer: ValueTransformer {
    override class func transformedValueClass() -> AnyClass {
        return NSString.self
    }
    
    override class func allowsReverseTransformation() -> Bool {
        return false
    }
    
    override func transformedValue(_ value: Any?) -> Any? {
        return (value as AnyObject).className
    }
}

extension NSValueTransformerName {
    static let classNameTransformerName = NSValueTransformerName(rawValue: "ClassNameTransformer")
}

ValueTransformer.setValueTransformer(ClassNameTransformer(), forName: .classNameTransformerName)
```

**Objective-C**

```objc
@interface ClassNameTransformer: NSValueTransformer {}
@end
@implementation ClassNameTransformer
+ (Class)transformedValueClass { 
    return [NSString class]; 
}
+ (BOOL)allowsReverseTransformation { 
    return NO; 
}
- (id)transformedValue:(id)value {
    return (value == nil) ? nil : NSStringFromClass([value class]);
}
@end
```

## Topics

### Using the Name-Based Registry

- [setValueTransformer(\_:forName:)](valuetransformer/setvaluetransformer%28__forname_%29.md): Registers the provided value transformer with a given identifier.
- [init(forName:)](valuetransformer/init%28forname_%29.md): Returns the value transformer identified by a given identifier.
- [valueTransformerNames()](valuetransformer/valuetransformernames%28%29.md): Returns an array of all the registered value transformers.
- [NSValueTransformerName](nsvaluetransformername.md): Named value transformers defined by `NSValueTransformer`.

### Getting Information About a Transformer

- [allowsReverseTransformation()](valuetransformer/allowsreversetransformation%28%29.md): Returns a Boolean value that indicates whether the receiver can reverse a transformation.
- [transformedValueClass()](valuetransformer/transformedvalueclass%28%29.md): Returns the class of the value returned by the receiver for a forward transformation.

### Transforming Values

- [transformedValue(\_:)](valuetransformer/transformedvalue%28__%29.md): Returns the result of transforming a given value.
- [reverseTransformedValue(\_:)](valuetransformer/reversetransformedvalue%28__%29.md): Returns the result of the reverse transformation of a given value.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSSecureUnarchiveFromDataTransformer](nssecureunarchivefromdatatransformer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Value Wrappers and Transformations

- [NSNumber](nsnumber.md): An object wrapper for primitive scalar numeric values.
- [NSValue](nsvalue.md): A simple container for a single C or Objective-C data item.

# NSValueTransformer (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract class used to transform values from one representation to another.

## Declaration

```objectivec
@interface NSValueTransformer : NSObject
```

<a id="overview"></a>

## Overview

You create a value transformer by subclassing [NSValueTransformer](valuetransformer.md) and overriding the necessary methods to provide the required custom transformation. You then register the value transformer using the [setValueTransformer:forName:](valuetransformer/setvaluetransformer%28__forname_%29.md) method, so that other parts of your app can access it by name with [valueTransformerForName:](valuetransformer/init%28forname_%29.md).

Use the [transformedValue:](valuetransformer/transformedvalue%28__%29.md) method to transform a value from one representation into another. If a value transformer designates that its transformation is reversible by returning [true](https://developer.apple.com/documentation/swift/true) for [allowsReverseTransformation](valuetransformer/allowsreversetransformation%28%29.md), you can also use the [reverseTransformedValue:](valuetransformer/reversetransformedvalue%28__%29.md) to perform the transformation in reverse. For example, reversing the characters in a string is a reversible operation, whereas changing the characters in a string to be uppercase is a nonreversible operation.

A value transformer can take inputs of one type and return a value of a different type. For example,  a value transformer could take an [NSImage](https://developer.apple.com/documentation/appkit/nsimage) or [UIImage](../uikit/uiimage.md) object and return an [NSData](nsdata.md) object containing the PNG representation of that image.

<a id="Example-Usage"></a>

### Example Usage

The following example defines a new value transformer that takes an object and returns a string based on the object’s class type. This transformer isn’t reversible because it doesn’t make sense to transform a class name into an object.

**Swift**

```swift
class ClassNameTransformer: ValueTransformer {
    override class func transformedValueClass() -> AnyClass {
        return NSString.self
    }
    
    override class func allowsReverseTransformation() -> Bool {
        return false
    }
    
    override func transformedValue(_ value: Any?) -> Any? {
        return (value as AnyObject).className
    }
}

extension NSValueTransformerName {
    static let classNameTransformerName = NSValueTransformerName(rawValue: "ClassNameTransformer")
}

ValueTransformer.setValueTransformer(ClassNameTransformer(), forName: .classNameTransformerName)
```

**Objective-C**

```objc
@interface ClassNameTransformer: NSValueTransformer {}
@end
@implementation ClassNameTransformer
+ (Class)transformedValueClass { 
    return [NSString class]; 
}
+ (BOOL)allowsReverseTransformation { 
    return NO; 
}
- (id)transformedValue:(id)value {
    return (value == nil) ? nil : NSStringFromClass([value class]);
}
@end
```

## Topics

### Using the Name-Based Registry

- [setValueTransformer:forName:](valuetransformer/setvaluetransformer%28__forname_%29.md): Registers the provided value transformer with a given identifier.
- [valueTransformerForName:](valuetransformer/init%28forname_%29.md): Returns the value transformer identified by a given identifier.
- [valueTransformerNames](valuetransformer/valuetransformernames%28%29.md): Returns an array of all the registered value transformers.
- [NSValueTransformerName](nsvaluetransformername.md): Named value transformers defined by `NSValueTransformer`.

### Getting Information About a Transformer

- [allowsReverseTransformation](valuetransformer/allowsreversetransformation%28%29.md): Returns a Boolean value that indicates whether the receiver can reverse a transformation.
- [transformedValueClass](valuetransformer/transformedvalueclass%28%29.md): Returns the class of the value returned by the receiver for a forward transformation.

### Transforming Values

- [transformedValue:](valuetransformer/transformedvalue%28__%29.md): Returns the result of transforming a given value.
- [reverseTransformedValue:](valuetransformer/reversetransformedvalue%28__%29.md): Returns the result of the reverse transformation of a given value.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSSecureUnarchiveFromDataTransformer](nssecureunarchivefromdatatransformer.md)

## See Also

### Value Wrappers and Transformations

- [NSNumber](nsnumber.md): An object wrapper for primitive scalar numeric values.
- [NSValue](nsvalue.md): A simple container for a single C or Objective-C data item.
