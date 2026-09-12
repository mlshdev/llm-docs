> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchtoken](https://developer.apple.com/documentation/uikit/uisearchtoken)

# UISearchToken (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Search criteria in a search text field, represented by text and an optional icon.

## Declaration

```swift
@MainActor class UISearchToken
```

<a id="overview"></a>

## Overview

Use search tokens to help users understand and edit complex search queries in a [UISearchTextField](uisearchtextfield.md). A token acts like a single character in standard text interactions such as deleting, selecting, or dragging. A search token should always have text and may also have an icon.

![Screenshot of a search window with a red circle and the words “Red Flowers Carnation”. The red dot and “Red Flowers” are in a gray box labeled as a UISearchToken and “Carnation” is labeled as text. ](https://developer.apple.com/images/com.apple.uikit/media-3539104@2x.png)

Assign a [representedObject](uisearchtoken/representedobject.md) to each search token that’s meaningful to your app. By attaching this extra data to the token you can reconstruct the full search query using information available in the search field when, for example, your app starts from state restoration or the user starts a search.

See [Using suggested searches with a search controller](using-suggested-searches-with-a-search-controller.md) to learn how to use search tokens.

## Topics

### Creating a search token

- [init(icon:text:)](uisearchtoken/init%28icon_text_%29.md): Creates a search token with the specified text and icon (if any).
- [representedObject](uisearchtoken/representedobject.md): The object represented by the search token.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Search field

- [UISearchTextField](uisearchtextfield.md): A view for displaying and editing text and search tokens.
- [UISearchTextFieldDelegate](uisearchtextfielddelegate.md): The interface for the delegate of a search field.

# UISearchToken (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Search criteria in a search text field, represented by text and an optional icon.

## Declaration

```objectivec
@interface UISearchToken : NSObject
```

<a id="overview"></a>

## Overview

Use search tokens to help users understand and edit complex search queries in a [UISearchTextField](uisearchtextfield.md). A token acts like a single character in standard text interactions such as deleting, selecting, or dragging. A search token should always have text and may also have an icon.

![Screenshot of a search window with a red circle and the words “Red Flowers Carnation”. The red dot and “Red Flowers” are in a gray box labeled as a UISearchToken and “Carnation” is labeled as text. ](https://developer.apple.com/images/com.apple.uikit/media-3539104@2x.png)

Assign a [representedObject](uisearchtoken/representedobject.md) to each search token that’s meaningful to your app. By attaching this extra data to the token you can reconstruct the full search query using information available in the search field when, for example, your app starts from state restoration or the user starts a search.

See [Using suggested searches with a search controller](using-suggested-searches-with-a-search-controller.md) to learn how to use search tokens.

## Topics

### Creating a search token

- [tokenWithIcon:text:](uisearchtoken/init%28icon_text_%29.md): Creates a search token with the specified text and icon (if any).
- [representedObject](uisearchtoken/representedobject.md): The object represented by the search token.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Search field

- [UISearchTextField](uisearchtextfield.md): A view for displaying and editing text and search tokens.
- [UISearchTextFieldDelegate](uisearchtextfielddelegate.md): The interface for the delegate of a search field.
