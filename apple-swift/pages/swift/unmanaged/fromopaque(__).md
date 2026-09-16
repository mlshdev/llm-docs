> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unmanaged/fromopaque(_:)

# fromOpaque(\_:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Unsafely turns an opaque C pointer into an unmanaged class reference.

## Declaration

```swift
static func fromOpaque(_ value: UnsafeRawPointer) -> Unmanaged<Instance>
```

## Parameters

- `value`: An opaque C pointer.

<a id="return-value"></a>

## Return Value

An unmanaged class reference to `value`.

<a id="discussion"></a>

## Discussion

This operation does not change reference counts.

```swift
let str: CFString = Unmanaged.fromOpaque(ptr).takeUnretainedValue()
```
