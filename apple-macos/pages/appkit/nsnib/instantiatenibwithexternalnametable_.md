> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsnib/instantiatenibwithexternalnametable:](https://developer.apple.com/documentation/appkit/nsnib/instantiatenibwithexternalnametable:)

# instantiateNibWithExternalNameTable:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Unarchives and instantiates the in-memory contents of the receiver’s nib file, creating a distinct object tree and top level objects.

> Use [instantiateWithOwner:topLevelObjects:](instantiate%28withowner_toplevelobjects_%29.md) instead.

## Declaration

```objectivec
- (BOOL) instantiateNibWithExternalNameTable:(NSDictionary *) externalNameTable;
```

## Parameters

- `externalNameTable`: A dictionary containing entries for the nib file’s owner and top-level objects. See the discussion for more information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the nib file’s contents were instantiated successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This is the primitive method for performing instantiations of a nib file. You may use this method to instantiate a nib file multiple times. Each instantiation of the nib must have a distinct owner object that is responsible for the resulting object tree.

If the nib file requires an owner, the `externalNameTable` parameter must contain the object representing the nib file’s owner (associated with the `NSNibOwner` key). The parameter may optionally include an `NSMutableArray` object to be populated with the top-level objects nib file (associated with the `NSNibTopLevelObjects` key).

## See Also

### Instantiating a Nib

- [instantiateNibWithOwner:topLevelObjects:](instantiatenibwithowner_toplevelobjects_.md): Deprecated. Unarchives and instantiates the in-memory contents of the receiver’s nib file, creating a distinct object tree and set of top level objects.
- [instantiateWithOwner:topLevelObjects:](instantiate%28withowner_toplevelobjects_%29.md): Instantiates objects in the nib file with the specified owner.
