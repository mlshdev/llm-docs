> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/bool/init(_:)-83vgw](https://developer.apple.com/documentation/swift/bool/init(_:)-83vgw)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new Boolean value from the given string.

## Declaration

```swift
init?(_ description: String)
```

## Parameters

- `description`: A string representation of the Boolean value.

<a id="discussion"></a>

## Discussion

If the `description` value is any string other than `"true"` or `"false"`, the result is `nil`. This initializer is case sensitive.

## See Also

### Creating a Boolean From Another Value

- [init(\_:)](init%28__%29-25sp9.md): Creates an instance equal to the given Boolean value.
