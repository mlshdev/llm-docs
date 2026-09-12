> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/aekeyword](https://developer.apple.com/documentation/coreservices/aekeyword)

# AEKeyword (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A four-character code that uniquely identifies a descriptor in an Apple event record or an Apple event.

## Declaration

```swift
typealias AEKeyword = FourCharCode
```

<a id="discussion"></a>

## Discussion

The Apple Event Manager uniquely identifies the various parts of an Apple event by means of keywords associated with corresponding descriptors. Keywords are arbitrary names, stored as four-character codes of type `AEKeyword`.

A keyword combined with a descriptor forms a keyword-specified descriptor, which is defined by a data structure of type [AERemoteProcessResolverContext](aeremoteprocessresolvercontext.md). The Apple Event Manager also uses keywords for Apple event attributes. Keyword constants used by the Apple Event Manager are defined in [Keyword Attribute Constants](apple_events/1542920-keyword_attribute_constants.md) and [Keyword Parameter Constants](apple_events/1527206-keyword_parameter_constants.md).

# AEKeyword (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A four-character code that uniquely identifies a descriptor in an Apple event record or an Apple event.

## Declaration

```objectivec
typedef FourCharCode AEKeyword;
```

<a id="discussion"></a>

## Discussion

The Apple Event Manager uniquely identifies the various parts of an Apple event by means of keywords associated with corresponding descriptors. Keywords are arbitrary names, stored as four-character codes of type `AEKeyword`.

A keyword combined with a descriptor forms a keyword-specified descriptor, which is defined by a data structure of type [AERemoteProcessResolverContext](aeremoteprocessresolvercontext.md). The Apple Event Manager also uses keywords for Apple event attributes. Keyword constants used by the Apple Event Manager are defined in [Keyword Attribute Constants](1542920-keyword_attribute_constants.md) and [Keyword Parameter Constants](1527206-keyword_parameter_constants.md).
