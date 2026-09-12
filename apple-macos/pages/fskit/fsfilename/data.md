> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsfilename/data](https://developer.apple.com/documentation/fskit/fsfilename/data)

# data (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The byte sequence of the filename, as a data object.

## Declaration

```swift
var data: Data { get }
```

<a id="discussion"></a>

## Discussion

This property always provides a value.

## See Also

### Accessing filename properties

- [string](string.md): The filename, represented as a Unicode string.
- [debugDescription](debugdescription.md): The filename, represented as a potentially lossy conversion to a string.

# data (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The byte sequence of the filename, as a data object.

## Declaration

```objectivec
@property (readonly) NSData * data;
```

<a id="discussion"></a>

## Discussion

This property always provides a value.

## See Also

### Accessing filename properties

- [string](string.md): The filename, represented as a Unicode string.
- [debugDescription](debugdescription.md): The filename, represented as a potentially lossy conversion to a string.
