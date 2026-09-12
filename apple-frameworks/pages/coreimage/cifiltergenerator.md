> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifiltergenerator](https://developer.apple.com/documentation/coreimage/cifiltergenerator)

# CIFilterGenerator (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** macOS 10.5+

An object that creates and configures chains of individual image filters.

## Declaration

```swift
class CIFilterGenerator
```

<a id="overview"></a>

## Overview

The `CIFilterGenerator` class provides methods for creating a [CIFilter](cifilter-swift.class.md) object by chaining together existing `CIFilter` objects to create complex effects. (A **filter chain** refers to the `CIFilter` objects that are connected in the `CIFilterGenerator` object.) The complex effect can be encapsulated as a [CIFilterGenerator](cifiltergenerator.md) object and saved as a file so that it can be used again. The **filter generator file** contains an archived instance  of all the `CIFilter` objects that are chained together.

Any filter generator files that you copy to `/Library/Graphics/Image Units/` are loaded when any of the loading methods provided by the [CIPlugIn](ciplugin.md) class are invoked. A `CIFilterGenerator` object is registered by its filename or, if present, by a class attribute that you supply in its description.

You can create a  `CIFilterGenerator` object  programmatically, using the methods provided by the `CIFilterGenerator` class, or by using the editor view provided by Core Image.

## Topics

### Initializing a Filter Generator Object

- [init(contentsOf:)](cifiltergenerator/init%28contentsof_%29.md): Initializes a filter generator object with the contents of a filter generator file.

### Connecting and Disconnecting Objects

- [connect(\_:withKey:to:withKey:)](cifiltergenerator/connect%28__withkey_to_withkey_%29.md): Adds an object to the filter chain.
- [disconnectObject(\_:withKey:to:withKey:)](cifiltergenerator/disconnectobject%28__withkey_to_withkey_%29.md): Removes the connection between two objects in the filter chain.

### Managing Exported Keys

- [exportedKeys](cifiltergenerator/exportedkeys.md): Returns an array of the exported keys.
- [exportKey(\_:from:withName:)](cifiltergenerator/exportkey%28__from_withname_%29.md): Exports an input or output key of an object in the filter chain.
- [removeExportedKey(\_:)](cifiltergenerator/removeexportedkey%28__%29.md): Removes a key that was previously exported.
- [setAttributes(\_:forExportedKey:)](cifiltergenerator/setattributes%28__forexportedkey_%29.md): Sets a dictionary of attributes for an exported key.

### Setting and Getting Class Attributes

- [classAttributes](cifiltergenerator/classattributes.md): The class attributes associated with the filter.

### Archiving a Filter Generator Object

- [write(to:atomically:)](cifiltergenerator/write%28to_atomically_%29.md): Archives a filter generator object to a filter generator file.

### Registering a Filter Chain

- [registerFilterName(\_:)](cifiltergenerator/registerfiltername%28__%29.md): Registers the name associated with a filter chain.

### Creating a Filter from a Filter Chain

- [filter()](cifiltergenerator/filter%28%29.md): Creates a filter object based on the filter chain.

### Constants

- [Exported Keys](exported-keys.md): Keys for the exported parameters of a filter generator object.

### Initializers

- [init(coder:)](cifiltergenerator/init%28coder_%29.md)
- [init(contentsOfURL:)](cifiltergenerator/init%28contentsofurl_%29-4nqjf.md)
- [init(contentsOfURL:)](cifiltergenerator/init%28contentsofurl_%29-8q8ic.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CIFilterConstructor](cifilterconstructor.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Image Units

- [CIPlugIn](ciplugin.md): The mechanism for loading image units in macOS.
- [CIPlugInRegistration](cipluginregistration.md): The interface for loading Core Image image units.
- [CIFilterConstructor](cifilterconstructor.md): A general interface for objects that produce filters.

# CIFilterGenerator (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** macOS 10.5+

An object that creates and configures chains of individual image filters.

## Declaration

```objectivec
@interface CIFilterGenerator : NSObject
```

<a id="overview"></a>

## Overview

The `CIFilterGenerator` class provides methods for creating a [CIFilter](cifilter-swift.class.md) object by chaining together existing `CIFilter` objects to create complex effects. (A **filter chain** refers to the `CIFilter` objects that are connected in the `CIFilterGenerator` object.) The complex effect can be encapsulated as a [CIFilterGenerator](cifiltergenerator.md) object and saved as a file so that it can be used again. The **filter generator file** contains an archived instance  of all the `CIFilter` objects that are chained together.

Any filter generator files that you copy to `/Library/Graphics/Image Units/` are loaded when any of the loading methods provided by the [CIPlugIn](ciplugin.md) class are invoked. A `CIFilterGenerator` object is registered by its filename or, if present, by a class attribute that you supply in its description.

You can create a  `CIFilterGenerator` object  programmatically, using the methods provided by the `CIFilterGenerator` class, or by using the editor view provided by Core Image.

## Topics

### Creating Filter Generator Objects

- [filterGenerator](cifiltergenerator/filtergenerator.md): Creates and returns an empty filter generator object.
- [filterGeneratorWithContentsOfURL:](cifiltergenerator/filtergeneratorwithcontentsofurl_.md): Creates and returns a filter generator object and initializes it with the contents of a filter generator file.

### Initializing a Filter Generator Object

- [initWithContentsOfURL:](cifiltergenerator/init%28contentsof_%29.md): Initializes a filter generator object with the contents of a filter generator file.

### Connecting and Disconnecting Objects

- [connectObject:withKey:toObject:withKey:](cifiltergenerator/connect%28__withkey_to_withkey_%29.md): Adds an object to the filter chain.
- [disconnectObject:withKey:toObject:withKey:](cifiltergenerator/disconnectobject%28__withkey_to_withkey_%29.md): Removes the connection between two objects in the filter chain.

### Managing Exported Keys

- [exportedKeys](cifiltergenerator/exportedkeys.md): Returns an array of the exported keys.
- [exportKey:fromObject:withName:](cifiltergenerator/exportkey%28__from_withname_%29.md): Exports an input or output key of an object in the filter chain.
- [removeExportedKey:](cifiltergenerator/removeexportedkey%28__%29.md): Removes a key that was previously exported.
- [setAttributes:forExportedKey:](cifiltergenerator/setattributes%28__forexportedkey_%29.md): Sets a dictionary of attributes for an exported key.

### Setting and Getting Class Attributes

- [classAttributes](cifiltergenerator/classattributes.md): The class attributes associated with the filter.

### Archiving a Filter Generator Object

- [writeToURL:atomically:](cifiltergenerator/write%28to_atomically_%29.md): Archives a filter generator object to a filter generator file.

### Registering a Filter Chain

- [registerFilterName:](cifiltergenerator/registerfiltername%28__%29.md): Registers the name associated with a filter chain.

### Creating a Filter from a Filter Chain

- [filter](cifiltergenerator/filter%28%29.md): Creates a filter object based on the filter chain.

### Constants

- [Exported Keys](exported-keys.md): Keys for the exported parameters of a filter generator object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CIFilterConstructor](cifilterconstructor.md)
- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Image Units

- [CIPlugIn](ciplugin.md): The mechanism for loading image units in macOS.
- [CIPlugInRegistration](cipluginregistration.md): The interface for loading Core Image image units.
- [CIFilterConstructor](cifilterconstructor.md): A general interface for objects that produce filters.
