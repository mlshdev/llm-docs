> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorlist](https://developer.apple.com/documentation/appkit/nscolorlist)

# NSColorList (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An ordered list of color objects, identified by keys.

## Declaration

```swift
class NSColorList
```

<a id="overview"></a>

## Overview

A color list manages a list of [NSColor](nscolor.md) objects, each of which has an associated name. The [NSColorPanel](nscolorpanel.md) list mode color picker uses instances of [NSColorList](nscolorlist.md) to represent any lists of colors that come with the system, as well as any lists the user creates. An app can use a color list to manage document-specific color lists.

## Topics

### Creating Lists of Colors

- [init(name:)](nscolorlist/init%28name_%29.md): Initializes and returns a color list, registering it under the specified name if it isn’t in use already.
- [init(name:fromFile:)](nscolorlist/init%28name_fromfile_%29.md): Initializes and returns a color list from the specified file, registering it under the specified name if it isn’t in use already.

### Getting Lists of Colors

- [availableColorLists](nscolorlist/availablecolorlists.md): Returns an array of all color lists found in the standard color list directories.
- [init(named:)](nscolorlist/init%28named_%29.md): Searches the available color lists array and returns the color list with the specified name.

### Getting Information About Lists of Colors

- [name](nscolorlist/name-swift.property.md): The name of the color list.
- [NSColorList.Name](nscolorlist/name-swift.typealias.md): The name assigned to a color list.
- [isEditable](nscolorlist/iseditable.md): A Boolean value that indicates whether the color list can be modified.

### Managing Colors By Key

- [allKeys](nscolorlist/allkeys.md): An array of the keys by which the color objects are stored in the color list.
- [color(withKey:)](nscolorlist/color%28withkey_%29.md): Returns the color object associated with the specified key.
- [insertColor(\_:key:at:)](nscolorlist/insertcolor%28__key_at_%29.md): Inserts the specified color at the specified location in the color list.
- [removeColor(withKey:)](nscolorlist/removecolor%28withkey_%29.md): Removes the color associated with the specified key from the color list.
- [setColor(\_:forKey:)](nscolorlist/setcolor%28__forkey_%29.md): Associates the specified color object with the specified key.

### Writing and Removing Color List Files

- [write(to:)](nscolorlist/write%28to_%29.md): Saves the color list to the file at the specified URL.
- [removeFile()](nscolorlist/removefile%28%29.md): Removes the file from which the list was created, if the file is in a standard search path and owned by the user.
- [write(toFile:)](nscolorlist/write%28tofile_%29.md): Deprecated. Saves the color list to the file at the specified path.

### Notifications

- [didChangeNotification](nscolorlist/didchangenotification.md): Posted whenever a color list changes.

### Structures

- [NSColorList.DidChangeMessage](nscolorlist/didchangemessage.md)

### Initializers

- [init(coder:)](nscolorlist/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Colors

- [NSColor](nscolor.md): An object that stores color data and sometimes opacity (alpha value).
- [NSColorSpace](nscolorspace.md): An object that represents a custom color space.

# NSColorList (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An ordered list of color objects, identified by keys.

## Declaration

```objectivec
@interface NSColorList : NSObject
```

<a id="overview"></a>

## Overview

A color list manages a list of [NSColor](nscolor.md) objects, each of which has an associated name. The [NSColorPanel](nscolorpanel.md) list mode color picker uses instances of [NSColorList](nscolorlist.md) to represent any lists of colors that come with the system, as well as any lists the user creates. An app can use a color list to manage document-specific color lists.

## Topics

### Creating Lists of Colors

- [initWithName:](nscolorlist/init%28name_%29.md): Initializes and returns a color list, registering it under the specified name if it isn’t in use already.
- [initWithName:fromFile:](nscolorlist/init%28name_fromfile_%29.md): Initializes and returns a color list from the specified file, registering it under the specified name if it isn’t in use already.

### Getting Lists of Colors

- [availableColorLists](nscolorlist/availablecolorlists.md): Returns an array of all color lists found in the standard color list directories.
- [colorListNamed:](nscolorlist/init%28named_%29.md): Searches the available color lists array and returns the color list with the specified name.

### Getting Information About Lists of Colors

- [name](nscolorlist/name-swift.property.md): The name of the color list.
- [NSColorListName](nscolorlist/name-swift.typealias.md): The name assigned to a color list.
- [editable](nscolorlist/iseditable.md): A Boolean value that indicates whether the color list can be modified.

### Managing Colors By Key

- [allKeys](nscolorlist/allkeys.md): An array of the keys by which the color objects are stored in the color list.
- [colorWithKey:](nscolorlist/color%28withkey_%29.md): Returns the color object associated with the specified key.
- [insertColor:key:atIndex:](nscolorlist/insertcolor%28__key_at_%29.md): Inserts the specified color at the specified location in the color list.
- [removeColorWithKey:](nscolorlist/removecolor%28withkey_%29.md): Removes the color associated with the specified key from the color list.
- [setColor:forKey:](nscolorlist/setcolor%28__forkey_%29.md): Associates the specified color object with the specified key.

### Writing and Removing Color List Files

- [writeToURL:error:](nscolorlist/write%28to_%29.md): Saves the color list to the file at the specified URL.
- [removeFile](nscolorlist/removefile%28%29.md): Removes the file from which the list was created, if the file is in a standard search path and owned by the user.
- [writeToFile:](nscolorlist/write%28tofile_%29.md): Deprecated. Saves the color list to the file at the specified path.

### Notifications

- [NSColorListDidChangeNotification](nscolorlist/didchangenotification.md): Posted whenever a color list changes.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Colors

- [NSColor](nscolor.md): An object that stores color data and sometimes opacity (alpha value).
- [NSColorSpace](nscolorspace.md): An object that represents a custom color space.
