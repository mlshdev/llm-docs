> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactproviderextension/invalidate()](https://developer.apple.com/documentation/contactprovider/contactproviderextension/invalidate())

# invalidate()

**Framework:** ContactProvider  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Invalidates the extension.

## Declaration

```swift
func invalidate() async throws
```

<a id="discussion"></a>

## Discussion

The system calls this method before terminating the extension. The extension may complete termination before this method returns.
