> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontcollection/name](https://developer.apple.com/documentation/appkit/nsfontcollection/name)

# NSFontCollection.Name (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

The constants represent the standard mutable collection names—these names are included in the list of [allFontCollectionNames](allfontcollectionnames.md)–they have special meaning to the Cocoa font system and should not be hidden or renamed.

## Declaration

```swift
struct Name
```

## Topics

### Type Properties

- [allFonts](name/allfonts.md): All fonts in the system.
- [user](name/user.md): Per-user unmodifiable collection.
- [favorites](name/favorites.md): Font collection of the user’s preferred font descriptors.
- [recentlyUsed](name/recentlyused.md): Font collection automatically maintained by NSFontManager.

### Initializers

- [init(\_:)](name/init%28__%29.md)
- [init(rawValue:)](name/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Naming the Font Collection

- [rename(fromName:visibility:toName:)](rename%28fromname_visibility_toname_%29.md): Renames the font collection with the specified name and visibility to the second name specified.
- [show(\_:withName:visibility:)](show%28__withname_visibility_%29.md): Make the given font collection visible by giving it a name.
- [hide(withName:visibility:)](hide%28withname_visibility_%29.md): Remove from view the named font collection with the specified visibility.
- [allFontCollectionNames](allfontcollectionnames.md): Returns all named collections visible to this process.
- [NSFontCollection.Visibility](visibility.md): Constants that specify the visibility of font collections.

# NSFontCollectionName (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

The constants represent the standard mutable collection names—these names are included in the list of [allFontCollectionNames](allfontcollectionnames.md)–they have special meaning to the Cocoa font system and should not be hidden or renamed.

## Declaration

```objectivec
typedef NSString * NSFontCollectionName;
```

## Topics

### Type Properties

- [NSFontCollectionAllFonts](name/allfonts.md): All fonts in the system.
- [NSFontCollectionUser](name/user.md): Per-user unmodifiable collection.
- [NSFontCollectionFavorites](name/favorites.md): Font collection of the user’s preferred font descriptors.
- [NSFontCollectionRecentlyUsed](name/recentlyused.md): Font collection automatically maintained by NSFontManager.

## See Also

### Naming the Font Collection

- [renameFontCollectionWithName:visibility:toName:error:](rename%28fromname_visibility_toname_%29.md): Renames the font collection with the specified name and visibility to the second name specified.
- [showFontCollection:withName:visibility:error:](show%28__withname_visibility_%29.md): Make the given font collection visible by giving it a name.
- [hideFontCollectionWithName:visibility:error:](hide%28withname_visibility_%29.md): Remove from view the named font collection with the specified visibility.
- [allFontCollectionNames](allfontcollectionnames.md): Returns all named collections visible to this process.
- [NSFontCollectionVisibility](visibility.md): Constants that specify the visibility of font collections.
