> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlhandle/writedata:](https://developer.apple.com/documentation/foundation/nsurlhandle/writedata:)

# writeData:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Attempts to write a specified set of data to the location specified by the receiver’s URL.

> Use [NSURLConnection](../nsurlconnection.md) or [NSURLDownload](../nsurldownload.md) instead; see [URL Loading System](../url-loading-system.md).

## Declaration

```objectivec
- (BOOL) writeData:(NSData *) data;
```

## Parameters

- `data`: The data to write.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Must be overridden by subclasses.
