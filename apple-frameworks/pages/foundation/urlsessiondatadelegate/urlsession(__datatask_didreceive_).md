> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiondatadelegate/urlsession(_:datatask:didreceive:)](https://developer.apple.com/documentation/foundation/urlsessiondatadelegate/urlsession(_:datatask:didreceive:))

# urlSession(\_:dataTask:didReceive:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the data task has received some of the expected data.

## Declaration

```swift
optional func urlSession(_ session: URLSession, dataTask: URLSessionDataTask, didReceive data: Data)
```

## Parameters

- `session`: The session containing the data task that provided data.
- `dataTask`: The data task that provided data.
- `data`: A data object containing the transferred data.

## Mentioned In

- [Fetching website data into memory](../fetching-website-data-into-memory.md)

<a id="Discussion"></a>

## Discussion

Because the data object parameter is often pieced together from a number of different data objects, whenever possible, use the [enumerateBytes(\_:)](../nsdata/enumeratebytes%28__%29.md) method to iterate through the data rather than using the [bytes](../nsdata/bytes.md) method (which flattens the data object into a single memory block).

This delegate method may be called more than once, and each call provides only data received since the previous call. The app is responsible for accumulating this data if needed.

# URLSession:dataTask:didReceiveData: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the data task has received some of the expected data.

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session dataTask:(NSURLSessionDataTask *) dataTask didReceiveData:(NSData *) data;
```

## Parameters

- `session`: The session containing the data task that provided data.
- `dataTask`: The data task that provided data.
- `data`: A data object containing the transferred data.

## Mentioned In

- [Fetching website data into memory](../fetching-website-data-into-memory.md)

<a id="Discussion"></a>

## Discussion

Because the data object parameter is often pieced together from a number of different data objects, whenever possible, use the [enumerateByteRangesUsingBlock:](../nsdata/enumeratebytes%28__%29.md) method to iterate through the data rather than using the [bytes](../nsdata/bytes.md) method (which flattens the data object into a single memory block).

This delegate method may be called more than once, and each call provides only data received since the previous call. The app is responsible for accumulating this data if needed.
