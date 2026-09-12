> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmethodsignature/getargumenttypeatindex:](https://developer.apple.com/documentation/foundation/nsmethodsignature/getargumenttypeatindex:)

# getArgumentTypeAtIndex:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the type encoding for the argument at a given index.

## Declaration

```objectivec
- (const char *) getArgumentTypeAtIndex:(NSUInteger) idx;
```

## Parameters

- `idx`: The index of the argument to get.

<a id="return-value"></a>

## Return Value

The type encoding for the argument at `idx`.

<a id="Discussion"></a>

## Discussion

Indexes begin with 0. The implicit arguments `self` (of type `id`) and `_cmd` (of type `SEL`) are at indexes 0 and 1; explicit arguments begin at index 2.

> **Important**

>  If `index` exceeds the number of arguments, `NSInvalidArgumentException` is raised.

## See Also

### Getting Information on Argument Types

- [numberOfArguments](numberofarguments.md): The number of arguments recorded in the receiver.
- [frameLength](framelength.md): The number of bytes that the arguments, taken together, occupy on the stack.
