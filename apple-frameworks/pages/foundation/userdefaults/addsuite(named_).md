> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/addsuite(named:)](https://developer.apple.com/documentation/foundation/userdefaults/addsuite(named:))

# addSuite(named:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Inserts settings for the specified domain into the search list of the current object.

## Declaration

```swift
func addSuite(named suiteName: String)
```

## Parameters

- `suiteName`: The bundle identifier for the domain you want to add. You don’t need to specify a bundle identifier for another app. Instead, you might specify the app group identifier you use to share data between multiple apps or between your app and an app extension. Don’t specify your app’s bundle identifier or the [globalDomain](globaldomain.md) identifier in this parameter.

<a id="discussion"></a>

## Discussion

This method inserts the domain for your custom suite of settings after the app domain and before the global domain. This arrangement causes the `UserDefaults` object to return your app-specific settings first, followed by settings from the specified suite. If you call this method multiple times, the `UserDefaults` object searches your suites in the order you added them.

This method doesn’t affect the destination for write operations. If you want to write settings to a custom suite, use the [init(suiteName:)](init%28suitename_%29.md) initializer to construct a `UserDefaults` object specifically for that suite.

> **Important**

> An app that accesses settings in a suite must also have the [App Groups entitlement](../../bundleresources/entitlements/com.apple.security.application-groups.md).

## See Also

### Adding and removing search domains

- [removeSuite(named:)](removesuite%28named_%29.md): Removes the specified domain from the search list of the current object.

# addSuiteNamed: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Inserts settings for the specified domain into the search list of the current object.

## Declaration

```objectivec
- (void) addSuiteNamed:(NSString *) suiteName;
```

## Parameters

- `suiteName`: The bundle identifier for the domain you want to add. You don’t need to specify a bundle identifier for another app. Instead, you might specify the app group identifier you use to share data between multiple apps or between your app and an app extension. Don’t specify your app’s bundle identifier or the [NSGlobalDomain](globaldomain.md) identifier in this parameter.

<a id="discussion"></a>

## Discussion

This method inserts the domain for your custom suite of settings after the app domain and before the global domain. This arrangement causes the `UserDefaults` object to return your app-specific settings first, followed by settings from the specified suite. If you call this method multiple times, the `UserDefaults` object searches your suites in the order you added them.

This method doesn’t affect the destination for write operations. If you want to write settings to a custom suite, use the [initWithSuiteName:](init%28suitename_%29.md) initializer to construct a `UserDefaults` object specifically for that suite.

> **Important**

> An app that accesses settings in a suite must also have the [App Groups entitlement](../../bundleresources/entitlements/com.apple.security.application-groups.md).

## See Also

### Adding and removing search domains

- [removeSuiteNamed:](removesuite%28named_%29.md): Removes the specified domain from the search list of the current object.
