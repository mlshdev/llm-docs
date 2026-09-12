> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdtoken/strippingnamespaceprefix(_:)](https://developer.apple.com/documentation/usdkit/usdtoken/strippingnamespaceprefix(_:))

# strippingNamespacePrefix(\_:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns this token with the given namespace prefix removed.

## Declaration

```swift
func strippingNamespacePrefix(_ prefix: USDToken) -> USDToken?
```

## Parameters

- `prefix`: The namespace prefix to strip.

<a id="return-value"></a>

## Return Value

The token with `prefix` removed, or `nil` if the prefix does not match.

<a id="discussion"></a>

## Discussion

Matching is done at namespace boundaries.

## See Also

### Stripping namespaces

- [strippingLeadingNamespace()](strippingleadingnamespace%28%29.md): Returns this token with its leading namespace component removed.
