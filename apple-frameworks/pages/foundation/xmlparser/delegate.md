> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparser/delegate](https://developer.apple.com/documentation/foundation/xmlparser/delegate)

# delegate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A delegate object that receives messages about the parsing process.

## Declaration

```swift
unowned(unsafe) var delegate: (any XMLParserDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

For methods to be implemented by the delegate, see [XMLParserDelegate](../xmlparserdelegate.md).

# delegate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A delegate object that receives messages about the parsing process.

## Declaration

```objectivec
@property (assign, nullable) id<NSXMLParserDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

For methods to be implemented by the delegate, see [NSXMLParserDelegate](../xmlparserdelegate.md).
