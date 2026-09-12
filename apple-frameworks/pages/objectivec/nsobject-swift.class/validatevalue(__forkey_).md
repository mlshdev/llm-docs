> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/validatevalue(_:forkey:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/validatevalue(_:forkey:))

# validateValue(\_:forKey:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Indicates whether the value specified by a given pointer is valid, or can be made valid, for the property identified by a given key.

## Declaration

```swift
func validateValue(_ ioValue: AutoreleasingUnsafeMutablePointer<AnyObject?>, forKey inKey: String) throws
```

## Parameters

- `ioValue`: A pointer to a new value for the property identified by `inKey`. This method may modify or replace the value in order to make it valid.
- `inKey`: The name of one of the receiver’s properties. The key must specify an attribute or a to-one relationship.

<a id="Discussion"></a>

## Discussion

In Swift, this method throws an error if the value isn’t valid.  In Objective-C, it returns a Boolean value.

The default implementation of this function searches the class of the receiver for a property-specific validation function with a particular signature, allowing that function to determine the outcome of the validation. For it to be found, the property-specific validation function must be exposed to Objective-C, must be named according to the pattern `validate<InKey>`, must take a single, optional `AnyObject` pointer argument, and must throw. For example, for a property named `someString`, the validation function is:

```swift
@objc func validateSomeString(_ ioValue: AutoreleasingUnsafeMutablePointer<AnyObject?>) throws {
    // Test, and possibly replace the value here; or throw an error
}
```

If you define such a function, the default implementation of [validateValue(\_:forKey:)](validatevalue%28__forkey_%29.md) calls it when asked to validate the corresponding property, allowing your function to either alter the input value or throw an error.

If no such function exists for a particular property, [validateValue(\_:forKey:)](validatevalue%28__forkey_%29.md)returns [YES](../yes.md) without taking any other action. In other words, by default, the general validation call succeeds if you don’t explicitly provide a validation function for the given property.

> **Note**

>  You typically use the validation described here only in Objective-C. In Swift, property validation is more idiomatically handled by relying on compiler support for optionals and strong type checking, while using the built-in `willSet` and `didSet` property observers to test any run-time API contracts, as described in the [Property Observers](https://developer.apple.com/library/archive/documentation/Swift/Conceptual/Swift_Programming_Language/Properties.html#//apple_ref/doc/uid/TP40014097-CH14-ID262) section of [The Swift Programming Language (Swift 4.1)](https://developer.apple.com/library/archive/documentation/Swift/Conceptual/Swift_Programming_Language/index.html#//apple_ref/doc/uid/TP40014097).

See [Adding Validation](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/Validation.html#//apple_ref/doc/uid/20002173) in [Key-Value Coding Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107i) for more information.

## See Also

### Validation

- [validateValue(\_:forKeyPath:)](validatevalue%28__forkeypath_%29.md): Indicates whether the value specified by a given pointer is not valid for a given key path relative to the receiver.

# validateValue:forKey:error: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Indicates whether the value specified by a given pointer is valid, or can be made valid, for the property identified by a given key.

## Declaration

```objectivec
- (BOOL) validateValue:(id*) ioValue forKey:(NSString *) inKey error:(NSError **) outError;
```

## Parameters

- `ioValue`: A pointer to a new value for the property identified by `inKey`. This method may modify or replace the value in order to make it valid.
- `inKey`: The name of one of the receiver’s properties. The key must specify an attribute or a to-one relationship.
- `outError`: If validation is necessary and `ioValue` is not transformed into a valid value, upon return contains an [NSError](../../foundation/nserror.md) object that describes the reason that `ioValue` is not a valid value.

<a id="return-value"></a>

## Return Value

A Boolean set to [YES](../yes.md) if the value pointed at by `ioValue` is valid for the property identified by `inKey`, or if the method is able to modify the value at `ioValue` to make it valid; otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

In Swift, this method throws an error if the value isn’t valid.  In Objective-C, it returns a Boolean value.

The default implementation of this function searches the class of the receiver for a property-specific validation function with a particular signature, allowing that function to determine the outcome of the validation. For it to be found, the property-specific validation function must be exposed to Objective-C, must be named according to the pattern `validate<InKey>`, must take a single, optional `AnyObject` pointer argument, and must throw. For example, for a property named `someString`, the validation function is:

```swift
@objc func validateSomeString(_ ioValue: AutoreleasingUnsafeMutablePointer<AnyObject?>) throws {
    // Test, and possibly replace the value here; or throw an error
}
```

If you define such a function, the default implementation of [validateValue:forKey:error:](validatevalue%28__forkey_%29.md) calls it when asked to validate the corresponding property, allowing your function to either alter the input value or throw an error.

If no such function exists for a particular property, [validateValue:forKey:error:](validatevalue%28__forkey_%29.md)returns [YES](../yes.md) without taking any other action. In other words, by default, the general validation call succeeds if you don’t explicitly provide a validation function for the given property.

> **Note**

>  You typically use the validation described here only in Objective-C. In Swift, property validation is more idiomatically handled by relying on compiler support for optionals and strong type checking, while using the built-in `willSet` and `didSet` property observers to test any run-time API contracts, as described in the [Property Observers](https://developer.apple.com/library/archive/documentation/Swift/Conceptual/Swift_Programming_Language/Properties.html#//apple_ref/doc/uid/TP40014097-CH14-ID262) section of [The Swift Programming Language (Swift 4.1)](https://developer.apple.com/library/archive/documentation/Swift/Conceptual/Swift_Programming_Language/index.html#//apple_ref/doc/uid/TP40014097).

See [Adding Validation](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/Validation.html#//apple_ref/doc/uid/20002173) in [Key-Value Coding Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107i) for more information.

## See Also

### Validation

- [validateValue:forKeyPath:error:](validatevalue%28__forkeypath_%29.md): Indicates whether the value specified by a given pointer is not valid for a given key path relative to the receiver.
