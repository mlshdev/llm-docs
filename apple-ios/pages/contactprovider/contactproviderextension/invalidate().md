> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/contactprovider/contactproviderextension/invalidate()

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
