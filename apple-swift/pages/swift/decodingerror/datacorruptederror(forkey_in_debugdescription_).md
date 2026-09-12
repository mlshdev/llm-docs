> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/decodingerror/datacorruptederror(forkey:in:debugdescription:)](https://developer.apple.com/documentation/swift/decodingerror/datacorruptederror(forkey:in:debugdescription:))

# dataCorruptedError(forKey:in:debugDescription:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new `.dataCorrupted` error using a constructed coding path and the given debug description.

## Declaration

```swift
static func dataCorruptedError<C>(forKey key: C.Key, in container: C, debugDescription: String) -> DecodingError where C : KeyedDecodingContainerProtocol
```

<a id="return-value"></a>

## Return Value

A new `.dataCorrupted` error with the given information.

<a id="discussion"></a>

## Discussion

The coding path for the returned error is constructed by appending the given key to the given container’s coding path.

- param key: The key which caused the failure.
- param container: The container in which the corrupted data was accessed.
- param debugDescription: A description of the error to aid in debugging.
