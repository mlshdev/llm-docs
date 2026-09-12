> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/inputstream/init(fileatpath:)](https://developer.apple.com/documentation/foundation/inputstream/init(fileatpath:))

# init(fileAtPath:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns an `NSInputStream` object that reads data from the file at a given path.

## Declaration

```swift
convenience init?(fileAtPath path: String)
```

## Parameters

- `path`: The path to the file.

<a id="return-value"></a>

## Return Value

An initialized `NSInputStream` object that reads data from the file at `path`.

<a id="Discussion"></a>

## Discussion

The stream must be opened before it can be used.

## See Also

### Creating Streams

- [init(data:)](init%28data_%29.md): Initializes and returns an `NSInputStream` object for reading from a given `NSData` object.
- [init(url:)](init%28url_%29-1lfmj.md): Initializes and returns an `NSInputStream` object that reads data from the file at a given URL.

# initWithFileAtPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns an `NSInputStream` object that reads data from the file at a given path.

## Declaration

```objectivec
- (instancetype) initWithFileAtPath:(NSString *) path;
```

## Parameters

- `path`: The path to the file.

<a id="return-value"></a>

## Return Value

An initialized `NSInputStream` object that reads data from the file at `path`.

<a id="Discussion"></a>

## Discussion

The stream must be opened before it can be used.

## See Also

### Related Documentation

- [inputStreamWithFileAtPath:](../nsinputstream/inputstreamwithfileatpath_.md): Creates and returns an initialized `NSInputStream` object that reads data from the file at a given path.

### Creating Streams

- [inputStreamWithData:](../nsinputstream/inputstreamwithdata_.md): Creates and returns an initialized `NSInputStream` object for reading from a given `NSData` object.
- [inputStreamWithFileAtPath:](../nsinputstream/inputstreamwithfileatpath_.md): Creates and returns an initialized `NSInputStream` object that reads data from the file at a given path.
- [initWithData:](init%28data_%29.md): Initializes and returns an `NSInputStream` object for reading from a given `NSData` object.
- [initWithURL:](init%28url_%29-1lfmj.md): Initializes and returns an `NSInputStream` object that reads data from the file at a given URL.
