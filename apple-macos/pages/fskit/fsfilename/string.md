> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsfilename/string](https://developer.apple.com/documentation/fskit/fsfilename/string)

# string (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The filename, represented as a Unicode string.

## Declaration

```swift
var string: String? { get }
```

<a id="discussion"></a>

## Discussion

If the value of the filename’s [data](data.md) is not a valid UTF-8 byte sequence, this property is empty.

## See Also

### Accessing filename properties

- [data](data.md): The byte sequence of the filename, as a data object.
- [debugDescription](debugdescription.md): The filename, represented as a potentially lossy conversion to a string.

# string (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The filename, represented as a Unicode string.

## Declaration

```objectivec
@property (readonly, nullable) NSString * string;
```

<a id="discussion"></a>

## Discussion

If the value of the filename’s [data](data.md) is not a valid UTF-8 byte sequence, this property is empty.

## See Also

### Accessing filename properties

- [data](data.md): The byte sequence of the filename, as a data object.
- [debugDescription](debugdescription.md): The filename, represented as a potentially lossy conversion to a string.
