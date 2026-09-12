> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/aekeydesc](https://developer.apple.com/documentation/coreservices/aekeydesc)

# AEKeyDesc (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Associates a keyword with a descriptor to form a keyword-specifieddescriptor.

## Declaration

```swift
struct AEKeyDesc
```

<a id="overview"></a>

## Overview

The Apple Event Manager uniquely identifies the various partsof an Apple event by means of keywords associated with correspondingdescriptors. A keyword is an arbitrary constant of type [AEKeyword](aekeyword.md) that representsa four-character code.

## Topics

### Initializers

- [init()](aekeydesc/1444200-init.md)
- [init(descKey:descContent:)](aekeydesc/1448884-init.md)

### Instance Properties

- [descContent](aekeydesc/1446095-desccontent.md): A descriptor of type [AEDesc](aedesc.md) that stores the keyword descriptordata. See [AEDesc](aedesc.md).
- [descKey](aekeydesc/1443267-desckey.md): A four-character code of type [AEKeyword](aekeyword.md) that uniquely identifies thekey that is associated with the data in the structure. Some keywordconstants are described in [Keyword Attribute Constants](apple_events/1542920-keyword_attribute_constants.md) and [Keyword Parameter Constants](apple_events/1527206-keyword_parameter_constants.md).See [AEKeyword](aekeyword.md).

# AEKeyDesc (Objective-C)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Associates a keyword with a descriptor to form a keyword-specifieddescriptor.

## Declaration

```objectivec
typedef struct AEKeyDesc {
    ...
} AEKeyDesc;
```

<a id="overview"></a>

## Overview

The Apple Event Manager uniquely identifies the various partsof an Apple event by means of keywords associated with correspondingdescriptors. A keyword is an arbitrary constant of type [AEKeyword](aekeyword.md) that representsa four-character code.

## Topics

### Instance Properties

- [descContent](aekeydesc/1446095-desccontent.md): A descriptor of type [AEDesc](aedesc.md) that stores the keyword descriptordata. See [AEDesc](aedesc.md).
- [descKey](aekeydesc/1443267-desckey.md): A four-character code of type [AEKeyword](aekeyword.md) that uniquely identifies thekey that is associated with the data in the structure. Some keywordconstants are described in [Keyword Attribute Constants](1542920-keyword_attribute_constants.md) and [Keyword Parameter Constants](1527206-keyword_parameter_constants.md).See [AEKeyword](aekeyword.md).
