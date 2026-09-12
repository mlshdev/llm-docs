> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/sortdescriptor/init(_:comparing:)](https://developer.apple.com/documentation/foundation/sortdescriptor/init(_:comparing:))

# init(\_:comparing:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a sort descriptor using a sort descriptor and a type that you specify.

## Declaration

```swift
init?(_ descriptor: NSSortDescriptor, comparing comparedType: Compared.Type) where Compared : NSObject
```

## Parameters

- `descriptor`: A sort descriptor.
- `comparedType`: The type that the sort descriptor compares.

<a id="Discussion"></a>

## Discussion

Returns `nil` if there isn’t a [SortDescriptor](../sortdescriptor.md) equivalent to the [NSSortDescriptor](../nssortdescriptor.md) you specify, or if the selector to [NSSortDescriptor](../nssortdescriptor.md) isn’t one of the standard string comparison algorithms or `compare(_:)`.

The comparison for the created [SortDescriptor](../sortdescriptor.md) uses the selector to the associated [NSSortDescriptor](../nssortdescriptor.md) directly, so in cases where the comparison of [NSSortDescriptor](../nssortdescriptor.md) might crash, the [SortDescriptor](../sortdescriptor.md) comparison crashes as well.
