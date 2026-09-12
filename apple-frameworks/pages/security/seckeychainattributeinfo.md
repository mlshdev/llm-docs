> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainattributeinfo](https://developer.apple.com/documentation/security/seckeychainattributeinfo)

# SecKeychainAttributeInfo (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** macOS 10.0+

A structure that represents an attribute.

## Declaration

```swift
struct SecKeychainAttributeInfo
```

<a id="overview"></a>

## Overview

Each tag and format item form a pair. Use [SecKeychainAttributeInfoForItemID(\_:\_:\_:)](seckeychainattributeinfoforitemid%28______%29.md) to obtain the structure for a given keychain item, and [SecKeychainFreeAttributeInfo(\_:)](seckeychainfreeattributeinfo%28__%29.md) to release that structure’s memory when you are done with it. Use an instance of this structure in a call to the [SecKeychainItemCopyAttributesAndData(\_:\_:\_:\_:\_:\_:)](seckeychainitemcopyattributesanddata%28____________%29.md) function to specify the attributes of a keychain item to retrieve.

## Topics

### Instance Properties

- [count](seckeychainattributeinfo/count.md): The number of tag-format pairs in the respective arrays.
- [format](seckeychainattributeinfo/format.md): A pointer to the first attribute format in the array.
- [tag](seckeychainattributeinfo/tag.md): A pointer to the first attribute tag in the array.

### Initializers

- [init(count:tag:format:)](seckeychainattributeinfo/init%28count_tag_format_%29.md): Creates a new attribute information structure.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

# SecKeychainAttributeInfo (Objective-C)

**Framework:** Security  
**Kind:** Structure  
**Availability:** macOS 10.0+

A structure that represents an attribute.

## Declaration

```objectivec
struct SecKeychainAttributeInfo;
```

<a id="overview"></a>

## Overview

Each tag and format item form a pair. Use [SecKeychainAttributeInfoForItemID](seckeychainattributeinfoforitemid%28______%29.md) to obtain the structure for a given keychain item, and [SecKeychainFreeAttributeInfo](seckeychainfreeattributeinfo%28__%29.md) to release that structure’s memory when you are done with it. Use an instance of this structure in a call to the [SecKeychainItemCopyAttributesAndData](seckeychainitemcopyattributesanddata%28____________%29.md) function to specify the attributes of a keychain item to retrieve.

## Topics

### Instance Properties

- [count](seckeychainattributeinfo/count.md): The number of tag-format pairs in the respective arrays.
- [format](seckeychainattributeinfo/format.md): A pointer to the first attribute format in the array.
- [tag](seckeychainattributeinfo/tag.md): A pointer to the first attribute tag in the array.
