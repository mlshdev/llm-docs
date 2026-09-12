> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchquery/protectionclasses](https://developer.apple.com/documentation/corespotlight/cssearchquery/protectionclasses)

# protectionClasses (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

The protection types of the indexes you want to search.

## Declaration

```swift
var protectionClasses: [FileProtectionType] { get set }
```

<a id="Discussion"></a>

## Discussion

When creating an index to store your app’s data, you can associate a file protection type with that index to encrypt the data it contains. File protections prevent access to the data unless specific conditions occur. For example, you can make the data available only when the device is unlocked, or make it available after the first successful unlocking of the device. This property indicates which of your app’s protected indexes you want to search.

Possible values for this property are [complete](../../foundation/fileprotectiontype/complete.md), [completeUnlessOpen](../../foundation/fileprotectiontype/completeunlessopen.md), and [completeUntilFirstUserAuthentication](../../foundation/fileprotectiontype/completeuntilfirstuserauthentication.md). By default, the system retrives the data protection class from the [Data Protection Entitlement](../../bundleresources/entitlements/com.apple.developer.default-data-protection.md) entitlement, if it exists; otherwise, the default value is [completeUntilFirstUserAuthentication](../../foundation/fileprotectiontype/completeuntilfirstuserauthentication.md).

For more information on how to configure file protection types with an index, see [Adding your app’s content to Spotlight indexes](../adding-your-app-s-content-to-spotlight-indexes.md).

# protectionClasses (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

The protection types of the indexes you want to search.

## Declaration

```objectivec
@property (copy) NSArray<NSString *> * protectionClasses;
```

<a id="Discussion"></a>

## Discussion

When creating an index to store your app’s data, you can associate a file protection type with that index to encrypt the data it contains. File protections prevent access to the data unless specific conditions occur. For example, you can make the data available only when the device is unlocked, or make it available after the first successful unlocking of the device. This property indicates which of your app’s protected indexes you want to search.

Possible values for this property are [NSFileProtectionComplete](../../foundation/fileprotectiontype/complete.md), [NSFileProtectionCompleteUnlessOpen](../../foundation/fileprotectiontype/completeunlessopen.md), and [NSFileProtectionCompleteUntilFirstUserAuthentication](../../foundation/fileprotectiontype/completeuntilfirstuserauthentication.md). By default, the system retrives the data protection class from the [Data Protection Entitlement](../../bundleresources/entitlements/com.apple.developer.default-data-protection.md) entitlement, if it exists; otherwise, the default value is [NSFileProtectionCompleteUntilFirstUserAuthentication](../../foundation/fileprotectiontype/completeuntilfirstuserauthentication.md).

For more information on how to configure file protection types with an index, see [Adding your app’s content to Spotlight indexes](../adding-your-app-s-content-to-spotlight-indexes.md).
