> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/observation/observable()](https://developer.apple.com/documentation/observation/observable())

# Observable()

**Framework:** Observation  
**Kind:** Macro  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Defines and implements conformance of the Observable protocol.

## Declaration

```swift
@attached(member, names: named(_$observationRegistrar), named(access), named(withMutation), named(shouldNotifyObservers)) @attached(memberAttribute) @attached(extension, conformances: Observable) macro Observable()
```

## Mentioned In

- [Applying Macros](../swift/applying-macros.md)

<a id="overview"></a>

## Overview

This macro adds observation support to a custom type and conforms the type to the [Observable](observable.md) protocol. For example, the following code applies the `Observable` macro to the type `Car` making it observable:

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

## See Also

### Observable conformance

- [Observable](observable.md): A type that emits notifications to observers when underlying data changes.
