> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibrarydidchangenotification](https://developer.apple.com/documentation/ituneslibrary/itlibrarydidchangenotification)

# ITLibraryDidChangeNotification

**Interface language:** Objective-C

**Framework:** iTunes Library  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 14.0+ · macOS 13.0+

This notification is sent to NSDistributedNotificationCenter when a change has occurred in the library.

## Declaration

```objectivec
extern NSNotificationName const ITLibraryDidChangeNotification;
```

<a id="Overview"></a>

## Overview

The client should call [reloadData](itlibrary/reloaddata%28%29.md) if it wants a new view of the library contents.

> **Note**

>  This is not a fine-grained notification.  This API does not support per-object change notifications.
