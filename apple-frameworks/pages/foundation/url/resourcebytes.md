> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/resourcebytes](https://developer.apple.com/documentation/foundation/url/resourcebytes)

# resourceBytes

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The URL’s resource data, as an asynchronous sequence of bytes.

## Declaration

```swift
var resourceBytes: URL.AsyncBytes { get }
```

<a id="Discussion"></a>

## Discussion

Use this property with Swift’s `for`-`await`-`in` syntax, to read the contents of a URL byte-by-byte, like this:

```swift
guard let url = URL(string: "https://www.example.com") else {
    return
}
do {
    // Read each byte of the data as it becomes available.
    for try await byte in url.resourceBytes
    {
        // Do something with byte.
    }
} catch {
    print ("Error: \(error)")
}
```

To wait for the entire resource to load, use the [URLSession](../urlsession.md) method [data(from:delegate:)](../urlsession/data%28from_delegate_%29.md) with the `await` keyword. [URLSession](../urlsession.md) also offers methods to upload data to a URL endpoint and download a URL’s contents to a file.

## See Also

### Loading URL contents asynchronously

- [lines](lines.md): The URL’s resource data, as an asynchronous sequence of lines of text.
- [URL.AsyncBytes](asyncbytes.md): An asynchronous sequence of bytes loaded from the URL.
