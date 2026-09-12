> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlloadaction/load](https://developer.apple.com/documentation/metal/mtlloadaction/load)

# MTLLoadAction.load (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The GPU preserves the existing contents of the attachment at the start of the render pass.

## Declaration

```swift
case load
```

## Mentioned In

- [Setting load and store actions](../setting-load-and-store-actions.md)

## See Also

### Load actions

- [MTLLoadAction.dontCare](dontcare.md): The GPU has permission to discard the existing contents of the attachment at the start of the render pass, replacing them with arbitrary data.
- [MTLLoadAction.clear](clear.md): The GPU writes a value to every pixel in the attachment at the start of the render pass.

# MTLLoadActionLoad (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The GPU preserves the existing contents of the attachment at the start of the render pass.

## Declaration

```objectivec
MTLLoadActionLoad
```

## Mentioned In

- [Setting load and store actions](../setting-load-and-store-actions.md)

## See Also

### Load actions

- [MTLLoadActionDontCare](dontcare.md): The GPU has permission to discard the existing contents of the attachment at the start of the render pass, replacing them with arbitrary data.
- [MTLLoadActionClear](clear.md): The GPU writes a value to every pixel in the attachment at the start of the render pass.
