> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary](https://developer.apple.com/documentation/foundation/nsdictionary)

# NSDictionary (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A static collection of objects associated with unique keys.

## Declaration

```swift
class NSDictionary
```

## Mentioned In

- [Implementing Handoff in Your App](implementing-handoff-in-your-app.md)

<a id="overview"></a>

## Overview

You can use this type in Swift instead of a [Dictionary](https://developer.apple.com/documentation/swift/dictionary) in cases that require reference semantics.

The `NSDictionary` class declares the programmatic interface to objects that manage immutable associations of keys and values. For example, an interactive form could be represented as a dictionary, with the field names as keys, corresponding to user-entered values.

Use this class or its subclass [NSMutableDictionary](nsmutabledictionary.md) when you need a convenient and efficient way to retrieve data associated with an arbitrary key. `NSDictionary` creates static dictionaries, and `NSMutableDictionary` creates dynamic dictionaries. (For convenience, the term *dictionary* refers to any instance of one of these classes without specifying its exact class membership.)

A key-value pair within a dictionary is called an entry. Each entry consists of one object that represents the key and a second object that is that key’s value. Within a dictionary, the keys are unique. That is, no two keys in a single dictionary are equal (as determined by [isEqual(\_:)](../objectivec/nsobjectprotocol/isequal%28__%29.md)). In general, a key can be any object (provided that it conforms to the `NSCopying` protocol—see below), but note that when using key-value coding the key must be a string (see [Accessing Object Properties](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/BasicPrinciples.html#//apple_ref/doc/uid/20002170)). Neither a key nor a value can be `nil`; if you need to represent a null value in a dictionary, you should use [NSNull](nsnull.md).

`NSDictionary` is “toll-free bridged” with its Core Foundation counterpart, [CFDictionary](../corefoundation/cfdictionary.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information on toll-free bridging.

<a id="Creating-NSDictionary-Objects-Using-Dictionary-Literals"></a>

### Creating NSDictionary Objects Using Dictionary Literals

In addition to the provided initializers, such as [init(objects:forKeys:)](nsdictionary/init%28objects_forkeys_%29.md), you can create an `NSDictionary` object using a *dictionary literal*.

**Swift**

```swift
let dictionary: NSDictionary = [
    "anObject" : someObject,
    "helloString" : "Hello, World!",
    "magicNumber" : 42,
    "aValue" : someValue
]
```

**Objective-C**

```objc
NSDictionary *dictionary = @{
       @"anObject" : someObject,
    @"helloString" : @"Hello, World!",
    @"magicNumber" : @42,
         @"aValue" : someValue
};
```

In Objective-C, the compiler generates code that makes an underlying call to the [dictionaryWithObjects:forKeys:count:](nsdictionary/dictionarywithobjects_forkeys_count_.md) method.

```objc
id objects[] = { someObject, @"Hello, World!", @42, someValue };
id keys[] = { @"anObject", @"helloString", @"magicNumber", @"aValue" };
NSUInteger count = sizeof(objects) / sizeof(id);
NSDictionary *dictionary = [NSDictionary dictionaryWithObjects:objects
                                                       forKeys:keys
                                                         count:count];
```

Unlike [dictionaryWithObjectsAndKeys:](nsdictionary/dictionarywithobjectsandkeys_.md) and other initializers, dictionary literals specify entries in key-value order. You should not terminate the list of objects with `nil` when using this literal syntax, and in fact `nil` is an invalid value. For more information about object literals in Objective-C, see [Working with Objects](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/WorkingwithObjects/WorkingwithObjects.html#//apple_ref/doc/uid/TP40011210-CH4) in [Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html#//apple_ref/doc/uid/TP40011210).

In Swift, the `NSDictionary` class conforms to the `DictionaryLiteralConvertible` protocol, which allows it to be initialized with dictionary literals. For more information about object literals in Swift, see [Literal Expression](https://developer.apple.com/library/archive/documentation/Swift/Conceptual/Swift_Programming_Language/Expressions.html#//apple_ref/doc/uid/TP40014097-CH32-ID390) in [The Swift Programming Language (Swift 4.1)](https://developer.apple.com/library/archive/documentation/Swift/Conceptual/Swift_Programming_Language/index.html#//apple_ref/doc/uid/TP40014097).

<a id="Accessing-Values-Using-Subscripting"></a>

### Accessing Values Using Subscripting

In addition to the provided instance methods, such as [object(forKey:)](nsdictionary/object%28forkey_%29.md), you can access `NSDictionary` values by their keys using *subscripting*.

**Swift**

```swift
let value = dictionary["helloString"]
```

**Objective-C**

```objc
id value = dictionary[@"helloString"];
```

<a id="Enumerating-Entries-Using-for-in-Loops"></a>

### Enumerating Entries Using for-in Loops

In addition to the provided instance methods, such as [enumerateKeysAndObjects(\_:)](nsdictionary/enumeratekeysandobjects%28__%29.md), you can enumerate `NSDictionary` entries using *for-in loops*.

**Swift**

```swift
for (key, value) in dictionary {
    print("Value: \(value) for key: \(key)")
}
```

**Objective-C**

```objc
for (NSString *key in dictionary) {
    id value = dictionary[key];
    NSLog(@"Value: %@ for key: %@", value, key);
}
```

In Objective-C, `NSDictionary` conforms to the [NSFastEnumeration](nsfastenumeration.md) protocol.

In Swift, `NSDictionary` conforms to the `SequenceType` protocol.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

You generally shouldn’t need to subclass `NSDictionary`. Custom behavior can usually be achieved through composition rather than subclassing.

<a id="Methods-to-Override"></a>

#### Methods to Override

If you do need to subclass `NSDictionary`, take into account that it is a [Class cluster](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/ClassCluster.html#//apple_ref/doc/uid/TP40008195-CH7). Any subclass must override the following primitive methods:

- [init(objects:forKeys:count:)](nsdictionary/init%28objects_forkeys_count_%29.md)
- [count](nsdictionary/count.md)
- [object(forKey:)](nsdictionary/object%28forkey_%29.md)
- [keyEnumerator()](nsdictionary/keyenumerator%28%29.md)

The other methods of `NSDictionary` operate by invoking one or more of these primitives. The non-primitive methods provide convenient ways of accessing multiple entries at once.

<a id="Alternatives-to-Subclassing"></a>

#### Alternatives to Subclassing

Before making a custom class of `NSDictionary`, investigate [NSMapTable](nsmaptable.md) and the corresponding Core Foundation type, [CFDictionary](../corefoundation/cfdictionary.md). Because `NSDictionary` and `CFDictionary` are “toll-free bridged,” you can substitute a `CFDictionary` object for a `NSDictionary` object in your code (with appropriate casting). Although they are corresponding types, `CFDictionary` and `NSDictionary` do not have identical interfaces or implementations, and you can sometimes do things with `CFDictionary` that you cannot easily do with `NSDictionary`.

If the behavior you want to add supplements that of the existing class, you could write a category on `NSDictionary`. Keep in mind, however, that this category will be in effect for all instances of `NSDictionary` that you use, and this might have unintended consequences. Alternatively, you could use composition to achieve the desired behavior.

## Topics

### Creating an Empty Dictionary

- [init()](nsdictionary/init%28%29.md): Initializes a newly allocated dictionary.

### Creating a Dictionary from Objects and Keys

- [init(objects:forKeys:)](nsdictionary/init%28objects_forkeys_%29.md): Initializes a newly allocated dictionary with key-value pairs constructed from the provided arrays of keys and objects.
- [init(objects:forKeys:count:)](nsdictionary/init%28objects_forkeys_count_%29.md): Initializes a newly allocated dictionary with the specified number of key-value pairs constructed from the provided C arrays of keys and objects.
- [init(object:forKey:)](nsdictionary/init%28object_forkey_%29.md): Creates a dictionary containing a given key and value.

### Creating a Dictionary from Another Dictionary

- [init(dictionary:)](nsdictionary/init%28dictionary_%29-9fw1u.md): Initializes a newly allocated dictionary by placing in it the keys and values contained in another given dictionary.
- [init(dictionary:copyItems:)](nsdictionary/init%28dictionary_copyitems_%29.md): Initializes a newly allocated dictionary using the objects contained in another given dictionary.
- [init(dictionaryLiteral:)](nsdictionary/init%28dictionaryliteral_%29.md): Initializes a newly allocated dictionary from the given key-value pairs.

### Creating a Dictionary from an External Source

- [init(contentsOfURL:error:)](nsdictionary/init%28contentsofurl_error_%29.md): Initializes a newly allocated dictionary using the keys and values found at a given URL.
- [init(contentsOfFile:)](nsdictionary/init%28contentsoffile_%29.md): Deprecated. Initializes a newly allocated dictionary using the keys and values found in a file at a given path.

### Creating a Dictionary from an NSCoder

- [init(coder:)](nsdictionary/init%28coder_%29.md): Creates a dictionary initialized from data in the provided unarchiver.

### Creating Key Sets for Shared-Key Optimized Dictionaries

- [sharedKeySet(forKeys:)](nsdictionary/sharedkeyset%28forkeys_%29.md): Creates a shared key set object for the specified keys.

### Counting Entries

- [count](nsdictionary/count.md): The number of entries in the dictionary.

### Comparing Dictionaries

- [isEqual(to:)](nsdictionary/isequal%28to_%29.md): Returns a Boolean value that indicates whether the contents of the receiving dictionary are equal to the contents of another given dictionary.

### Accessing Keys and Values

- [allKeys](nsdictionary/allkeys.md): A new array containing the dictionary’s keys, or an empty array if the dictionary has no entries.
- [allKeys(for:)](nsdictionary/allkeys%28for_%29.md): Returns a new array containing the keys corresponding to all occurrences of a given object in the dictionary.
- [allValues](nsdictionary/allvalues.md): A new array containing the dictionary’s values, or an empty array if the dictionary has no entries.
- [value(forKey:)](nsdictionary/value%28forkey_%29.md): Returns the value associated with a given key.
- [objects(forKeys:notFoundMarker:)](nsdictionary/objects%28forkeys_notfoundmarker_%29.md): Returns as a static array the set of objects from the dictionary that corresponds to the specified keys.
- [object(forKey:)](nsdictionary/object%28forkey_%29.md): Returns the value associated with a given key.
- [subscript(\_:)](nsdictionary/subscript%28__%29-52n56.md): Returns the value associated with a given key.
- [subscript(\_:)](nsdictionary/subscript%28__%29-1bt1b.md): Accesses the value associated with a given key.

### Enumerating Dictionaries

- [keyEnumerator()](nsdictionary/keyenumerator%28%29.md): Provides an enumerator to access the keys in the dictionary.
- [objectEnumerator()](nsdictionary/objectenumerator%28%29.md): Returns an enumerator object that lets you access each value in the dictionary.
- [enumerateKeysAndObjects(\_:)](nsdictionary/enumeratekeysandobjects%28__%29.md): Applies a given block object to the entries of the dictionary.
- [enumerateKeysAndObjects(options:using:)](nsdictionary/enumeratekeysandobjects%28options_using_%29.md): Applies a given block object to the entries of the dictionary, with options specifying how the enumeration is performed.
- [makeIterator()](nsdictionary/makeiterator%28%29.md): Returns an iterator over the elements of this sequence.

### Sorting Dictionaries

- [keysSortedByValue(using:)](nsdictionary/keyssortedbyvalue%28using_%29.md): Returns an array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values.
- [keysSortedByValue(comparator:)](nsdictionary/keyssortedbyvalue%28comparator_%29.md): Returns an array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values using a given comparator block.
- [keysSortedByValue(options:usingComparator:)](nsdictionary/keyssortedbyvalue%28options_usingcomparator_%29.md): Returns an array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values using a given comparator block and a specified set of options.

### Filtering Dictionaries

- [keysOfEntries(passingTest:)](nsdictionary/keysofentries%28passingtest_%29.md): Returns the set of keys whose corresponding value satisfies a constraint described by a block object.
- [keysOfEntries(options:passingTest:)](nsdictionary/keysofentries%28options_passingtest_%29.md): Returns the set of keys whose corresponding value satisfies a constraint described by a block object.

### Storing Dictionaries

- [write(to:)](nsdictionary/write%28to_%29.md): Writes a property list representation of the contents of the dictionary to a given URL.
- [write(to:atomically:)](nsdictionary/write%28to_atomically_%29.md): Deprecated. Writes a property list representation of the contents of the dictionary to a given URL.
- [write(toFile:atomically:)](nsdictionary/write%28tofile_atomically_%29.md): Deprecated. Writes a property list representation of the contents of the dictionary to a given path.

### Accessing File Attributes

These convenience methods are for use with dictionaries returned by the [FileManager](filemanager.md) method [attributesOfItem(atPath:)](filemanager/attributesofitem%28atpath_%29.md), and allow you to access POSIX and HFS attributes for files and directories.

- [fileSize()](nsdictionary/filesize%28%29.md): Returns the file’s size, in bytes.
- [fileType()](nsdictionary/filetype%28%29.md): Returns the file type.
- [fileCreationDate()](nsdictionary/filecreationdate%28%29.md): Returns the file’s creation date.
- [fileModificationDate()](nsdictionary/filemodificationdate%28%29.md): Returns file’s modification date.
- [filePosixPermissions()](nsdictionary/fileposixpermissions%28%29.md): Returns the file’s POSIX permissions.
- [fileOwnerAccountID()](nsdictionary/fileowneraccountid%28%29.md): Returns the file’s owner account ID.
- [fileOwnerAccountName()](nsdictionary/fileowneraccountname%28%29.md): Returns the file’s owner account name.
- [fileGroupOwnerAccountID()](nsdictionary/filegroupowneraccountid%28%29.md): Returns file’s group owner account ID.
- [fileGroupOwnerAccountName()](nsdictionary/filegroupowneraccountname%28%29.md): Returns the file’s group owner account name.
- [fileExtensionHidden()](nsdictionary/fileextensionhidden%28%29.md): Returns a Boolean value indicating whether the file hides its extension.
- [fileIsImmutable()](nsdictionary/fileisimmutable%28%29.md): Returns a Boolean value indicating whether the file is immutable.
- [fileIsAppendOnly()](nsdictionary/fileisappendonly%28%29.md): Returns a Boolean value indicating whether the file is append only.
- [fileSystemFileNumber()](nsdictionary/filesystemfilenumber%28%29.md): Returns the filesystem file number.
- [fileSystemNumber()](nsdictionary/filesystemnumber%28%29.md): Returns the filesystem number.
- [fileHFSTypeCode()](nsdictionary/filehfstypecode%28%29.md): Returns file’s HFS type code.
- [fileHFSCreatorCode()](nsdictionary/filehfscreatorcode%28%29.md): Returns the file’s HFS creator code.

### Describing a Dictionary

- [description](nsdictionary/description.md): A string that represents the contents of the dictionary, formatted as a property list.
- [descriptionInStringsFileFormat](nsdictionary/descriptioninstringsfileformat.md): A string that represents the contents of the dictionary, formatted in `.strings` file format.
- [description(withLocale:)](nsdictionary/description%28withlocale_%29.md): Returns a string object that represents the contents of the dictionary, formatted as a property list.
- [description(withLocale:indent:)](nsdictionary/description%28withlocale_indent_%29.md): Returns a string object that represents the contents of the dictionary, formatted as a property list.

### Supporting Types

- [NSDictionary.Iterator](nsdictionary/iterator.md): A class that you use to provide members of a dictionary, one-by-one.

### Initializers

- [init(contentsOf:)](nsdictionary/init%28contentsof_%29.md): Deprecated. Initializes a newly allocated dictionary using the keys and values found at a given URL.
- [init(contentsOf:error:)](nsdictionary/init%28contentsof_error_%29.md): Initializes a newly allocated dictionary using the keys and values found at a given URL.
- [init(dictionary:)](nsdictionary/init%28dictionary_%29-4gc13.md): Initializes a newly allocated dictionary and adds to it objects from another given dictionary.

### Default Implementations

- [ExpressibleByDictionaryLiteral Implementations](nsdictionary/expressiblebydictionaryliteral-implementations.md)
- [NSDictionary Implementations](nsdictionary/nsdictionary-implementations.md)
- [Sequence Implementations](nsdictionary/sequence-implementations.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSMutableDictionary](nsmutabledictionary.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByDictionaryLiteral](https://developer.apple.com/documentation/swift/expressiblebydictionaryliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSFastEnumeration](nsfastenumeration.md)
- [NSFetchRequestResult](../coredata/nsfetchrequestresult.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

# NSDictionary (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A static collection of objects associated with unique keys.

## Declaration

```objectivec
@interface NSDictionary : NSObject
```

## Mentioned In

- [Implementing Handoff in Your App](implementing-handoff-in-your-app.md)

<a id="overview"></a>

## Overview

You can use this type in Swift instead of a [Dictionary](https://developer.apple.com/documentation/swift/dictionary) in cases that require reference semantics.

The `NSDictionary` class declares the programmatic interface to objects that manage immutable associations of keys and values. For example, an interactive form could be represented as a dictionary, with the field names as keys, corresponding to user-entered values.

Use this class or its subclass [NSMutableDictionary](nsmutabledictionary.md) when you need a convenient and efficient way to retrieve data associated with an arbitrary key. `NSDictionary` creates static dictionaries, and `NSMutableDictionary` creates dynamic dictionaries. (For convenience, the term *dictionary* refers to any instance of one of these classes without specifying its exact class membership.)

A key-value pair within a dictionary is called an entry. Each entry consists of one object that represents the key and a second object that is that key’s value. Within a dictionary, the keys are unique. That is, no two keys in a single dictionary are equal (as determined by [isEqual:](../objectivec/nsobjectprotocol/isequal%28__%29.md)). In general, a key can be any object (provided that it conforms to the `NSCopying` protocol—see below), but note that when using key-value coding the key must be a string (see [Accessing Object Properties](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/BasicPrinciples.html#//apple_ref/doc/uid/20002170)). Neither a key nor a value can be `nil`; if you need to represent a null value in a dictionary, you should use [NSNull](nsnull.md).

`NSDictionary` is “toll-free bridged” with its Core Foundation counterpart, [CFDictionaryRef](../corefoundation/cfdictionary.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information on toll-free bridging.

<a id="Creating-NSDictionary-Objects-Using-Dictionary-Literals"></a>

### Creating NSDictionary Objects Using Dictionary Literals

In addition to the provided initializers, such as [initWithObjects:forKeys:](nsdictionary/init%28objects_forkeys_%29.md), you can create an `NSDictionary` object using a *dictionary literal*.

**Swift**

```swift
let dictionary: NSDictionary = [
    "anObject" : someObject,
    "helloString" : "Hello, World!",
    "magicNumber" : 42,
    "aValue" : someValue
]
```

**Objective-C**

```objc
NSDictionary *dictionary = @{
       @"anObject" : someObject,
    @"helloString" : @"Hello, World!",
    @"magicNumber" : @42,
         @"aValue" : someValue
};
```

In Objective-C, the compiler generates code that makes an underlying call to the [dictionaryWithObjects:forKeys:count:](nsdictionary/dictionarywithobjects_forkeys_count_.md) method.

```objc
id objects[] = { someObject, @"Hello, World!", @42, someValue };
id keys[] = { @"anObject", @"helloString", @"magicNumber", @"aValue" };
NSUInteger count = sizeof(objects) / sizeof(id);
NSDictionary *dictionary = [NSDictionary dictionaryWithObjects:objects
                                                       forKeys:keys
                                                         count:count];
```

Unlike [dictionaryWithObjectsAndKeys:](nsdictionary/dictionarywithobjectsandkeys_.md) and other initializers, dictionary literals specify entries in key-value order. You should not terminate the list of objects with `nil` when using this literal syntax, and in fact `nil` is an invalid value. For more information about object literals in Objective-C, see [Working with Objects](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/WorkingwithObjects/WorkingwithObjects.html#//apple_ref/doc/uid/TP40011210-CH4) in [Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html#//apple_ref/doc/uid/TP40011210).

In Swift, the `NSDictionary` class conforms to the `DictionaryLiteralConvertible` protocol, which allows it to be initialized with dictionary literals. For more information about object literals in Swift, see [Literal Expression](https://developer.apple.com/library/archive/documentation/Swift/Conceptual/Swift_Programming_Language/Expressions.html#//apple_ref/doc/uid/TP40014097-CH32-ID390) in [The Swift Programming Language (Swift 4.1)](https://developer.apple.com/library/archive/documentation/Swift/Conceptual/Swift_Programming_Language/index.html#//apple_ref/doc/uid/TP40014097).

<a id="Accessing-Values-Using-Subscripting"></a>

### Accessing Values Using Subscripting

In addition to the provided instance methods, such as [objectForKey:](nsdictionary/object%28forkey_%29.md), you can access `NSDictionary` values by their keys using *subscripting*.

**Swift**

```swift
let value = dictionary["helloString"]
```

**Objective-C**

```objc
id value = dictionary[@"helloString"];
```

<a id="Enumerating-Entries-Using-for-in-Loops"></a>

### Enumerating Entries Using for-in Loops

In addition to the provided instance methods, such as [enumerateKeysAndObjectsUsingBlock:](nsdictionary/enumeratekeysandobjects%28__%29.md), you can enumerate `NSDictionary` entries using *for-in loops*.

**Swift**

```swift
for (key, value) in dictionary {
    print("Value: \(value) for key: \(key)")
}
```

**Objective-C**

```objc
for (NSString *key in dictionary) {
    id value = dictionary[key];
    NSLog(@"Value: %@ for key: %@", value, key);
}
```

In Objective-C, `NSDictionary` conforms to the [NSFastEnumeration](nsfastenumeration.md) protocol.

In Swift, `NSDictionary` conforms to the `SequenceType` protocol.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

You generally shouldn’t need to subclass `NSDictionary`. Custom behavior can usually be achieved through composition rather than subclassing.

<a id="Methods-to-Override"></a>

#### Methods to Override

If you do need to subclass `NSDictionary`, take into account that it is a [Class cluster](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/ClassCluster.html#//apple_ref/doc/uid/TP40008195-CH7). Any subclass must override the following primitive methods:

- [initWithObjects:forKeys:count:](nsdictionary/init%28objects_forkeys_count_%29.md)
- [count](nsdictionary/count.md)
- [objectForKey:](nsdictionary/object%28forkey_%29.md)
- [keyEnumerator](nsdictionary/keyenumerator%28%29.md)

The other methods of `NSDictionary` operate by invoking one or more of these primitives. The non-primitive methods provide convenient ways of accessing multiple entries at once.

<a id="Alternatives-to-Subclassing"></a>

#### Alternatives to Subclassing

Before making a custom class of `NSDictionary`, investigate [NSMapTable](nsmaptable.md) and the corresponding Core Foundation type, [CFDictionaryRef](../corefoundation/cfdictionary.md). Because `NSDictionary` and `CFDictionary` are “toll-free bridged,” you can substitute a `CFDictionary` object for a `NSDictionary` object in your code (with appropriate casting). Although they are corresponding types, `CFDictionary` and `NSDictionary` do not have identical interfaces or implementations, and you can sometimes do things with `CFDictionary` that you cannot easily do with `NSDictionary`.

If the behavior you want to add supplements that of the existing class, you could write a category on `NSDictionary`. Keep in mind, however, that this category will be in effect for all instances of `NSDictionary` that you use, and this might have unintended consequences. Alternatively, you could use composition to achieve the desired behavior.

## Topics

### Creating an Empty Dictionary

- [dictionary](nsdictionary/dictionary.md): Creates an empty dictionary.
- [init](nsdictionary/init%28%29.md): Initializes a newly allocated dictionary.

### Creating a Dictionary from Objects and Keys

- [dictionaryWithObjects:forKeys:](nsdictionary/dictionarywithobjects_forkeys_.md): Creates a dictionary containing entries constructed from the contents of an array of keys and an array of values.
- [dictionaryWithObjects:forKeys:count:](nsdictionary/dictionarywithobjects_forkeys_count_.md): Creates a dictionary containing a specified number of objects from a C array.
- [initWithObjects:forKeys:](nsdictionary/init%28objects_forkeys_%29.md): Initializes a newly allocated dictionary with key-value pairs constructed from the provided arrays of keys and objects.
- [initWithObjects:forKeys:count:](nsdictionary/init%28objects_forkeys_count_%29.md): Initializes a newly allocated dictionary with the specified number of key-value pairs constructed from the provided C arrays of keys and objects.
- [dictionaryWithObjectsAndKeys:](nsdictionary/dictionarywithobjectsandkeys_.md): Creates a dictionary containing entries constructed from the specified set of values and keys.
- [initWithObjectsAndKeys:](nsdictionary/initwithobjectsandkeys_.md): Initializes a newly allocated dictionary with entries constructed from the specified set of values and keys.
- [dictionaryWithObject:forKey:](nsdictionary/init%28object_forkey_%29.md): Creates a dictionary containing a given key and value.

### Creating a Dictionary from Another Dictionary

- [dictionaryWithDictionary:](nsdictionary/dictionarywithdictionary_.md): Creates a dictionary containing the keys and values from another given dictionary.
- [initWithDictionary:](nsdictionary/init%28dictionary_%29-9fw1u.md): Initializes a newly allocated dictionary by placing in it the keys and values contained in another given dictionary.
- [initWithDictionary:copyItems:](nsdictionary/init%28dictionary_copyitems_%29.md): Initializes a newly allocated dictionary using the objects contained in another given dictionary.

### Creating a Dictionary from an External Source

- [dictionaryWithContentsOfURL:error:](nsdictionary/dictionarywithcontentsofurl_error_.md): Creates a dictionary using the keys and values found in a resource specified by a given URL.
- [dictionaryWithContentsOfFile:](nsdictionary/dictionarywithcontentsoffile_.md): Deprecated. Creates a dictionary using the keys and values found in a file specified by a given path.
- [initWithContentsOfFile:](nsdictionary/init%28contentsoffile_%29.md): Deprecated. Initializes a newly allocated dictionary using the keys and values found in a file at a given path.

### Creating a Dictionary from an NSCoder

- [initWithCoder:](nsdictionary/init%28coder_%29.md): Creates a dictionary initialized from data in the provided unarchiver.

### Creating Key Sets for Shared-Key Optimized Dictionaries

- [sharedKeySetForKeys:](nsdictionary/sharedkeyset%28forkeys_%29.md): Creates a shared key set object for the specified keys.

### Counting Entries

- [count](nsdictionary/count.md): The number of entries in the dictionary.

### Comparing Dictionaries

- [isEqualToDictionary:](nsdictionary/isequal%28to_%29.md): Returns a Boolean value that indicates whether the contents of the receiving dictionary are equal to the contents of another given dictionary.

### Accessing Keys and Values

- [allKeys](nsdictionary/allkeys.md): A new array containing the dictionary’s keys, or an empty array if the dictionary has no entries.
- [allKeysForObject:](nsdictionary/allkeys%28for_%29.md): Returns a new array containing the keys corresponding to all occurrences of a given object in the dictionary.
- [allValues](nsdictionary/allvalues.md): A new array containing the dictionary’s values, or an empty array if the dictionary has no entries.
- [valueForKey:](nsdictionary/value%28forkey_%29.md): Returns the value associated with a given key.
- [getObjects:andKeys:count:](nsdictionary/getobjects_andkeys_count_.md): Returns by reference C arrays of the keys and values in the dictionary.
- [getObjects:andKeys:](nsdictionary/getobjects_andkeys_.md): Deprecated. Returns by reference C arrays of the keys and values in the dictionary.
- [objectsForKeys:notFoundMarker:](nsdictionary/objects%28forkeys_notfoundmarker_%29.md): Returns as a static array the set of objects from the dictionary that corresponds to the specified keys.
- [objectForKey:](nsdictionary/object%28forkey_%29.md): Returns the value associated with a given key.
- [objectForKeyedSubscript:](nsdictionary/subscript%28__%29-52n56.md): Returns the value associated with a given key.

### Enumerating Dictionaries

- [keyEnumerator](nsdictionary/keyenumerator%28%29.md): Provides an enumerator to access the keys in the dictionary.
- [objectEnumerator](nsdictionary/objectenumerator%28%29.md): Returns an enumerator object that lets you access each value in the dictionary.
- [enumerateKeysAndObjectsUsingBlock:](nsdictionary/enumeratekeysandobjects%28__%29.md): Applies a given block object to the entries of the dictionary.
- [enumerateKeysAndObjectsWithOptions:usingBlock:](nsdictionary/enumeratekeysandobjects%28options_using_%29.md): Applies a given block object to the entries of the dictionary, with options specifying how the enumeration is performed.
- [countByEnumeratingWithState:objects:count:](nsdictionary/countbyenumeratingwithstate_objects_count_.md): Returns by reference a C array of objects over which the sender should iterate.

### Sorting Dictionaries

- [keysSortedByValueUsingSelector:](nsdictionary/keyssortedbyvalue%28using_%29.md): Returns an array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values.
- [keysSortedByValueUsingComparator:](nsdictionary/keyssortedbyvalue%28comparator_%29.md): Returns an array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values using a given comparator block.
- [keysSortedByValueWithOptions:usingComparator:](nsdictionary/keyssortedbyvalue%28options_usingcomparator_%29.md): Returns an array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values using a given comparator block and a specified set of options.

### Filtering Dictionaries

- [keysOfEntriesPassingTest:](nsdictionary/keysofentries%28passingtest_%29.md): Returns the set of keys whose corresponding value satisfies a constraint described by a block object.
- [keysOfEntriesWithOptions:passingTest:](nsdictionary/keysofentries%28options_passingtest_%29.md): Returns the set of keys whose corresponding value satisfies a constraint described by a block object.

### Storing Dictionaries

- [writeToURL:error:](nsdictionary/write%28to_%29.md): Writes a property list representation of the contents of the dictionary to a given URL.
- [writeToURL:atomically:](nsdictionary/write%28to_atomically_%29.md): Deprecated. Writes a property list representation of the contents of the dictionary to a given URL.
- [writeToFile:atomically:](nsdictionary/write%28tofile_atomically_%29.md): Deprecated. Writes a property list representation of the contents of the dictionary to a given path.

### Accessing File Attributes

These convenience methods are for use with dictionaries returned by the [NSFileManager](filemanager.md) method [attributesOfItemAtPath:error:](filemanager/attributesofitem%28atpath_%29.md), and allow you to access POSIX and HFS attributes for files and directories.

- [fileSize](nsdictionary/filesize%28%29.md): Returns the file’s size, in bytes.
- [fileType](nsdictionary/filetype%28%29.md): Returns the file type.
- [fileCreationDate](nsdictionary/filecreationdate%28%29.md): Returns the file’s creation date.
- [fileModificationDate](nsdictionary/filemodificationdate%28%29.md): Returns file’s modification date.
- [filePosixPermissions](nsdictionary/fileposixpermissions%28%29.md): Returns the file’s POSIX permissions.
- [fileOwnerAccountID](nsdictionary/fileowneraccountid%28%29.md): Returns the file’s owner account ID.
- [fileOwnerAccountName](nsdictionary/fileowneraccountname%28%29.md): Returns the file’s owner account name.
- [fileGroupOwnerAccountID](nsdictionary/filegroupowneraccountid%28%29.md): Returns file’s group owner account ID.
- [fileGroupOwnerAccountName](nsdictionary/filegroupowneraccountname%28%29.md): Returns the file’s group owner account name.
- [fileExtensionHidden](nsdictionary/fileextensionhidden%28%29.md): Returns a Boolean value indicating whether the file hides its extension.
- [fileIsImmutable](nsdictionary/fileisimmutable%28%29.md): Returns a Boolean value indicating whether the file is immutable.
- [fileIsAppendOnly](nsdictionary/fileisappendonly%28%29.md): Returns a Boolean value indicating whether the file is append only.
- [fileSystemFileNumber](nsdictionary/filesystemfilenumber%28%29.md): Returns the filesystem file number.
- [fileSystemNumber](nsdictionary/filesystemnumber%28%29.md): Returns the filesystem number.
- [fileHFSTypeCode](nsdictionary/filehfstypecode%28%29.md): Returns file’s HFS type code.
- [fileHFSCreatorCode](nsdictionary/filehfscreatorcode%28%29.md): Returns the file’s HFS creator code.

### Describing a Dictionary

- [description](nsdictionary/description.md): A string that represents the contents of the dictionary, formatted as a property list.
- [descriptionInStringsFileFormat](nsdictionary/descriptioninstringsfileformat.md): A string that represents the contents of the dictionary, formatted in `.strings` file format.
- [descriptionWithLocale:](nsdictionary/description%28withlocale_%29.md): Returns a string object that represents the contents of the dictionary, formatted as a property list.
- [descriptionWithLocale:indent:](nsdictionary/description%28withlocale_indent_%29.md): Returns a string object that represents the contents of the dictionary, formatted as a property list.

### Instance Methods

- [initWithContentsOfURL:](nsdictionary/init%28contentsof_%29.md): Deprecated. Initializes a newly allocated dictionary using the keys and values found at a given URL.
- [initWithContentsOfURL:error:](nsdictionary/init%28contentsof_error_%29.md): Initializes a newly allocated dictionary using the keys and values found at a given URL.

### Type Methods

- [dictionaryWithContentsOfURL:](nsdictionary/dictionarywithcontentsofurl_.md): Deprecated. Creates a dictionary using the keys and values found in a resource specified by a given URL.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSMutableDictionary](nsmutabledictionary.md)

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [NSCopying](nscopying.md)
- [NSFastEnumeration](nsfastenumeration.md)
- [NSFetchRequestResult](../coredata/nsfetchrequestresult.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSObject](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Basic Collections

- [NSArray](nsarray.md): A static ordered collection of objects.
- [NSMutableArray](nsmutablearray.md): A dynamic ordered collection of objects.
- [NSMutableDictionary](nsmutabledictionary.md): A dynamic collection of objects associated with unique keys.
- [NSSet](nsset.md): A static, unordered collection of unique objects.
- [NSMutableSet](nsmutableset.md): A dynamic unordered collection of unique objects.
