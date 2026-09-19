> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsusernotificationaction/init(identifier:title:)

# init(identifier:title:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Creates a user notification action with a specified identifier and title.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```swift
convenience init(identifier: String?, title: String?)
```

## Parameters

- `identifier`: The identifier for the action.
- `title`: A localized string suitable for display to the user.

# actionWithIdentifier:title: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Creates a user notification action with a specified identifier and title.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```objectivec
+ (instancetype) actionWithIdentifier:(NSString *) identifier title:(NSString *) title;
```

## Parameters

- `identifier`: The identifier for the action.
- `title`: A localized string suitable for display to the user.
