> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neurlfilter/verdict(for:)

# verdict(for:)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Determines if accessing the specified URL is allowed or denied.

## Declaration

```swift
class func verdict(for url: URL) async -> NEURLFilter.Verdict
```

## Parameters

- `url`: The URL to be validated.

<a id="return-value"></a>

## Return Value

A [NEURLFilter.Verdict](verdict.md) that indicates whether the filter allows or denies connecting to the URL. If the verdict is deny, the caller should fail the URL request.

<a id="discussion"></a>

## Discussion

Callers should honor the return verdict to prevent communication with restricted or malicious sites.

## See Also

### Evaluating a URL

- [NEURLFilter.Verdict](verdict.md): A verdict returned by a URL filter.
