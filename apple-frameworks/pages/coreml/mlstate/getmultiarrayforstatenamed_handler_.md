> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreml/mlstate/getmultiarrayforstatenamed:handler:

# getMultiArrayForStateNamed:handler:

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Gets a mutable view into a state buffer.

## Declaration

```objectivec
- (void) getMultiArrayForStateNamed:(NSString *) stateName handler:(void (^)(MLMultiArray *buffer)) handler;
```

## Parameters

- `handler`: Block to access the state buffer through `MLMultiArray`.

<a id="discussion"></a>

## Discussion

The underlying state buffer’s address can differ for each call; one shall not access the state buffer outside of the closure.
