> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/urlubiquitousshareditempermissions/readonly

# readOnly (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

The values returned for the `NSURLUbiquitousSharedItemCurrentUserPermissionsKey`. The current user is only allowed to read this item.

## Declaration

```swift
static let readOnly: URLUbiquitousSharedItemPermissions
```

## See Also

### Constants

- [readWrite](readwrite.md): The current user is allowed to both read and write this item.

# NSURLUbiquitousSharedItemPermissionsReadOnly (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

The values returned for the `NSURLUbiquitousSharedItemCurrentUserPermissionsKey`. The current user is only allowed to read this item.

## Declaration

```objectivec
extern NSURLUbiquitousSharedItemPermissions const NSURLUbiquitousSharedItemPermissionsReadOnly;
```

## See Also

### Constants

- [NSURLUbiquitousSharedItemPermissionsReadWrite](readwrite.md): The current user is allowed to both read and write this item.
