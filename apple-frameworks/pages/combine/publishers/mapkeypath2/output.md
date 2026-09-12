> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/mapkeypath2/output](https://developer.apple.com/documentation/combine/publishers/mapkeypath2/output)

# Publishers.MapKeyPath2.Output

**Framework:** Combine  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The kind of values published by this publisher.

## Declaration

```swift
typealias Output = (Output0, Output1)
```

<a id="discussion"></a>

## Discussion

This publisher produces two-element tuples, where each menber’s type matches the type of the corresponding key path’s property.

## See Also

### Declaring supporting types

- [Publishers.MapKeyPath2.Failure](failure.md): The kind of errors this publisher might publish.
