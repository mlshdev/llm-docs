> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepipelinestate/functionhandle(withname:)](https://developer.apple.com/documentation/metal/mtlcomputepipelinestate/functionhandle(withname:))

# functionHandle(withName:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Gets the function handle for a function this pipeline links at the Metal IR level by name.

## Declaration

```swift
func functionHandle(withName name: String) -> (any MTLFunctionHandle)?
```

## Parameters

- `name`: A string representing the name of the function.

<a id="return-value"></a>

## Return Value

A function handle corresponding to the function if the name matches a function in this pipeline state, otherwise `nil`.

# functionHandleWithName: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Gets the function handle for a function this pipeline links at the Metal IR level by name.

## Declaration

```objectivec
- (id<MTLFunctionHandle>) functionHandleWithName:(NSString *) name;
```

## Parameters

- `name`: A string representing the name of the function.

<a id="return-value"></a>

## Return Value

A function handle corresponding to the function if the name matches a function in this pipeline state, otherwise `nil`.
