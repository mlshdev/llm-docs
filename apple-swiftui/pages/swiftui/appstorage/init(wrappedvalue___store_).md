> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/appstorage/init(wrappedvalue:_:store:)](https://developer.apple.com/documentation/swiftui/appstorage/init(wrappedvalue:_:store:))

# init(wrappedValue:\_:store:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Creates a property that can save and restore tab sidebar customizations.

## Declaration

```swift
init(wrappedValue: Value = TabViewCustomization(), _ key: String, store: UserDefaults? = nil) where Value == TabViewCustomization
```

## Parameters

- `wrappedValue`: The default value if the customization is not available for the given key.
- `key`: The key to read and write the value to in the user defaults store.
- `store`: The user defaults store to read and write to. A value of `nil` will use the user default store from the environment.

<a id="discussion"></a>

## Discussion

You can set this customization on the TabView using [tabViewCustomization(\_:)](../view/tabviewcustomization%28__%29.md).

## See Also

### Storing a value

- [init(\_:store:)](init%28__store_%29.md): Conforms when `Value` conforms to `ExpressibleByNilLiteral`. Creates a property that can read and write an Optional boolean user default.
