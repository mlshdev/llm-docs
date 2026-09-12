> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparser/abortparsing()](https://developer.apple.com/documentation/foundation/xmlparser/abortparsing())

# abortParsing() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Stops the parser object.

## Declaration

```swift
func abortParsing()
```

<a id="Discussion"></a>

## Discussion

If you invoke this method, the delegate, if it implements [parser(\_:parseErrorOccurred:)](../xmlparserdelegate/parser%28__parseerroroccurred_%29.md), is informed of the cancelled parsing operation.

## See Also

### Parsing

- [parse()](parse%28%29.md): Starts the event-driven parsing operation.
- [parserError](parsererror.md): An [NSError](../nserror.md) object from which you can obtain information about a parsing error.

# abortParsing (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Stops the parser object.

## Declaration

```objectivec
- (void) abortParsing;
```

<a id="Discussion"></a>

## Discussion

If you invoke this method, the delegate, if it implements [parser:parseErrorOccurred:](../xmlparserdelegate/parser%28__parseerroroccurred_%29.md), is informed of the cancelled parsing operation.

## See Also

### Parsing

- [parse](parse%28%29.md): Starts the event-driven parsing operation.
- [parserError](parsererror.md): An [NSError](../nserror.md) object from which you can obtain information about a parsing error.
