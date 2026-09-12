> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/inputstream/init(data:)](https://developer.apple.com/documentation/foundation/inputstream/init(data:))

# init(data:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns an `NSInputStream` object for reading from a given `NSData` object.

## Declaration

```swift
init(data: Data)
```

## Parameters

- `data`: The data object from which to read. The contents of `data` are copied.

<a id="return-value"></a>

## Return Value

An initialized `NSInputStream` object for reading from `data`.

<a id="Discussion"></a>

## Discussion

The stream must be opened before it can be used.

## See Also

### Creating Streams

- [init(fileAtPath:)](init%28fileatpath_%29.md): Initializes and returns an `NSInputStream` object that reads data from the file at a given path.
- [init(url:)](init%28url_%29-1lfmj.md): Initializes and returns an `NSInputStream` object that reads data from the file at a given URL.

# initWithData: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns an `NSInputStream` object for reading from a given `NSData` object.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) data;
```

## Parameters

- `data`: The data object from which to read. The contents of `data` are copied.

<a id="return-value"></a>

## Return Value

An initialized `NSInputStream` object for reading from `data`.

<a id="Discussion"></a>

## Discussion

The stream must be opened before it can be used.

## See Also

### Related Documentation

- [inputStreamWithData:](../nsinputstream/inputstreamwithdata_.md): Creates and returns an initialized `NSInputStream` object for reading from a given `NSData` object.

### Creating Streams

- [inputStreamWithData:](../nsinputstream/inputstreamwithdata_.md): Creates and returns an initialized `NSInputStream` object for reading from a given `NSData` object.
- [inputStreamWithFileAtPath:](../nsinputstream/inputstreamwithfileatpath_.md): Creates and returns an initialized `NSInputStream` object that reads data from the file at a given path.
- [initWithFileAtPath:](init%28fileatpath_%29.md): Initializes and returns an `NSInputStream` object that reads data from the file at a given path.
- [initWithURL:](init%28url_%29-1lfmj.md): Initializes and returns an `NSInputStream` object that reads data from the file at a given URL.
