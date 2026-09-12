> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/method_invoke_stret](https://developer.apple.com/documentation/objectivec/method_invoke_stret)

# method_invoke_stret

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** macOS 10.5+

Calls the implementation of a specified method that returns a data-structure.

## Declaration

```objectivec
extern void method_invoke_stret();
```

<a id="Parameters"></a>

## Parameters

- **`receiver`**: A pointer to the instance of the class that you want to invoke the method on. This value must not be `nil`.
- **`method`**: The method whose implementation you want to call.
- **`...`**: A variable argument list containing the arguments to the method.

<a id="Discussion"></a>

## Discussion

Using this function to call the implementation of a method is faster than calling [method_getImplementation](method_getimplementation%28__%29.md) and [method_getName](method_getname%28__%29.md).

## See Also

### Working with Methods

- [method_invoke](method_invoke.md): Calls the implementation of a specified method.
- [method_getName](method_getname%28__%29.md): Returns the name of a method.
- [method_getImplementation](method_getimplementation%28__%29.md): Returns the implementation of a method.
- [method_getTypeEncoding](method_gettypeencoding%28__%29.md): Returns a string describing a method’s parameter and return types.
- [method_copyReturnType](method_copyreturntype%28__%29.md): Returns a string describing a method’s return type.
- [method_copyArgumentType](method_copyargumenttype%28____%29.md): Returns a string describing a single parameter type of a method.
- [method_getReturnType](method_getreturntype%28______%29.md): Returns by reference a string describing a method’s return type.
- [method_getNumberOfArguments](method_getnumberofarguments%28__%29.md): Returns the number of arguments accepted by a method.
- [method_getArgumentType](method_getargumenttype%28________%29.md): Returns by reference a string describing a single parameter type of a method.
- [method_getDescription](method_getdescription%28__%29.md): Deprecated. Returns a method description structure for a specified method.
- [method_setImplementation](method_setimplementation%28____%29.md): Sets the implementation of a method.
- [method_exchangeImplementations](method_exchangeimplementations%28____%29.md): Exchanges the implementations of two methods.
