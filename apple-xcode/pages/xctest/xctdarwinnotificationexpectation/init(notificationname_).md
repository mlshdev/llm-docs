> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-4fca00e84bae; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xctest/xctdarwinnotificationexpectation/init(notificationname:)

# init(notificationName:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Creates an expectation that waits for a Darwin notification with the specified name to be posted.

## Declaration

```swift
init(notificationName: String)
```

## Parameters

- `notificationName`: The notification name to watch for.

# initWithNotificationName: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Creates an expectation that waits for a Darwin notification with the specified name to be posted.

## Declaration

```objectivec
- (instancetype) initWithNotificationName:(NSString *) notificationName;
```

## Parameters

- `notificationName`: The notification name to watch for.
