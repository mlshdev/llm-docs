> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/managedsettingsstore/name](https://developer.apple.com/documentation/managedsettings/managedsettingsstore/name)

# ManagedSettingsStore.Name

**Framework:** Managed Settings  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

The unique name of a store.

## Declaration

```swift
struct Name
```

<a id="overview"></a>

## Overview

Use `ManagedSettingsStore.Name` to create distinct stores with their own settings. Initializing multiple stores with the same name will share settings.

## Topics

### Initializers

- [init(\_:)](name/init%28__%29.md): Creates a new instance with the specified string.
- [init(rawValue:)](name/init%28rawvalue_%29.md): Creates a new instance with the specified string.

### Instance Properties

- [rawValue](name/rawvalue.md): The name of the store as a `String`.

### Type Properties

- [default](name/default.md): The default store name.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
