> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmethodsignature/numberofarguments](https://developer.apple.com/documentation/foundation/nsmethodsignature/numberofarguments)

# numberOfArguments

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of arguments recorded in the receiver.

## Declaration

```objectivec
@property (readonly) NSUInteger numberOfArguments;
```

<a id="Discussion"></a>

## Discussion

There are always at least two arguments, because an `NSMethodSignature` object includes the implicit arguments `self` and `_cmd`, which are the first two arguments passed to every method implementation.

## See Also

### Getting Information on Argument Types

- [getArgumentTypeAtIndex:](getargumenttypeatindex_.md): Returns the type encoding for the argument at a given index.
- [frameLength](framelength.md): The number of bytes that the arguments, taken together, occupy on the stack.
