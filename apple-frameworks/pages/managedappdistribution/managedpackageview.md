> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedappdistribution/managedpackageview](https://developer.apple.com/documentation/managedappdistribution/managedpackageview)

# ManagedPackageView

**Framework:** ManagedAppDistribution  
**Kind:** Structure  
**Availability:** macOS 26.4+

A view that displays information and controls for a managed software package.

## Declaration

```swift
@MainActor @preconcurrency struct ManagedPackageView
```

<a id="overview"></a>

## Overview

`ManagedPackageView` provides an interface for presenting managed packages in your app, displaying package details, installation status, and management controls in a consistent way across macOS and macCatalyst applications.

```swift
import SwiftUI
import ManagedAppDistribution

struct PackageListView: View {
    let packages: [ManagedPackage]

    var body: some View {
        List(packages) { package in
            ManagedPackageView(package: package)
        }
    }
}
```

## Topics

### Initializers

- [init(package:)](managedpackageview/init%28package_%29.md): Create a managed packaged view from a managed package.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)
