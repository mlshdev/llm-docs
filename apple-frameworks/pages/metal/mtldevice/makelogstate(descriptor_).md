> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makelogstate(descriptor:)](https://developer.apple.com/documentation/metal/mtldevice/makelogstate(descriptor:))

# makeLogState(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a shader log state with the provided configuration.

## Declaration

```swift
func makeLogState(descriptor: MTLLogStateDescriptor) throws -> any MTLLogState
```

## Parameters

- `descriptor`: The configuration for the new shader log state.

<a id="return-value"></a>

## Return Value

A new [MTLLogState](../mtllogstate.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

# newLogStateWithDescriptor:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a shader log state with the provided configuration.

## Declaration

```objectivec
- (id<MTLLogState>) newLogStateWithDescriptor:(MTLLogStateDescriptor *) descriptor error:(NSError **) error;
```

## Parameters

- `descriptor`: The configuration for the new shader log state.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A new [MTLLogState](../mtllogstate.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.
