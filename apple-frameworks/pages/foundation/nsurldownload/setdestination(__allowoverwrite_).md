> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurldownload/setdestination(_:allowoverwrite:)](https://developer.apple.com/documentation/foundation/nsurldownload/setdestination(_:allowoverwrite:))

# setDestination(\_:allowOverwrite:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Sets the destination path of the downloaded file.

## Declaration

```swift
func setDestination(_ path: String, allowOverwrite: Bool)
```

## Parameters

- `path`: The path for the downloaded file.
- `allowOverwrite`: [true](https://developer.apple.com/documentation/swift/true) if an existing file at `path` can be replaced, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

If `allowOverwrite` is [false](https://developer.apple.com/documentation/swift/false) and a file already exists at `path`, a unique filename will be created for the downloaded file by appending a number to the filename. The delegate can implement the [download(\_:didCreateDestination:)](../nsurldownloaddelegate/download%28__didcreatedestination_%29.md) delegate method to determine the filename used when the file is written to disk.

<a id="Special-Considerations"></a>

### Special Considerations

An `NSURLDownload` instance ignores multiple calls to this method.

## See Also

### Related Documentation

- [download(\_:decideDestinationWithSuggestedFilename:)](../nsurldownloaddelegate/download%28__decidedestinationwithsuggestedfilename_%29.md): The delegate receives this message when `download` has determined a suggested filename for the downloaded file.
- [download(\_:didCreateDestination:)](../nsurldownloaddelegate/download%28__didcreatedestination_%29.md): Sent when the destination file is created.

### Creating and configuring a download instance

- [init(request:delegate:)](init%28request_delegate_%29.md): Deprecated. Returns an initialized URL download for a URL request and begins to download the data for the request.

# setDestination:allowOverwrite: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Sets the destination path of the downloaded file.

## Declaration

```objectivec
- (void) setDestination:(NSString *) path allowOverwrite:(BOOL) allowOverwrite;
```

## Parameters

- `path`: The path for the downloaded file.
- `allowOverwrite`: [true](https://developer.apple.com/documentation/swift/true) if an existing file at `path` can be replaced, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

If `allowOverwrite` is [false](https://developer.apple.com/documentation/swift/false) and a file already exists at `path`, a unique filename will be created for the downloaded file by appending a number to the filename. The delegate can implement the [download:didCreateDestination:](../nsurldownloaddelegate/download%28__didcreatedestination_%29.md) delegate method to determine the filename used when the file is written to disk.

<a id="Special-Considerations"></a>

### Special Considerations

An `NSURLDownload` instance ignores multiple calls to this method.

## See Also

### Related Documentation

- [download:decideDestinationWithSuggestedFilename:](../nsurldownloaddelegate/download%28__decidedestinationwithsuggestedfilename_%29.md): The delegate receives this message when `download` has determined a suggested filename for the downloaded file.
- [download:didCreateDestination:](../nsurldownloaddelegate/download%28__didcreatedestination_%29.md): Sent when the destination file is created.

### Creating and configuring a download instance

- [initWithRequest:delegate:](init%28request_delegate_%29.md): Deprecated. Returns an initialized URL download for a URL request and begins to download the data for the request.
