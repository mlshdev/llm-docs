> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontcollection/visibility](https://developer.apple.com/documentation/appkit/nsfontcollection/visibility)

# NSFontCollection.Visibility (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants that specify the visibility of font collections.

## Declaration

```swift
struct Visibility
```

## Topics

### Visibility Options

- [process](visibility/process.md): The font collection is visible within this process and is not persistent.
- [user](visibility/user.md): The font collection is visible to all processes and is stored persistently.
- [computer](visibility/computer.md): The font collection is visible to all users and is stored persistently.

### Initializers

- [init(rawValue:)](visibility/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Naming the Font Collection

- [rename(fromName:visibility:toName:)](rename%28fromname_visibility_toname_%29.md): Renames the font collection with the specified name and visibility to the second name specified.
- [show(\_:withName:visibility:)](show%28__withname_visibility_%29.md): Make the given font collection visible by giving it a name.
- [hide(withName:visibility:)](hide%28withname_visibility_%29.md): Remove from view the named font collection with the specified visibility.
- [allFontCollectionNames](allfontcollectionnames.md): Returns all named collections visible to this process.
- [NSFontCollection.Name](name.md): The constants represent the standard mutable collection names—these names are included in the list of [allFontCollectionNames](allfontcollectionnames.md)–they have special meaning to the Cocoa font system and should not be hidden or renamed.

# NSFontCollectionVisibility (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that specify the visibility of font collections.

## Declaration

```objectivec
enum NSFontCollectionVisibility : NSUInteger;
```

## Topics

### Visibility Options

- [NSFontCollectionVisibilityProcess](visibility/process.md): The font collection is visible within this process and is not persistent.
- [NSFontCollectionVisibilityUser](visibility/user.md): The font collection is visible to all processes and is stored persistently.
- [NSFontCollectionVisibilityComputer](visibility/computer.md): The font collection is visible to all users and is stored persistently.

## See Also

### Naming the Font Collection

- [renameFontCollectionWithName:visibility:toName:error:](rename%28fromname_visibility_toname_%29.md): Renames the font collection with the specified name and visibility to the second name specified.
- [showFontCollection:withName:visibility:error:](show%28__withname_visibility_%29.md): Make the given font collection visible by giving it a name.
- [hideFontCollectionWithName:visibility:error:](hide%28withname_visibility_%29.md): Remove from view the named font collection with the specified visibility.
- [allFontCollectionNames](allfontcollectionnames.md): Returns all named collections visible to this process.
- [NSFontCollectionName](name.md): The constants represent the standard mutable collection names—these names are included in the list of [allFontCollectionNames](allfontcollectionnames.md)–they have special meaning to the Cocoa font system and should not be hidden or renamed.
