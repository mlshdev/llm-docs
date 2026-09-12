> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/addtransformoperation(type:)](https://developer.apple.com/documentation/usdkit/usdprim/addtransformoperation(type:))

# addTransformOperation(type:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Adds a transform operation of the given kind to this prim’s transform stack.

## Declaration

```swift
func addTransformOperation(type: USDTransformOperation.Kind)
```

<a id="discussion"></a>

## Discussion

Creates the corresponding `xformOp:*` attribute and appends its name to the prim’s `xformOpOrder`.

## See Also

### Applying schemas and transforms

- [applyAPISchema(\_:)](applyapischema%28__%29.md): Applies a single-apply API schema to this prim.
- [applyAPISchema(\_:instanceName:)](applyapischema%28__instancename_%29.md): Applies a multi-apply API schema to this prim with the given instance name.
