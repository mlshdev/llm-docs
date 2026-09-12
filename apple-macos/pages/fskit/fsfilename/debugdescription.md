> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsfilename/debugdescription](https://developer.apple.com/documentation/fskit/fsfilename/debugdescription)

# debugDescription (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The filename, represented as a potentially lossy conversion to a string.

## Declaration

```swift
var debugDescription: String { get }
```

<a id="discussion"></a>

## Discussion

The exact details of the string conversion may change in the future.

## See Also

### Accessing filename properties

- [data](data.md): The byte sequence of the filename, as a data object.
- [string](string.md): The filename, represented as a Unicode string.

# debugDescription (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The filename, represented as a potentially lossy conversion to a string.

## Declaration

```objectivec
@property (copy, readonly) NSString * debugDescription;
```

<a id="discussion"></a>

## Discussion

The exact details of the string conversion may change in the future.

## See Also

### Accessing filename properties

- [data](data.md): The byte sequence of the filename, as a data object.
- [string](string.md): The filename, represented as a Unicode string.
