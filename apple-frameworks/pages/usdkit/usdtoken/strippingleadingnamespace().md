> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdtoken/strippingleadingnamespace()](https://developer.apple.com/documentation/usdkit/usdtoken/strippingleadingnamespace())

# strippingLeadingNamespace()

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns this token with its leading namespace component removed.

## Declaration

```swift
func strippingLeadingNamespace() -> USDToken
```

<a id="return-value"></a>

## Return Value

The token with its leading namespace stripped, or the empty token if no namespace component exists.

## See Also

### Stripping namespaces

- [strippingNamespacePrefix(\_:)](strippingnamespaceprefix%28__%29.md): Returns this token with the given namespace prefix removed.
