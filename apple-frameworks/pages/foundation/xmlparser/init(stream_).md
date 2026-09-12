> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparser/init(stream:)](https://developer.apple.com/documentation/foundation/xmlparser/init(stream:))

# init(stream:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a parser with the XML contents from the specified stream and parses it.

## Declaration

```swift
convenience init(stream: InputStream)
```

## Parameters

- `stream`: The input stream. The content is incrementally loaded from the specified stream and parsed. The `NSXMLParser` will open the stream, and synchronously read from it without scheduling it.

<a id="return-value"></a>

## Return Value

An initialized `NSXMLParser` object or `nil` if an error occurs.

## See Also

### Initializing a Parser Object

- [init(contentsOf:)](init%28contentsof_%29.md): Initializes a parser with the XML content referenced by the given URL.
- [init(data:)](init%28data_%29.md): Initializes a parser with the XML contents encapsulated in a given data object.

# initWithStream: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a parser with the XML contents from the specified stream and parses it.

## Declaration

```objectivec
- (instancetype) initWithStream:(NSInputStream *) stream;
```

## Parameters

- `stream`: The input stream. The content is incrementally loaded from the specified stream and parsed. The `NSXMLParser` will open the stream, and synchronously read from it without scheduling it.

<a id="return-value"></a>

## Return Value

An initialized `NSXMLParser` object or `nil` if an error occurs.

## See Also

### Initializing a Parser Object

- [initWithContentsOfURL:](init%28contentsof_%29.md): Initializes a parser with the XML content referenced by the given URL.
- [initWithData:](init%28data_%29.md): Initializes a parser with the XML contents encapsulated in a given data object.
