> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/thread/callstacksymbols](https://developer.apple.com/documentation/foundation/thread/callstacksymbols)

# callStackSymbols (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array containing the call stack symbols.

## Declaration

```swift
class var callStackSymbols: [String] { get }
```

<a id="return-value"></a>

## Return Value

An array containing the call stack symbols. Each element is an `NSString` object with a value in a format determined by the `backtrace_symbols()` function. For more information, see backtrace_symbols(3) macOS Developer Tools Manual Page.

<a id="Discussion"></a>

## Discussion

The return value describes the call stack backtrace of the current thread at the moment this method was called.

## See Also

### Querying the Environment

- [isMultiThreaded()](ismultithreaded%28%29.md): Returns whether the application is multithreaded.
- [current](current.md): Returns the thread object representing the current thread of execution.
- [callStackReturnAddresses](callstackreturnaddresses.md): Returns an array containing the call stack return addresses.

# callStackSymbols (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array containing the call stack symbols.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<NSString *> * callStackSymbols;
```

<a id="return-value"></a>

## Return Value

An array containing the call stack symbols. Each element is an `NSString` object with a value in a format determined by the `backtrace_symbols()` function. For more information, see backtrace_symbols(3) macOS Developer Tools Manual Page.

<a id="Discussion"></a>

## Discussion

The return value describes the call stack backtrace of the current thread at the moment this method was called.

## See Also

### Querying the Environment

- [isMultiThreaded](ismultithreaded%28%29.md): Returns whether the application is multithreaded.
- [currentThread](current.md): Returns the thread object representing the current thread of execution.
- [callStackReturnAddresses](callstackreturnaddresses.md): Returns an array containing the call stack return addresses.
