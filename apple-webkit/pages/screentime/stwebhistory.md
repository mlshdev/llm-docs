> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/screentime/stwebhistory](https://developer.apple.com/documentation/screentime/stwebhistory)

# STWebHistory (Swift)

**Framework:** Screen Time  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

The object you use to delete web-usage data.

## Declaration

```swift
class STWebHistory
```

<a id="overview"></a>

## Overview

This class provides an easy way for you to delete web history, including:

- All history
- History associated to a specific URL
- History during a specific time interval

## Topics

### Initializers

- [init(bundleIdentifier:)](stwebhistory/init%28bundleidentifier_%29.md): Creates a web history instance to delete web-usage data associated to the bundle identifier you specify.
- [init(bundleIdentifier:profileIdentifier:)](stwebhistory/init%28bundleidentifier_profileidentifier_%29.md): Creates a web history instance to delete web-usage data associated to the bundle identifier and profile identifier you specify.
- [init(profileIdentifier:)](stwebhistory/init%28profileidentifier_%29.md): Creates a web history instance to delete web-usage data associated to the profile identifier you specify.

### Instance methods

- [deleteAllHistory()](stwebhistory/deleteallhistory%28%29.md): Deletes all web history associated with the bundle identifier you specified during initialization.
- [deleteHistory(during:)](stwebhistory/deletehistory%28during_%29.md): Deletes web history that occurred during the date interval you specify.
- [deleteHistory(for:)](stwebhistory/deletehistory%28for_%29.md): Deletes all the web history for the URL you specify.

### Structures

- [STWebHistory.ProfileIdentifier](stwebhistory/profileidentifier.md): An identifier representing a web history profile.

### Instance Methods

- [fetchAllHistory(completionHandler:)](stwebhistory/fetchallhistory%28completionhandler_%29.md): Fetches all web history associated with the bundle identifier and profile identifier you specified during initialization.
- [fetchHistory(during:completionHandler:)](stwebhistory/fetchhistory%28during_completionhandler_%29.md): Fetches web history that occurred during the date interval you specify.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# STWebHistory (Objective-C)

**Framework:** Screen Time  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

The object you use to delete web-usage data.

## Declaration

```objectivec
@interface STWebHistory : NSObject
```

<a id="overview"></a>

## Overview

This class provides an easy way for you to delete web history, including:

- All history
- History associated to a specific URL
- History during a specific time interval

## Topics

### Initializers

- [initWithBundleIdentifier:error:](stwebhistory/init%28bundleidentifier_%29.md): Creates a web history instance to delete web-usage data associated to the bundle identifier you specify.

### Instance methods

- [deleteAllHistory](stwebhistory/deleteallhistory%28%29.md): Deletes all web history associated with the bundle identifier you specified during initialization.
- [deleteHistoryDuringInterval:](stwebhistory/deletehistory%28during_%29.md): Deletes web history that occurred during the date interval you specify.
- [deleteHistoryForURL:](stwebhistory/deletehistory%28for_%29.md): Deletes all the web history for the URL you specify.

### Instance Methods

- [fetchAllHistoryWithCompletionHandler:](stwebhistory/fetchallhistory%28completionhandler_%29.md): Fetches all web history associated with the bundle identifier and profile identifier you specified during initialization.
- [fetchHistoryDuringInterval:completionHandler:](stwebhistory/fetchhistory%28during_completionhandler_%29.md): Fetches web history that occurred during the date interval you specify.
- [initWithBundleIdentifier:profileIdentifier:error:](stwebhistory/init%28bundleidentifier_profileidentifier_%29.md): Creates a web history instance to delete web-usage data associated to the bundle identifier and profile identifier you specify.
- [initWithProfileIdentifier:](stwebhistory/init%28profileidentifier_%29.md): Creates a web history instance to delete web-usage data associated to the profile identifier you specify.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)
