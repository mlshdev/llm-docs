> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcarray/subscript(_:as:)-9ukjj](https://developer.apple.com/documentation/xpc/xpcarray/subscript(_:as:)-9ukjj)

# subscript(\_:as:)

**Framework:** XPC  
**Kind:** Instance Subscript  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Reads and writes the value at the given index as a string.

## Declaration

```swift
subscript(index: Int, as type: String.Type = String.self) -> String? { get }
```

## Parameters

- `index`: The position of the element to access.
- `type`: The expected type for the returned value.

<a id="return-value"></a>

## Return Value

The value at the specified index in the array, otherwise [nil](../../objectivec/nil-227m0.md).

## See Also

### Accessing elements

- [subscript(\_:)](subscript%28__%29-1s7qq.md): Reads and writes the value at the given index as an XPC dictionary.
- [subscript(\_:)](subscript%28__%29-6c9gh.md): Reads and writes the value at the given index as a string.
- [subscript(\_:)](subscript%28__%29-i6v5.md): Reads and writes the value at the given index as a Boolean value.
- [subscript(\_:)](subscript%28__%29-56wjj.md): Reads and writes the value at the given index as an XPC object.
- [subscript(\_:)](subscript%28__%29-8wubg.md): Reads and writes the value at the given index as a floating point value.
- [subscript(\_:)](subscript%28__%29-9x9ho.md): Reads and writes the value at the given index as an unsigned integer.
- [subscript(\_:)](subscript%28__%29-2f94n.md): Reads and writes the value at the given index as a signed integer.
- [subscript(\_:as:)](subscript%28__as_%29-3ae6x.md): Reads the value associated with the given key as an XPC dictionary.
- [subscript(\_:as:)](subscript%28__as_%29-1bilh.md): Reads and writes the value at the given index as a Boolean value.
- [subscript(\_:as:)](subscript%28__as_%29-931lh.md): Reads and writes the value at the given index as an XPC object.
- [subscript(\_:as:)](subscript%28__as_%29-3tgp4.md): Reads and writes the value at the given index as an XPC object.
- [subscript(\_:as:)](subscript%28__as_%29-2hql9.md): Reads and writes the value at the given index as a floating point value.
- [subscript(\_:as:)](subscript%28__as_%29-6grs4.md): Reads and writes the value at the given index as an integer value.
- [subscript(\_:as:default:)](subscript%28__as_default_%29-2bn95.md): Reads and writes the value at the given index as a Boolean value, falling back to the given default value.
- [subscript(\_:as:default:)](subscript%28__as_default_%29-3k2qm.md): Reads and writes the value at the given index as a floating point value, falling back to the given default value.
