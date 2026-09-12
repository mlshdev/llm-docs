> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontcollection/rename(fromname:visibility:toname:)](https://developer.apple.com/documentation/appkit/nsfontcollection/rename(fromname:visibility:toname:))

# rename(fromName:visibility:toName:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Renames the font collection with the specified name and visibility to the second name specified.

## Declaration

```swift
class func rename(fromName oldName: NSFontCollection.Name, visibility: NSFontCollection.Visibility, toName newName: NSFontCollection.Name) throws
```

## Parameters

- `oldName`: The collection to rename.
- `visibility`: The visibility of the collection to rename.
- `newName`: The new name to give to the collection.

<a id="Discussion"></a>

## Discussion

Named collections are shown by user interfaces such as the Font panel. When you change the collection, you must show it again to see the changes reflected on disk or in the Font panel.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Naming the Font Collection

- [show(\_:withName:visibility:)](show%28__withname_visibility_%29.md): Make the given font collection visible by giving it a name.
- [hide(withName:visibility:)](hide%28withname_visibility_%29.md): Remove from view the named font collection with the specified visibility.
- [allFontCollectionNames](allfontcollectionnames.md): Returns all named collections visible to this process.
- [NSFontCollection.Name](name.md): The constants represent the standard mutable collection names—these names are included in the list of [allFontCollectionNames](allfontcollectionnames.md)–they have special meaning to the Cocoa font system and should not be hidden or renamed.
- [NSFontCollection.Visibility](visibility.md): Constants that specify the visibility of font collections.

# renameFontCollectionWithName:visibility:toName:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Renames the font collection with the specified name and visibility to the second name specified.

## Declaration

```objectivec
+ (BOOL) renameFontCollectionWithName:(NSFontCollectionName) oldName visibility:(NSFontCollectionVisibility) visibility toName:(NSFontCollectionName) newName error:(NSError **) outError;
```

## Parameters

- `oldName`: The collection to rename.
- `visibility`: The visibility of the collection to rename.
- `newName`: The new name to give to the collection.
- `outError`: If unsuccessful, a reference to an `NSFileManager` error object that encapsulates the reason the font collection could not be renamed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the method was successful; [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Named collections are shown by user interfaces such as the Font panel. When you change the collection, you must show it again to see the changes reflected on disk or in the Font panel.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Naming the Font Collection

- [showFontCollection:withName:visibility:error:](show%28__withname_visibility_%29.md): Make the given font collection visible by giving it a name.
- [hideFontCollectionWithName:visibility:error:](hide%28withname_visibility_%29.md): Remove from view the named font collection with the specified visibility.
- [allFontCollectionNames](allfontcollectionnames.md): Returns all named collections visible to this process.
- [NSFontCollectionName](name.md): The constants represent the standard mutable collection names—these names are included in the list of [allFontCollectionNames](allfontcollectionnames.md)–they have special meaning to the Cocoa font system and should not be hidden or renamed.
- [NSFontCollectionVisibility](visibility.md): Constants that specify the visibility of font collections.
