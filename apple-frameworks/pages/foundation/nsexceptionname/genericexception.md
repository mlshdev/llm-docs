> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexceptionname/genericexception](https://developer.apple.com/documentation/foundation/nsexceptionname/genericexception)

# genericException (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A generic name for an exception.

## Declaration

```swift
static let genericException: NSExceptionName
```

<a id="Discussion"></a>

## Discussion

You should typically use a more specific exception name.

## See Also

### Type Properties

- [characterConversionException](characterconversionexception.md): `NSString` raises an `NSCharacterConversionException` if a string cannot be represented in a file-system or string encoding.
- [decimalNumberDivideByZeroException](decimalnumberdividebyzeroexception.md): The exception raised on divide by zero.
- [decimalNumberExactnessException](decimalnumberexactnessexception.md): The exception raised if there is an exactness error.
- [decimalNumberOverflowException](decimalnumberoverflowexception.md): The exception raised on overflow.
- [decimalNumberUnderflowException](decimalnumberunderflowexception.md): The exception raised on underflow.
- [destinationInvalidException](destinationinvalidexception.md): Name of an exception that occurs when an internal assertion fails and implies an unexpected condition within the distributed objects.
- [fileHandleOperationException](filehandleoperationexception.md): Raised by `NSFileHandle` if attempts to determine file-handle type fail or if attempts to read from a file or channel fail.
- [internalInconsistencyException](internalinconsistencyexception.md): Name of an exception that occurs when an internal assertion fails and implies an unexpected condition within the called code.
- [invalidArchiveOperationException](invalidarchiveoperationexception.md): The name of the exception raised by `NSKeyedArchiver` if there is a problem creating an archive.
- [invalidArgumentException](invalidargumentexception.md): Name of an exception that occurs when you pass an invalid argument to a method, such as a `nil` pointer where a non-`nil` object is required.
- [invalidReceivePortException](invalidreceiveportexception.md): Name of an exception that occurs when the receive port of an `NSConnection` has become invalid.
- [invalidSendPortException](invalidsendportexception.md): Name of an exception that occurs when the send port of an `NSConnection` has become invalid.
- [invalidUnarchiveOperationException](invalidunarchiveoperationexception.md): The name of the exception raised by `NSKeyedArchiver` if there is a problem extracting an archive.
- [invocationOperationCancelledException](invocationoperationcancelledexception.md): The name of the exception raised if the [result](../nsinvocationoperation/result.md) method is called after the operation was cancelled.
- [invocationOperationVoidResultException](invocationoperationvoidresultexception.md): The name of the exception raised if the [result](../nsinvocationoperation/result.md) method is called for an invocation method with a `void` return type.

# NSGenericException (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A generic name for an exception.

## Declaration

```objectivec
extern NSExceptionName const NSGenericException;
```

<a id="Discussion"></a>

## Discussion

You should typically use a more specific exception name.

## See Also

### Type Properties

- [NSCharacterConversionException](characterconversionexception.md): `NSString` raises an `NSCharacterConversionException` if a string cannot be represented in a file-system or string encoding.
- [NSDecimalNumberDivideByZeroException](decimalnumberdividebyzeroexception.md): The exception raised on divide by zero.
- [NSDecimalNumberExactnessException](decimalnumberexactnessexception.md): The exception raised if there is an exactness error.
- [NSDecimalNumberOverflowException](decimalnumberoverflowexception.md): The exception raised on overflow.
- [NSDecimalNumberUnderflowException](decimalnumberunderflowexception.md): The exception raised on underflow.
- [NSDestinationInvalidException](destinationinvalidexception.md): Name of an exception that occurs when an internal assertion fails and implies an unexpected condition within the distributed objects.
- [NSFileHandleOperationException](filehandleoperationexception.md): Raised by `NSFileHandle` if attempts to determine file-handle type fail or if attempts to read from a file or channel fail.
- [NSInternalInconsistencyException](internalinconsistencyexception.md): Name of an exception that occurs when an internal assertion fails and implies an unexpected condition within the called code.
- [NSInvalidArchiveOperationException](invalidarchiveoperationexception.md): The name of the exception raised by `NSKeyedArchiver` if there is a problem creating an archive.
- [NSInvalidArgumentException](invalidargumentexception.md): Name of an exception that occurs when you pass an invalid argument to a method, such as a `nil` pointer where a non-`nil` object is required.
- [NSInvalidReceivePortException](invalidreceiveportexception.md): Name of an exception that occurs when the receive port of an `NSConnection` has become invalid.
- [NSInvalidSendPortException](invalidsendportexception.md): Name of an exception that occurs when the send port of an `NSConnection` has become invalid.
- [NSInvalidUnarchiveOperationException](invalidunarchiveoperationexception.md): The name of the exception raised by `NSKeyedArchiver` if there is a problem extracting an archive.
- [NSInvocationOperationCancelledException](invocationoperationcancelledexception.md): The name of the exception raised if the [result](../nsinvocationoperation/result.md) method is called after the operation was cancelled.
- [NSInvocationOperationVoidResultException](invocationoperationvoidresultexception.md): The name of the exception raised if the [result](../nsinvocationoperation/result.md) method is called for an invocation method with a `void` return type.
