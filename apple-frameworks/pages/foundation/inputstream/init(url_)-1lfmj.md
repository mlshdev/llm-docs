> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/inputstream/init(url:)-1lfmj](https://developer.apple.com/documentation/foundation/inputstream/init(url:)-1lfmj)

# init(url:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns an `NSInputStream` object that reads data from the file at a given URL.

## Declaration

```swift
init?(url: URL)
```

## Parameters

- `url`: The URL to the file.

<a id="return-value"></a>

## Return Value

An initialized `NSInputStream` object that reads data from the file at `url`.

<a id="Discussion"></a>

## Discussion

The stream must be opened before it can be used.

## See Also

### Creating Streams

- [init(data:)](init%28data_%29.md): Initializes and returns an `NSInputStream` object for reading from a given `NSData` object.
- [init(fileAtPath:)](init%28fileatpath_%29.md): Initializes and returns an `NSInputStream` object that reads data from the file at a given path.

# initWithURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns an `NSInputStream` object that reads data from the file at a given URL.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url;
```

## Parameters

- `url`: The URL to the file.

<a id="return-value"></a>

## Return Value

An initialized `NSInputStream` object that reads data from the file at `url`.

<a id="Discussion"></a>

## Discussion

The stream must be opened before it can be used.

## See Also

### Creating Streams

- [inputStreamWithData:](../nsinputstream/inputstreamwithdata_.md): Creates and returns an initialized `NSInputStream` object for reading from a given `NSData` object.
- [inputStreamWithFileAtPath:](../nsinputstream/inputstreamwithfileatpath_.md): Creates and returns an initialized `NSInputStream` object that reads data from the file at a given path.
- [initWithData:](init%28data_%29.md): Initializes and returns an `NSInputStream` object for reading from a given `NSData` object.
- [initWithFileAtPath:](init%28fileatpath_%29.md): Initializes and returns an `NSInputStream` object that reads data from the file at a given path.
