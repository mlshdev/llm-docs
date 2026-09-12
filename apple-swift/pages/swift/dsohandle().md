> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dsohandle()](https://developer.apple.com/documentation/swift/dsohandle())

# dsohandle()

**Framework:** Swift  
**Kind:** Macro  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Produces the dynamic shared object (DSO) handle in use where the macro appears.

## Declaration

```swift
@freestanding(expression) macro dsohandle() -> UnsafeRawPointer
```

<a id="return-value"></a>

## Return Value

The DSO handle.
