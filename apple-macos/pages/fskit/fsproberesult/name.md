> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsproberesult/name](https://developer.apple.com/documentation/fskit/fsproberesult/name)

# name (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The resource name, as found during the probe operation.

## Declaration

```swift
var name: String? { get }
```

<a id="discussion"></a>

## Discussion

This value is non-`nil` unless the [result](result.md) is \`\`FSMatchResult/notRecognized\`. For formats that lack a name, this value may be an empty string. This value can also be an empty string if the format supports a name, but the value isn’t set yet.

## See Also

### Working with result properties

- [containerID](containerid.md): The container identifier, as found during the probe operation.
- [result](result.md): The match result, representing the recognition and usability of a probed resource.
- [FSMatchResult](../fsmatchresult.md): A type that represents the recognition and usability of a probed resource.

# name (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The resource name, as found during the probe operation.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * name;
```

<a id="discussion"></a>

## Discussion

This value is non-`nil` unless the [result](result.md) is \`\`FSMatchResult/notRecognized\`. For formats that lack a name, this value may be an empty string. This value can also be an empty string if the format supports a name, but the value isn’t set yet.

## See Also

### Working with result properties

- [containerID](containerid.md): The container identifier, as found during the probe operation.
- [result](result.md): The match result, representing the recognition and usability of a probed resource.
- [FSMatchResult](../fsmatchresult.md): A type that represents the recognition and usability of a probed resource.
