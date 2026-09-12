> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/fonts](https://developer.apple.com/documentation/appkit/fonts)

# Fonts (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Manage the fonts used to display text.

<a id="overview"></a>

## Overview

The [NSFont](nsfont.md) and [NSFontManager](nsfontmanager.md) classes encapsulate and manage font families, sizes, and variations. The [NSFont](nsfont.md) class defines a single object for each distinct font; for efficiency, these objects, which can be rather large, are shared by all the objects in your app. The [NSFontPanel](nsfontpanel.md) class defines the font specification panel that’s presented to the user.

## Topics

### Font Data

- [NSFont](nsfont.md): The representation of a font in an app.
- [NSFontDescriptor](nsfontdescriptor.md): A dictionary of attributes that describe a font.
- [NSFontTraitMask](nsfonttraitmask.md): Constants for isolating specific traits of a font.
- [NSFontFamilyClass](nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontDescriptor.SymbolicTraits](nsfontdescriptor/symbolictraits-swift.struct.md): A symbolic description of the stylistic aspects of a font.
- [NSFontAssetRequest](nsfontassetrequest.md)
- [NSFontSymbolicTraits](nsfontsymbolictraits.md): A symbolic description of stylistic aspects of a font.

### Management

- [NSFontManager](nsfontmanager.md): The center of activity for the font-conversion system.
- [NSFontCollection](nsfontcollection.md): A font collection, which is a group of font descriptors taken together as a single object.
- [NSMutableFontCollection](nsmutablefontcollection.md): A mutable collection of font descriptors taken together as a single object.
- [NSFontCollectionOptions](nsfontcollectionoptions.md): Constants that support font collection management.

## See Also

### Text

- [Text Display](text-display.md): Display text and check spelling.
- [TextKit](textkit.md): Manage text storage and perform custom layout of text-based content in your app’s views.
- [Writing Tools](writing-tools.md): Add support for Writing Tools to your app’s text views.

# Fonts (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Manage the fonts used to display text.

<a id="overview"></a>

## Overview

The [NSFont](nsfont.md) and [NSFontManager](nsfontmanager.md) classes encapsulate and manage font families, sizes, and variations. The [NSFont](nsfont.md) class defines a single object for each distinct font; for efficiency, these objects, which can be rather large, are shared by all the objects in your app. The [NSFontPanel](nsfontpanel.md) class defines the font specification panel that’s presented to the user.

## Topics

### Font Data

- [NSFont](nsfont.md): The representation of a font in an app.
- [NSFontDescriptor](nsfontdescriptor.md): A dictionary of attributes that describe a font.
- [NSFontTraitMask](nsfonttraitmask.md): Constants for isolating specific traits of a font.
- [NSFontFamilyClass](nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontDescriptorSymbolicTraits](nsfontdescriptor/symbolictraits-swift.struct.md): A symbolic description of the stylistic aspects of a font.
- [NSFontAssetRequest](nsfontassetrequest.md)
- [NSFontSymbolicTraits](nsfontsymbolictraits.md): A symbolic description of stylistic aspects of a font.

### Management

- [NSFontManager](nsfontmanager.md): The center of activity for the font-conversion system.
- [NSFontCollection](nsfontcollection.md): A font collection, which is a group of font descriptors taken together as a single object.
- [NSMutableFontCollection](nsmutablefontcollection.md): A mutable collection of font descriptors taken together as a single object.
- [NSFontCollectionOptions](nsfontcollectionoptions.md): Constants that support font collection management.

## See Also

### Text

- [Text Display](text-display.md): Display text and check spelling.
- [TextKit](textkit.md): Manage text storage and perform custom layout of text-based content in your app’s views.
- [Writing Tools](writing-tools.md): Add support for Writing Tools to your app’s text views.
