> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideruserinteractionsuppressing](https://developer.apple.com/documentation/fileprovider/nsfileprovideruserinteractionsuppressing)

# NSFileProviderUserInteractionSuppressing (Swift)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** macOS 12.0+

Support for suppressing user-interaction alerts.

## Declaration

```swift
protocol NSFileProviderUserInteractionSuppressing : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Implement this protocol to give users the option to suppress certain user-interaction alerts.

> **Important**

>  To enable the suppression of a user-interaction alert, you must add the `SuppressionIdentifier` key to the `NSExtension` \> `NSFileProviderUserInteractions` \> `UserInteraction` dictionary in the File Provider extension’s Info tab or `Info.plist` file. Multiple user interactions can use the same suppression identifier. Suppressing one interaction suppresses all the interactions that share the identifier.

When the user indicates that they don’t want to see an alert again, the system calls your [setInteractionSuppressed(\_:forIdentifier:)](nsfileprovideruserinteractionsuppressing/setinteractionsuppressed%28__foridentifier_%29.md) method. Then, before the system displays a user interaction, it calls the [isInteractionSuppressed(forIdentifier:)](nsfileprovideruserinteractionsuppressing/isinteractionsuppressed%28foridentifier_%29.md) method.

Your File Provider extension can choose whether the suppression only applies to the current domain, or if it should apply to all domains. For example, your extension could choose to suppress future alerts related to adding an item to a shared folder across all domains, after the user suppresses the alert on any one of the domains. Alternatively, the extension could choose to only suppress the alert for the current domain, showing the alert again if the user performs the same action in a different domain.

## Topics

### Supressing Interactions

- [isInteractionSuppressed(forIdentifier:)](nsfileprovideruserinteractionsuppressing/isinteractionsuppressed%28foridentifier_%29.md): Asks the File Provider extension if the user suppressed the specified interaction.
- [setInteractionSuppressed(\_:forIdentifier:)](nsfileprovideruserinteractionsuppressing/setinteractionsuppressed%28__foridentifier_%29.md): Tells the File Provider extension that the user wants to suppress the user interaction.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Testing protocols

- [NSFileProviderTestingChildrenEnumeration](nsfileprovidertestingchildrenenumeration.md): An operation that lists a directory’s content.
- [NSFileProviderTestingCollisionResolution](nsfileprovidertestingcollisionresolution.md): An operation that resolves a collision by renaming the new item.
- [NSFileProviderTestingContentFetch](nsfileprovidertestingcontentfetch.md): An operation that fetches an item’s content.
- [NSFileProviderTestingCreation](nsfileprovidertestingcreation.md): An operation that syncs the creation of the source item to the target location.
- [NSFileProviderTestingDeletion](nsfileprovidertestingdeletion.md): An operation that syncs the deletion of the source item to the target location.
- [NSFileProviderTestingIngestion](nsfileprovidertestingingestion.md): An operation that alerts the system to either local or remote storage changes.
- [NSFileProviderTestingLookup](nsfileprovidertestinglookup.md): An operation that looks up an item.
- [NSFileProviderTestingModification](nsfileprovidertestingmodification.md): An operation that syncs the modification of the source item to the target location.
- [NSFileProviderTestingOperation](nsfileprovidertestingoperation.md): An operation that the system can schedule.
- [NSFileProviderTestingOperationSide](nsfileprovidertestingoperationside.md): The location where the operation takes place.
- [NSFileProviderTestingOperationType](nsfileprovidertestingoperationtype.md): The action that an operation performs.
- [com.apple.developer.fileprovider.testing-mode](../bundleresources/entitlements/com.apple.developer.fileprovider.testing-mode.md): A Boolean value that indicates whether you can place domains in testing mode.

# NSFileProviderUserInteractionSuppressing (Objective-C)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** macOS 12.0+

Support for suppressing user-interaction alerts.

## Declaration

```objectivec
@protocol NSFileProviderUserInteractionSuppressing <NSObject>
```

<a id="overview"></a>

## Overview

Implement this protocol to give users the option to suppress certain user-interaction alerts.

> **Important**

>  To enable the suppression of a user-interaction alert, you must add the `SuppressionIdentifier` key to the `NSExtension` \> `NSFileProviderUserInteractions` \> `UserInteraction` dictionary in the File Provider extension’s Info tab or `Info.plist` file. Multiple user interactions can use the same suppression identifier. Suppressing one interaction suppresses all the interactions that share the identifier.

When the user indicates that they don’t want to see an alert again, the system calls your [setInteractionSuppressed:forIdentifier:](nsfileprovideruserinteractionsuppressing/setinteractionsuppressed%28__foridentifier_%29.md) method. Then, before the system displays a user interaction, it calls the [isInteractionSuppressedForIdentifier:](nsfileprovideruserinteractionsuppressing/isinteractionsuppressed%28foridentifier_%29.md) method.

Your File Provider extension can choose whether the suppression only applies to the current domain, or if it should apply to all domains. For example, your extension could choose to suppress future alerts related to adding an item to a shared folder across all domains, after the user suppresses the alert on any one of the domains. Alternatively, the extension could choose to only suppress the alert for the current domain, showing the alert again if the user performs the same action in a different domain.

## Topics

### Supressing Interactions

- [isInteractionSuppressedForIdentifier:](nsfileprovideruserinteractionsuppressing/isinteractionsuppressed%28foridentifier_%29.md): Asks the File Provider extension if the user suppressed the specified interaction.
- [setInteractionSuppressed:forIdentifier:](nsfileprovideruserinteractionsuppressing/setinteractionsuppressed%28__foridentifier_%29.md): Tells the File Provider extension that the user wants to suppress the user interaction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Testing protocols

- [NSFileProviderTestingChildrenEnumeration](nsfileprovidertestingchildrenenumeration.md): An operation that lists a directory’s content.
- [NSFileProviderTestingCollisionResolution](nsfileprovidertestingcollisionresolution.md): An operation that resolves a collision by renaming the new item.
- [NSFileProviderTestingContentFetch](nsfileprovidertestingcontentfetch.md): An operation that fetches an item’s content.
- [NSFileProviderTestingCreation](nsfileprovidertestingcreation.md): An operation that syncs the creation of the source item to the target location.
- [NSFileProviderTestingDeletion](nsfileprovidertestingdeletion.md): An operation that syncs the deletion of the source item to the target location.
- [NSFileProviderTestingIngestion](nsfileprovidertestingingestion.md): An operation that alerts the system to either local or remote storage changes.
- [NSFileProviderTestingLookup](nsfileprovidertestinglookup.md): An operation that looks up an item.
- [NSFileProviderTestingModification](nsfileprovidertestingmodification.md): An operation that syncs the modification of the source item to the target location.
- [NSFileProviderTestingOperation](nsfileprovidertestingoperation.md): An operation that the system can schedule.
- [NSFileProviderTestingOperationSide](nsfileprovidertestingoperationside.md): The location where the operation takes place.
- [NSFileProviderTestingOperationType](nsfileprovidertestingoperationtype.md): The action that an operation performs.
- [com.apple.developer.fileprovider.testing-mode](../bundleresources/entitlements/com.apple.developer.fileprovider.testing-mode.md): A Boolean value that indicates whether you can place domains in testing mode.
