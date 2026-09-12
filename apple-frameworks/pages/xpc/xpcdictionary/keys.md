> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcdictionary/keys](https://developer.apple.com/documentation/xpc/xpcdictionary/keys)

# keys

**Framework:** XPC  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A collection containing just the keys of the dictionary.

## Declaration

```swift
var keys: [String] { get }
```

<a id="Discussion"></a>

## Discussion

When iterated over, keys appear in this collection in the same order as they occur in the dictionary’s key-value pairs. Each key in the keys collection has a unique value.

> **Note**

>  The complexity of this property is O(\*n\*) over the dictionary’s [count](count.md).

## See Also

### Accessing keys and values

- [values](values.md): A collection containing just the values of the dictionary.
- [subscript(\_:)](subscript%28__%29-4hbmg.md): Reads and writes the value associated with the given key as an XPC dictionary.
- [subscript(\_:)](subscript%28__%29-80fs2.md): Reads and writes the value associated with the given key as a string.
- [subscript(\_:)](subscript%28__%29-gas6.md): Reads and writes the value associated with the given key as a Boolean value.
- [subscript(\_:)](subscript%28__%29-4j21u.md): Reads and writes the value associated with the given key as an XPC object.
- [subscript(\_:)](subscript%28__%29-8gyze.md): Reads and writes the value associated with the given key as a floating point value.
- [subscript(\_:)](subscript%28__%29-4vrsa.md): Reads and writes the value associated with the given key as an unsigned integer value.
- [subscript(\_:)](subscript%28__%29-3i01t.md): Reads and writes the value associated with the given key as a signed integer value.
- [subscript(\_:as:)](subscript%28__as_%29-1mm7n.md): Reads the value associated with the given key as an XPC dictionary.
- [subscript(\_:as:)](subscript%28__as_%29-4zxc8.md): Reads and writes the value associated with the given key as a string.
- [subscript(\_:as:)](subscript%28__as_%29-18db5.md): Reads and writes the value associated with the given key as a Boolean value.
- [subscript(\_:as:)](subscript%28__as_%29-5y39v.md): Reads and writes the value associated with the given key as an XPC object.
- [subscript(\_:as:)](subscript%28__as_%29-qjxa.md): Reads and writes the value associated with the given key as an XPC object.
- [subscript(\_:as:)](subscript%28__as_%29-3mzgc.md): Reads and writes the value associated with the given key as a floating point value.
- [subscript(\_:as:)](subscript%28__as_%29-119cl.md): Reads and writes the value associated with the given key as an integer value.
