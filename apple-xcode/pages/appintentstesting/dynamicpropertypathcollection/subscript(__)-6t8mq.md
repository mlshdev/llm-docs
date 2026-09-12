> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/dynamicpropertypathcollection/subscript(_:)-6t8mq](https://developer.apple.com/documentation/appintentstesting/dynamicpropertypathcollection/subscript(_:)-6t8mq)

# subscript(\_:)

**Framework:** App Intents Testing  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Accesses typed properties from the intent value at the given index.

## Declaration

```swift
subscript<T>(position: Int) -> T where T : IntentValueConvertible { get throws }
```
