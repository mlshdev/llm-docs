> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/loadnibnamed(_:owner:toplevelobjects:)](https://developer.apple.com/documentation/foundation/bundle/loadnibnamed(_:owner:toplevelobjects:))

# loadNibNamed(\_:owner:topLevelObjects:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Loads a nib from the bundle with the specified file name and owner.

## Declaration

```swift
func loadNibNamed(_ nibName: NSNib.Name, owner: Any?, topLevelObjects: AutoreleasingUnsafeMutablePointer<NSArray?>?) -> Bool
```

## Parameters

- `nibName`: The name of the nib.
- `owner`: The object that will be the nib’s owner.
- `topLevelObjects`: This by-reference parameter is populated with the top level objects of the nib.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the nib file was loaded successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Unlike legacy methods, the objects adhere to the standard cocoa memory management rules; it is necessary to keep a strong reference to them by using IBOutlets or holding a reference to the array to prevent the nib contents from being deallocated.

Outlets to top-level objects should be strong references to demonstrate ownership and prevent deallocation.

For more information on Nibs, see [NSNib](https://developer.apple.com/documentation/appkit/nsnib).

## See Also

### Loading nib files

- [loadNibNamed(\_:owner:options:)](loadnibnamed%28__owner_options_%29.md): Deprecated. Unarchives the contents of a nib file located in the receiver’s bundle.

# loadNibNamed:owner:topLevelObjects: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Loads a nib from the bundle with the specified file name and owner.

## Declaration

```objectivec
- (BOOL) loadNibNamed:(NSNibName) nibName owner:(id) owner topLevelObjects:(NSArray **) topLevelObjects;
```

## Parameters

- `nibName`: The name of the nib.
- `owner`: The object that will be the nib’s owner.
- `topLevelObjects`: This by-reference parameter is populated with the top level objects of the nib.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the nib file was loaded successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Unlike legacy methods, the objects adhere to the standard cocoa memory management rules; it is necessary to keep a strong reference to them by using IBOutlets or holding a reference to the array to prevent the nib contents from being deallocated.

Outlets to top-level objects should be strong references to demonstrate ownership and prevent deallocation.

For more information on Nibs, see [NSNib](https://developer.apple.com/documentation/appkit/nsnib).

## See Also

### Loading nib files

- [loadNibNamed:owner:options:](loadnibnamed%28__owner_options_%29.md): Deprecated. Unarchives the contents of a nib file located in the receiver’s bundle.
- [loadNibNamed:owner:](../nsbundle/loadnibnamed_owner_.md): Deprecated. Unarchives the contents of the nib file and links them to a specific owner object.
- [loadNibFile:externalNameTable:withZone:](../nsbundle/loadnibfile_externalnametable_withzone_-c.type.method.md): Deprecated. Unarchives the contents of the nib file and links them to objects in your program.
- [loadNibFile:externalNameTable:withZone:](../nsbundle/loadnibfile_externalnametable_withzone_-c.method.md): Deprecated. Unarchives the contents of a nib file located in the receiver’s bundle.
