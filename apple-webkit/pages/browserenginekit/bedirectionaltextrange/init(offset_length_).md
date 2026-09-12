> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bedirectionaltextrange/init(offset:length:)](https://developer.apple.com/documentation/browserenginekit/bedirectionaltextrange/init(offset:length:))

# init(offset:length:)

**Framework:** BrowserEngineKit  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Creates a range for a text selection that also specifies a direction.

## Declaration

```swift
init(offset: Int, length: Int)
```

<a id="discussion"></a>

## Discussion

The sign of the `length` argument determines the selection’s direction from the `offset` argument.

## See Also

### Creating a directional text range

- [init()](init%28%29.md): Creates an empty directional text range.
