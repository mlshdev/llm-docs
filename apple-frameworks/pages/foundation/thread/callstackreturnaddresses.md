> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/thread/callstackreturnaddresses](https://developer.apple.com/documentation/foundation/thread/callstackreturnaddresses)

# callStackReturnAddresses (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array containing the call stack return addresses.

## Declaration

```swift
class var callStackReturnAddresses: [NSNumber] { get }
```

<a id="return-value"></a>

## Return Value

An array containing the call stack return addresses. Each element is an `NSNumber` object containing an `NSUInteger` value.

## See Also

### Querying the Environment

- [isMultiThreaded()](ismultithreaded%28%29.md): Returns whether the application is multithreaded.
- [current](current.md): Returns the thread object representing the current thread of execution.
- [callStackSymbols](callstacksymbols.md): Returns an array containing the call stack symbols.

# callStackReturnAddresses (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array containing the call stack return addresses.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<NSNumber *> * callStackReturnAddresses;
```

<a id="return-value"></a>

## Return Value

An array containing the call stack return addresses. Each element is an `NSNumber` object containing an `NSUInteger` value.

## See Also

### Querying the Environment

- [isMultiThreaded](ismultithreaded%28%29.md): Returns whether the application is multithreaded.
- [currentThread](current.md): Returns the thread object representing the current thread of execution.
- [callStackSymbols](callstacksymbols.md): Returns an array containing the call stack symbols.
