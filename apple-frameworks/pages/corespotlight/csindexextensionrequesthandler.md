> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csindexextensionrequesthandler](https://developer.apple.com/documentation/corespotlight/csindexextensionrequesthandler)

# CSIndexExtensionRequestHandler (Swift)

**Framework:** Core Spotlight  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An interface that implements an index-maintenance app extension.

## Declaration

```swift
class CSIndexExtensionRequestHandler
```

## Mentioned In

- [Generating summary and priority data for indexed items](generating-summary-and-priority-data-for-indexed-items.md)

<a id="overview"></a>

## Overview

The `CSIndexExtensionRequestHandler` class provides the main entry point for an index-maintenance app extension. If any issues arise with your app’s indexes and your app isn’t running, the system loads your app extension and looks for an implementation of this class. It instantiates the class it finds and uses it to perform any index-related maintenance.

Define a custom subclass of `CSIndexExtensionRequestHandler` in your app extension and implement methods of the [CSSearchableIndexDelegate](cssearchableindexdelegate.md) protocol in it. Use those methods to perform any required updates to your app’s index files. For example, use the [searchableIndex(\_:reindexAllSearchableItemsWithAcknowledgementHandler:)](cssearchableindexdelegate/searchableindex%28__reindexallsearchableitemswithacknowledgementhandler_%29.md) method to reindex all items in your app.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CSSearchableIndexDelegate](cssearchableindexdelegate.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Spotlight app extensions

- [Regenerating your app’s indexes on demand](regenerating-your-app-s-indexes-on-demand.md): Create an app extension to maintain your app’s indexes and regenerate them as needed.
- [CSImportExtension](csimportextension.md): An object that provides searchable attributes for file types that the app supports.

# CSIndexExtensionRequestHandler (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An interface that implements an index-maintenance app extension.

## Declaration

```objectivec
@interface CSIndexExtensionRequestHandler : NSObject
```

## Mentioned In

- [Generating summary and priority data for indexed items](generating-summary-and-priority-data-for-indexed-items.md)

<a id="overview"></a>

## Overview

The `CSIndexExtensionRequestHandler` class provides the main entry point for an index-maintenance app extension. If any issues arise with your app’s indexes and your app isn’t running, the system loads your app extension and looks for an implementation of this class. It instantiates the class it finds and uses it to perform any index-related maintenance.

Define a custom subclass of `CSIndexExtensionRequestHandler` in your app extension and implement methods of the [CSSearchableIndexDelegate](cssearchableindexdelegate.md) protocol in it. Use those methods to perform any required updates to your app’s index files. For example, use the [searchableIndex:reindexAllSearchableItemsWithAcknowledgementHandler:](cssearchableindexdelegate/searchableindex%28__reindexallsearchableitemswithacknowledgementhandler_%29.md) method to reindex all items in your app.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CSSearchableIndexDelegate](cssearchableindexdelegate.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)

## See Also

### Spotlight app extensions

- [Regenerating your app’s indexes on demand](regenerating-your-app-s-indexes-on-demand.md): Create an app extension to maintain your app’s indexes and regenerate them as needed.
- [CSImportExtension](csimportextension.md): An object that provides searchable attributes for file types that the app supports.
