> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/published/init(initialvalue:)](https://developer.apple.com/documentation/combine/published/init(initialvalue:))

# init(initialValue:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates the published instance with an initial value.

## Declaration

```swift
init(initialValue: Value)
```

## Parameters

- `initialValue`: The publisher’s initial value.

<a id="discussion"></a>

## Discussion

Don’t use this initializer directly. Instead, create a property with the `@Published` attribute, as shown here:

```swift
@Published var lastUpdated: Date = Date()
```

## See Also

### Creating a published instance

- [init(wrappedValue:)](init%28wrappedvalue_%29.md): Creates the published instance with an initial wrapped value.
