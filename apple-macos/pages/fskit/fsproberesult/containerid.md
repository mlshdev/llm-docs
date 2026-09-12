> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsproberesult/containerid](https://developer.apple.com/documentation/fskit/fsproberesult/containerid)

# containerID (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The container identifier, as found during the probe operation.

## Declaration

```swift
var containerID: FSContainerIdentifier? { get }
```

<a id="discussion"></a>

## Discussion

This value is non-`nil` unless the result is [FSMatchResult.notRecognized](../fsmatchresult/notrecognized.md). For formats that lack a durable UUID on which to base a container identifier — which is only legal for a [FSUnaryFileSystem](../fsunaryfilesystem.md) — this value may be a random UUID.

## See Also

### Working with result properties

- [name](name.md): The resource name, as found during the probe operation.
- [result](result.md): The match result, representing the recognition and usability of a probed resource.
- [FSMatchResult](../fsmatchresult.md): A type that represents the recognition and usability of a probed resource.

# containerID (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The container identifier, as found during the probe operation.

## Declaration

```objectivec
@property (readonly, nullable) FSContainerIdentifier * containerID;
```

<a id="discussion"></a>

## Discussion

This value is non-`nil` unless the result is [FSMatchResultNotRecognized](../fsmatchresult/notrecognized.md). For formats that lack a durable UUID on which to base a container identifier — which is only legal for a [FSUnaryFileSystem](../fsunaryfilesystem.md) — this value may be a random UUID.

## See Also

### Working with result properties

- [name](name.md): The resource name, as found during the probe operation.
- [result](result.md): The match result, representing the recognition and usability of a probed resource.
- [FSMatchResult](../fsmatchresult.md): A type that represents the recognition and usability of a probed resource.
