> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/observation](https://developer.apple.com/documentation/observation)

# Observation

**Framework:** Observation  
**Kind:** Framework  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Make responsive apps that update the presentation when underlying data changes.

<a id="Overview"></a>

## Overview

Observation provides a robust, type-safe, and performant implementation of the observer design pattern in Swift. This pattern allows an observable object to maintain a list of observers and notify them of specific or general state changes. This has the advantages of not directly coupling objects together and allowing implicit distribution of updates across potential multiple observers.

The Observation frameworks provides the following capabilities:

- Marking a type as observable
- Tracking changes within an instance of an observable type
- Observing and utilizing those changes elsewhere, such as in an app’s user interface

To declare a type as observable, attach the [Observable()](observation/observable%28%29.md) macro to the type declaration. This macro declares and implements conformance to the [Observable](observation/observable.md) protocol to the type at compile time.

```swift
@Observable
class Car {
    var name: String = ""
    var needsRepairs: Bool = false
    
    init(name: String, needsRepairs: Bool = false) {
        self.name = name
        self.needsRepairs = needsRepairs
    }
}
```

To track changes, use the [withObservationTracking(\_:onChange:)](observation/withobservationtracking%28__onchange_%29.md) function. For example, in the following code, the function calls the `onChange` closure when a car’s name changes. However, it doesn’t call the closure when a car’s `needsRepair` flag changes. That’s because the function only tracks properties read in its `apply` closure, and the closure doesn’t read the `needsRepair` property.

```swift
func render() {
    withObservationTracking {
        for car in cars {
            print(car.name)
        }
    } onChange: {
        print("Schedule renderer.")
    }
}
```

## Topics

### Observable conformance

- [Observable()](observation/observable%28%29.md): Defines and implements conformance of the Observable protocol.
- [Observable](observation/observable.md): A type that emits notifications to observers when underlying data changes.

### Change tracking

- [withObservationTracking(\_:onChange:)](observation/withobservationtracking%28__onchange_%29.md): Tracks access to properties.
- [ObservationRegistrar](observation/observationregistrar.md): Provides storage for tracking and access to data changes.

### Observation in SwiftUI

- [Managing model data in your app](https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app): Create connections between your app’s data model and views.
- [Migrating from the Observable Object protocol to the Observable macro](https://developer.apple.com/documentation/swiftui/migrating-from-the-observable-object-protocol-to-the-observable-macro): Update your existing app to leverage the benefits of Observation in Swift.

### Structures

- [ObservationTracking](observation/observationtracking.md)
- [Observations](observation/observations.md): An asynchronous sequence generated from a closure that tracks the transactional changes of `@Observable` types.

### Functions

- [withContinuousObservation(options:apply:)](observation/withcontinuousobservation%28options_apply_%29.md)
- [withObservationTracking(options:\_:onChange:)](observation/withobservationtracking%28options___onchange_%29.md)

### Macros

- [ObservationIgnored()](observation/observationignored%28%29.md): Disables observation tracking of a property.
- [ObservationTracked()](observation/observationtracked%28%29.md): Synthesizes a property for accessors.
