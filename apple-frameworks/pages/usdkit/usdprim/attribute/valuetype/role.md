> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/attribute/valuetype/role](https://developer.apple.com/documentation/usdkit/usdprim/attribute/valuetype/role)

# role

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The name of this type’s role, if it has one.

## Declaration

```swift
var role: USDToken { get }
```

<a id="discussion"></a>

## Discussion

Roles clarify the semantic purpose of a type. For example, the type `point3f` stores the same data as its base type `float3`, but it also has the role “Point”, which means that it stores 3D positions.
