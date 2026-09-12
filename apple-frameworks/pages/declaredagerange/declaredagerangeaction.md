> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/declaredagerange/declaredagerangeaction](https://developer.apple.com/documentation/declaredagerange/declaredagerangeaction)

# DeclaredAgeRangeAction

**Framework:** Declared Age Range  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

An action that requests a person’s age range.

## Declaration

```swift
struct DeclaredAgeRangeAction
```

<a id="overview"></a>

## Overview

Use `DeclaredAgeRangeAction` in SwiftUI views to request age ranges without manually managing the presentation context. This action automatically handles the differences between macOS and iOS presentation contexts, providing a unified interface for age range requests across platforms.

## Topics

### Requesting the age range

- [callAsFunction(ageGates:\_:\_:)](declaredagerangeaction/callasfunction%28agegates_____%29.md): Returns a response indicating whether the person shared their age range.

## See Also

### Age range requests

- [AgeRangeService](agerangeservice.md): A request for the age range of a person logged onto the current device.
