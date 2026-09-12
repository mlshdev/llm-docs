> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/method_gettypeencoding(_:)](https://developer.apple.com/documentation/objectivec/method_gettypeencoding(_:))

# method_getTypeEncoding(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a string describing a method’s parameter and return types.

## Declaration

```swift
func method_getTypeEncoding(_ m: Method) -> UnsafePointer<CChar>?
```

## Parameters

- `m`: The method to inspect.

<a id="return-value"></a>

## Return Value

A C string. The string may be `NULL`.

## See Also

### Working with Methods

- [method_getName(\_:)](method_getname%28__%29.md): Returns the name of a method.
- [method_getImplementation(\_:)](method_getimplementation%28__%29.md): Returns the implementation of a method.
- [method_copyReturnType(\_:)](method_copyreturntype%28__%29.md): Returns a string describing a method’s return type.
- [method_copyArgumentType(\_:\_:)](method_copyargumenttype%28____%29.md): Returns a string describing a single parameter type of a method.
- [method_getReturnType(\_:\_:\_:)](method_getreturntype%28______%29.md): Returns by reference a string describing a method’s return type.
- [method_getNumberOfArguments(\_:)](method_getnumberofarguments%28__%29.md): Returns the number of arguments accepted by a method.
- [method_getArgumentType(\_:\_:\_:\_:)](method_getargumenttype%28________%29.md): Returns by reference a string describing a single parameter type of a method.
- [method_getDescription(\_:)](method_getdescription%28__%29.md): Deprecated. Returns a method description structure for a specified method.
- [method_setImplementation(\_:\_:)](method_setimplementation%28____%29.md): Sets the implementation of a method.
- [method_exchangeImplementations(\_:\_:)](method_exchangeimplementations%28____%29.md): Exchanges the implementations of two methods.

# method_getTypeEncoding (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a string describing a method’s parameter and return types.

## Declaration

```objectivec
extern const char *method_getTypeEncoding(Method m);
```

## Parameters

- `m`: The method to inspect.

<a id="return-value"></a>

## Return Value

A C string. The string may be `NULL`.

## See Also

### Working with Methods

- [method_invoke](method_invoke.md): Calls the implementation of a specified method.
- [method_invoke_stret](method_invoke_stret.md): Calls the implementation of a specified method that returns a data-structure.
- [method_getName](method_getname%28__%29.md): Returns the name of a method.
- [method_getImplementation](method_getimplementation%28__%29.md): Returns the implementation of a method.
- [method_copyReturnType](method_copyreturntype%28__%29.md): Returns a string describing a method’s return type.
- [method_copyArgumentType](method_copyargumenttype%28____%29.md): Returns a string describing a single parameter type of a method.
- [method_getReturnType](method_getreturntype%28______%29.md): Returns by reference a string describing a method’s return type.
- [method_getNumberOfArguments](method_getnumberofarguments%28__%29.md): Returns the number of arguments accepted by a method.
- [method_getArgumentType](method_getargumenttype%28________%29.md): Returns by reference a string describing a single parameter type of a method.
- [method_getDescription](method_getdescription%28__%29.md): Deprecated. Returns a method description structure for a specified method.
- [method_setImplementation](method_setimplementation%28____%29.md): Sets the implementation of a method.
- [method_exchangeImplementations](method_exchangeimplementations%28____%29.md): Exchanges the implementations of two methods.
