> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcdictionary/subscript(_:as:default:)-5ufgs](https://developer.apple.com/documentation/xpc/xpcdictionary/subscript(_:as:default:)-5ufgs)

# subscript(\_:as:default:)

**Framework:** XPC  
**Kind:** Instance Subscript  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Reads and writes the value associated with the given key as a Boolean value, falling back to the given default value.

## Declaration

```swift
subscript(key: String, as type: Bool.Type = Bool.self, default defaultValue: @autoclosure () -> Bool) -> Bool { get }
```

## Parameters

- `key`: The key the look up in the dictionary.
- `type`: The expected type for the returned value.
- `defaultValue`: The value to use if no value for `key` exists or if conversion to `type` fails.

<a id="return-value"></a>

## Return Value

The value associated with key in the dictionary; otherwise, [nil](../../objectivec/nil-227m0.md).

## See Also

### Accessing keys and values

- [keys](keys.md): A collection containing just the keys of the dictionary.
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
