> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/mapkeypath3/output](https://developer.apple.com/documentation/combine/publishers/mapkeypath3/output)

# Publishers.MapKeyPath3.Output

**Framework:** Combine  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The kind of values published by this publisher.

## Declaration

```swift
typealias Output = (Output0, Output1, Output2)
```

<a id="discussion"></a>

## Discussion

This publisher produces three-element tuples, where each menber’s type matches the type of the corresponding key path’s property.

## See Also

### Declaring supporting types

- [Publishers.MapKeyPath3.Failure](failure.md): The kind of errors this publisher might publish.
