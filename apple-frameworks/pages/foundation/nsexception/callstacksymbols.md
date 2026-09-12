> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexception/callstacksymbols](https://developer.apple.com/documentation/foundation/nsexception/callstacksymbols)

# callStackSymbols (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array containing the current call stack symbols.

## Declaration

```swift
var callStackSymbols: [String] { get }
```

<a id="Discussion"></a>

## Discussion

An array of strings describing the call stack backtrace at the moment the exception was first raised. The format of each string is determined by the `backtrace_symbols()` API

## See Also

### Getting Exception Stack Frames

- [callStackReturnAddresses](callstackreturnaddresses.md): The call return addresses related to a raised exception.

# callStackSymbols (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array containing the current call stack symbols.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * callStackSymbols;
```

<a id="Discussion"></a>

## Discussion

An array of strings describing the call stack backtrace at the moment the exception was first raised. The format of each string is determined by the `backtrace_symbols()` API

## See Also

### Getting Exception Stack Frames

- [callStackReturnAddresses](callstackreturnaddresses.md): The call return addresses related to a raised exception.
