> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xpc/xpcdictionary/copy(into:)

# copy(into:)

**Framework:** XPC  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Copies the keys and values of the dictionary to a different dictionary.

## Declaration

```swift
func copy(into destination: XPCDictionary)
```

## Parameters

- `destination`: The dictionary to copy the keys and values into.

## See Also

### Creating a dictionary

- [init()](init%28%29.md): Creates an empty dictionary.
- [init(\_:)](init%28__%29.md): Creates a dictionary using the keys and values in the specified object parameter.
