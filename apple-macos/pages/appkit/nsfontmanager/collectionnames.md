> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/collectionnames](https://developer.apple.com/documentation/appkit/nsfontmanager/collectionnames)

# collectionNames (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.11)

The names of the currently loaded font collections.

> Use [allFontCollectionNames](../nsfontcollection/allfontcollectionnames.md) instead.

## Declaration

```swift
var collectionNames: [Any] { get }
```

## See Also

### Related Documentation

- [fontDescriptors(inCollection:)](fontdescriptors%28incollection_%29.md): Deprecated. Returns an array of the font descriptors in the specified collection.

### Properties

- [applicationOnlyMask](../nsfontcollectionoptions/applicationonlymask.md): Makes the collection available only to the application.
- [delegate](delegate.md): Deprecated. The font manager’s delegate.

# collectionNames (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.11)

The names of the currently loaded font collections.

> Use [allFontCollectionNames](../nsfontcollection/allfontcollectionnames.md) instead.

## Declaration

```objectivec
@property (copy, readonly) NSArray * collectionNames;
```

## See Also

### Related Documentation

- [fontDescriptorsInCollection:](fontdescriptors%28incollection_%29.md): Deprecated. Returns an array of the font descriptors in the specified collection.

### Properties

- [NSFontCollectionApplicationOnlyMask](../nsfontcollectionoptions/applicationonlymask.md): Makes the collection available only to the application.
- [delegate](delegate.md): Deprecated. The font manager’s delegate.
