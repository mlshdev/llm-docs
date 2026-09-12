> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/ssreadinglist](https://developer.apple.com/documentation/safariservices/ssreadinglist)

# SSReadingList (Swift)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An object for adding items to a user’s Safari Reading List.

## Declaration

```swift
class SSReadingList
```

## Topics

### Getting the Reading List Singleton Object

- [default()](ssreadinglist/default%28%29.md): Returns the Safari Reading List singleton object.

### Checking Whether a URL is Supported by Reading List

- [supportsURL(\_:)](ssreadinglist/supportsurl%28__%29.md): Determines whether a URL can be added to the Reading List.

### Adding an Item to the Reading List

- [addItem(with:title:previewText:)](ssreadinglist/additem%28with_title_previewtext_%29.md): Adds an item to the Reading List.

### Constants

- [Reading List Error Domain](reading-list-error-domain.md): The domain used for Reading List errors.
- [SSReadingListError.Code](ssreadinglisterror/code.md): Messages that describe a Safari Reading List error.

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

## See Also

### Safari Reading List

- [SSReadingListErrorDomain](ssreadinglisterrordomain.md): The domain for Safari Reading List errors.
- [SSReadingListError.Code](ssreadinglisterror/code.md): Messages that describe a Safari Reading List error.
- [SSReadingListError](ssreadinglisterror.md): A Safari Reading List error.

# SSReadingList (Objective-C)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An object for adding items to a user’s Safari Reading List.

## Declaration

```objectivec
@interface SSReadingList : NSObject
```

## Topics

### Getting the Reading List Singleton Object

- [defaultReadingList](ssreadinglist/default%28%29.md): Returns the Safari Reading List singleton object.

### Checking Whether a URL is Supported by Reading List

- [supportsURL:](ssreadinglist/supportsurl%28__%29.md): Determines whether a URL can be added to the Reading List.

### Adding an Item to the Reading List

- [addReadingListItemWithURL:title:previewText:error:](ssreadinglist/additem%28with_title_previewtext_%29.md): Adds an item to the Reading List.

### Constants

- [Reading List Error Domain](reading-list-error-domain.md): The domain used for Reading List errors.
- [SSReadingListErrorCode](ssreadinglisterror/code.md): Messages that describe a Safari Reading List error.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Safari Reading List

- [SSReadingListErrorDomain](ssreadinglisterrordomain.md): The domain for Safari Reading List errors.
- [SSReadingListErrorCode](ssreadinglisterror/code.md): Messages that describe a Safari Reading List error.
