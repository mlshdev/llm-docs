> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundsupport/playgroundkeyvaluestore/3029534-subscript](https://developer.apple.com/documentation/playgroundsupport/playgroundkeyvaluestore/3029534-subscript)

# subscript(\_:)

**Framework:** Playground Support  
**Kind:** Subscript  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

Reads or stores the value associated with the given key in the key-value store.

## Declaration

```swift
subscript(key: String) -> PlaygroundValue? { get set }
```

## Parameters

- `key`: The key to find in the key-value store.

<a id="return_value"></a>

## Return Value

The value associated with the `key` parameter.

## See Also

### Persisting Data

- [current](3029533-current.md): A reference to the key-value store for the current playground book.
