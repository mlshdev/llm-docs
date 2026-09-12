> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdictionarycontroller](https://developer.apple.com/documentation/appkit/nsdictionarycontroller)

# NSDictionaryController (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

A bindings-compatible controller that manages the display and editing of a dictionary of key-value pairs.

## Declaration

```swift
class NSDictionaryController
```

<a id="overview"></a>

## Overview

[NSDictionaryController](nsdictionarycontroller.md) transforms the contents of a dictionary into an array of key-value pairs that can be bound to user interface items such as the columns of an [NSTableView](nstableview.md).

The content of an [NSDictionaryController](nsdictionarycontroller.md) instance is specified using the inherited method [content](nsobjectcontroller/content.md) or by binding an [NSDictionary](https://developer.apple.com/documentation/foundation/nsdictionary) instance to the [contentDictionary](nsbindingname/contentdictionary.md) binding. New key/value pairs inserted into the dictionary are created using the [newObject()](nsdictionarycontroller/newobject%28%29.md) method. The initial key name is set to the string returned by [initialKey](nsdictionarycontroller/initialkey.md) . The initial key name is copied to the newly inserted object, while the object returned by [initialValue](nsdictionarycontroller/initialvalue.md) is simply retained. As new items are inserted the controller enumerates the initial key name, resulting in key names such as “key”, “key1”, “key2”, and so on. This behavior can be customized by overriding [newObject()](nsdictionarycontroller/newobject%28%29.md).

An [NSDictionaryController](nsdictionarycontroller.md) instance can be configured to exclude specified keys in a dictionary from being returned by [arrangedObjects](nsarraycontroller/arrangedobjects.md) using the [excludedKeys](nsdictionarycontroller/excludedkeys.md) property. Similarly, you can specify an array of key names that are always included in the arranged objects, even if they are not present in the content dictionary, using the [includedKeys](nsdictionarycontroller/includedkeys.md) property.

[NSDictionaryController](nsdictionarycontroller.md) supports providing localized key names for the keys in the dictionary, allowing a user-friendly representation of the key name to be displayed. The localized key names are specified by a dictionary (using [localizedKeyDictionary](nsdictionarycontroller/localizedkeydictionary.md)) or by providing a strings table (using [localizedKeyDictionary](nsdictionarycontroller/localizedkeydictionary.md)).

The [arrangedObjects](nsarraycontroller/arrangedobjects.md) method returns an array of objects that implement the [NSDictionaryControllerKeyValuePair](nsdictionarycontrollerkeyvaluepair.md) informal protocol. User interface controls are bound to the arranged objects array using key paths such as: `arrangedObjects.key` (displays the key name), `arrangedObjects.value` (displays the value for the key), or `arrangedObjects.localizedKey` (displays the localized key name). See [NSDictionaryControllerKeyValuePair](nsdictionarycontrollerkeyvaluepair.md) for more information.

> **Note**

>  You must enable the “Validates Immediately” option for the value binding of all controls that edit the key names or values returned by [arrangedObjects](nsarraycontroller/arrangedobjects.md).

[NSDictionaryController](nsdictionarycontroller.md) overrides [arrangedObjects](nsarraycontroller/arrangedobjects.md) to return an array of objects that implement the [NSDictionaryControllerKeyValuePair](nsdictionarycontrollerkeyvaluepair.md) informal protocol. For more information, see [NSDictionaryControllerKeyValuePair](nsdictionarycontrollerkeyvaluepair.md).

The constants listed below are used to specify a binding to [bind(\_:to:withKeyPath:options:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/bind%28_:to:withkeypath:options:%29), [infoForBinding(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/infoforbinding%28_:%29), [unbind(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/unbind%28_:%29), and [valueClassForBinding(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/valueclassforbinding%28_:%29). For more information, see [Cocoa Bindings](cocoa-bindings.md).

- [contentDictionary](nsbindingname/contentdictionary.md)
- [includedKeys](nsbindingname/includedkeys.md)
- [excludedKeys](nsbindingname/excludedkeys.md)
- [localizedKeyDictionary](nsbindingname/localizedkeydictionary.md)
- [initialKey](nsbindingname/initialkey.md)
- [initialValue](nsbindingname/initialvalue.md)

## Topics

### Arranging Objects

- [arrangedObjects](nsarraycontroller/arrangedobjects.md): An array containing the receiver’s content objects arranged using [arrange(\_:)](nsarraycontroller/arrange%28__%29.md).

### Creating New Entries

- [newObject()](nsdictionarycontroller/newobject%28%29.md): Creates and returns a new key-value pair to represent an entry in the content dictionary.

### Localizing Key Names

- [localizedKeyDictionary](nsdictionarycontroller/localizedkeydictionary.md): The localized key names that are displayed by the receiver in place of the key names.
- [localizedKeyTable](nsdictionarycontroller/localizedkeytable.md): the strings file used to localize key names.

### Keys to Display

- [includedKeys](nsdictionarycontroller/includedkeys.md): The key names that are represented by a key-value pair, even if they are not present in the receiver’s content dictionary.
- [excludedKeys](nsdictionarycontroller/excludedkeys.md): The key names that are never displayed in the user interface items bound to the receiver.

### Setting Initial Key and Values

- [initialKey](nsdictionarycontroller/initialkey.md): The string used as the initial key name for a newly inserted item.
- [initialValue](nsdictionarycontroller/initialvalue.md): The string used as the initial value for a newly inserted item.

## Relationships

### Inherits From

- [NSArrayController](nsarraycontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSEditor](nseditor.md)
- [NSEditorRegistration](nseditorregistration.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Key-Value Data

- [NSDictionaryControllerKeyValuePair](nsdictionarycontrollerkeyvaluepair.md): A set of methods implemented by arranged objects to give access to information about those objects.
- [NSBindingName](nsbindingname.md): Values that specify a binding for certain methods.
- [NSBindingOption](nsbindingoption.md)
- [NSBindingInfoKey](nsbindinginfokey.md)
- [NSIsControllerMarker(\_:)](nsiscontrollermarker%28__%29.md): Tests whether a given object is special marker object used for indicating the state of a selection in relation to a key.
- [NSKeyValueBindingCreation](https://developer.apple.com/documentation/objectivec/nskeyvaluebindingcreation): A set of methods that you can use to create and remove bindings between view objects and controllers, or between controllers and model objects.
- [Binding dictionary keys](binding-dictionary-keys.md): These constants define keys in the binding information dictionary.

# NSDictionaryController (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

A bindings-compatible controller that manages the display and editing of a dictionary of key-value pairs.

## Declaration

```objectivec
@interface NSDictionaryController : NSArrayController
```

<a id="overview"></a>

## Overview

[NSDictionaryController](nsdictionarycontroller.md) transforms the contents of a dictionary into an array of key-value pairs that can be bound to user interface items such as the columns of an [NSTableView](nstableview.md).

The content of an [NSDictionaryController](nsdictionarycontroller.md) instance is specified using the inherited method [content](nsobjectcontroller/content.md) or by binding an [NSDictionary](https://developer.apple.com/documentation/foundation/nsdictionary) instance to the [NSContentDictionaryBinding](nsbindingname/contentdictionary.md) binding. New key/value pairs inserted into the dictionary are created using the [newObject](nsdictionarycontroller/newobject%28%29.md) method. The initial key name is set to the string returned by [initialKey](nsdictionarycontroller/initialkey.md) . The initial key name is copied to the newly inserted object, while the object returned by [initialValue](nsdictionarycontroller/initialvalue.md) is simply retained. As new items are inserted the controller enumerates the initial key name, resulting in key names such as “key”, “key1”, “key2”, and so on. This behavior can be customized by overriding [newObject](nsdictionarycontroller/newobject%28%29.md).

An [NSDictionaryController](nsdictionarycontroller.md) instance can be configured to exclude specified keys in a dictionary from being returned by [arrangedObjects](nsarraycontroller/arrangedobjects.md) using the [excludedKeys](nsdictionarycontroller/excludedkeys.md) property. Similarly, you can specify an array of key names that are always included in the arranged objects, even if they are not present in the content dictionary, using the [includedKeys](nsdictionarycontroller/includedkeys.md) property.

[NSDictionaryController](nsdictionarycontroller.md) supports providing localized key names for the keys in the dictionary, allowing a user-friendly representation of the key name to be displayed. The localized key names are specified by a dictionary (using [localizedKeyDictionary](nsdictionarycontroller/localizedkeydictionary.md)) or by providing a strings table (using [localizedKeyDictionary](nsdictionarycontroller/localizedkeydictionary.md)).

The [arrangedObjects](nsarraycontroller/arrangedobjects.md) method returns an array of objects that implement the [NSDictionaryControllerKeyValuePair](nsdictionarycontrollerkeyvaluepair.md) informal protocol. User interface controls are bound to the arranged objects array using key paths such as: `arrangedObjects.key` (displays the key name), `arrangedObjects.value` (displays the value for the key), or `arrangedObjects.localizedKey` (displays the localized key name). See [NSDictionaryControllerKeyValuePair](nsdictionarycontrollerkeyvaluepair.md) for more information.

> **Note**

>  You must enable the “Validates Immediately” option for the value binding of all controls that edit the key names or values returned by [arrangedObjects](nsarraycontroller/arrangedobjects.md).

[NSDictionaryController](nsdictionarycontroller.md) overrides [arrangedObjects](nsarraycontroller/arrangedobjects.md) to return an array of objects that implement the [NSDictionaryControllerKeyValuePair](nsdictionarycontrollerkeyvaluepair.md) informal protocol. For more information, see [NSDictionaryControllerKeyValuePair](nsdictionarycontrollerkeyvaluepair.md).

The constants listed below are used to specify a binding to [bind:toObject:withKeyPath:options:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/bind%28_:to:withkeypath:options:%29), [infoForBinding:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/infoforbinding%28_:%29), [unbind:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/unbind%28_:%29), and [valueClassForBinding:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/valueclassforbinding%28_:%29). For more information, see [Cocoa Bindings](cocoa-bindings.md).

- [NSContentDictionaryBinding](nsbindingname/contentdictionary.md)
- [NSIncludedKeysBinding](nsbindingname/includedkeys.md)
- [NSExcludedKeysBinding](nsbindingname/excludedkeys.md)
- [NSLocalizedKeyDictionaryBinding](nsbindingname/localizedkeydictionary.md)
- [NSInitialKeyBinding](nsbindingname/initialkey.md)
- [NSInitialValueBinding](nsbindingname/initialvalue.md)

## Topics

### Arranging Objects

- [arrangedObjects](nsarraycontroller/arrangedobjects.md): An array containing the receiver’s content objects arranged using [arrangeObjects:](nsarraycontroller/arrange%28__%29.md).

### Creating New Entries

- [newObject](nsdictionarycontroller/newobject%28%29.md): Creates and returns a new key-value pair to represent an entry in the content dictionary.

### Localizing Key Names

- [localizedKeyDictionary](nsdictionarycontroller/localizedkeydictionary.md): The localized key names that are displayed by the receiver in place of the key names.
- [localizedKeyTable](nsdictionarycontroller/localizedkeytable.md): the strings file used to localize key names.

### Keys to Display

- [includedKeys](nsdictionarycontroller/includedkeys.md): The key names that are represented by a key-value pair, even if they are not present in the receiver’s content dictionary.
- [excludedKeys](nsdictionarycontroller/excludedkeys.md): The key names that are never displayed in the user interface items bound to the receiver.

### Setting Initial Key and Values

- [initialKey](nsdictionarycontroller/initialkey.md): The string used as the initial key name for a newly inserted item.
- [initialValue](nsdictionarycontroller/initialvalue.md): The string used as the initial value for a newly inserted item.

## Relationships

### Inherits From

- [NSArrayController](nsarraycontroller.md)

## See Also

### Key-Value Data

- [NSDictionaryControllerKeyValuePair](nsdictionarycontrollerkeyvaluepair.md): A set of methods implemented by arranged objects to give access to information about those objects.
- [NSBindingName](nsbindingname.md): Values that specify a binding for certain methods.
- [NSBindingOption](nsbindingoption.md)
- [NSBindingInfoKey](nsbindinginfokey.md)
- [NSIsControllerMarker](nsiscontrollermarker%28__%29.md): Tests whether a given object is special marker object used for indicating the state of a selection in relation to a key.
- [NSKeyValueBindingCreation](https://developer.apple.com/documentation/objectivec/nskeyvaluebindingcreation): A set of methods that you can use to create and remove bindings between view objects and controllers, or between controllers and model objects.
- [Binding dictionary keys](binding-dictionary-keys.md): These constants define keys in the binding information dictionary.
