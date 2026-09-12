> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/removeobject(forkey:)](https://developer.apple.com/documentation/foundation/userdefaults/removeobject(forkey:))

# removeObject(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the value for the specified key from the defaults database.

## Declaration

```swift
func removeObject(forKey defaultName: String)
```

## Parameters

- `defaultName`: The key with the value you want to remove.

<a id="discussion"></a>

## Discussion

This method removes the specified key and value from the app-specific settings. If your `UserDefaults` object writes to settings for an app group or other shared settings file, the method removes the key from that file instead. This method removes the key and value only from the target domain, and doesn’t impact values for the same key in other domains. For example, it doesn’t remove keys and values from the global domain.

After you remove the key, the system generates a [didChangeNotification](didchangenotification.md) for registered observers.

# removeObjectForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the value for the specified key from the defaults database.

## Declaration

```objectivec
- (void) removeObjectForKey:(NSString *) defaultName;
```

## Parameters

- `defaultName`: The key with the value you want to remove.

<a id="discussion"></a>

## Discussion

This method removes the specified key and value from the app-specific settings. If your `UserDefaults` object writes to settings for an app group or other shared settings file, the method removes the key from that file instead. This method removes the key and value only from the target domain, and doesn’t impact values for the same key in other domains. For example, it doesn’t remove keys and values from the global domain.

After you remove the key, the system generates a [NSUserDefaultsDidChangeNotification](didchangenotification.md) for registered observers.
