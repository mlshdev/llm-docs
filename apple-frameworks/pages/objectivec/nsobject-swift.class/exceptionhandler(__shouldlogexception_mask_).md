> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/exceptionhandler(_:shouldlogexception:mask:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/exceptionhandler(_:shouldlogexception:mask:))

# exceptionHandler(\_:shouldLogException:mask:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Implemented by the delegate to evaluate whether the delegating exception hangler should log a given exception.

## Declaration

```swift
func exceptionHandler(_ sender: NSExceptionHandler!, shouldLogException exception: NSException!, mask aMask: Int) -> Bool
```

## Parameters

- `sender`: The [NSExceptionHandler](https://developer.apple.com/documentation/exceptionhandling/nsexceptionhandler) object sending the message.
- `exception`: An [NSException](../../foundation/nsexception.md) object describing the exception to be evaluated.
- `aMask`: The bit mask indicating the types of exceptions logged by the [NSExceptionHandler](https://developer.apple.com/documentation/exceptionhandling/nsexceptionhandler) object. See Logging and Handling Constants and System Hang Constants for descriptions of the possible `enum` constants.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) to have the [NSExceptionHandler](https://developer.apple.com/documentation/exceptionhandling/nsexceptionhandler) object log the exception, [NO](../no.md) otherwise.

# exceptionHandler:shouldLogException:mask: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Implemented by the delegate to evaluate whether the delegating exception hangler should log a given exception.

## Declaration

```objectivec
- (BOOL) exceptionHandler:(NSExceptionHandler *) sender shouldLogException:(NSException *) exception mask:(NSUInteger) aMask;
```

## Parameters

- `sender`: The [NSExceptionHandler](https://developer.apple.com/documentation/exceptionhandling/nsexceptionhandler) object sending the message.
- `exception`: An [NSException](../../foundation/nsexception.md) object describing the exception to be evaluated.
- `aMask`: The bit mask indicating the types of exceptions logged by the [NSExceptionHandler](https://developer.apple.com/documentation/exceptionhandling/nsexceptionhandler) object. See Logging and Handling Constants and System Hang Constants for descriptions of the possible `enum` constants.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) to have the [NSExceptionHandler](https://developer.apple.com/documentation/exceptionhandling/nsexceptionhandler) object log the exception, [NO](../no.md) otherwise.
