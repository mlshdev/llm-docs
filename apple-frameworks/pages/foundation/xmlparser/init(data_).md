> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparser/init(data:)](https://developer.apple.com/documentation/foundation/xmlparser/init(data:))

# init(data:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a parser with the XML contents encapsulated in a given data object.

## Declaration

```swift
init(data: Data)
```

## Parameters

- `data`: An [NSData](../nsdata.md) object containing XML markup.

<a id="return-value"></a>

## Return Value

An initialized `NSXMLParser` object or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer.

## See Also

### Initializing a Parser Object

- [init(contentsOf:)](init%28contentsof_%29.md): Initializes a parser with the XML content referenced by the given URL.
- [init(stream:)](init%28stream_%29.md): Initializes a parser with the XML contents from the specified stream and parses it.

# initWithData: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a parser with the XML contents encapsulated in a given data object.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) data;
```

## Parameters

- `data`: An [NSData](../nsdata.md) object containing XML markup.

<a id="return-value"></a>

## Return Value

An initialized `NSXMLParser` object or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer.

## See Also

### Initializing a Parser Object

- [initWithContentsOfURL:](init%28contentsof_%29.md): Initializes a parser with the XML content referenced by the given URL.
- [initWithStream:](init%28stream_%29.md): Initializes a parser with the XML contents from the specified stream and parses it.
