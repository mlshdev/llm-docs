> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/dynamicpropertypath/as(_:)-5po1a](https://developer.apple.com/documentation/appintentstesting/dynamicpropertypath/as(_:)-5po1a)

# as(\_:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Casts a property to the provided type.

## Declaration

```swift
func `as`<T>(_ type: T.Type) throws -> T where T : IntentValueConvertible
```

<a id="discussion"></a>

## Discussion

If the value’s type doesn’t match, this method throws an error.

```swift
let result = try await intent.run()
try result.value.as(String.self) == "My Name"
```
