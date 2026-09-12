> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeapplemenuitem](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeapplemenuitem)

# AEAppleMenuItem (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Structure  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Identifies an item in the Apple menu.

## Declaration

```swift
struct AEAppleMenuItem
```

<a id="overview"></a>

## Overview

Use these constants with [allowedAppleMenuItems](aeassessmentconfiguration/allowedapplemenuitems.md) to control which Apple menu items are visible during an assessment session.

> **Note**

> [aboutThisMac](aeapplemenuitem/aboutthismac.md) is always visible during assessment sessions regardless of configuration.

## Topics

### Initializers

- [init(rawValue:)](aeapplemenuitem/init%28rawvalue_%29.md)

### Type Properties

- [aboutThisMac](aeapplemenuitem/aboutthismac.md): The About This Mac item, which remains visible during an assessment session whether or not [allowedAppleMenuItems](aeassessmentconfiguration/allowedapplemenuitems.md) names it.
- [appStore](aeapplemenuitem/appstore.md): The App Store item.
- [forceQuit](aeapplemenuitem/forcequit.md): The Force Quit item, covering both the Force Quit Applications window and quitting an app outright.
- [location](aeapplemenuitem/location.md): The Location item.
- [lockScreen](aeapplemenuitem/lockscreen.md): The Lock Screen item.
- [logout](aeapplemenuitem/logout.md): The Log Out item, covering both the command and its confirmation.
- [recent](aeapplemenuitem/recent.md): The Recent Items item.
- [restart](aeapplemenuitem/restart.md): The Restart item, covering both the command and its confirmation.
- [shutDown](aeapplemenuitem/shutdown.md): The Shut Down item, covering both the command and its confirmation.
- [sleep](aeapplemenuitem/sleep.md): The Sleep item.
- [systemInformation](aeapplemenuitem/systeminformation.md): The System Information item.
- [systemSettings](aeapplemenuitem/systemsettings.md): The System Settings item.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# AEAppleMenuItem (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Identifies an item in the Apple menu.

## Declaration

```objectivec
typedef NSString * AEAppleMenuItem;
```

<a id="overview"></a>

## Overview

Use these constants with [allowedAppleMenuItems](aeassessmentconfiguration/allowedapplemenuitems.md) to control which Apple menu items are visible during an assessment session.

> **Note**

> [AEAppleMenuItemAboutThisMac](aeapplemenuitem/aboutthismac.md) is always visible during assessment sessions regardless of configuration.
