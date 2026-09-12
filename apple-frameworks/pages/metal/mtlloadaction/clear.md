> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlloadaction/clear](https://developer.apple.com/documentation/metal/mtlloadaction/clear)

# MTLLoadAction.clear (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The GPU writes a value to every pixel in the attachment at the start of the render pass.

## Declaration

```swift
case clear
```

## Mentioned In

- [Setting load and store actions](../setting-load-and-store-actions.md)

## See Also

### Load actions

- [MTLLoadAction.dontCare](dontcare.md): The GPU has permission to discard the existing contents of the attachment at the start of the render pass, replacing them with arbitrary data.
- [MTLLoadAction.load](load.md): The GPU preserves the existing contents of the attachment at the start of the render pass.

# MTLLoadActionClear (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The GPU writes a value to every pixel in the attachment at the start of the render pass.

## Declaration

```objectivec
MTLLoadActionClear
```

## Mentioned In

- [Setting load and store actions](../setting-load-and-store-actions.md)

## See Also

### Load actions

- [MTLLoadActionDontCare](dontcare.md): The GPU has permission to discard the existing contents of the attachment at the start of the render pass, replacing them with arbitrary data.
- [MTLLoadActionLoad](load.md): The GPU preserves the existing contents of the attachment at the start of the render pass.
