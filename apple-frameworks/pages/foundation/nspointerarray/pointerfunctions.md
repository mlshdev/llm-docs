> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointerarray/pointerfunctions](https://developer.apple.com/documentation/foundation/nspointerarray/pointerfunctions)

# pointerFunctions (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The functions in use by the receiver.

## Declaration

```swift
@NSCopying var pointerFunctions: NSPointerFunctions { get }
```

<a id="Discussion"></a>

## Discussion

The returned object is a new `NSPointerFunctions` object that you can modify and/or use directly to create other pointer collections.

## See Also

### Getting the Pointer Functions

- [NSPointerFunctions](../nspointerfunctions.md): An instance of `NSPointerFunctions` defines callout functions appropriate for managing a pointer reference held somewhere else.

# pointerFunctions (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The functions in use by the receiver.

## Declaration

```objectivec
@property (copy, readonly) NSPointerFunctions * pointerFunctions;
```

<a id="Discussion"></a>

## Discussion

The returned object is a new `NSPointerFunctions` object that you can modify and/or use directly to create other pointer collections.

## See Also

### Getting the Pointer Functions

- [NSPointerFunctions](../nspointerfunctions.md): An instance of `NSPointerFunctions` defines callout functions appropriate for managing a pointer reference held somewhere else.
