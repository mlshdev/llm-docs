> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/viewannotation](https://developer.apple.com/documentation/appintentstesting/viewannotation)

# ViewAnnotation

**Framework:** App Intents Testing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The onscreen context you provide to the system by annotating a view with an app entity.

## Declaration

```swift
struct ViewAnnotation
```

## Mentioned In

- [Testing your App Intents code](testing-your-app-intents-code.md)

<a id="overview"></a>

## Overview

Use the `ViewAnnotation` structure to test whether the currently visible user interface and its views have the expected entity view annotations you created to provide onscreen context to the system. Retrieve visible view annotations using [viewAnnotations()](appentitydefinition/viewannotations%28%29.md), then inspect their selection state and which entities are visible on-screen.

## Topics

### Accessing onscreen context

- [entity](viewannotation/entity.md): The underlying app entity data.
- [isSelected](viewannotation/isselected.md): A Boolean value that indicates whether the entity’s associated view is selected.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
