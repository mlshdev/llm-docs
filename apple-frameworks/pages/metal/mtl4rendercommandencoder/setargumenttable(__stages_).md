> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/setargumenttable(_:stages:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/setargumenttable(_:stages:))

# setArgumentTable(\_:stages:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Associates an argument table with a set of render stages.

## Declaration

```swift
func setArgumentTable(_ argumentTable: (any MTL4ArgumentTable)?, stages: MTLRenderStages)
```

## Parameters

- `argumentTable`: [MTL4ArgumentTable](../mtl4argumenttable.md) to set.
- `stages`: A [MTLRenderStages](../mtlrenderstages.md) bitmask that specifies the shader stages with visibility over the table.

<a id="discussion"></a>

## Discussion

Metal takes a snapshot of the resources in the argument table when you encode a draw, dispatch, or execute command. This snapshot becomes available to the `stages` you specify to this method.

# setArgumentTable:atStages: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Associates an argument table with a set of render stages.

## Declaration

```objectivec
- (void) setArgumentTable:(id<MTL4ArgumentTable>) argumentTable atStages:(MTLRenderStages) stages;
```

## Parameters

- `argumentTable`: [MTL4ArgumentTable](../mtl4argumenttable.md) to set.
- `stages`: A [MTLRenderStages](../mtlrenderstages.md) bitmask that specifies the shader stages with visibility over the table.

<a id="discussion"></a>

## Discussion

Metal takes a snapshot of the resources in the argument table when you encode a draw, dispatch, or execute command. This snapshot becomes available to the `stages` you specify to this method.
