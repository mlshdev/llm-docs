> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/subscribers/assign/init(object:keypath:)](https://developer.apple.com/documentation/combine/subscribers/assign/init(object:keypath:))

# init(object:keyPath:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a subscriber to assign the value of a property indicated by a key path.

## Declaration

```swift
init(object: Root, keyPath: ReferenceWritableKeyPath<Root, Input>)
```

## Parameters

- `object`: The object that contains the property. The subscriber assigns the object’s property every time it receives a new value.
- `keyPath`: A key path that indicates the property to assign. See [Key-Path Expression](https://developer.apple.com/library/archive/documentation/Swift/Conceptual/Swift_Programming_Language/Expressions.html#//apple_ref/doc/uid/TP40014097-CH32-ID563) in *The Swift Programming Language* to learn how to use key paths to specify a property of an object.
