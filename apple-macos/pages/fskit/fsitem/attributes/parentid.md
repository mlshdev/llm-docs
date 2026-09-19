> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsitem/attributes/parentid

# parentID (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The identifier of the item’s parent.

## Declaration

```swift
var parentID: FSItem.Identifier { get set }
```

## See Also

### Working with identifier attributes

- [fileID](fileid.md): The item’s file identifier.

# parentID (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The identifier of the item’s parent.

## Declaration

```objectivec
@property (nonatomic) FSItemID parentID;
```

## See Also

### Working with identifier attributes

- [fileID](fileid.md): The item’s file identifier.
