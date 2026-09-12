> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparser/parsererror](https://developer.apple.com/documentation/foundation/xmlparser/parsererror)

# parserError (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An [NSError](../nserror.md) object from which you can obtain information about a parsing error.

## Declaration

```swift
var parserError: (any Error)? { get }
```

<a id="Discussion"></a>

## Discussion

You may access this property after a parsing operation abnormally terminates to determine the cause of error.

## See Also

### Parsing

- [parse()](parse%28%29.md): Starts the event-driven parsing operation.
- [abortParsing()](abortparsing%28%29.md): Stops the parser object.

# parserError (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An [NSError](../nserror.md) object from which you can obtain information about a parsing error.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSError * parserError;
```

<a id="Discussion"></a>

## Discussion

You may access this property after a parsing operation abnormally terminates to determine the cause of error.

## See Also

### Parsing

- [parse](parse%28%29.md): Starts the event-driven parsing operation.
- [abortParsing](abortparsing%28%29.md): Stops the parser object.
