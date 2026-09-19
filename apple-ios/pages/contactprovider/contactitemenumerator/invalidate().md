> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/contactprovider/contactitemenumerator/invalidate()

# invalidate()

**Framework:** ContactProvider  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Invalidates the enumerator.

## Declaration

```swift
func invalidate() async
```

<a id="discussion"></a>

## Discussion

The system calls this method before terminating the extension. The extension may terminate before this method returns.
