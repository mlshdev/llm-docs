> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontcollection/allfontcollectionnames](https://developer.apple.com/documentation/appkit/nsfontcollection/allfontcollectionnames)

# allFontCollectionNames (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Returns all named collections visible to this process.

## Declaration

```swift
class var allFontCollectionNames: [NSFontCollection.Name] { get }
```

<a id="return-value"></a>

## Return Value

`NSString` objects containing the names of all the named collections.

## See Also

### Naming the Font Collection

- [rename(fromName:visibility:toName:)](rename%28fromname_visibility_toname_%29.md): Renames the font collection with the specified name and visibility to the second name specified.
- [show(\_:withName:visibility:)](show%28__withname_visibility_%29.md): Make the given font collection visible by giving it a name.
- [hide(withName:visibility:)](hide%28withname_visibility_%29.md): Remove from view the named font collection with the specified visibility.
- [NSFontCollection.Name](name.md): The constants represent the standard mutable collection names—these names are included in the list of [allFontCollectionNames](allfontcollectionnames.md)–they have special meaning to the Cocoa font system and should not be hidden or renamed.
- [NSFontCollection.Visibility](visibility.md): Constants that specify the visibility of font collections.

# allFontCollectionNames (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Returns all named collections visible to this process.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<NSString *> * allFontCollectionNames;
```

<a id="return-value"></a>

## Return Value

`NSString` objects containing the names of all the named collections.

## See Also

### Naming the Font Collection

- [renameFontCollectionWithName:visibility:toName:error:](rename%28fromname_visibility_toname_%29.md): Renames the font collection with the specified name and visibility to the second name specified.
- [showFontCollection:withName:visibility:error:](show%28__withname_visibility_%29.md): Make the given font collection visible by giving it a name.
- [hideFontCollectionWithName:visibility:error:](hide%28withname_visibility_%29.md): Remove from view the named font collection with the specified visibility.
- [NSFontCollectionName](name.md): The constants represent the standard mutable collection names—these names are included in the list of [allFontCollectionNames](allfontcollectionnames.md)–they have special meaning to the Cocoa font system and should not be hidden or renamed.
- [NSFontCollectionVisibility](visibility.md): Constants that specify the visibility of font collections.
