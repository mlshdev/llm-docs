> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/backingdata/getvalue(forkey:)-1pric](https://developer.apple.com/documentation/swiftdata/backingdata/getvalue(forkey:)-1pric)

# getValue(forKey:)

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

## Declaration

```swift
func getValue<Value>(forKey: KeyPath<Self.Model, Value>) -> Value where Value : PersistentModel
```
