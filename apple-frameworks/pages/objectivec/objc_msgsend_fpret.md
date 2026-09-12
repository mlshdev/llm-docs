> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_msgsend_fpret](https://developer.apple.com/documentation/objectivec/objc_msgsend_fpret)

# objc_msgSend_fpret

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** macOS 10.5+

Sends a message with a floating-point return value to an instance of a class.

## Declaration

```objectivec
extern void objc_msgSend_fpret();
```

<a id="Parameters"></a>

## Parameters

- **`self`**: A pointer that points to the instance of the class that is to receive the message.
- **`op`**: The selector of the method that handles the message.
- **`...`**: A variable argument list containing the arguments to the method.

<a id="Discussion"></a>

## Discussion

On the i386 platform, the ABI for functions returning a floating-point value is incompatible with that for functions returning an integral type. On the i386 platform, therefore, you *must* use `objc_msgSend_fpret` for functions that for functions returning non-integral type. For `float` or `long double` return types, cast the function to an appropriate function pointer type first.

This function is not used on the PPC or PPC64 platforms.

## See Also

### Sending Messages

- [objc_msgSend](objc_msgsend.md): Sends a message with a simple return value to an instance of a class.
- [objc_msgSend_stret](objc_msgsend_stret.md): Sends a message with a data-structure return value to an instance of a class.
- [objc_msgSendSuper](objc_msgsendsuper.md): Sends a message with a simple return value to the superclass of an instance of a class.
- [objc_msgSendSuper_stret](objc_msgsendsuper_stret.md): Sends a message with a data-structure return value to the superclass of an instance of a class.
