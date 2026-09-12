> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/formstyle/configuration](https://developer.apple.com/documentation/swiftui/formstyle/configuration)

# FormStyle.Configuration

**Framework:** SwiftUI  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The properties of a form instance.

## Declaration

```swift
typealias Configuration = FormStyleConfiguration
```

<a id="discussion"></a>

## Discussion

You receive a `configuration` parameter of this type — which is an alias for the [FormStyleConfiguration](../formstyleconfiguration.md) type — when you implement the required [makeBody(configuration:)](makebody%28configuration_%29.md) method in a custom form style implementation.

## See Also

### Creating custom form styles

- [makeBody(configuration:)](makebody%28configuration_%29.md): Creates a view that represents the body of a form.
- [Body](body.md): A view that represents the appearance and interaction of a form.
