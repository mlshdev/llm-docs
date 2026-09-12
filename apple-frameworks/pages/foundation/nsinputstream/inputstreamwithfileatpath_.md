> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsinputstream/inputstreamwithfileatpath:](https://developer.apple.com/documentation/foundation/nsinputstream/inputstreamwithfileatpath:)

# inputStreamWithFileAtPath:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an initialized `NSInputStream` object that reads data from the file at a given path.

## Declaration

```objectivec
+ (instancetype) inputStreamWithFileAtPath:(NSString *) path;
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

- [inputStreamWithData:](inputstreamwithdata_.md): Creates and returns an initialized `NSInputStream` object for reading from a given `NSData` object.
- [initWithData:](../inputstream/init%28data_%29.md): Initializes and returns an `NSInputStream` object for reading from a given `NSData` object.
- [initWithFileAtPath:](../inputstream/init%28fileatpath_%29.md): Initializes and returns an `NSInputStream` object that reads data from the file at a given path.
- [initWithURL:](../inputstream/init%28url_%29-1lfmj.md): Initializes and returns an `NSInputStream` object that reads data from the file at a given URL.
