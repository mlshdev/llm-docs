> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsunaryfilesystemoperations/proberesource(resource:replyhandler:)](https://developer.apple.com/documentation/fskit/fsunaryfilesystemoperations/proberesource(resource:replyhandler:))

# probeResource(resource:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Requests that the file system probe the specified resource.

## Declaration

```swift
func probeResource(resource: FSResource, replyHandler reply: @escaping @Sendable (FSProbeResult?, (any Error)?) -> Void)
```

```swift
func probeResource(resource: FSResource) async throws -> FSProbeResult
```

## Parameters

- `resource`: The [FSResource](../fsresource.md) to probe.
- `reply`: A block or closure that your implementation invokes when it finishes the probe or encounters an error. Pass an instance of [FSProbeResult](../fsproberesult.md) with probe results as the first parameter if your probe operation succeeds. If probing fails, pass an error as the second parameter.

<a id="discussion"></a>

## Discussion

Implement this method to indicate whether the resource is recognizable and usable.

## See Also

### Probing resources

- [FSProbeResult](../fsproberesult.md): An object that represents the results of a specific probe.

# probeResource:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Requests that the file system probe the specified resource.

## Declaration

```objectivec
- (void) probeResource:(FSResource *) resource replyHandler:(void (^)(FSProbeResult *result, NSError *error)) reply;
```

## Parameters

- `resource`: The [FSResource](../fsresource.md) to probe.
- `reply`: A block or closure that your implementation invokes when it finishes the probe or encounters an error. Pass an instance of [FSProbeResult](../fsproberesult.md) with probe results as the first parameter if your probe operation succeeds. If probing fails, pass an error as the second parameter.

<a id="discussion"></a>

## Discussion

Implement this method to indicate whether the resource is recognizable and usable.

## See Also

### Probing resources

- [FSProbeResult](../fsproberesult.md): An object that represents the results of a specific probe.
