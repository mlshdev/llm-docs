> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontcollection](https://developer.apple.com/documentation/appkit/nsfontcollection)

# NSFontCollection (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.7+

A font collection, which is a group of font descriptors taken together as a single object.

## Declaration

```swift
class NSFontCollection
```

<a id="overview"></a>

## Overview

You can publicize the font collection as a named collection and it is presented through the System user interface such as the font panel and Font Book. The queries can be modified using the [NSMutableFontCollection](nsmutablefontcollection.md) subclass.

## Topics

### Creating Font Collections

- [init(descriptors:)](nsfontcollection/init%28descriptors_%29.md): Returns a font collection matching the given descriptors.
- [init(locale:)](nsfontcollection/init%28locale_%29.md): Returns a collection of fonts matching the given locale.
- [init(name:)](nsfontcollection/init%28name_%29.md): Creates a named font collection object.
- [init(name:visibility:)](nsfontcollection/init%28name_visibility_%29.md): Creates a font collection with the specified name and font visibility.
- [withAllAvailableDescriptors](nsfontcollection/withallavailabledescriptors.md): The font collection that matches all registered fonts.

### Naming the Font Collection

- [rename(fromName:visibility:toName:)](nsfontcollection/rename%28fromname_visibility_toname_%29.md): Renames the font collection with the specified name and visibility to the second name specified.
- [show(\_:withName:visibility:)](nsfontcollection/show%28__withname_visibility_%29.md): Make the given font collection visible by giving it a name.
- [hide(withName:visibility:)](nsfontcollection/hide%28withname_visibility_%29.md): Remove from view the named font collection with the specified visibility.
- [allFontCollectionNames](nsfontcollection/allfontcollectionnames.md): Returns all named collections visible to this process.
- [NSFontCollection.Name](nsfontcollection/name.md): The constants represent the standard mutable collection names—these names are included in the list of [allFontCollectionNames](nsfontcollection/allfontcollectionnames.md)–they have special meaning to the Cocoa font system and should not be hidden or renamed.
- [NSFontCollection.Visibility](nsfontcollection/visibility.md): Constants that specify the visibility of font collections.

### Getting the Font Descriptors

- [matchingDescriptors](nsfontcollection/matchingdescriptors.md): An array of font descriptors matching the logical descriptors.
- [matchingDescriptors(forFamily:)](nsfontcollection/matchingdescriptors%28forfamily_%29.md): Returns an array of font descriptors matching the logical descriptors for the given font family.
- [matchingDescriptors(forFamily:options:)](nsfontcollection/matchingdescriptors%28forfamily_options_%29.md): Returns an array of font descriptors matching the logical descriptors for the given font family and options.
- [matchingDescriptors(options:)](nsfontcollection/matchingdescriptors%28options_%29.md): Returns an array of font descriptors matching the logical descriptors with the given options.
- [NSFontCollectionMatchingOptionKey](nsfontcollectionmatchingoptionkey.md): These constants are used by the [matchingDescriptors(options:)](nsfontcollection/matchingdescriptors%28options_%29.md) and [matchingDescriptors(forFamily:options:)](nsfontcollection/matchingdescriptors%28forfamily_options_%29.md) options dictionary parameters.
- [queryDescriptors](nsfontcollection/querydescriptors.md): An array of font descriptors whose matching results produce the collection’s matching descriptors.
- [exclusionDescriptors](nsfontcollection/exclusiondescriptors.md): A list of query font descriptors whose matching results are excluded from the list of matching descriptors.

### Responding to Changes

- [didChangeNotification](nsfontcollection/didchangenotification.md): Posted whenever a font collection is changed.
- [NSFontCollection.UserInfoKey](nsfontcollection/userinfokey.md): These constants are used as keys in the [didChangeNotification](nsfontcollection/didchangenotification.md) `userInfo` dictionary to indicate the changes that have taken place.
- [NSFontCollection.ActionTypeKey](nsfontcollection/actiontypekey.md): The following actions are possible values of the [actionUserInfoKey](nsfontcollection/actionuserinfokey.md) in the [didChangeNotification](nsfontcollection/didchangenotification.md) `userInfo` method.

### Structures

- [NSFontCollection.DidChangeMessage](nsfontcollection/didchangemessage.md)

### Initializers

- [init(coder:)](nsfontcollection/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSMutableFontCollection](nsmutablefontcollection.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSMutableCopying](https://developer.apple.com/documentation/foundation/nsmutablecopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Management

- [NSFontManager](nsfontmanager.md): The center of activity for the font-conversion system.
- [NSMutableFontCollection](nsmutablefontcollection.md): A mutable collection of font descriptors taken together as a single object.
- [NSFontCollectionOptions](nsfontcollectionoptions.md): Constants that support font collection management.

# NSFontCollection (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.7+

A font collection, which is a group of font descriptors taken together as a single object.

## Declaration

```objectivec
@interface NSFontCollection : NSObject
```

<a id="overview"></a>

## Overview

You can publicize the font collection as a named collection and it is presented through the System user interface such as the font panel and Font Book. The queries can be modified using the [NSMutableFontCollection](nsmutablefontcollection.md) subclass.

## Topics

### Creating Font Collections

- [fontCollectionWithDescriptors:](nsfontcollection/init%28descriptors_%29.md): Returns a font collection matching the given descriptors.
- [fontCollectionWithLocale:](nsfontcollection/init%28locale_%29.md): Returns a collection of fonts matching the given locale.
- [fontCollectionWithName:](nsfontcollection/init%28name_%29.md): Creates a named font collection object.
- [fontCollectionWithName:visibility:](nsfontcollection/init%28name_visibility_%29.md): Creates a font collection with the specified name and font visibility.
- [fontCollectionWithAllAvailableDescriptors](nsfontcollection/withallavailabledescriptors.md): The font collection that matches all registered fonts.

### Naming the Font Collection

- [renameFontCollectionWithName:visibility:toName:error:](nsfontcollection/rename%28fromname_visibility_toname_%29.md): Renames the font collection with the specified name and visibility to the second name specified.
- [showFontCollection:withName:visibility:error:](nsfontcollection/show%28__withname_visibility_%29.md): Make the given font collection visible by giving it a name.
- [hideFontCollectionWithName:visibility:error:](nsfontcollection/hide%28withname_visibility_%29.md): Remove from view the named font collection with the specified visibility.
- [allFontCollectionNames](nsfontcollection/allfontcollectionnames.md): Returns all named collections visible to this process.
- [NSFontCollectionName](nsfontcollection/name.md): The constants represent the standard mutable collection names—these names are included in the list of [allFontCollectionNames](nsfontcollection/allfontcollectionnames.md)–they have special meaning to the Cocoa font system and should not be hidden or renamed.
- [NSFontCollectionVisibility](nsfontcollection/visibility.md): Constants that specify the visibility of font collections.

### Getting the Font Descriptors

- [matchingDescriptors](nsfontcollection/matchingdescriptors.md): An array of font descriptors matching the logical descriptors.
- [matchingDescriptorsForFamily:](nsfontcollection/matchingdescriptors%28forfamily_%29.md): Returns an array of font descriptors matching the logical descriptors for the given font family.
- [matchingDescriptorsForFamily:options:](nsfontcollection/matchingdescriptors%28forfamily_options_%29.md): Returns an array of font descriptors matching the logical descriptors for the given font family and options.
- [matchingDescriptorsWithOptions:](nsfontcollection/matchingdescriptors%28options_%29.md): Returns an array of font descriptors matching the logical descriptors with the given options.
- [NSFontCollectionMatchingOptionKey](nsfontcollectionmatchingoptionkey.md): These constants are used by the [matchingDescriptorsWithOptions:](nsfontcollection/matchingdescriptors%28options_%29.md) and [matchingDescriptorsForFamily:options:](nsfontcollection/matchingdescriptors%28forfamily_options_%29.md) options dictionary parameters.
- [queryDescriptors](nsfontcollection/querydescriptors.md): An array of font descriptors whose matching results produce the collection’s matching descriptors.
- [exclusionDescriptors](nsfontcollection/exclusiondescriptors.md): A list of query font descriptors whose matching results are excluded from the list of matching descriptors.

### Responding to Changes

- [NSFontCollectionDidChangeNotification](nsfontcollection/didchangenotification.md): Posted whenever a font collection is changed.
- [NSFontCollectionUserInfoKey](nsfontcollection/userinfokey.md): These constants are used as keys in the [NSFontCollectionDidChangeNotification](nsfontcollection/didchangenotification.md) `userInfo` dictionary to indicate the changes that have taken place.
- [NSFontCollectionActionTypeKey](nsfontcollection/actiontypekey.md): The following actions are possible values of the [NSFontCollectionActionKey](nsfontcollection/actionuserinfokey.md) in the [NSFontCollectionDidChangeNotification](nsfontcollection/didchangenotification.md) `userInfo` method.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSMutableFontCollection](nsmutablefontcollection.md)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSMutableCopying](https://developer.apple.com/documentation/foundation/nsmutablecopying)

## See Also

### Management

- [NSFontManager](nsfontmanager.md): The center of activity for the font-conversion system.
- [NSMutableFontCollection](nsmutablefontcollection.md): A mutable collection of font descriptors taken together as a single object.
- [NSFontCollectionOptions](nsfontcollectionoptions.md): Constants that support font collection management.
