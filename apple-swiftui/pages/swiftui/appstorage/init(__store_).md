> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/appstorage/init(_:store:)](https://developer.apple.com/documentation/swiftui/appstorage/init(_:store:))

# init(\_:store:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a property that can read and write an Optional boolean user default.

## Declaration

```swift
init(_ key: String, store: UserDefaults? = nil) where Value == Bool?
```

## Parameters

- `key`: The key to read and write the value to in the user defaults store.
- `store`: The user defaults store to read and write to. A value of `nil` will use the user default store from the environment.

<a id="discussion"></a>

## Discussion

Defaults to nil if there is no restored value.

## See Also

### Storing a value

- [init(wrappedValue:\_:store:)](init%28wrappedvalue___store_%29.md): Creates a property that can save and restore tab sidebar customizations.
