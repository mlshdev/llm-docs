> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4machinelearningcommandencoder/setargumenttable(_:)](https://developer.apple.com/documentation/metal/mtl4machinelearningcommandencoder/setargumenttable(_:))

# setArgumentTable(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets an argument table for the command encoder’s machine learning shader stage.

## Declaration

```swift
func setArgumentTable(_ argumentTable: (any MTL4ArgumentTable)?)
```

## Parameters

- `argumentTable`: An argument table to set on the command encoder’s Machine Learning stage.

<a id="discussion"></a>

## Discussion

The argument table provides inputs to all subsequent Machine Learning dispatches.

## See Also

### Configuring the pass

- [setPipelineState(\_:)](setpipelinestate%28__%29.md): Configures the encoder with a machine learning pipeline state instance.

# setArgumentTable: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets an argument table for the command encoder’s machine learning shader stage.

## Declaration

```objectivec
- (void) setArgumentTable:(id<MTL4ArgumentTable>) argumentTable;
```

## Parameters

- `argumentTable`: An argument table to set on the command encoder’s Machine Learning stage.

<a id="discussion"></a>

## Discussion

The argument table provides inputs to all subsequent Machine Learning dispatches.

## See Also

### Configuring the pass

- [setPipelineState:](setpipelinestate%28__%29.md): Configures the encoder with a machine learning pipeline state instance.
