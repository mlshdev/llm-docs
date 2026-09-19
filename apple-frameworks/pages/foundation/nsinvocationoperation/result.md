> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsinvocationoperation/result

# result

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The result of the invocation or method.

## Declaration

```objectivec
@property (retain, readonly, nullable) id result;
```

<a id="Discussion"></a>

## Discussion

The object returned by the method or an [NSValue](../nsvalue.md) object containing the return value if it is not an object. `nil` if the method or invocation is not finished executing.

If an exception was raised during the execution of the method or invocation, accessing this property raises that exception again. If the operation was cancelled or the invocation or method has a `void` return type, accessing this property raises an exception; see [Result Exceptions](../result-exceptions.md).

## See Also

### Getting Attributes

- [invocation](invocation.md): The receiver’s invocation object.
