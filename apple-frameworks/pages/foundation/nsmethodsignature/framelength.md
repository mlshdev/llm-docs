> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsmethodsignature/framelength

# frameLength

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of bytes that the arguments, taken together, occupy on the stack.

## Declaration

```objectivec
@property (readonly) NSUInteger frameLength;
```

<a id="Discussion"></a>

## Discussion

This number varies with the hardware architecture the application runs on.

## See Also

### Getting Information on Argument Types

- [getArgumentTypeAtIndex:](getargumenttypeatindex_.md): Returns the type encoding for the argument at a given index.
- [numberOfArguments](numberofarguments.md): The number of arguments recorded in the receiver.
