> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparser/parse()](https://developer.apple.com/documentation/foundation/xmlparser/parse())

# parse() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Starts the event-driven parsing operation.

## Declaration

```swift
func parse() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the parsing operation succeeds; [false](https://developer.apple.com/documentation/swift/false) if an error occurs or if the parsing operation aborts.

## See Also

### Parsing

- [abortParsing()](abortparsing%28%29.md): Stops the parser object.
- [parserError](parsererror.md): An [NSError](../nserror.md) object from which you can obtain information about a parsing error.

# parse (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Starts the event-driven parsing operation.

## Declaration

```objectivec
- (BOOL) parse;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the parsing operation succeeds; [false](https://developer.apple.com/documentation/swift/false) if an error occurs or if the parsing operation aborts.

## See Also

### Parsing

- [abortParsing](abortparsing%28%29.md): Stops the parser object.
- [parserError](parsererror.md): An [NSError](../nserror.md) object from which you can obtain information about a parsing error.
