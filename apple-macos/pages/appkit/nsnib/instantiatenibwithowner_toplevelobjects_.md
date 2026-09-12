> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsnib/instantiatenibwithowner:toplevelobjects:](https://developer.apple.com/documentation/appkit/nsnib/instantiatenibwithowner:toplevelobjects:)

# instantiateNibWithOwner:topLevelObjects:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.8)

Unarchives and instantiates the in-memory contents of the receiver’s nib file, creating a distinct object tree and set of top level objects.

> Use [instantiateWithOwner:topLevelObjects:](instantiate%28withowner_toplevelobjects_%29.md) instead.

## Declaration

```objectivec
- (BOOL) instantiateNibWithOwner:(id) owner topLevelObjects:(NSArray **) topLevelObjects;
```

## Parameters

- `owner`: The object to use as the owner of the nib file. If the nib file has an owner, you must specify a valid object for this parameter.
- `topLevelObjects`: On input, a variable capable of holding an `NSArray` object. On output, this variable contains an autoreleased `NSArray` object containing the top-level objects from the nib file. You may specify `nil` for this parameter if you are not interested in the top-level objects.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the nib file’s contents were instantiated successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You may use this method to instantiate a nib file multiple times. This is a convenience method that composes the name-table dictionary and invokes the [instantiateNibWithExternalNameTable:](instantiatenibwithexternalnametable_.md) method, passing it the name table.

## See Also

### Instantiating a Nib

- [instantiateNibWithExternalNameTable:](instantiatenibwithexternalnametable_.md): Deprecated. Unarchives and instantiates the in-memory contents of the receiver’s nib file, creating a distinct object tree and top level objects.
- [instantiateWithOwner:topLevelObjects:](instantiate%28withowner_toplevelobjects_%29.md): Instantiates objects in the nib file with the specified owner.
