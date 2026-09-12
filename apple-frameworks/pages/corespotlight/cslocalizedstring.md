> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cslocalizedstring](https://developer.apple.com/documentation/corespotlight/cslocalizedstring)

# CSLocalizedString (Swift)

**Framework:** Core Spotlight  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An object that displays localized text in search results related to your app.

## Declaration

```swift
class CSLocalizedString
```

<a id="overview"></a>

## Overview

The `CSLocalizedString` class helps you localize text in searchable items. You can use a `CSLocalizedString` object in place of an [NSString](../foundation/nsstring.md) object to display localized text in search results related to your app.

For example, you might use the following code to define a `CSLocalizedString` object for a searchable item you want to identify as “Song” in English:

```objc
CSSearchableItem *item = [CSSearchableItem new];
    item.uniqueIdentifier = @"song";
 
    CSSearchableItemAttributeSet *attributes = [[CSSearchableItemAttributeSet alloc] initWithItemContentType:(NSString *)kUTTypeItem];
    item.attributeSet = attributes;
 
    CSLocalizedString *displayName = [[CSLocalizedString alloc] initWithLocalizedStrings:@{@"en":@"Song", @"fr":@"Chanson"}];
    attributes.displayName = displayName.localizedString;
```

## Topics

### Specifying localized strings

- [init(localizedStrings:)](cslocalizedstring/init%28localizedstrings_%29.md): Initializes a `CSLocalizedString` object with the specified dictionary of localized strings.

### Getting a localized string

- [localizedString()](cslocalizedstring/localizedstring%28%29.md): Returns the localized string for the current language.

## Relationships

### Inherits From

- [NSString](../foundation/nsstring.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSItemProviderReading](../foundation/nsitemproviderreading.md)
- [NSItemProviderWriting](../foundation/nsitemproviderwriting.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Searchable items

- [CSSearchableItem](cssearchableitem.md): The details of your app-specific content that someone might search for on their devices.
- [CSSearchableItemAttributeSet](cssearchableitemattributeset.md): The detailed metadata for a searchable item.
- [CSCustomAttributeKey](cscustomattributekey.md): A key associated with a custom attribute for a searchable item.
- [CSPerson](csperson.md): An object that represents a person in the context of search results.

# CSLocalizedString (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An object that displays localized text in search results related to your app.

## Declaration

```objectivec
@interface CSLocalizedString : NSString
```

<a id="overview"></a>

## Overview

The `CSLocalizedString` class helps you localize text in searchable items. You can use a `CSLocalizedString` object in place of an [NSString](../foundation/nsstring.md) object to display localized text in search results related to your app.

For example, you might use the following code to define a `CSLocalizedString` object for a searchable item you want to identify as “Song” in English:

```objc
CSSearchableItem *item = [CSSearchableItem new];
    item.uniqueIdentifier = @"song";
 
    CSSearchableItemAttributeSet *attributes = [[CSSearchableItemAttributeSet alloc] initWithItemContentType:(NSString *)kUTTypeItem];
    item.attributeSet = attributes;
 
    CSLocalizedString *displayName = [[CSLocalizedString alloc] initWithLocalizedStrings:@{@"en":@"Song", @"fr":@"Chanson"}];
    attributes.displayName = displayName.localizedString;
```

## Topics

### Specifying localized strings

- [initWithLocalizedStrings:](cslocalizedstring/init%28localizedstrings_%29.md): Initializes a `CSLocalizedString` object with the specified dictionary of localized strings.

### Getting a localized string

- [localizedString](cslocalizedstring/localizedstring%28%29.md): Returns the localized string for the current language.

## Relationships

### Inherits From

- [NSString](../foundation/nsstring.md)

## See Also

### Searchable items

- [CSSearchableItem](cssearchableitem.md): The details of your app-specific content that someone might search for on their devices.
- [CSSearchableItemAttributeSet](cssearchableitemattributeset.md): The detailed metadata for a searchable item.
- [CSCustomAttributeKey](cscustomattributekey.md): A key associated with a custom attribute for a searchable item.
- [CSPerson](csperson.md): An object that represents a person in the context of search results.
