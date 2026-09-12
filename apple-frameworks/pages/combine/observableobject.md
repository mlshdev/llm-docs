> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/observableobject](https://developer.apple.com/documentation/combine/observableobject)

# ObservableObject

**Framework:** Combine  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type of object with a publisher that emits before the object has changed.

## Declaration

```swift
protocol ObservableObject : AnyObject
```

<a id="overview"></a>

## Overview

By default an [ObservableObject](observableobject.md) synthesizes an [objectWillChange](observableobject/objectwillchange.md) publisher that emits the changed value before any of its `@Published` properties changes.

```swift
class Contact: ObservableObject {
    @Published var name: String
    @Published var age: Int

    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }

    func haveBirthday() -> Int {
        age += 1
        return age
    }
}

let john = Contact(name: "John Appleseed", age: 24)
cancellable = john.objectWillChange
    .sink { _ in
        print("\(john.age) will change")
}
print(john.haveBirthday())
// Prints "24 will change"
// Prints "25"
```

## Topics

### Publishing changes

- [objectWillChange](observableobject/objectwillchange.md): A publisher that emits before the object has changed.
- [ObjectWillChangePublisher](observableobject/objectwillchangepublisher.md): The type of publisher that emits before the object has changed.

## See Also

### Observable Objects

- [ObservableObjectPublisher](observableobjectpublisher.md): A publisher that publishes changes from observable objects.
