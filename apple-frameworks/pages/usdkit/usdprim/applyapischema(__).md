> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/applyapischema(_:)](https://developer.apple.com/documentation/usdkit/usdprim/applyapischema(_:))

# applyAPISchema(\_:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Applies a single-apply API schema to this prim.

## Declaration

```swift
func applyAPISchema(_ schemaIdentifier: USDToken) throws
```

## Parameters

- `schemaIdentifier`: The identifier of the API schema to apply.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the schema cannot be applied.

## See Also

### Applying schemas and transforms

- [applyAPISchema(\_:instanceName:)](applyapischema%28__instancename_%29.md): Applies a multi-apply API schema to this prim with the given instance name.
- [addTransformOperation(type:)](addtransformoperation%28type_%29.md): Adds a transform operation of the given kind to this prim’s transform stack.
