> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/preferencekey/defaultvalue](https://developer.apple.com/documentation/swiftui/preferencekey/defaultvalue)

# defaultValue

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The default value of the preference.

## Declaration

```swift
static var defaultValue: Self.Value { get }
```

<a id="discussion"></a>

## Discussion

Views that have no explicit value for the key produce this default value. Combining child views may remove an implicit value produced by using the default. This means that `reduce(value: &x, nextValue: {defaultValue})` shouldn’t change the meaning of `x`.

## Default Implementations

### PreferenceKey Implementations

- [defaultValue](defaultvalue-23qgw.md): Conforms when `Value` conforms to `ExpressibleByNilLiteral`. Let nil-expressible values default-initialize to nil.

## See Also

### Getting the default value

- [Value](value.md): The type of value produced by this preference.
