> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/layerhierarchyhostingtransactioncoordinator/init(coder:)](https://developer.apple.com/documentation/browserenginekit/layerhierarchyhostingtransactioncoordinator/init(coder:))

# init(coder:)

**Framework:** BrowserEngineKit  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Creates a transaction coordinator from an encoded representation.

## Declaration

```swift
init?(coder: NSCoder)
```

## Parameters

- `coder`: An object that contains the encoded representation of the transaction coordinator.

<a id="discussion"></a>

## Discussion

This initializer can fail and return `nil` if the specified `coder` fails to decode.

## See Also

### Creating a transaction coordinator

- [init()](init%28%29.md): Creates a transaction coordinator.
