> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparser/init(contentsof:)](https://developer.apple.com/documentation/foundation/xmlparser/init(contentsof:))

# init(contentsOf:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a parser with the XML content referenced by the given URL.

## Declaration

```swift
convenience init?(contentsOf url: URL)
```

## Parameters

- `url`: An [NSURL](../nsurl.md) object specifying a URL. The URL must be fully qualified and refer to a scheme that is supported by the `NSURL` class.

<a id="return-value"></a>

## Return Value

An initialized `NSXMLParser` object or `nil` if an error occurs.

## See Also

### Related Documentation

- [Event-Driven XML Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/XMLParsing/XMLParsing.html#//apple_ref/doc/uid/10000186i)

### Initializing a Parser Object

- [init(data:)](init%28data_%29.md): Initializes a parser with the XML contents encapsulated in a given data object.
- [init(stream:)](init%28stream_%29.md): Initializes a parser with the XML contents from the specified stream and parses it.

# initWithContentsOfURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a parser with the XML content referenced by the given URL.

## Declaration

```objectivec
- (instancetype) initWithContentsOfURL:(NSURL *) url;
```

## Parameters

- `url`: An [NSURL](../nsurl.md) object specifying a URL. The URL must be fully qualified and refer to a scheme that is supported by the `NSURL` class.

<a id="return-value"></a>

## Return Value

An initialized `NSXMLParser` object or `nil` if an error occurs.

## See Also

### Related Documentation

- [Event-Driven XML Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/XMLParsing/XMLParsing.html#//apple_ref/doc/uid/10000186i)

### Initializing a Parser Object

- [initWithData:](init%28data_%29.md): Initializes a parser with the XML contents encapsulated in a given data object.
- [initWithStream:](init%28stream_%29.md): Initializes a parser with the XML contents from the specified stream and parses it.
