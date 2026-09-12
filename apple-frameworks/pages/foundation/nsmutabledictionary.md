> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledictionary](https://developer.apple.com/documentation/foundation/nsmutabledictionary)

# NSMutableDictionary (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dynamic collection of objects associated with unique keys.

## Declaration

```swift
class NSMutableDictionary
```

<a id="overview"></a>

## Overview

In Swift, you can use this type instead of a [Dictionary](https://developer.apple.com/documentation/swift/dictionary) variable in cases that require reference semantics.

The `NSMutableDictionary` class declares the programmatic interface to objects that manage mutable associations of keys and values. It adds modification operations to the basic operations it inherits from [NSDictionary](nsdictionary.md).

`NSMutableDictionary` is “toll-free bridged” with its Core Foundation counterpart, [CFMutableDictionary](../corefoundation/cfmutabledictionary.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information on toll-free bridging.

<a id="Setting-Values-Using-Subscripting"></a>

### Setting Values Using Subscripting

In addition to the provided instance methods, such as [setObject(\_:forKey:)](nsmutabledictionary/setobject%28__forkey_%29.md), you can access `NSDictionary` values by their keys using *subscripting*.

**Swift**

```swift
let value = "someValue"
mutableDictionary["someKey"] = value
```

**Objective-C**

```objc
id value = @"someValue";
mutableDictionary[@"someKey"] = value;
```

<a id="Subclassing-Notes"></a>

### Subclassing Notes

There should typically be little need to subclass `NSMutableDictionary`. If you do need to customize behavior, it is often better to consider composition rather than subclassing.

<a id="Methods-to-Override"></a>

#### Methods to Override

In a subclass, you must override both of its primitive methods:

- [setObject(\_:forKey:)](nsmutabledictionary/setobject%28__forkey_%29.md)
- [removeObject(forKey:)](nsmutabledictionary/removeobject%28forkey_%29.md)

You must also override the primitive methods of the [NSDictionary](nsdictionary.md) class.

## Topics

### Creating and Initializing a Mutable Dictionary

- [init(capacity:)](nsmutabledictionary/init%28capacity_%29.md): Initializes a newly allocated mutable dictionary, allocating enough memory to hold `numItems` entries.
- [init()](nsmutabledictionary/init%28%29.md): Initializes a newly allocated mutable dictionary.
- [init(sharedKeySet:)](nsmutabledictionary/init%28sharedkeyset_%29.md): Creates a mutable dictionary which is optimized for dealing with a known set of keys.

### Adding Entries to a Mutable Dictionary

- [setObject(\_:forKey:)](nsmutabledictionary/setobject%28__forkey_%29.md): Adds a given key-value pair to the dictionary.
- [setValue(\_:forKey:)](nsmutabledictionary/setvalue%28__forkey_%29.md): Adds a given key-value pair to the dictionary.
- [addEntries(from:)](nsmutabledictionary/addentries%28from_%29.md): Adds to the receiving dictionary the entries from another dictionary.
- [setDictionary(\_:)](nsmutabledictionary/setdictionary%28__%29.md): Sets the contents of the receiving dictionary to entries in a given dictionary.

### Removing Entries From a Mutable Dictionary

- [removeObject(forKey:)](nsmutabledictionary/removeobject%28forkey_%29.md): Removes a given key and its associated value from the dictionary.
- [removeAllObjects()](nsmutabledictionary/removeallobjects%28%29.md): Empties the dictionary of its entries.
- [removeObjects(forKeys:)](nsmutabledictionary/removeobjects%28forkeys_%29.md): Removes from the dictionary entries specified by elements in a given array.

### Initializers

- [init(OBEXHeadersData:)](nsmutabledictionary/init%28obexheadersdata_%29.md)
- [init(OBEXHeadersData:headersDataSize:)](nsmutabledictionary/init%28obexheadersdata_headersdatasize_%29.md)
- [init(coder:)](nsmutabledictionary/init%28coder_%29.md)

### Instance Methods

- [addApplicationParameterHeader(\_:length:)](nsmutabledictionary/addapplicationparameterheader%28__length_%29.md)
- [addAuthorizationChallengeHeader(\_:length:)](nsmutabledictionary/addauthorizationchallengeheader%28__length_%29.md)
- [addAuthorizationResponseHeader(\_:length:)](nsmutabledictionary/addauthorizationresponseheader%28__length_%29.md)
- [addBodyHeader(\_:length:endOfBody:)](nsmutabledictionary/addbodyheader%28__length_endofbody_%29.md)
- [addByteSequenceHeader(\_:length:)](nsmutabledictionary/addbytesequenceheader%28__length_%29.md)
- [addConnectionIDHeader(\_:length:)](nsmutabledictionary/addconnectionidheader%28__length_%29.md)
- [addCountHeader(\_:)](nsmutabledictionary/addcountheader%28__%29.md)
- [addDescriptionHeader(\_:)](nsmutabledictionary/adddescriptionheader%28__%29.md)
- [addHTTPHeader(\_:length:)](nsmutabledictionary/addhttpheader%28__length_%29.md)
- [addImageDescriptorHeader(\_:length:)](nsmutabledictionary/addimagedescriptorheader%28__length_%29.md)
- [addImageHandleHeader(\_:)](nsmutabledictionary/addimagehandleheader%28__%29.md)
- [addLengthHeader(\_:)](nsmutabledictionary/addlengthheader%28__%29.md)
- [addNameHeader(\_:)](nsmutabledictionary/addnameheader%28__%29.md)
- [addObjectClassHeader(\_:length:)](nsmutabledictionary/addobjectclassheader%28__length_%29.md)
- [addTargetHeader(\_:length:)](nsmutabledictionary/addtargetheader%28__length_%29.md)
- [addTime4ByteHeader(\_:)](nsmutabledictionary/addtime4byteheader%28__%29.md)
- [addTimeISOHeader(\_:length:)](nsmutabledictionary/addtimeisoheader%28__length_%29.md)
- [addTypeHeader(\_:)](nsmutabledictionary/addtypeheader%28__%29.md)
- [addUserDefinedHeader(\_:length:)](nsmutabledictionary/adduserdefinedheader%28__length_%29.md)
- [addWhoHeader(\_:length:)](nsmutabledictionary/addwhoheader%28__length_%29.md)
- [getHeaderBytes()](nsmutabledictionary/getheaderbytes%28%29.md)

### Default Implementations

- [NSDictionary Implementations](nsmutabledictionary/nsdictionary-implementations.md)
- [NSMutableDictionary Implementations](nsmutabledictionary/nsmutabledictionary-implementations.md)

## Relationships

### Inherits From

- [NSDictionary](nsdictionary.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByDictionaryLiteral](https://developer.apple.com/documentation/swift/expressiblebydictionaryliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSFastEnumeration](nsfastenumeration.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

# NSMutableDictionary (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dynamic collection of objects associated with unique keys.

## Declaration

```objectivec
@interface NSMutableDictionary : NSDictionary
```

<a id="overview"></a>

## Overview

In Swift, you can use this type instead of a [Dictionary](https://developer.apple.com/documentation/swift/dictionary) variable in cases that require reference semantics.

The `NSMutableDictionary` class declares the programmatic interface to objects that manage mutable associations of keys and values. It adds modification operations to the basic operations it inherits from [NSDictionary](nsdictionary.md).

`NSMutableDictionary` is “toll-free bridged” with its Core Foundation counterpart, [CFMutableDictionaryRef](../corefoundation/cfmutabledictionary.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information on toll-free bridging.

<a id="Setting-Values-Using-Subscripting"></a>

### Setting Values Using Subscripting

In addition to the provided instance methods, such as [setObject:forKey:](nsmutabledictionary/setobject%28__forkey_%29.md), you can access `NSDictionary` values by their keys using *subscripting*.

**Swift**

```swift
let value = "someValue"
mutableDictionary["someKey"] = value
```

**Objective-C**

```objc
id value = @"someValue";
mutableDictionary[@"someKey"] = value;
```

<a id="Subclassing-Notes"></a>

### Subclassing Notes

There should typically be little need to subclass `NSMutableDictionary`. If you do need to customize behavior, it is often better to consider composition rather than subclassing.

<a id="Methods-to-Override"></a>

#### Methods to Override

In a subclass, you must override both of its primitive methods:

- [setObject:forKey:](nsmutabledictionary/setobject%28__forkey_%29.md)
- [removeObjectForKey:](nsmutabledictionary/removeobject%28forkey_%29.md)

You must also override the primitive methods of the [NSDictionary](nsdictionary.md) class.

## Topics

### Creating and Initializing a Mutable Dictionary

- [dictionaryWithCapacity:](nsmutabledictionary/dictionarywithcapacity_.md): Creates and returns a mutable dictionary, initially giving it enough allocated memory to hold a given number of entries.
- [initWithCapacity:](nsmutabledictionary/init%28capacity_%29.md): Initializes a newly allocated mutable dictionary, allocating enough memory to hold `numItems` entries.
- [init](nsmutabledictionary/init%28%29.md): Initializes a newly allocated mutable dictionary.
- [dictionaryWithSharedKeySet:](nsmutabledictionary/init%28sharedkeyset_%29.md): Creates a mutable dictionary which is optimized for dealing with a known set of keys.

### Adding Entries to a Mutable Dictionary

- [setObject:forKey:](nsmutabledictionary/setobject%28__forkey_%29.md): Adds a given key-value pair to the dictionary.
- [setObject:forKeyedSubscript:](nsmutabledictionary/setobject_forkeyedsubscript_.md): Adds a given key-value pair to the dictionary.
- [setValue:forKey:](nsmutabledictionary/setvalue%28__forkey_%29.md): Adds a given key-value pair to the dictionary.
- [addEntriesFromDictionary:](nsmutabledictionary/addentries%28from_%29.md): Adds to the receiving dictionary the entries from another dictionary.
- [setDictionary:](nsmutabledictionary/setdictionary%28__%29.md): Sets the contents of the receiving dictionary to entries in a given dictionary.

### Removing Entries From a Mutable Dictionary

- [removeObjectForKey:](nsmutabledictionary/removeobject%28forkey_%29.md): Removes a given key and its associated value from the dictionary.
- [removeAllObjects](nsmutabledictionary/removeallobjects%28%29.md): Empties the dictionary of its entries.
- [removeObjectsForKeys:](nsmutabledictionary/removeobjects%28forkeys_%29.md): Removes from the dictionary entries specified by elements in a given array.

### Instance Methods

- [addApplicationParameterHeader:length:](nsmutabledictionary/addapplicationparameterheader%28__length_%29.md)
- [addAuthorizationChallengeHeader:length:](nsmutabledictionary/addauthorizationchallengeheader%28__length_%29.md)
- [addAuthorizationResponseHeader:length:](nsmutabledictionary/addauthorizationresponseheader%28__length_%29.md)
- [addBodyHeader:length:endOfBody:](nsmutabledictionary/addbodyheader%28__length_endofbody_%29.md)
- [addByteSequenceHeader:length:](nsmutabledictionary/addbytesequenceheader%28__length_%29.md)
- [addConnectionIDHeader:length:](nsmutabledictionary/addconnectionidheader%28__length_%29.md)
- [addCountHeader:](nsmutabledictionary/addcountheader%28__%29.md)
- [addDescriptionHeader:](nsmutabledictionary/adddescriptionheader%28__%29.md)
- [addHTTPHeader:length:](nsmutabledictionary/addhttpheader%28__length_%29.md)
- [addImageDescriptorHeader:length:](nsmutabledictionary/addimagedescriptorheader%28__length_%29.md)
- [addImageHandleHeader:](nsmutabledictionary/addimagehandleheader%28__%29.md)
- [addLengthHeader:](nsmutabledictionary/addlengthheader%28__%29.md)
- [addNameHeader:](nsmutabledictionary/addnameheader%28__%29.md)
- [addObjectClassHeader:length:](nsmutabledictionary/addobjectclassheader%28__length_%29.md)
- [addTargetHeader:length:](nsmutabledictionary/addtargetheader%28__length_%29.md)
- [addTime4ByteHeader:](nsmutabledictionary/addtime4byteheader%28__%29.md)
- [addTimeISOHeader:length:](nsmutabledictionary/addtimeisoheader%28__length_%29.md)
- [addTypeHeader:](nsmutabledictionary/addtypeheader%28__%29.md)
- [addUserDefinedHeader:length:](nsmutabledictionary/adduserdefinedheader%28__length_%29.md)
- [addWhoHeader:length:](nsmutabledictionary/addwhoheader%28__length_%29.md)
- [getHeaderBytes](nsmutabledictionary/getheaderbytes%28%29.md)
- [initWithCoder:](nsmutabledictionary/init%28coder_%29.md)
- [initWithContentsOfFile:](nsmutabledictionary/initwithcontentsoffile_.md)
- [initWithContentsOfURL:](nsmutabledictionary/initwithcontentsofurl_.md)

### Type Methods

- [dictionaryWithContentsOfFile:](nsmutabledictionary/dictionarywithcontentsoffile_.md)
- [dictionaryWithContentsOfURL:](nsmutabledictionary/dictionarywithcontentsofurl_.md)
- [dictionaryWithOBEXHeadersData:](nsmutabledictionary/init%28obexheadersdata_%29.md)
- [dictionaryWithOBEXHeadersData:headersDataSize:](nsmutabledictionary/init%28obexheadersdata_headersdatasize_%29.md)
- [withOBEXHeadersData:headersDataSize:](nsmutabledictionary/withobexheadersdata_headersdatasize_.md): Deprecated.

## Relationships

### Inherits From

- [NSDictionary](nsdictionary.md)

## See Also

### Basic Collections

- [NSArray](nsarray.md): A static ordered collection of objects.
- [NSMutableArray](nsmutablearray.md): A dynamic ordered collection of objects.
- [NSDictionary](nsdictionary.md): A static collection of objects associated with unique keys.
- [NSSet](nsset.md): A static, unordered collection of unique objects.
- [NSMutableSet](nsmutableset.md): A dynamic unordered collection of unique objects.
