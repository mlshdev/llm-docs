> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasynchronouskeyvalueloading/load(_:_:_:isolation:)](https://developer.apple.com/documentation/avfoundation/avasynchronouskeyvalueloading/load(_:_:_:isolation:))

# load(\_:\_:\_:isolation:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loads two or more properties asynchronously and returns the values.

## Declaration

```swift
@backDeployed(before: macOS 26.0, iOS 26.0, tvOS 26.0, watchOS 26.0, visionOS 26.0)
func load<A, B, each C>(_ firstProperty: AVAsyncProperty<Self, A>, _ secondProperty: AVAsyncProperty<Self, B>, _ properties: repeat AVAsyncProperty<Self, each C>, isolation: isolated (any Actor)? = #isolation) async throws -> (A, B, repeat each C)
```

## Parameters

- `firstProperty`: A property to load.
- `secondProperty`: A second property to load.
- `properties`: Additional properties to load.
- `isolation`: The isolation context.

<a id="return-value"></a>

## Return Value

The loaded properties in a tuple.

<a id="Discussion"></a>

## Discussion

See the [load(\_:isolation:)](load%28__isolation_%29.md) method for more information.

## See Also

### Loading property values

- [load(\_:isolation:)](load%28__isolation_%29.md): Loads a property asynchronously and returns the value.
