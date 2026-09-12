> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsnib](https://developer.apple.com/documentation/appkit/nsnib)

# NSNib (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object wrapper, or container, for an Interface Builder nib file.

## Declaration

```swift
class NSNib
```

<a id="overview"></a>

## Overview

An [NSNib](nsnib.md) object keeps the contents of a nib file resident in memory, ready for unarchiving and instantiation. When you create a nib object using the contents of a nib file, the object loads the contents of the referenced nib bundle—the object graph as well as any images and sounds—into memory; but it does not yet unarchive it. To unarchive all of the nib data and thus truly instantiate the nib you must call one of the `instantiate...` methods of `NSNib`.

During the instantiation process, each object in the archive is unarchived and then initialized using the method befitting its type. View classes are initialized using their [init(frame:)](nsview/init%28frame_%29.md) method. Custom objects are initialized using their `init` method. In the case of Cocoa views (and custom views that have options on an associated Interface Builder palette) the initialization process also reads in any values set by the user in Interface Builder.

Once all objects have been instantiated and initialized from the archive, the nib loading code attempts to reestablish the connections between each object’s outlets and the corresponding target objects. If your custom objects have outlets, the `NSNib` object attempts to reestablish any connections you created in Interface Builder. It starts by trying to establish the connections using your object’s own methods first. For each outlet that needs a connection, the [NSNib](nsnib.md) object looks for a method of the form `set:` in your object. If that method exists, the nib object calls it, passing the target object as a parameter. If you did not define a setter method with that exact name, the [NSNib](nsnib.md) object searches the object for an instance variable (of type `IBOutlet id`) with the corresponding outlet name and tries to set its value directly. If an instance variable with the correct name cannot be found, initialization of that connection does not occur.

After all objects have been initialized and their connections reestablished, each object receives an [awakeFromNib()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/awakefromnib%28%29) message. You can override this method in your custom objects to perform any additional initialization.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

You can subclass `NSNib` if you want to extend or specialize nib-loading behavior. For example, you could create a custom `NSNib` subclass that performs some post-processing on the top-level objects returned from the `instantiateNib...` methods. If you want to modify how nib instantiations are performed, it is recommended that you override the primitive method [instantiate(withOwner:topLevelObjects:)](nsnib/instantiate%28withowner_toplevelobjects_%29.md). Note that the instance variables of `NSNib` are private and thus are not available to subclasses. Any override of [init(nibData:bundle:)](nsnib/init%28nibdata_bundle_%29.md) or [init(nibNamed:bundle:)](nsnib/init%28nibnamed_bundle_%29.md) should first invoke the superclass implementation.

## Topics

### Initializing a Nib

- [init(nibNamed:bundle:)](nsnib/init%28nibnamed_bundle_%29.md): Returns an `NSNib` object initialized to the nib file in the specified bundle.
- [init(nibData:bundle:)](nsnib/init%28nibdata_bundle_%29.md): Initializes an instance with nib data and specified bundle for locating resources.
- [NSNib.Name](nsnib/name.md)

### Instantiating a Nib

- [instantiate(withOwner:topLevelObjects:)](nsnib/instantiate%28withowner_toplevelobjects_%29.md): Instantiates objects in the nib file with the specified owner.

### Constants

- [Nib Loading Keys](nib-loading-keys.md): The `NSNib` class uses the following constants which are used as keys in the dictionary passed to [instantiateNibWithExternalNameTable:](nsnib/instantiatenibwithexternalnametable_.md).

### Initializers

- [init(coder:)](nsnib/init%28coder_%29.md)

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

# NSNib (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object wrapper, or container, for an Interface Builder nib file.

## Declaration

```objectivec
@interface NSNib : NSObject
```

<a id="overview"></a>

## Overview

An [NSNib](nsnib.md) object keeps the contents of a nib file resident in memory, ready for unarchiving and instantiation. When you create a nib object using the contents of a nib file, the object loads the contents of the referenced nib bundle—the object graph as well as any images and sounds—into memory; but it does not yet unarchive it. To unarchive all of the nib data and thus truly instantiate the nib you must call one of the `instantiate...` methods of `NSNib`.

During the instantiation process, each object in the archive is unarchived and then initialized using the method befitting its type. View classes are initialized using their [initWithFrame:](nsview/init%28frame_%29.md) method. Custom objects are initialized using their `init` method. In the case of Cocoa views (and custom views that have options on an associated Interface Builder palette) the initialization process also reads in any values set by the user in Interface Builder.

Once all objects have been instantiated and initialized from the archive, the nib loading code attempts to reestablish the connections between each object’s outlets and the corresponding target objects. If your custom objects have outlets, the `NSNib` object attempts to reestablish any connections you created in Interface Builder. It starts by trying to establish the connections using your object’s own methods first. For each outlet that needs a connection, the [NSNib](nsnib.md) object looks for a method of the form `set:` in your object. If that method exists, the nib object calls it, passing the target object as a parameter. If you did not define a setter method with that exact name, the [NSNib](nsnib.md) object searches the object for an instance variable (of type `IBOutlet id`) with the corresponding outlet name and tries to set its value directly. If an instance variable with the correct name cannot be found, initialization of that connection does not occur.

After all objects have been initialized and their connections reestablished, each object receives an [awakeFromNib](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/awakefromnib%28%29) message. You can override this method in your custom objects to perform any additional initialization.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

You can subclass `NSNib` if you want to extend or specialize nib-loading behavior. For example, you could create a custom `NSNib` subclass that performs some post-processing on the top-level objects returned from the `instantiateNib...` methods. If you want to modify how nib instantiations are performed, it is recommended that you override the primitive method [instantiateWithOwner:topLevelObjects:](nsnib/instantiate%28withowner_toplevelobjects_%29.md). Note that the instance variables of `NSNib` are private and thus are not available to subclasses. Any override of [initWithNibData:bundle:](nsnib/init%28nibdata_bundle_%29.md) or [initWithNibNamed:bundle:](nsnib/init%28nibnamed_bundle_%29.md) should first invoke the superclass implementation.

## Topics

### Initializing a Nib

- [initWithContentsOfURL:](nsnib/initwithcontentsofurl_.md): Deprecated. Returns an `NSNib` object initialized to the nib file at the specified URL.
- [initWithNibNamed:bundle:](nsnib/init%28nibnamed_bundle_%29.md): Returns an `NSNib` object initialized to the nib file in the specified bundle.
- [initWithNibData:bundle:](nsnib/init%28nibdata_bundle_%29.md): Initializes an instance with nib data and specified bundle for locating resources.
- [NSNibName](nsnib/name.md)

### Instantiating a Nib

- [instantiateNibWithOwner:topLevelObjects:](nsnib/instantiatenibwithowner_toplevelobjects_.md): Deprecated. Unarchives and instantiates the in-memory contents of the receiver’s nib file, creating a distinct object tree and set of top level objects.
- [instantiateNibWithExternalNameTable:](nsnib/instantiatenibwithexternalnametable_.md): Deprecated. Unarchives and instantiates the in-memory contents of the receiver’s nib file, creating a distinct object tree and top level objects.
- [instantiateWithOwner:topLevelObjects:](nsnib/instantiate%28withowner_toplevelobjects_%29.md): Instantiates objects in the nib file with the specified owner.

### Constants

- [Nib Loading Keys](nib-loading-keys.md): The `NSNib` class uses the following constants which are used as keys in the dictionary passed to [instantiateNibWithExternalNameTable:](nsnib/instantiatenibwithexternalnametable_.md).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)

## See Also

### Nib Files

- [NSNibConnector](nsnibconnector.md): A connection between two nibs.
- [NSNibControlConnector](nsnibcontrolconnector.md): A control connection between two Interface Builder objects.
- [NSNibOutletConnector](nsniboutletconnector.md): An outlet connection between Interface Builder objects.
